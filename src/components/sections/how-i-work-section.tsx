import { useTranslations } from "next-intl"
import { SectionContainer } from "@/components/layout/section-container"
import { FadeIn } from "@/components/ui/fade-in"
import type { Profile } from "@/data/profile"

export function HowIWorkSection({ profile }: { profile: Profile }) {
  const t = useTranslations("Sections")

  return (
    <SectionContainer id="how-i-work" variant="teal">
      <div className="relative z-10 max-w-3xl">
        <h2 className="font-heading text-3xl font-semibold tracking-tight md:text-4xl">
          {t("HowIWork")}
        </h2>
        <p className="text-muted-foreground mt-4 text-lg leading-relaxed">
          {profile.howIWork.intro}
        </p>
      </div>

      <div className="relative z-10 mt-12 grid grid-cols-1 gap-x-12 gap-y-2 md:mt-16 md:grid-cols-2">
        {profile.howIWork.steps.map((step, index) => (
          <FadeIn
            key={step.title}
            delay={index * 100}
            className="border-border/40 py-7 first:border-t md:border-t"
          >
            <div className="flex items-start gap-5">
              <span
                className="text-primary/55 font-mono text-sm font-medium"
                aria-hidden="true"
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              <div className="space-y-3">
                <h3 className="text-foreground text-xl font-medium tracking-tight">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </SectionContainer>
  )
}
