import { ArrowRight } from "lucide-react"
import { useTranslations } from "next-intl"
import { SectionContainer } from "@/components/layout/section-container"
import { FadeIn } from "@/components/ui/fade-in"
import { links } from "@/data/links"
import type { Profile } from "@/data/profile"
import { Link } from "@/i18n/routing"

export function AboutSection({ profile }: { profile: Profile }) {
  const t = useTranslations("Sections")

  return (
    <SectionContainer id="about" variant="plum">
      <div className="relative z-10">
        <h2 className="font-heading text-3xl font-semibold tracking-tight md:text-4xl">
          {t("Background")}
        </h2>

        <FadeIn className="border-border/60 mt-8 border-t pt-8 md:mt-10 md:pt-10">
          <div className="max-w-5xl">
            <p className="text-primary mb-5 font-mono text-xs font-medium tracking-[0.14em] uppercase">
              {profile.alternateName}
            </p>
            <div className="prose prose-zinc dark:prose-invert text-muted-foreground max-w-none space-y-4">
              {profile.about.split("\n\n").map((paragraph) => (
                <p key={paragraph} className="text-lg leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          <div className="pt-8">
            <h3 className="text-primary mb-4 font-mono text-xs font-medium tracking-[0.14em] uppercase">
              {t("BackgroundPath")}
            </h3>
            <ol className="border-border/60 grid border-y lg:grid-cols-4">
              {profile.backgroundPath.map((step, index) => (
                <li
                  key={step.title}
                  className="border-border/60 border-t py-5 first:border-t-0 lg:border-t-0 lg:border-l lg:px-5 lg:first:border-l-0 lg:first:pl-0"
                >
                  <span className="text-primary/70 font-mono text-xs tabular-nums">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="text-foreground mt-2 text-sm font-semibold">
                    {step.title}
                  </p>
                  <p className="text-muted-foreground mt-1 text-sm leading-relaxed">
                    {step.detail}
                  </p>
                </li>
              ))}
            </ol>
          </div>

          <div className="pt-6">
            <Link
              href={links.resume}
              prefetch={false}
              className="group text-foreground hover:text-primary inline-flex items-center font-medium transition-colors"
            >
              {t("SeeMyResume")}
              <ArrowRight
                aria-hidden="true"
                className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5"
              />
            </Link>
          </div>
        </FadeIn>
      </div>
    </SectionContainer>
  )
}
