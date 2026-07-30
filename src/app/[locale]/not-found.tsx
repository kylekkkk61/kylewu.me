import { getLocale, getTranslations } from "next-intl/server"
import { SiteFooter } from "@/components/layout/site-footer"
import { SiteHeader } from "@/components/layout/site-header"
import { buttonVariants } from "@/components/ui/button"
import { getProfile } from "@/data/profile"
import { Link } from "@/i18n/routing"
import { cn } from "@/lib/utils"

export default async function NotFound() {
  const requestLocale = await getLocale()
  const locale = requestLocale === "zh-TW" ? "zh-TW" : "en"
  const profile = getProfile(locale)
  const t = await getTranslations({ locale, namespace: "NotFound" })

  return (
    <>
      <SiteHeader profile={profile} />
      <main
        id="main-content"
        tabIndex={-1}
        className="flex min-h-[calc(100dvh-8rem)] flex-1 items-center py-16 md:py-24"
      >
        <div className="mx-auto grid w-full max-w-5xl gap-10 px-6 md:grid-cols-[0.8fr_1fr] md:items-end md:px-8">
          <p
            aria-hidden="true"
            className="text-foreground/10 font-mono text-[clamp(7rem,20vw,14rem)] leading-[0.75] font-semibold tracking-tighter"
          >
            404
          </p>
          <div className="border-border space-y-6 border-t pt-8">
            <h1 className="font-heading text-4xl leading-tight tracking-tight md:text-6xl">
              {t("Title")}
            </h1>
            <p className="text-muted-foreground max-w-lg text-lg leading-8">
              {t("Description")}
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <Link href="/" className={buttonVariants()}>
                {t("BackHome")}
              </Link>
              <Link
                href="/writing"
                className={cn(buttonVariants({ variant: "outline" }))}
              >
                {t("ViewWriting")}
              </Link>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter profile={profile} />
    </>
  )
}
