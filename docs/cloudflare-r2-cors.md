# Cloudflare R2 CORS Cache Poisoning & Proxy Solution

This document explains the CORS cache poisoning issue encountered when serving the resume PDF from Cloudflare R2 on `cv.kylewu.me` and details the Cloudflare Worker proxy setup implemented to resolve it.

---

## The Problem: CORS Cache Poisoning

When hosting static assets (like PDFs) on S3/R2 with custom subdomains:
1. **Direct Navigation**: If a user visits the asset URL directly (e.g., typing `https://cv.kylewu.me/kyle-wu-resume.pdf` in the browser address bar), the request does not send an `Origin` header. Cloudflare R2 returns a `200 OK` response **without** the `Access-Control-Allow-Origin` header, and the browser caches this response in its disk cache.
2. **CORS Request Failure**: When the user navigates back to `kylewu.me` and the website tries to load the PDF via AJAX/fetch (which sends an `Origin: https://kylewu.me` header), the browser reuses the cached response from disk. Because the cached response lacks the `Access-Control-Allow-Origin` header, the browser blocks the load, causing a CORS error ("Failed to load PDF").

---

## The Solution: Cloudflare Worker Proxy

To ensure the `Access-Control-Allow-Origin` and `Vary: Origin` headers are **always** present in every response (regardless of whether the request has an `Origin` header), we route `cv.kylewu.me` through a Cloudflare Worker that proxies the R2 bucket.

### Worker Code

Create a Cloudflare Worker with the following JavaScript. It features:
- **Dynamic Origin Whitelist**: Automatically allows `http://localhost:*` (local dev), `*.vercel.app` (Vercel previews), and `https://kylewu.me` (production) while denying untrusted origins.
- **Conditional Request Handling**: Performs manual Etag verification to return `304 Not Modified` when the file hasn't changed (comparing client browser's cached Etag with R2 object's Etag), saving bandwidth and CPU.

```javascript
export default {
  async fetch(request, env) {
    const url = new URL(request.url)
    // Extract key (e.g., "kyle-wu-resume.pdf") from URL path
    const key = decodeURIComponent(url.pathname.slice(1))

    // 1. Dynamic Origin Whitelist Verification
    const origin = request.headers.get("Origin")
    let allowedOrigin = "https://kylewu.me" // Default fallback

    if (origin) {
      const isLocalhost =
        origin.startsWith("http://localhost:") || origin === "http://localhost"
      const isVercel = origin.endsWith(".vercel.app")
      const isProd = origin === "https://kylewu.me"

      if (isLocalhost || isVercel || isProd) {
        allowedOrigin = origin
      }
    }

    // 2. Handle browser CORS preflight requests (OPTIONS)
    if (request.method === "OPTIONS") {
      return new Response(null, {
        headers: {
          "Access-Control-Allow-Origin": allowedOrigin,
          "Access-Control-Allow-Methods": "GET, HEAD, OPTIONS",
          "Access-Control-Allow-Headers": "*",
          "Access-Control-Max-Age": "86400",
        },
      })
    }

    // 3. Limit methods to GET and HEAD
    if (request.method !== "GET" && request.method !== "HEAD") {
      return new Response("Method Not Allowed", { status: 405 })
    }

    // 4. Read directly from the bound R2 Bucket (high speed, inside CF network)
    const object = await env.BUCKET.get(key)

    if (object === null) {
      return new Response("File Not Found", { status: 404 })
    }

    // 🌟 5. Core Etag Verification (304 Not Modified logic)
    // Compares client browser's cached Etag with R2 object's Etag.
    // If they match, returns 304 with correct CORS headers.
    const ifNoneMatch = request.headers.get("If-None-Match")
    if (
      ifNoneMatch &&
      (ifNoneMatch === object.httpEtag || ifNoneMatch.includes(object.httpEtag))
    ) {
      return new Response(null, {
        status: 304,
        headers: {
          "Access-Control-Allow-Origin": allowedOrigin,
          "Access-Control-Allow-Methods": "GET, HEAD, OPTIONS",
          Vary: "Origin",
          etag: object.httpEtag,
          "Cache-Control": "public, max-age=0, must-revalidate", // Validate with server every time
        },
      })
    }

    // 6. Etag mismatch (file updated) - return 200 OK with new content
    const headers = new Headers()
    object.writeHttpMetadata(headers)
    headers.set("etag", object.httpEtag)

    headers.set("Access-Control-Allow-Origin", allowedOrigin)
    headers.set("Access-Control-Allow-Methods", "GET, HEAD, OPTIONS")
    headers.set("Vary", "Origin")
    headers.set("Cache-Control", "public, max-age=0, must-revalidate") // Validate with server every time

    return new Response(object.body, { headers })
  },
}
```

---

## Configuration Steps on Cloudflare

1. **Create the Worker**:
   - Go to **Workers & Pages** ➔ **Create** ➔ **Create Worker**.
   - Name it `cv-cors-proxy` and deploy.
   - Edit code, paste the script above, and deploy.
2. **Bind the R2 Bucket**:
   - Go to Worker **Settings** ➔ **Variables** (or Bindings).
   - Under **R2 Bucket Bindings**, add a binding:
     - **Variable name**: `BUCKET` (must match the code).
     - **R2 bucket**: Select your R2 bucket.
3. **Bind Custom Domain**:
   - Go to Worker **Settings** ➔ **Triggers**.
   - Under **Custom Domains**, click **Add Custom Domain**.
   - Input `cv.kylewu.me` and save. _(Note: Delete the existing DNS CNAME or R2 custom domain mapping for `cv.kylewu.me` first if they conflict)._

---

## How to Update the PDF (Developer Workflow)

Because we configured the Cache-Control to **`public, max-age=0, must-revalidate`**:
1. You only need to upload the new PDF (e.g., `kyle-wu-resume.pdf`) to your Cloudflare R2 bucket.
2. The Worker will automatically detect the new `Etag` mismatch next time any user visits, serving them the new PDF immediately.
3. **No further frontend code changes (like version query parameter bumps) are required** after the initial `?v=1` setup. The URL in `src/data/links.ts` can remain static forever.
