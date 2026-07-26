import { createOgImage, ogImageSize } from "@/components/seo/og-card"
import { routing } from "@/i18n/routing"

export const alt = "Kyle Wu writing"
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

  return createOgImage({
    locale,
    eyebrow: locale === "zh-TW" ? "文章與研究" : "Writing",
    title: locale === "zh-TW" ? "產品決策與金融科技實作" : "Writing",
    subtitle:
      locale === "zh-TW"
        ? "記錄公開專案背後的產品策略、市場系統與工程決策。"
        : "Product decisions, market systems, and the engineering behind public work.",
    accent: "#9fb396",
    layout: "editorial",
  })
}
