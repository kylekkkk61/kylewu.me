import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { getTranslations, setRequestLocale } from "next-intl/server"

type Props = {
  params: Promise<{ locale: string; rest: string[] }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: "NotFound" })

  return {
    title: t("Title"),
    description: t("Description"),
    alternates: {},
    openGraph: null,
    twitter: null,
    robots: {
      index: false,
      follow: false,
    },
  }
}

export default async function CatchAllPage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale)
  notFound()
}
