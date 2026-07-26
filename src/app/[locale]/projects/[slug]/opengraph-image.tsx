import { createOgImage, ogImageSize } from "@/components/seo/og-card"
import { getProjects, projects } from "@/data/projects"
import { routing } from "@/i18n/routing"

export const alt = "Kyle Wu selected project"
export const size = ogImageSize
export const contentType = "image/png"

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    projects.map(({ slug }) => ({ locale, slug })),
  )
}

export default async function OpenGraphImage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>
}) {
  const { locale, slug } = await params
  const project = getProjects(locale).find((item) => item.slug === slug)

  if (!project) {
    return createOgImage({
      locale,
      eyebrow: locale === "zh-TW" ? "精選專案" : "Selected Project",
      title: "Kyle Wu",
      subtitle: locale === "zh-TW" ? "專案不存在" : "Project not found",
    })
  }

  const label = locale === "zh-TW" ? "精選專案" : "Selected Project"

  return createOgImage({
    locale,
    eyebrow: `${label} · ${project.category}`,
    title: project.title,
    subtitle: project.ogSubtitle ?? project.subtitle,
    footer: `Kyle Wu · ${project.year ?? "2026"}`,
    accent: project.slug === "kaiyn-trading-bot" ? "#7ec7d8" : "#8da2ff",
    layout: "project",
    projectVisual:
      project.visual === "kaiyn-workflow"
        ? "kaiyn-workflow"
        : project.visual === "pm-lab-research"
          ? "pm-lab-research"
          : undefined,
  })
}
