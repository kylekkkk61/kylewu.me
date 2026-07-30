import { ArrowLeft, Download } from "lucide-react"
import type { Metadata } from "next"
import { getTranslations, setRequestLocale } from "next-intl/server"
import { SectionContainer } from "@/components/layout/section-container"
import { buttonVariants } from "@/components/ui/button"
import { LogoIcon } from "@/components/ui/logo-icon"
import { links } from "@/data/links"
import { getProfile } from "@/data/profile"
import { getResume, type ResumeEntry } from "@/data/resume"
import { Link } from "@/i18n/routing"
import { getOgImagePath, siteConfig } from "@/lib/seo"
import { cn } from "@/lib/utils"

type Props = {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: "Metadata" })
  const canonicalPath = locale === "en" ? "/resume" : `/${locale}/resume`

  return {
    title: t("resumeTitle"),
    description: t("resumeDescription"),
    alternates: {
      canonical: canonicalPath,
      languages: {
        en: "/resume",
        "zh-TW": "/zh-TW/resume",
        "x-default": "/resume",
      },
    },
    openGraph: {
      title: t("resumeTitle"),
      description: t("resumeDescription"),
      url: `${siteConfig.url}${canonicalPath}`,
      locale: locale === "zh-TW" ? "zh_TW" : "en_US",
      type: "profile",
    },
    twitter: {
      card: "summary_large_image",
      title: t("resumeTitle"),
      description: t("resumeDescription"),
      images: [
        {
          url: getOgImagePath(locale, "/resume"),
          alt: "Kyle Wu resume",
        },
      ],
    },
  }
}

function ResumeEntries({ entries }: { entries: ResumeEntry[] }) {
  return (
    <div className="space-y-8">
      {entries.map((entry) => (
        <article key={`${entry.title}-${entry.period}`} className="space-y-3">
          <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
            <div>
              <h3 className="text-foreground font-semibold">{entry.title}</h3>
              <p className="text-muted-foreground text-sm">{entry.role}</p>
            </div>
            <p className="text-muted-foreground shrink-0 text-sm">
              {entry.period}
            </p>
          </div>
          <ul className="text-muted-foreground space-y-2 text-sm leading-relaxed md:text-[0.95rem]">
            {entry.bullets.map((bullet) => (
              <li key={bullet} className="flex gap-3">
                <span
                  aria-hidden="true"
                  className="text-primary/70 mt-2 shrink-0"
                >
                  •
                </span>
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
          {entry.link && (
            <Link
              href={entry.link.href}
              className="text-foreground inline-flex text-sm font-medium underline decoration-border underline-offset-4 transition-colors hover:decoration-foreground"
            >
              {entry.link.label}
            </Link>
          )}
        </article>
      ))}
    </div>
  )
}

function ResumeSection({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <section className="space-y-5">
      <h2 className="border-border border-b pb-2 text-sm font-semibold tracking-[0.16em] uppercase">
        {title}
      </h2>
      {children}
    </section>
  )
}

export default async function ResumePage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale)

  const t = await getTranslations({ locale, namespace: "Resume" })
  const profile = getProfile(locale)
  const resume = getResume(locale)
  const email = links.email.replace("mailto:", "")

  return (
    <main
      id="main-content"
      tabIndex={-1}
      className="bg-background min-h-screen py-12 md:py-16"
    >
      <SectionContainer>
        <nav
          aria-label={t("BackToHome")}
          className="mb-8 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center"
        >
          <Link
            href="/"
            className={cn(
              buttonVariants({ variant: "ghost", size: "sm" }),
              "group text-muted-foreground hover:text-foreground -ml-4 px-4",
            )}
          >
            <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
            {t("BackToHome")}
          </Link>

          <a
            href={links.resumePdf}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(buttonVariants({ variant: "default", size: "sm" }))}
          >
            <Download className="mr-2 h-4 w-4" />
            {t("DownloadPdf")}
          </a>
        </nav>

        <article className="border-border/70 bg-card/45 overflow-hidden rounded-3xl border shadow-2xl">
          <header className="border-border/70 bg-card border-b px-6 py-9 md:px-10 md:py-12">
            <div className="flex items-start gap-4">
              <LogoIcon
                aria-hidden="true"
                className="text-foreground mt-1 h-10 w-10 shrink-0"
              />
              <div>
                <h1 className="font-heading text-4xl font-semibold tracking-tight md:text-5xl">
                  {profile.name}
                </h1>
                <p className="text-muted-foreground mt-2 text-base">
                  {profile.alternateName}
                </p>
                <address className="text-muted-foreground mt-4 flex flex-wrap gap-x-4 gap-y-2 text-sm not-italic">
                  <a
                    href={links.email}
                    className="hover:text-foreground underline-offset-4 hover:underline"
                  >
                    {email}
                  </a>
                  <a
                    href={siteConfig.url}
                    className="hover:text-foreground underline-offset-4 hover:underline"
                  >
                    kylewu.me
                  </a>
                  <a
                    href={links.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-foreground underline-offset-4 hover:underline"
                  >
                    LinkedIn
                  </a>
                  <a
                    href={links.github}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-foreground underline-offset-4 hover:underline"
                  >
                    GitHub
                  </a>
                </address>
              </div>
            </div>
          </header>

          <div className="grid gap-10 px-6 py-9 md:px-10 md:py-12 lg:grid-cols-12 lg:gap-14">
            <aside className="space-y-10 lg:col-span-4">
              <ResumeSection title={t("Education")}>
                <div className="space-y-6">
                  {resume.education.map((item) => (
                    <article key={item.school} className="space-y-1">
                      <h3 className="text-foreground text-sm font-semibold">
                        {item.school}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {item.degree}
                      </p>
                      {item.detail && (
                        <p className="text-muted-foreground text-sm">
                          {item.detail}
                        </p>
                      )}
                      {item.period && (
                        <p className="text-muted-foreground text-xs">
                          {item.period}
                        </p>
                      )}
                    </article>
                  ))}
                </div>
              </ResumeSection>

              <ResumeSection title={t("Skills")}>
                <dl className="space-y-5 text-sm">
                  {[
                    [t("Technical"), resume.skills.technical],
                    [t("Analytics"), resume.skills.analytics],
                    [t("BusinessProduct"), resume.skills.businessProduct],
                    [t("Languages"), resume.skills.languages],
                  ].map(([label, value]) => (
                    <div key={label} className="space-y-1">
                      <dt className="text-foreground font-semibold">{label}</dt>
                      <dd className="text-muted-foreground leading-relaxed">
                        {value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </ResumeSection>
            </aside>

            <div className="space-y-12 lg:col-span-8">
              <ResumeSection title={t("SelectedWork")}>
                <ResumeEntries entries={resume.selectedWork} />
              </ResumeSection>
              <ResumeSection title={t("Experience")}>
                <ResumeEntries entries={resume.experience} />
              </ResumeSection>
              <ResumeSection title={t("Leadership")}>
                <ResumeEntries entries={resume.leadership} />
              </ResumeSection>
            </div>
          </div>
        </article>
      </SectionContainer>
    </main>
  )
}
