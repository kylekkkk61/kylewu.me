import type { MetadataRoute } from "next"
import { projects } from "@/data/projects"
import { writingEntries } from "@/data/writing"
import { routing } from "@/i18n/routing"
import { siteConfig } from "@/lib/seo"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url

  const getUrl = (locale: string, path = "") => {
    // Under localePrefix: "as-needed", default locale 'en' has no prefix
    const prefix = locale === "en" ? "" : `/${locale}`
    return `${baseUrl}${prefix}${path}`
  }

  const lastModified = new Date("2026-07-23")

  // Home pages
  const homePages = routing.locales.map((locale) => ({
    url: getUrl(locale),
    lastModified,
  }))

  // Project pages
  const projectPages = routing.locales.flatMap((locale) =>
    projects.map((p) => ({
      url: getUrl(locale, `/projects/${p.slug}`),
      lastModified: p.updatedAt ? new Date(p.updatedAt) : lastModified,
    })),
  )

  // Resume pages
  const resumePages = routing.locales.map((locale) => ({
    url: getUrl(locale, "/resume"),
    lastModified,
  }))

  const privacyPages = routing.locales.map((locale) => ({
    url: getUrl(locale, "/privacy"),
    lastModified: new Date("2026-07-30"),
  }))

  const writingPages = routing.locales.map((locale) => ({
    url: getUrl(locale, "/writing"),
    lastModified: new Date("2026-07-30"),
  }))

  const articlePages = writingEntries.map((entry) => ({
    url: getUrl(entry.locale, `/writing/${entry.slug}`),
    lastModified: new Date(entry.updatedAt),
  }))

  return [
    ...homePages,
    ...projectPages,
    ...resumePages,
    ...privacyPages,
    ...writingPages,
    ...articlePages,
  ]
}
