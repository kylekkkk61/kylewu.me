import createMiddleware from "next-intl/middleware"
import { routing } from "./i18n/routing"

export default createMiddleware(routing)

export const config = {
  // Keep the Edge runtime: local Vercel tests showed lower TTFB than Node proxy.
  runtime: "experimental-edge",
  // Bypass localized and static routes so they can use CDN-level cache hits.
  matcher: ["/", "/((?!api|_next|_vercel|zh-TW|.*opengraph-image|.*\\..*).*)"],
}
