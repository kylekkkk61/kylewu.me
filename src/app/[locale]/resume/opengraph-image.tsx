import { createOgImage, ogImageSize } from "@/components/seo/og-card"
import { getProfile } from "@/data/profile"
import { routing } from "@/i18n/routing"

export const alt = "Kyle Wu resume"
export const size = ogImageSize
export const contentType = "image/png"

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

export default async function OpenGraphImage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const profile = getProfile(locale)

  return createOgImage({
    locale,
    eyebrow: locale === "zh-TW" ? "個人履歷" : "Resume",
    title: profile.name,
    subtitle: profile.alternateName,
    description:
      locale === "zh-TW"
        ? "金融科技 · 產品策略 · 市場分析"
        : "FinTech · Product Strategy · Market Analysis",
  })
}
