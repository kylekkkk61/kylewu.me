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

  const lastModified = new Date("2026-09-08")
  // Listings reflect updates to the content they display, not deployment time.
  const latestWritingUpdate = new Date(
    Math.max(
      new Date("2026-07-30").getTime(),
      ...writingEntries.map((entry) => new Date(entry.updatedAt).getTime()),
    ),
  )
  const latestHomeUpdate = new Date(
    Math.max(
      lastModified.getTime(),
      latestWritingUpdate.getTime(),
      ...projects.map((project) =>
        project.updatedAt
          ? new Date(project.updatedAt).getTime()
          : lastModified.getTime(),
      ),
    ),
  )

  // Home pages
  const homePages = routing.locales.map((locale) => ({
    url: getUrl(locale),
    lastModified: latestHomeUpdate,
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
    lastModified: new Date("2026-09-08"),
  }))

  const privacyPages = routing.locales.map((locale) => ({
    url: getUrl(locale, "/privacy"),
    lastModified: new Date("2026-07-30"),
  }))

  const licensingPages = routing.locales.map((locale) => ({
    url: getUrl(locale, "/licensing"),
    lastModified: new Date("2026-08-01"),
  }))

  const writingPages = routing.locales.map((locale) => ({
    url: getUrl(locale, "/writing"),
    lastModified: latestWritingUpdate,
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
    ...licensingPages,
    ...writingPages,
    ...articlePages,
  ]
}
