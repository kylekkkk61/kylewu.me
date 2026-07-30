import createMiddleware from "next-intl/middleware"
import { routing } from "./i18n/routing"

export default createMiddleware(routing)

export const config = {
  // Bypass localized and static routes so they can use CDN-level cache hits.
  matcher: ["/", "/((?!api|_next|_vercel|zh-TW|.*opengraph-image|.*\\..*).*)"],
}
