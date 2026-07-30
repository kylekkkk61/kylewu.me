import type { ComponentType } from "react"

export type WritingLocale = "en" | "zh-TW"

export type WritingSource = {
  label: string
  href: string
}

export type WritingEntry = {
  slug: string
  locale: WritingLocale
  title: string
  ogSubtitle: string
  description: string
  category: string
  publishedAt: string
  updatedAt: string
  relatedProjectSlug?: string
  sources?: WritingSource[]
}

type WritingDefinition = {
  entry: WritingEntry
  load: () => Promise<ComponentType>
}

const kaiynTradingSources: WritingSource[] = [
  {
    label: "Kaiyn Trading Bot repository",
    href: "https://github.com/kaiyn-capital/kaiyn-trading-bot",
  },
  {
    label: "Trading Flow",
    href: "https://github.com/kaiyn-capital/kaiyn-trading-bot/blob/main/references/trading_flow.md",
  },
  {
    label: "Production Readiness Record",
    href: "https://github.com/kaiyn-capital/kaiyn-trading-bot/blob/main/references/production_readiness.md",
  },
]

const writingDefinitions: WritingDefinition[] = [
  {
    entry: {
      slug: "confirmation-first-telegram-trading-workflow",
      locale: "en",
      title:
        "How a Confirmation-First Telegram Trading Workflow Reduces Execution Risk",
      ogSubtitle:
        "Turning fast-moving community signals into validated, auditable order flows.",
      description:
        "A product and engineering case study on turning Telegram trading signals into explicit, validated, and auditable order workflows.",
      category: "Product Workflow",
      publishedAt: "2026-07-26",
      updatedAt: "2026-07-30",
      relatedProjectSlug: "kaiyn-trading-bot",
      sources: kaiynTradingSources,
    },
    load: async () =>
      (
        await import(
          "@/content/writing/confirmation-first-telegram-trading-workflow"
        )
      ).ConfirmationFirstTradingWorkflowArticle,
  },
  {
    entry: {
      slug: "confirmation-first-telegram-trading-workflow",
      locale: "zh-TW",
      title: "確認優先的 Telegram 交易流程，如何降低下單風險",
      ogSubtitle:
        "把快速流動的社群交易訊號，轉化為經過驗證、可追溯的下單流程。",
      description:
        "一篇從產品與工程角度出發的案例文章，說明如何將 Telegram 交易訊號轉化為明確、經過驗證且可追溯的下單流程。",
      category: "產品流程設計",
      publishedAt: "2026-07-26",
      updatedAt: "2026-07-30",
      relatedProjectSlug: "kaiyn-trading-bot",
      sources: kaiynTradingSources,
    },
    load: async () =>
      (
        await import(
          "@/content/writing/confirmation-first-telegram-trading-workflow-zh"
        )
      ).ConfirmationFirstTradingWorkflowArticleZh,
  },
  {
    entry: {
      slug: "workflow-automation-human-judgment",
      locale: "en",
      title:
        "AI, Automation, and Standardization: What Still Requires Human Judgment in Product Workflows?",
      ogSubtitle:
        "A practical framework for deciding what systems should execute, prepare, or leave to human judgment.",
      description:
        "A practical framework for deciding which product workflow steps to standardize, automate, or reserve for accountable human judgment.",
      category: "Product Workflow",
      publishedAt: "2026-07-29",
      updatedAt: "2026-07-30",
    },
    load: async () =>
      (await import("@/content/writing/workflow-automation-human-judgment"))
        .WorkflowAutomationHumanJudgmentArticle,
  },
  {
    entry: {
      slug: "workflow-automation-human-judgment",
      locale: "zh-TW",
      title: "AI、自動化與標準化：工作流程中，人還需要做什麼？",
      ogSubtitle:
        "從標準化、自動執行到人工確認，判斷工作流程應該停在哪一條決策邊界。",
      description:
        "從營隊審查、群眾募資與產品實作經驗，整理哪些工作適合標準化、自動化，哪些關鍵判斷仍應由人承擔。",
      category: "產品流程設計",
      publishedAt: "2026-07-29",
      updatedAt: "2026-07-30",
    },
    load: async () =>
      (await import("@/content/writing/workflow-automation-human-judgment-zh"))
        .WorkflowAutomationHumanJudgmentArticleZh,
  },
  {
    entry: {
      slug: "participant-needs-service-design",
      locale: "en",
      title:
        "From Participant Needs to Service Design: Building a Five-Day Business Camp Experience",
      ogSubtitle:
        "How research, constraints, and a live company case shaped a five-day learning experience.",
      description:
        "A service design case study on turning participant research, operational constraints, and a live company challenge into a five-day business camp.",
      category: "Service Design",
      publishedAt: "2026-07-30",
      updatedAt: "2026-07-30",
    },
    load: async () =>
      (await import("@/content/writing/participant-needs-service-design"))
        .ParticipantNeedsServiceDesignArticle,
  },
  {
    entry: {
      slug: "participant-needs-service-design",
      locale: "zh-TW",
      title: "從參與者需求到服務設計：如何打造五天的企管營體驗",
      ogSubtitle:
        "從需求研究、營運限制到真實企業個案，設計一場完整的五天學習體驗。",
      description:
        "一篇服務設計案例文章，記錄如何整合歷屆資料、參與者需求、營運限制與真實企業個案，打造五天的企管營體驗。",
      category: "服務設計",
      publishedAt: "2026-07-30",
      updatedAt: "2026-07-30",
    },
    load: async () =>
      (await import("@/content/writing/participant-needs-service-design-zh"))
        .ParticipantNeedsServiceDesignArticleZh,
  },
]

export const writingEntries = writingDefinitions.map(
  (definition) => definition.entry,
)

export function getWritingEntry(slug: string, locale: string) {
  return writingEntries.find(
    (entry) => entry.slug === slug && entry.locale === locale,
  )
}

export async function loadWritingArticle(slug: string, locale: string) {
  return writingDefinitions
    .find(
      (definition) =>
        definition.entry.slug === slug && definition.entry.locale === locale,
    )
    ?.load()
}

export function getWritingIndexEntries(locale: string) {
  return writingEntries
    .filter((entry) => entry.locale === locale)
    .sort((a, b) => b.publishedAt.localeCompare(a.publishedAt))
}

export function getWritingAlternates(slug: string) {
  return writingEntries
    .filter((entry) => entry.slug === slug)
    .reduce<Partial<Record<WritingLocale, string>>>((alternates, entry) => {
      const prefix = entry.locale === "en" ? "" : `/${entry.locale}`
      alternates[entry.locale] = `${prefix}/writing/${entry.slug}`
      return alternates
    }, {})
}

export function getWritingPath(entry: WritingEntry) {
  const prefix = entry.locale === "en" ? "" : `/${entry.locale}`
  return `${prefix}/writing/${entry.slug}`
}
