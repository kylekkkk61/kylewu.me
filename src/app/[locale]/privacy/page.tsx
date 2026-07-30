import type { Metadata } from "next"
import { getTranslations, setRequestLocale } from "next-intl/server"
import { SiteFooter } from "@/components/layout/site-footer"
import { SiteHeader } from "@/components/layout/site-header"
import { buttonVariants } from "@/components/ui/button"
import { links } from "@/data/links"
import { getProfile } from "@/data/profile"
import { getOgImagePath, siteConfig } from "@/lib/seo"

type Props = {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: "Metadata" })
  const canonicalPath = locale === "en" ? "/privacy" : `/${locale}/privacy`

  return {
    title: t("privacyTitle"),
    description: t("privacyDescription"),
    alternates: {
      canonical: canonicalPath,
      languages: {
        en: "/privacy",
        "zh-TW": "/zh-TW/privacy",
        "x-default": "/privacy",
      },
    },
    openGraph: {
      title: t("privacyTitle"),
      description: t("privacyDescription"),
      url: `${siteConfig.url}${canonicalPath}`,
      locale: locale === "zh-TW" ? "zh_TW" : "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: t("privacyTitle"),
      description: t("privacyDescription"),
      images: [
        {
          url: getOgImagePath(locale),
          alt: "Kyle Wu portfolio",
        },
      ],
    },
  }
}

export default async function PrivacyPage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale)
  const profile = getProfile(locale)
  const t = await getTranslations({ locale, namespace: "Privacy" })

  return (
    <>
      <SiteHeader profile={profile} />
      <main id="main-content" tabIndex={-1} className="flex-1 py-16 md:py-24">
        <div className="mx-auto w-full max-w-5xl px-6 md:px-8">
          <header className="max-w-3xl space-y-5 pb-14 md:pb-20">
            <p className="text-primary text-sm font-medium tracking-wide uppercase">
              {t("Eyebrow")}
            </p>
            <h1 className="font-heading text-4xl leading-tight tracking-tight md:text-6xl">
              {t("Title")}
            </h1>
            <p className="text-muted-foreground max-w-2xl text-lg leading-8 md:text-xl">
              {t("Description")}
            </p>
            <p className="text-muted-foreground font-mono text-xs uppercase tracking-wide">
              {t("LastUpdated")}
            </p>
          </header>

          <article className="max-w-3xl">
            <section className="border-border border-t py-10">
              <h2 className="text-2xl font-semibold tracking-tight">
                {t("AnalyticsTitle")}
              </h2>
              <p className="text-muted-foreground mt-4 leading-7">
                {t("AnalyticsIntro")}
              </p>
              <ul className="text-muted-foreground mt-6 space-y-4 leading-7">
                {(
                  [
                    "VercelAnalytics",
                    "SpeedInsights",
                    "GoogleAnalytics",
                  ] as const
                ).map((key) => (
                  <li key={key} className="flex gap-3">
                    <span aria-hidden="true" className="text-primary mt-0.5">
                      •
                    </span>
                    <span>{t(key)}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="border-border border-t py-10">
              <h2 className="text-2xl font-semibold tracking-tight">
                {t("UseTitle")}
              </h2>
              <ul className="text-muted-foreground mt-6 space-y-4 leading-7">
                {(["UseTraffic", "UsePerformance", "UseContent"] as const).map(
                  (key) => (
                    <li key={key} className="flex gap-3">
                      <span aria-hidden="true" className="text-primary mt-0.5">
                        •
                      </span>
                      <span>{t(key)}</span>
                    </li>
                  ),
                )}
              </ul>
            </section>

            {(
              [
                ["CookiesTitle", "CookiesBody"],
                ["ContactTitle", "ContactBody"],
                ["LinksTitle", "LinksBody"],
              ] as const
            ).map(([title, body]) => (
              <section key={title} className="border-border border-t py-10">
                <h2 className="text-2xl font-semibold tracking-tight">
                  {t(title)}
                </h2>
                <p className="text-muted-foreground mt-4 leading-7">
                  {t(body)}
                </p>
              </section>
            ))}

            <section className="border-border border-y py-10">
              <h2 className="text-2xl font-semibold tracking-tight">
                {t("PoliciesTitle")}
              </h2>
              <div className="mt-5 flex flex-col items-start gap-3">
                <a
                  href="https://policies.google.com/privacy"
                  target="_blank"
                  rel="noreferrer"
                  className="text-muted-foreground hover:text-foreground underline underline-offset-4 transition-colors"
                >
                  {t("GooglePrivacy")}
                </a>
                <a
                  href="https://vercel.com/docs/analytics/privacy-policy"
                  target="_blank"
                  rel="noreferrer"
                  className="text-muted-foreground hover:text-foreground underline underline-offset-4 transition-colors"
                >
                  {t("VercelPrivacy")}
                </a>
              </div>
            </section>

            <a href={links.email} className={`${buttonVariants()} mt-10`}>
              {t("ContactLink")}
            </a>
          </article>
        </div>
      </main>
      <SiteFooter profile={profile} />
    </>
  )
}
