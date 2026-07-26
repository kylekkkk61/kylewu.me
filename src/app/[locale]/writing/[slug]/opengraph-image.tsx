import { createOgImage, ogImageSize } from "@/components/seo/og-card"
import { getWritingEntry, writingEntries } from "@/data/writing"

export const alt = "Kyle Wu article"
export const size = ogImageSize
export const contentType = "image/png"

export function generateStaticParams() {
  return writingEntries.map(({ locale, slug }) => ({ locale, slug }))
}

export default async function OpenGraphImage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>
}) {
  const { locale, slug } = await params
  const entry = getWritingEntry(slug, locale)

  if (!entry) {
    return createOgImage({
      locale,
      eyebrow: locale === "zh-TW" ? "文章與研究" : "Writing",
      title: "Kyle Wu",
      subtitle: locale === "zh-TW" ? "找不到文章" : "Article not found",
    })
  }

  return createOgImage({
    locale,
    eyebrow: `${locale === "zh-TW" ? "文章與研究" : "Writing"} · ${entry.category}`,
    title: entry.title,
    subtitle: entry.ogSubtitle,
    footer: `Kyle Wu · ${entry.publishedAt.slice(0, 4)}`,
    accent: "#9fb396",
    layout: "editorial",
  })
}
