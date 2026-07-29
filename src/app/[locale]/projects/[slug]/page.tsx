import { IconBrandGithub } from "@tabler/icons-react"
import { ArrowLeft, ArrowUpRight, ExternalLink, Play } from "lucide-react"
import type { Metadata } from "next"
import NextLink from "next/link"
import { notFound } from "next/navigation"
import { getTranslations, setRequestLocale } from "next-intl/server"
import { SectionContainer } from "@/components/layout/section-container"
import { SiteFooter } from "@/components/layout/site-footer"
import { SiteHeader } from "@/components/layout/site-header"
import {
  KaiynAuditArtifact,
  KaiynConfirmationArtifact,
  KaiynSignalArtifact,
} from "@/components/project-artifacts/kaiyn-artifacts"
import {
  PmLabCalibrationArtifact,
  PmLabDashboardArtifact,
  PmLabFunnelArtifact,
} from "@/components/project-artifacts/pm-lab-artifacts"
import { ProjectVisual } from "@/components/project-visuals/project-visual"
import { JsonLd } from "@/components/seo/json-ld"
import { Badge } from "@/components/ui/badge"
import { buttonVariants } from "@/components/ui/button"
import { getProfile } from "@/data/profile"
import { getProjects, projects } from "@/data/projects"
import { getWritingEntry, getWritingPath } from "@/data/writing"
import { Link, routing } from "@/i18n/routing"
import { getOgImagePath, siteConfig } from "@/lib/seo"
import { getProjectSchema, getVideoSchema } from "@/lib/structured-data"
import { cn } from "@/lib/utils"

function ArtifactPreview({ id }: { id: string }) {
  switch (id) {
    case "kaiyn-signal":
      return <KaiynSignalArtifact />
    case "kaiyn-confirmation":
      return <KaiynConfirmationArtifact />
    case "kaiyn-audit":
      return <KaiynAuditArtifact />
    case "pm-lab-funnel":
      return <PmLabFunnelArtifact />
    case "pm-lab-calibration":
      return <PmLabCalibrationArtifact />
    case "pm-lab-dashboard":
      return <PmLabDashboardArtifact />
    default:
      return null
  }
}

type Props = {
  params: Promise<{ locale: string; slug: string }>
}

export async function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    projects.map((p) => ({
      locale,
      slug: p.slug,
    })),
  )
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug, locale } = await params
  const projects = getProjects(locale)
  const project = projects.find((p) => p.slug === slug)

  if (!project) {
    return {
      title: "Project Not Found",
    }
  }

  const canonicalPath =
    locale === "en" ? `/projects/${slug}` : `/${locale}/projects/${slug}`
  const socialDescription = project.ogSubtitle ?? project.subtitle

  return {
    title: project.title,
    description: project.shortDescription || project.description,
    alternates: {
      canonical: canonicalPath,
      languages: {
        en: `/projects/${slug}`,
        "zh-TW": `/zh-TW/projects/${slug}`,
        "x-default": `/projects/${slug}`,
      },
    },
    openGraph: {
      title: project.title,
      description: socialDescription,
      url: `${siteConfig.url}${canonicalPath}`,
      locale: locale === "zh-TW" ? "zh_TW" : "en_US",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: project.title,
      description: socialDescription,
      images: [
        {
          url: getOgImagePath(locale, `/projects/${slug}`),
          alt: `${project.title} project by Kyle Wu`,
        },
      ],
    },
  }
}

