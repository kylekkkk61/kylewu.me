import { ArrowUpRight } from "lucide-react"
import NextLink from "next/link"
import { useTranslations } from "next-intl"
import { SectionContainer } from "@/components/layout/section-container"
import { FadeIn } from "@/components/ui/fade-in"
import type { WritingEntry } from "@/data/writing"
import { getWritingPath } from "@/data/writing"
import { Link } from "@/i18n/routing"

function formatDate(date: string, locale: string) {
  return new Intl.DateTimeFormat(locale, {
    dateStyle: "medium",
    timeZone: "UTC",
  }).format(new Date(`${date}T00:00:00Z`))
}

export function LatestWritingSection({
  entries,
  locale,
}: {
  entries: WritingEntry[]
  locale: string
}) {
  const t = useTranslations("Sections")
  const latestEntries = [...entries]
    .sort((a, b) => b.publishedAt.localeCompare(a.publishedAt))
    .slice(0, 3)

  return (
    <SectionContainer id="writing" variant="transparent">
      <div className="max-w-3xl">
        <h2 className="font-heading text-3xl font-semibold tracking-tight md:text-4xl">
          {t("LatestWriting")}
        </h2>
        <p className="text-muted-foreground mt-4 max-w-[65ch] text-lg">
          {t("LatestWritingDesc")}
        </p>
      </div>

      <div className="border-border mt-12 border-t md:mt-16">
        {latestEntries.map((entry, index) => (
          <FadeIn key={`${entry.locale}:${entry.slug}`} delay={index * 80}>
            <article className="border-border border-b">
              <NextLink
                href={getWritingPath(entry)}
                className="group grid gap-5 py-7 sm:grid-cols-[9rem_1fr_auto] sm:items-start md:py-9"
              >
                <div className="text-muted-foreground flex flex-wrap gap-x-3 gap-y-1 font-mono text-xs tracking-wide sm:flex-col sm:gap-2">
                  <span>{entry.category}</span>
                  <time dateTime={entry.publishedAt}>
                    {formatDate(entry.publishedAt, locale)}
                  </time>
                </div>

                <div className="max-w-2xl space-y-2">
                  <h3 className="text-foreground text-xl font-semibold leading-tight tracking-tight transition-colors group-hover:text-primary/75 md:text-2xl">
                    {entry.title}
                  </h3>
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
          </FadeIn>
        ))}
      </div>

      <Link
        href="/writing"
        className="text-foreground hover:text-primary mt-8 inline-flex items-center gap-2 font-medium transition-colors"
      >
        {t("ViewAllWriting")}
        <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
      </Link>
    </SectionContainer>
  )
}
