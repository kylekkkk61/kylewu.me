export const siteConfig = {
  url: "https://kylewu.me",
  name: "Kyle Wu",
  title: "Kyle Wu — FinTech Builder | Product Strategy & Market Analysis",
  description:
    "Kyle Wu: FinTech builder exploring product strategy, market analysis, and digital publishing. Warwick MSc Financial Technology, 2026–27.",
  locales: ["en", "zh-TW"],
  defaultLocale: "en",
}

export function getOgImagePath(locale: string, pathname = "") {
  return `/${locale}${pathname}/opengraph-image`
}

export function getRssPath(locale: string) {
  return locale === "zh-TW" ? "/zh-TW/feed.xml" : "/feed.xml"
}
