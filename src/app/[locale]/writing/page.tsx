import { ArrowUpRight } from "lucide-react"
import type { Metadata } from "next"
import NextLink from "next/link"
import { getTranslations, setRequestLocale } from "next-intl/server"
import { SiteFooter } from "@/components/layout/site-footer"
import { SiteHeader } from "@/components/layout/site-header"
import { getProfile } from "@/data/profile"
import { getWritingIndexEntries, getWritingPath } from "@/data/writing"
import { getOgImagePath, siteConfig } from "@/lib/seo"

type Props = {
  params: Promise<{ locale: string }>
}

function formatDate(date: string, locale: string) {
  return new Intl.DateTimeFormat(locale, {
    dateStyle: "medium",
    timeZone: "UTC",
  }).format(new Date(`${date}T00:00:00Z`))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: "Metadata" })
  const canonicalPath = locale === "en" ? "/writing" : `/${locale}/writing`

  return {
    title: t("writingTitle"),
    description: t("writingDescription"),
    alternates: {
      canonical: canonicalPath,
      languages: {
        en: "/writing",
        "zh-TW": "/zh-TW/writing",
        "x-default": "/writing",
      },
    },
    openGraph: {
      title: t("writingTitle"),
      description: t("writingDescription"),
      url: `${siteConfig.url}${canonicalPath}`,
      locale: locale === "zh-TW" ? "zh_TW" : "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: t("writingTitle"),
      description: t("writingDescription"),
      images: [
        {
          url: getOgImagePath(locale, "/writing"),
          alt: "Kyle Wu writing",
        },
      ],
    },
  }
}

export default async function WritingPage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale)
  const profile = getProfile(locale)
  const entries = getWritingIndexEntries(locale)
  const t = await getTranslations("Writing")

  return (
    <>
      <SiteHeader profile={profile} />
      <main className="flex-1 py-16 md:py-24">
        <div className="mx-auto w-full max-w-5xl px-6 md:px-8">
          <header className="max-w-3xl space-y-5 pb-16 md:pb-20">
            <p className="text-primary text-sm font-medium tracking-wide uppercase">
              {t("Eyebrow")}
            </p>
            <h1 className="font-heading text-4xl leading-tight tracking-tight md:text-6xl">
              {t("Title")}
            </h1>
            <p className="text-muted-foreground max-w-2xl text-lg leading-8 md:text-xl">
              {t("Description")}
            </p>
          </header>

          <section aria-label={t("Eyebrow")} className="border-border border-y">
            {entries.map((entry) => (
              <article key={`${entry.locale}:${entry.slug}`}>
                <NextLink
                  href={getWritingPath(entry)}
                  className="group grid gap-6 py-8 transition-colors sm:grid-cols-[10rem_1fr_auto] sm:items-start md:py-10"
                >
                  <div className="text-muted-foreground flex flex-wrap gap-x-3 gap-y-1 font-mono text-xs uppercase tracking-wide sm:flex-col sm:gap-2">
                    <time dateTime={entry.publishedAt}>
                      {formatDate(entry.publishedAt, locale)}
                    </time>
                    <span>{entry.category}</span>
                    {entry.locale !== locale && (
                      <span>{t("EnglishArticle")}</span>
                    )}
                  </div>

                  <div className="max-w-2xl space-y-3">
                    <h2 className="text-2xl font-semibold leading-tight tracking-tight transition-colors group-hover:text-primary/70 md:text-3xl">
                      {entry.title}
                    </h2>
                    <p className="text-muted-foreground leading-7">
                      {entry.description}
                    </p>
                  </div>

                  <ArrowUpRight
                    aria-hidden="true"
                    className="text-muted-foreground hidden h-5 w-5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 sm:block"
                  />
                </NextLink>
              </article>
            ))}
          </section>
        </div>
      </main>
      <SiteFooter profile={profile} />
    </>
  )
}
