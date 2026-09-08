import { ArrowUpRight } from "lucide-react"
import { useTranslations } from "next-intl"
import { SectionContainer } from "@/components/layout/section-container"
import { ProjectCard } from "@/components/project-card"
import { FadeIn } from "@/components/ui/fade-in"
import type { Project } from "@/data/projects"
import { Link } from "@/i18n/routing"

export function ProjectsSection({ projects }: { projects: Project[] }) {
  const t = useTranslations("Sections")

  return (
    <SectionContainer id="work" variant="transparent">
      {/* Subtle Dot Matrix inside the color block */}

      {/* Subtle Dot Matrix */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(circle at center, rgba(255,255,255,0.05) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
          maskImage: "linear-gradient(to bottom, black, transparent 80%)",
          WebkitMaskImage: "linear-gradient(to bottom, black, transparent 80%)",
        }}
      />

      <div className="relative z-10 mb-16 md:mb-24">
        <h2 className="font-heading text-3xl font-semibold tracking-tight md:text-4xl">
          {t("SelectedWork")}
        </h2>
        <p className="text-muted-foreground mt-4 max-w-[65ch] text-lg">
          {t("SelectedWorkDesc")}
        </p>
      </div>

      <div className="flex flex-col gap-12">
        {projects
          .filter((p) => p.featured)
          .sort((a, b) => (a.order ?? 99) - (b.order ?? 99))
          .map((project, idx) => (
            <FadeIn key={project.slug} delay={idx * 100}>
              <ProjectCard project={project} />
            </FadeIn>
          ))}
      </div>
      <FadeIn className="mt-12">
        <Link
          href="/writing/participant-needs-service-design"
          className="group border-border hover:border-primary/40 focus-visible:ring-ring grid gap-6 rounded-xl border bg-muted/20 p-6 transition-colors hover:bg-muted/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 sm:p-8 md:grid-cols-[minmax(0,1fr)_auto] md:items-center"
        >
          <div className="max-w-3xl space-y-3">
            <p className="text-primary font-mono text-xs tracking-wide uppercase">
              {t("CampCategory")}
            </p>
            <h3 className="font-heading text-2xl font-semibold tracking-tight md:text-3xl">
              {t("CampTitle")}
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              {t("CampDescription")}
            </p>
          </div>
          <span className="inline-flex items-center gap-2 text-sm font-medium">
            {t("ReadCampCase")}
            <ArrowUpRight
              aria-hidden="true"
              className="h-4 w-4 transition-transform motion-safe:group-hover:-translate-y-0.5 motion-safe:group-hover:translate-x-0.5"
            />
          </span>
        </Link>
      </FadeIn>
    </SectionContainer>
  )
}
