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
      <div className="relative z-10 grid grid-cols-1 items-start gap-8 md:grid-cols-12 md:gap-12 lg:gap-16">
        <div className="md:col-span-5 lg:col-span-4">
          <h2 className="font-heading sticky top-24 text-3xl font-semibold tracking-tight md:text-4xl">
            {t("Background")}
          </h2>
        </div>

        <div className="space-y-6 md:col-span-7 lg:col-span-8">
          <FadeIn className="border-border/60 border-t pt-8 md:pt-10">
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
      </div>
    </SectionContainer>
  )
}
