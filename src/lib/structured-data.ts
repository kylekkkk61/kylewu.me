import { links } from "@/data/links"
import type { WritingEntry } from "@/data/writing"
import { siteConfig } from "@/lib/seo"

/**
 * Generate Person schema markup with stable @id
 */
export function getPersonSchema() {
  const sameAs = [links.github, links.linkedin]
  if (links.telegram) {
    sameAs.push(links.telegram)
  }
  if (links.twitter) {
    sameAs.push(links.twitter)
  }

  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://kylewu.me/#person",
    name: siteConfig.name,
    alternateName: ["Ping-Ju Wu", "吳秉儒"],
    url: siteConfig.url,
    email: links.email,
    sameAs: sameAs,
    jobTitle: "FinTech Builder",
    affiliation: {
      "@type": "CollegeOrUniversity",
      name: "Warwick Business School",
    },
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "National Cheng Kung University",
      alternateName: "NCKU",
    },
    knowsAbout: [
      "Financial Technology",
      "Product Strategy",
      "Market Analysis",
      "Business Analysis",
      "Digital Finance",
      "AI-native Product Building",
      "Trading Workflow Automation",
      "Crypto Market Operations",
      "Market Microstructure",
      "Execution Quality",
    ],
  }
}

/**
 * Generate WebSite schema markup with stable @id and publisher/author links
 */
export function getWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://kylewu.me/#website",
    name: siteConfig.name,
    url: siteConfig.url,
    inLanguage: siteConfig.locales,
    description: siteConfig.description,
    publisher: { "@id": "https://kylewu.me/#person" },
    author: { "@id": "https://kylewu.me/#person" },
  }
}

/**
 * Generate ProfilePage schema markup for the home page with stable @id
 */
export function getProfilePageSchema(locale: string) {
  const canonicalPath = locale === "en" ? "" : `/${locale}`
  const pageUrl = `${siteConfig.url}${canonicalPath}`
  return {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": `${pageUrl}#profile`,
    url: pageUrl,
    isPartOf: { "@id": "https://kylewu.me/#website" },
    mainEntity: {
      "@type": "Person",
      "@id": "https://kylewu.me/#person",
      name: siteConfig.name,
      alternateName: ["Ping-Ju Wu", "吳秉儒"],
      jobTitle: "FinTech Builder",
      description:
        locale === "zh-TW"
          ? "Kyle Wu（吳秉儒）來自台灣，是即將就讀華威商學院金融科技碩士的 FinTech Builder，專注於產品策略、市場分析、數位金融與 AI 原生軟體開發。"
          : siteConfig.description,
    },
  }
}

/**
 * Generate project-specific schema markup with stable @id
 */
export function getProjectSchema(
  project: {
    title: string
    slug: string
    shortDescription?: string
    description: string
    updatedAt?: string
    links?: { type: string; href: string }[]
  },
  locale: string,
) {
  const canonicalPath =
    locale === "en"
      ? `/projects/${project.slug}`
      : `/${locale}/projects/${project.slug}`
  const url = `${siteConfig.url}${canonicalPath}`
  const repoLink = project.links?.find((l) => l.type === "github")?.href

  const baseSchema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@id": `${url}#project`,
    name: project.title,
    description: project.shortDescription || project.description,
    url: url,
    mainEntityOfPage: url,
    inLanguage: locale === "zh-TW" ? "zh-TW" : "en",
    isPartOf: { "@id": "https://kylewu.me/#website" },
    creator: { "@id": "https://kylewu.me/#person" },
    author: { "@id": "https://kylewu.me/#person" },
  }

  if (project.updatedAt) {
    baseSchema.dateModified = project.updatedAt
  }

  if (repoLink) {
    baseSchema.codeRepository = repoLink
  }

  if (project.slug === "kaiyn-trading-bot") {
    return {
      ...baseSchema,
      "@type": "SoftwareSourceCode",
      programmingLanguage: "Python",
      targetProduct: {
        "@type": "SoftwareApplication",
        name: "Kaiyn Trading Bot",
        applicationCategory: "BusinessApplication",
        operatingSystem: "Docker-ready OS",
      },
    }
  }

  if (project.slug === "prediction-market-execution-lab") {
    return {
      ...baseSchema,
      "@type": "CreativeWork",
      genre: "Research Project",
      keywords:
        "Prediction Markets, Market Microstructure, Execution Quality, Polymarket",
      about: [
        {
          "@type": "Thing",
          name: "Market Microstructure",
        },
        {
          "@type": "Thing",
          name: "Execution Quality",
        },
      ],
    }
  }

  return {
    ...baseSchema,
    "@type": "CreativeWork",
  }
}

/**
 * Generate article schema for an available writing locale.
 */
export function getArticleSchema(entry: WritingEntry) {
  const prefix = entry.locale === "en" ? "" : `/${entry.locale}`
  const url = `${siteConfig.url}${prefix}/writing/${entry.slug}`

  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${url}#article`,
    headline: entry.title,
    description: entry.description,
    datePublished: entry.publishedAt,
    dateModified: entry.updatedAt,
    inLanguage: entry.locale,
    articleSection: entry.category,
    url,
    mainEntityOfPage: url,
    isPartOf: { "@id": "https://kylewu.me/#website" },
    author: { "@id": "https://kylewu.me/#person" },
    publisher: { "@id": "https://kylewu.me/#person" },
  }
}

/**
 * Generate VideoObject schema markup if project has a demo video
 */
export function getVideoSchema(
  project: {
    title: string
    slug: string
    shortDescription?: string
    description: string
    video?: string
    videoPoster?: string
    updatedAt?: string
  },
  locale: string,
) {
  if (!project.video) return null

  const canonicalPath =
    locale === "en"
      ? `/projects/${project.slug}`
      : `/${locale}/projects/${project.slug}`
  const projectUrl = `${siteConfig.url}${canonicalPath}`

  const uploadDate = project.updatedAt
    ? `${project.updatedAt}T08:00:00Z`
    : "2026-06-22T08:00:00Z"

  let thumbnail = project.videoPoster || "/og/og-background.png"
  if (thumbnail.startsWith("/")) {
    thumbnail = `${siteConfig.url}${thumbnail}`
  }

  let videoUrl = project.video
  if (videoUrl.startsWith("/")) {
    videoUrl = `${siteConfig.url}${videoUrl}`
  }

  return {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    "@id": `${projectUrl}#video`,
    isPartOf: { "@id": `${projectUrl}#project` },
    creator: { "@id": "https://kylewu.me/#person" },
    name:
      locale === "zh-TW"
        ? `${project.title} 示範影片`
        : `${project.title} Demo Video`,
    description: project.shortDescription || project.description,
    thumbnailUrl: thumbnail,
    uploadDate: uploadDate,
    contentUrl: videoUrl,
    embedUrl: videoUrl,
  }
}
