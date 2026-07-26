import { ArrowLeft, ArrowUpRight } from "lucide-react"
import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { getTranslations, setRequestLocale } from "next-intl/server"
import { SiteFooter } from "@/components/layout/site-footer"
import { SiteHeader } from "@/components/layout/site-header"
import { JsonLd } from "@/components/seo/json-ld"
import { ConfirmationFirstTradingWorkflowArticle } from "@/content/writing/confirmation-first-telegram-trading-workflow"
import { ConfirmationFirstTradingWorkflowArticleZh } from "@/content/writing/confirmation-first-telegram-trading-workflow-zh"
import { getProfile } from "@/data/profile"
import {
  getWritingAlternates,
  getWritingEntry,
  writingEntries,
} from "@/data/writing"
import { Link } from "@/i18n/routing"
import { siteConfig } from "@/lib/seo"
import { getArticleSchema } from "@/lib/structured-data"

type Props = {
  params: Promise<{ locale: string; slug: string }>
}

export const dynamicParams = false

export function generateStaticParams() {
  return writingEntries.map((entry) => ({
    locale: entry.locale,
    slug: entry.slug,
  }))
}

function formatDate(date: string, locale: string) {
  return new Intl.DateTimeFormat(locale, {
    dateStyle: "long",
    timeZone: "UTC",
  }).format(new Date(`${date}T00:00:00Z`))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params
  const entry = getWritingEntry(slug, locale)

  if (!entry) {
    return { title: "Article Not Found" }
  }

  const canonicalPath =
    locale === "en" ? `/writing/${slug}` : `/${locale}/writing/${slug}`
  const alternates = getWritingAlternates(slug)
  const languages: Record<string, string> = { ...alternates }
  if (alternates.en) languages["x-default"] = alternates.en

  return {
    title: entry.title,
    description: entry.description,
    alternates: {
      canonical: canonicalPath,
      languages,
    },
    openGraph: {
      title: entry.title,
      description: entry.description,
      url: `${siteConfig.url}${canonicalPath}`,
      locale: locale === "zh-TW" ? "zh_TW" : "en_US",
      type: "article",
      publishedTime: entry.publishedAt,
      modifiedTime: entry.updatedAt,
      authors: [siteConfig.url],
    },
    twitter: {
      card: "summary_large_image",
      title: entry.title,
      description: entry.description,
    },
  }
}

export default async function WritingArticlePage({ params }: Props) {
  const { locale, slug } = await params
  setRequestLocale(locale)
  const entry = getWritingEntry(slug, locale)

  if (!entry) notFound()

  const profile = getProfile(locale)
  const t = await getTranslations("Writing")
  const nextLocale = locale === "en" ? "zh-TW" : "en"
  const languagePath = getWritingEntry(slug, nextLocale)
    ? `/writing/${slug}`
    : "/writing"
  const articleSchema = getArticleSchema(entry)

  return (
    <>
      <JsonLd data={articleSchema} />
      <SiteHeader profile={profile} languagePath={languagePath} />
      <main className="flex-1 py-12 md:py-20">
        <article className="mx-auto w-full max-w-5xl px-6 md:px-8">
          <div className="mx-auto max-w-3xl">
            <Link
              href="/writing"
              className="text-muted-foreground hover:text-foreground mb-12 inline-flex items-center text-sm font-medium transition-colors"
            >
              <ArrowLeft aria-hidden="true" className="mr-2 h-4 w-4" />
              {t("BackToWriting")}
            </Link>

            <header className="space-y-7 border-b border-border pb-12 md:pb-16">
              <div className="flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-xs uppercase tracking-wide text-muted-foreground">
                <span className="text-primary">{entry.category}</span>
                <span aria-hidden="true">·</span>
                <span>
                  {locale === "zh-TW"
                    ? t("ChineseArticle")
                    : t("EnglishArticle")}
                </span>
              </div>
              <h1 className="font-heading text-4xl leading-[1.08] tracking-tight md:text-6xl">
                {entry.title}
              </h1>
              <p className="text-muted-foreground text-xl leading-8 md:text-2xl md:leading-9">
                {entry.ogSubtitle}
              </p>
              <dl className="text-muted-foreground flex flex-wrap gap-x-8 gap-y-3 text-sm">
                <div className="flex gap-2">
                  <dt>{t("Published")}</dt>
                  <dd>
                    <time dateTime={entry.publishedAt}>
                      {formatDate(entry.publishedAt, locale)}
                    </time>
                  </dd>
                </div>
                {entry.updatedAt !== entry.publishedAt && (
                  <div className="flex gap-2">
                    <dt>{t("Updated")}</dt>
                    <dd>
                      <time dateTime={entry.updatedAt}>
                        {formatDate(entry.updatedAt, locale)}
                      </time>
                    </dd>
                  </div>
                )}
              </dl>
            </header>

            <div className="pt-12 md:pt-16">
              {locale === "zh-TW" ? (
                <ConfirmationFirstTradingWorkflowArticleZh />
              ) : (
                <ConfirmationFirstTradingWorkflowArticle />
              )}
            </div>

            <footer className="mt-16 space-y-10 border-t border-border pt-10 md:mt-20">
              <section className="space-y-4" aria-labelledby="source-material">
                <h2 id="source-material" className="text-lg font-semibold">
                  {t("SourceMaterial")}
                </h2>
                <ul className="space-y-3 text-sm">
                  <li>
                    <a
                      href="https://github.com/kaiyn-capital/kaiyn-trading-bot"
                      target="_blank"
                      rel="noreferrer"
                      className="text-muted-foreground hover:text-foreground inline-flex items-center gap-2 transition-colors"
                    >
                      Kaiyn Trading Bot repository
                      <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://github.com/kaiyn-capital/kaiyn-trading-bot/blob/main/references/trading_flow.md"
                      target="_blank"
                      rel="noreferrer"
                      className="text-muted-foreground hover:text-foreground inline-flex items-center gap-2 transition-colors"
                    >
                      Trading Flow
                      <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://github.com/kaiyn-capital/kaiyn-trading-bot/blob/main/references/production_readiness.md"
                      target="_blank"
                      rel="noreferrer"
                      className="text-muted-foreground hover:text-foreground inline-flex items-center gap-2 transition-colors"
                    >
                      Production Readiness Record
                      <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
                    </a>
                  </li>
                </ul>
              </section>

              <section className="border-border bg-muted/30 rounded-xl border p-6 md:p-8">
                <p className="mb-2 font-mono text-xs uppercase tracking-wide text-muted-foreground">
                  {t("RelatedProject")}
                </p>
                <Link
                  href={`/projects/${entry.relatedProjectSlug}`}
                  className="group inline-flex items-center gap-2 text-lg font-semibold"
                >
                  {t("ViewProject")}
                  <ArrowUpRight
                    aria-hidden="true"
                    className="h-5 w-5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </Link>
              </section>
            </footer>
          </div>
        </article>
      </main>
      <SiteFooter profile={profile} />
    </>
  )
}
