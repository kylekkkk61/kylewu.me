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

const MIT_LICENSE_URL =
  "https://github.com/kylekkkk61/kylewu.me/blob/main/LICENSE"
const CC_LICENSE_URL =
  "https://creativecommons.org/licenses/by-nc-nd/4.0/deed.en"
const CC_LICENSE_ZH_URL =
  "https://creativecommons.org/licenses/by-nc-nd/4.0/deed.zh-hant"

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: "Metadata" })
  const canonicalPath = locale === "en" ? "/licensing" : `/${locale}/licensing`

  return {
    title: t("licensingTitle"),
    description: t("licensingDescription"),
    alternates: {
      canonical: canonicalPath,
      languages: {
        en: "/licensing",
        "zh-TW": "/zh-TW/licensing",
        "x-default": "/licensing",
      },
    },
    openGraph: {
      title: t("licensingTitle"),
      description: t("licensingDescription"),
      url: `${siteConfig.url}${canonicalPath}`,
      locale: locale === "zh-TW" ? "zh_TW" : "en_US",
      type: "website",
      images: [
        {
          url: getOgImagePath(locale),
          alt: "Kyle Wu portfolio",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: t("licensingTitle"),
      description: t("licensingDescription"),
      images: [
        {
          url: getOgImagePath(locale),
          alt: "Kyle Wu portfolio",
        },
      ],
    },
  }
}

export default async function LicensingPage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale)
  const profile = getProfile(locale)
  const t = await getTranslations({ locale, namespace: "Licensing" })
  const ccLicenseUrl = locale === "zh-TW" ? CC_LICENSE_ZH_URL : CC_LICENSE_URL

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
                {t("SummaryTitle")}
              </h2>
              <p className="text-muted-foreground mt-4 leading-7">
                {t("SummaryBody")}
              </p>
            </section>

            <section className="border-border border-t py-10">
              <h2 className="text-2xl font-semibold tracking-tight">
                {t("CodeTitle")}
              </h2>
              <p className="text-muted-foreground mt-4 leading-7">
                {t("CodeBody")}
              </p>
              <a
                href={MIT_LICENSE_URL}
                target="_blank"
                rel="license noreferrer"
                className="text-muted-foreground hover:text-foreground mt-5 inline-block underline underline-offset-4 transition-colors"
              >
                {t("MitLicense")}
              </a>
            </section>

            <section className="border-border border-t py-10">
              <h2 className="text-2xl font-semibold tracking-tight">
                {t("WritingTitle")}
              </h2>
              <p className="text-muted-foreground mt-4 leading-7">
                {t("WritingBody")}
              </p>
              <p className="text-muted-foreground mt-4 leading-7">
                {t("WritingPermission")}
              </p>
              <a
                href={ccLicenseUrl}
                target="_blank"
                rel="license noreferrer"
                className="text-muted-foreground hover:text-foreground mt-5 inline-block underline underline-offset-4 transition-colors"
              >
                {t("CreativeCommonsLicense")}
              </a>
            </section>

            <section className="border-border border-t py-10">
              <h2 className="text-2xl font-semibold tracking-tight">
                {t("ReservedTitle")}
              </h2>
              <p className="text-muted-foreground mt-4 leading-7">
                {t("ReservedBody")}
              </p>
            </section>

            <section className="border-border border-t py-10">
              <h2 className="text-2xl font-semibold tracking-tight">
                {t("SharingTitle")}
              </h2>
              <p className="text-muted-foreground mt-4 leading-7">
                {t("SharingBody")}
              </p>
            </section>

            <section className="border-border border-y py-10">
              <h2 className="text-2xl font-semibold tracking-tight">
                {t("ThirdPartyTitle")}
              </h2>
              <p className="text-muted-foreground mt-4 leading-7">
                {t("ThirdPartyBody")}
              </p>
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