export default async function ProjectPage({ params }: Props) {
  const { slug, locale } = await params
  setRequestLocale(locale)
  const projects = getProjects(locale)
  const profile = getProfile(locale)
  const t = await getTranslations("ProjectDetail")

  const project = projects.find((p) => p.slug === slug)

  if (!project) {
    notFound()
  }

  const projectSchema = getProjectSchema(project, locale)
  const videoSchema = getVideoSchema(project, locale)
  const relatedWriting = project.relatedWritingSlug
    ? (getWritingEntry(project.relatedWritingSlug, locale) ??
      getWritingEntry(project.relatedWritingSlug, "en"))
    : undefined

  return (
    <>
      <JsonLd data={projectSchema} />
      {videoSchema && <JsonLd data={videoSchema} />}
      <SiteHeader profile={profile} />
      <main className="flex-1 pt-12 pb-24 md:pt-16 md:pb-32">
        <SectionContainer>
          {/* Back link */}
          <div className="mb-12">
            <Link
              href="/#work"
              className="text-muted-foreground hover:text-foreground inline-flex items-center text-sm font-medium transition-colors"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              {t("BackToWork")}
            </Link>
          </div>

          <div className="flex flex-col gap-12 lg:gap-20">
            {/* Hero & Visual */}
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
              <div className="space-y-6 lg:col-span-5">
                <div className="space-y-2">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-primary text-sm font-medium">
                      {project.category}
                    </span>
                    <span className="text-muted-foreground">·</span>
                    <span className="text-muted-foreground text-sm">
                      {project.year}
                    </span>
                  </div>
                  <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
                    {project.title}
                  </h1>
                  <p className="text-muted-foreground text-xl">
                    {project.subtitle}
                  </p>
                </div>

                <div className="flex flex-wrap gap-3 pt-4">
                  {project.links.map((link, idx) => {
                    const isPrimary =
                      link.type === "landing-page" ||
                      link.type === "dashboard" ||
                      idx === 0
                    return (
                      <a
                        key={link.label}
                        href={link.href}
                        target="_blank"
                        rel="noreferrer"
                        className={cn(
                          buttonVariants({
                            variant: isPrimary ? "default" : "outline",
                          }),
                          isPrimary &&
                            "bg-primary text-primary-foreground hover:bg-primary/90",
                        )}
                      >
                        {link.type === "github" && (
                          <IconBrandGithub className="mr-2 h-4 w-4" />
                        )}
                        {link.type === "video" && (
                          <Play className="mr-2 h-4 w-4" />
                        )}
                        {(link.type === "external" ||
                          link.type === "case-study" ||
                          link.type === "dashboard" ||
                          link.type === "landing-page") && (
                          <ExternalLink className="mr-2 h-4 w-4" />
                        )}
                        {link.label}
                      </a>
                    )
                  })}
                </div>
              </div>

              <div className="space-y-3 lg:col-span-7">
                <div className="bg-muted/30 border-border/50 relative flex min-h-[300px] w-full items-center justify-center rounded-xl border">
                  <ProjectVisual type={project.visual} />
                </div>
                {project.detail.visualDisclaimer && (
                  <p className="text-muted-foreground px-1 text-xs italic">
                    {project.detail.visualDisclaimer}
                  </p>
                )}
              </div>
            </div>

            {/* Content Sections */}
            <div className="mx-auto mt-16 max-w-3xl space-y-16">
              {/* At a Glance Section */}
              <section
                aria-labelledby="at-a-glance"
                className="bg-black/[0.02] dark:bg-white/[0.02] border border-black/[0.08] dark:border-white/[0.08] rounded-xl p-6 space-y-4"
              >
                <h2
                  id="at-a-glance"
                  className="text-lg font-medium tracking-tight text-foreground dark:text-white"
                >
                  {t("AtAGlance")}
                </h2>
                <dl className="grid grid-cols-1 gap-x-8 gap-y-5 text-sm sm:grid-cols-2">
                  <div className="space-y-1">
                    <dt className="text-muted-foreground font-medium">
                      {t("ProjectType")}
                    </dt>
                    <dd className="text-foreground">{project.category}</dd>
                  </div>
                  <div className="space-y-1">
                    <dt className="text-muted-foreground font-medium">
                      {t("Artifact")}
                    </dt>
                    <dd className="text-foreground">{project.status}</dd>
                  </div>
                  <div className="space-y-1 sm:col-span-2">
                    <dt className="text-muted-foreground font-medium">
                      {t("MyRole")}
                    </dt>
                    <dd className="text-foreground leading-relaxed">
                      {project.detail.role}
                    </dd>
                  </div>
                  <div className="space-y-1 sm:col-span-2">
                    <dt className="text-muted-foreground font-medium">
                      {t("Focus")}
                    </dt>
                    <dd className="text-foreground">
                      {project.capabilities.join(" / ")}
                    </dd>
                  </div>
                </dl>
              </section>

              {/* Context */}
              <section className="space-y-5">
                <h2 className="text-2xl font-semibold tracking-tight">
                  {project.detail.context.title}
                </h2>
                <div className="text-muted-foreground space-y-4 text-lg leading-relaxed">
                  {project.detail.context.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </section>

              {/* Video Demo */}
              {project.video && (
                <section className="space-y-4">
                  <h2 className="text-2xl font-semibold tracking-tight">
                    {t("LiveDemo")}
                  </h2>
                  <div className="border-border/50 bg-muted/30 overflow-hidden rounded-xl border shadow-2xl">
                    {/* biome-ignore lint/a11y/useMediaCaption: screen recording demo without audio */}
                    <video
                      src={project.video}
                      poster={project.videoPoster}
                      controls
                      playsInline
                      preload="none"
                      className="aspect-video w-full object-cover"
                    >
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </section>
              )}

              {/* Decisions and Trade-offs */}
              <section className="space-y-6">
                <h2 className="text-2xl font-semibold tracking-tight">
                  {t("DecisionsAndTradeoffs")}
                </h2>
                <div className="border-border border-t">
                  {project.detail.decisions.map((decision) => (
                    <article
                      key={decision.title}
                      className="border-border grid gap-3 border-b py-6 md:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] md:gap-10"
                    >
                      <h3 className="text-lg font-medium tracking-tight">
                        {decision.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {decision.body}
                      </p>
                    </article>
                  ))}
                </div>
              </section>

              {/* Outcome and Limitations */}
              <section className="grid gap-10 md:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] md:gap-14">
                <div className="space-y-5">
                  <h2 className="text-2xl font-semibold tracking-tight">
                    {project.detail.outcome.title}
                  </h2>
                  <div className="text-muted-foreground space-y-4 text-lg leading-relaxed">
                    {project.detail.outcome.paragraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                </div>

                <div className="border-primary/25 space-y-5 border-l-2 pl-6">
                  <h2 className="text-xl font-semibold tracking-tight">
                    {project.detail.limitations.title}
                  </h2>
                  <ul className="text-muted-foreground space-y-4 leading-relaxed">
                    {project.detail.limitations.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </section>

              {/* Representative Artifacts */}
              {project.detail.artifacts && (
                <section className="space-y-8">
                  <h2 className="text-2xl font-semibold tracking-tight">
                    {project.detail.artifacts.title}
                  </h2>
                  {project.detail.visualDisclaimer && (
                    <p className="text-muted-foreground text-sm italic">
                      {project.detail.visualDisclaimer}
                    </p>
                  )}
                  <div className="grid grid-cols-1 gap-8">
                    {project.detail.artifacts.items.map((artifact) => (
                      <div key={artifact.id} className="space-y-4">
                        <div className="space-y-1">
                          <h3 className="text-lg font-medium tracking-tight">
                            {artifact.title}
                          </h3>
                          <p className="text-muted-foreground text-base">
                            {artifact.description}
                          </p>
                        </div>
                        <div className="relative flex min-h-[250px] w-full items-center justify-center overflow-hidden rounded-xl border border-black/[0.06] dark:border-white/[0.06] bg-[#f5f2eb] dark:bg-[#161616]">
                          <ArtifactPreview id={artifact.id} />
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* Tech Stack */}
              <section className="space-y-4">
                <h2 className="text-2xl font-semibold tracking-tight">
                  {t("TechStack")}
                </h2>
                <div className="flex flex-wrap gap-2">
                  {project.detail.techStack.map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="text-sm font-normal"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </section>

              {relatedWriting && (
                <section className="border-border bg-muted/30 rounded-xl border p-6 md:p-8">
                  <p className="text-muted-foreground mb-2 font-mono text-xs uppercase tracking-wide">
                    {t("RelatedWriting")}
                  </p>
                  <NextLink
                    href={getWritingPath(relatedWriting)}
                    className="group inline-flex items-center gap-2 text-lg font-semibold"
                  >
                    {t("ReadRelatedArticle")}
                    <ArrowUpRight
                      aria-hidden="true"
                      className="h-5 w-5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </NextLink>
                </section>
              )}

              {/* Disclaimer */}
              {project.detail.disclaimer && (
                <section className="border-border/50 border-t pt-8">
                  <p className="text-muted-foreground text-sm italic">
                    {project.detail.disclaimer}
                  </p>
                </section>
              )}
            </div>
          </div>
        </SectionContainer>
      </main>
      <SiteFooter profile={profile} />
    </>
  )
}
