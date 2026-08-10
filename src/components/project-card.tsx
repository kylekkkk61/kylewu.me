import { IconBrandGithub } from "@tabler/icons-react"
import { ArrowRight, ExternalLink, Play } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { buttonVariants } from "@/components/ui/button"
import type { Project } from "@/data/projects"
import { Link } from "@/i18n/routing"
import { cn, surfaceClass } from "@/lib/utils"
import { ProjectTechStack } from "./project-tech-stack"
import { ProjectVisual } from "./project-visuals/project-visual"

export function ProjectCard({ project }: { project: Project }) {
  return (
    <div
      className={cn(
        surfaceClass,
        "group flex flex-col overflow-hidden lg:flex-row",
      )}
    >
      {/* Project visual preview */}
      <div className="relative flex min-h-[240px] w-full shrink-0 items-center justify-center border-r border-black/[0.04] dark:border-white/[0.04] bg-black/[0.02] dark:bg-white/[0.02] lg:w-[40%] xl:w-[45%]">
        <ProjectVisual type={project.visual} />
      </div>

      {/* Content Area */}
      <div className="flex w-full flex-col gap-6 p-6 lg:p-8">
        <div className="space-y-4">
          <div className="space-y-2">
            <div className="space-y-1">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-primary text-sm font-medium">
                  {project.category}
                </span>
                <span className="text-muted-foreground">·</span>
                <span className="text-muted-foreground text-sm">
                  {project.year}
                </span>
              </div>
              {project.status && (
                <p className="text-muted-foreground text-sm">
                  {project.status}
                </p>
              )}
            </div>
            <h3 className="text-2xl font-semibold tracking-tight">
              {project.title}
            </h3>
            <p className="text-foreground/80 text-base">{project.subtitle}</p>
          </div>

          <p className="text-muted-foreground text-sm leading-relaxed">
            {project.shortDescription}
          </p>

          {project.capabilities && project.capabilities.length > 0 && (
            <ul className="text-muted-foreground space-y-2 text-sm">
              {project.capabilities.slice(0, 3).map((capability) => (
                <li key={capability} className="flex gap-2">
                  <span className="text-primary/70 mt-0.5">▹</span>
                  <span>{capability}</span>
                </li>
              ))}
            </ul>
          )}

          <div className="flex flex-wrap gap-2 pt-2">
            {project.tags.slice(0, 5).map((tag) => (
              <Badge key={tag} variant="secondary" className="font-normal">
                {tag}
              </Badge>
            ))}
          </div>
        </div>

        {/* Bottom Area: Tech Stack + Links */}
        <div className="flex flex-col">
          {project.detail?.techStack && (
            <div className="border-t border-black/5 dark:border-white/5 py-2">
              <ProjectTechStack techStack={project.detail.techStack} />
            </div>
          )}

          <div className="flex flex-wrap items-center gap-3 border-t border-black/5 dark:border-white/5 pt-3">
            <Link
              href={`/projects/${project.slug}`}
              className={cn(
                buttonVariants({ variant: "default", size: "sm" }),
                "bg-primary text-primary-foreground hover:bg-primary/90",
              )}
            >
              View Project
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>

            {project.links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className={cn(
                  buttonVariants({ variant: "outline", size: "sm" }),
                )}
              >
                {link.type === "github" && (
                  <IconBrandGithub className="mr-2 h-4 w-4" />
                )}
                {link.type === "video" && <Play className="mr-2 h-4 w-4" />}
                {(link.type === "external" ||
                  link.type === "case-study" ||
                  link.type === "dashboard" ||
                  link.type === "landing-page") && (
                  <ExternalLink className="mr-2 h-4 w-4" />
                )}
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
