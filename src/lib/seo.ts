export const siteConfig = {
  url: "https://kylewu.me",
  name: "Kyle Wu",
  title: "Kyle Wu — FinTech Builder | Product Strategy & Market Analysis",
  description:
    "Kyle Wu is a Taiwan-based FinTech builder focused on product strategy, market analysis, digital finance, and AI-native software, joining Warwick in 2026.",
  locales: ["en", "zh-TW"],
  defaultLocale: "en",
}

export function getOgImagePath(locale: string, pathname = "") {
  return `/${locale}${pathname}/opengraph-image`
}
