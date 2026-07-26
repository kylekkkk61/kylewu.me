import { createOgImage, ogImageSize } from "@/components/seo/og-card"

export const alt = "Kyle Wu writing"
export const size = ogImageSize
export const contentType = "image/png"
export const runtime = "nodejs"

export default async function OpenGraphImage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params

  return createOgImage({
    eyebrow: locale === "zh-TW" ? "文章與研究" : "Writing",
    title: locale === "zh-TW" ? "產品決策與金融科技實作" : "Writing",
    subtitle:
      locale === "zh-TW"
        ? "記錄公開專案背後的產品策略、市場系統與工程決策。"
        : "Product decisions, market systems, and the engineering behind public work.",
  })
}
