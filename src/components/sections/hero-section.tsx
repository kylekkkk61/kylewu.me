import { SiGithub, SiTelegram } from "@icons-pack/react-simple-icons"
import { IconBrandLinkedinFilled, IconMailFilled } from "@tabler/icons-react"
import { useTranslations } from "next-intl"
import { CurrentFocusCard } from "@/components/hero/current-focus-card"
import { SectionContainer } from "@/components/layout/section-container"
import { buttonVariants } from "@/components/ui/button"
import { links } from "@/data/links"
import type { Profile } from "@/data/profile"
import { cn } from "@/lib/utils"

export function HeroSection({ profile }: { profile: Profile }) {
  const t = useTranslations("Hero")
  const evidence = useTranslations("Evidence")
  const evidenceItems = [
    {
      label: evidence("VentureLabel"),
      primary: evidence("VenturePrimary"),
      secondary: evidence("VentureSecondary"),
    },
    {
      label: evidence("WorkLabel"),
      primary: evidence("WorkPrimary"),
    },
    {
      label: evidence("EducationLabel"),
      primary: evidence("EducationPrimary"),
      secondary: evidence("EducationSecondary"),
    },
  ]

  return (
    <SectionContainer
      id="hero"
      className="relative flex min-h-[70dvh] flex-col justify-center overflow-hidden py-12 md:py-16"
    >
      <div className="relative z-10 grid w-full grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-8">
        <div className="max-w-2xl space-y-8">
          <div className="animate-fade-up space-y-4">
            <span className="bg-primary/20 text-primary inline-block rounded-md px-3 py-1 text-sm font-medium">
              {t("PersonalPortfolio")}
            </span>
            <h1 className="font-heading text-foreground text-4xl leading-[1.1] font-semibold tracking-tighter md:text-5xl lg:text-6xl">
              {profile.name}
            </h1>
            <div className="text-primary/90 text-xl font-medium tracking-tight md:text-2xl">
              {profile.positioning}
            </div>
          </div>

          <p
            className="text-muted-foreground animate-fade-up text-lg leading-relaxed md:text-xl"
            style={{ animationDelay: "100ms" }}
          >
            {profile.heroDescription}
          </p>

          <div
            className="animate-fade-up flex flex-col items-center gap-4 pt-4 sm:flex-row"
            style={{ animationDelay: "200ms" }}
          >
            <a
              href="#work"
              className={cn(
                buttonVariants({ size: "lg" }),
                "h-12 w-full px-8 text-base font-medium sm:w-auto",
              )}
            >
              {t("ViewWork")}
            </a>
            <a
              href="#contact"
              className={cn(
                buttonVariants({ size: "lg", variant: "outline" }),
                "h-12 w-full px-8 text-base font-medium sm:w-auto",
              )}
            >
              {t("Contact")}
            </a>
          </div>

          {/* Social Icons */}
          <div
            className="animate-fade-up flex items-center gap-5 pt-8 sm:pt-6"
            style={{ animationDelay: "300ms" }}
          >
            <a
              href={links.github}
              target="_blank"
              rel="noreferrer"
              className="text-muted-foreground transition-all duration-300 hover:text-foreground hover:drop-shadow-[0_0_8px_rgba(44,42,41,0.3)] dark:hover:text-white dark:hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.6)]"
              aria-label="GitHub"
            >
              <SiGithub className="h-6 w-6" />
            </a>
            <a
              href={links.linkedin}
              target="_blank"
              rel="noreferrer"
              className="text-muted-foreground transition-all duration-300 hover:text-foreground hover:drop-shadow-[0_0_8px_rgba(44,42,41,0.3)] dark:hover:text-white dark:hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.6)]"
              aria-label="LinkedIn"
            >
              <IconBrandLinkedinFilled className="h-6 w-6" />
            </a>
            <a
              href={links.email}
              className="text-muted-foreground transition-all duration-300 hover:text-foreground hover:drop-shadow-[0_0_8px_rgba(44,42,41,0.3)] dark:hover:text-white dark:hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.6)]"
              aria-label="Email"
            >
              <IconMailFilled className="h-6 w-6" />
            </a>
            <a
              href={links.telegram}
              target="_blank"
              rel="noreferrer"
              className="text-muted-foreground transition-all duration-300 hover:text-foreground hover:drop-shadow-[0_0_8px_rgba(44,42,41,0.3)] dark:hover:text-white dark:hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.6)]"
              aria-label="Telegram"
            >
              <SiTelegram className="h-6 w-6" />
            </a>
          </div>
        </div>

        <div
          className="animate-fade-up w-full lg:justify-self-end"
          style={{ animationDelay: "300ms" }}
        >
          <CurrentFocusCard />
        </div>
      </div>

      <dl className="border-border/70 bg-card/35 relative z-10 mt-12 grid overflow-hidden rounded-2xl border sm:grid-cols-3">
        {evidenceItems.map((item) => (
          <div
            key={item.label}
            className="border-border/70 space-y-2 border-b p-5 last:border-b-0 sm:border-r sm:border-b-0 sm:last:border-r-0 md:p-6"
          >
            <dt className="text-muted-foreground font-mono text-[0.68rem] font-medium tracking-[0.14em] uppercase">
              {item.label}
            </dt>
            <dd className="text-foreground text-sm font-semibold md:text-base">
              {item.primary}
            </dd>
            {item.secondary && (
              <dd className="text-muted-foreground text-sm">
                {item.secondary}
              </dd>
            )}
          </div>
        ))}
      </dl>
    </SectionContainer>
  )
}
