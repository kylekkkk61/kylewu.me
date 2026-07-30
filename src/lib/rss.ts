import {
  getWritingIndexEntries,
  getWritingPath,
  type WritingLocale,
} from "@/data/writing"
import { getRssPath, siteConfig } from "@/lib/seo"

const feedCopy: Record<
  WritingLocale,
  { title: string; description: string; writingPath: string }
> = {
  en: {
    title: "Kyle Wu — Writing",
    description: "Product decisions, market systems, and applied FinTech work.",
    writingPath: "/writing",
  },
  "zh-TW": {
    title: "Kyle Wu — 文章與研究",
    description: "關於產品決策、服務設計與金融科技實作的文章。",
    writingPath: "/zh-TW/writing",
  },
}

function escapeXml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;")
}

function toRssDate(date: string) {
  return new Date(`${date}T00:00:00Z`).toUTCString()
}

export function createRssResponse(locale: WritingLocale) {
  const copy = feedCopy[locale]
  const entries = getWritingIndexEntries(locale)
  const feedUrl = `${siteConfig.url}${getRssPath(locale)}`
  const writingUrl = `${siteConfig.url}${copy.writingPath}`
  const lastBuildDate = toRssDate(
    entries.reduce(
      (latest, entry) => (entry.updatedAt > latest ? entry.updatedAt : latest),
      entries[0]?.updatedAt ?? "1970-01-01",
    ),
  )
  const items = entries
    .map((entry) => {
      const url = `${siteConfig.url}${getWritingPath(entry)}`

      return `    <item>
      <title>${escapeXml(entry.title)}</title>
      <link>${escapeXml(url)}</link>
      <guid isPermaLink="true">${escapeXml(url)}</guid>
      <description>${escapeXml(entry.description)}</description>
      <category>${escapeXml(entry.category)}</category>
      <pubDate>${toRssDate(entry.publishedAt)}</pubDate>
    </item>`
    })
    .join("\n")

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escapeXml(copy.title)}</title>
    <link>${escapeXml(writingUrl)}</link>
    <description>${escapeXml(copy.description)}</description>
    <language>${locale}</language>
    <lastBuildDate>${lastBuildDate}</lastBuildDate>
    <atom:link href="${escapeXml(feedUrl)}" rel="self" type="application/rss+xml" />
${items}
  </channel>
</rss>`

  return new Response(xml, {
    headers: { "Content-Type": "application/rss+xml; charset=utf-8" },
  })
}
