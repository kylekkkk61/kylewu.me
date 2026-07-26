export type ProjectLink = {
  label: string
  href: string
  type:
    | "github"
    | "demo"
    | "dashboard"
    | "case-study"
    | "external"
    | "landing-page"
    | "video"
    | "internal"
}

export type ProjectVisualType = "kaiyn-workflow" | "pm-lab-research" | "default"

export type ProjectSection = {
  title: string
  body?: string
  items?: string[]
}

export type ProjectArtifact = {
  id: string
  title: string
  description: string
}

export type ProjectDetail = {
  whyItMatters?: {
    title: string
    body: string
  }
  communityContext?: {
    title: string
    paragraphs: string[]
    links?: { label: string; href: string }[]
  }
  context: ProjectSection
  whatIBuilt: ProjectSection
  process: ProjectSection
  demonstrates: ProjectSection
  techStack: string[]
  disclaimer?: string
  visualDisclaimer?: string
  artifacts?: {
    title: string
    items: ProjectArtifact[]
  }
}

export type Project = {
  slug: string
  title: string
  subtitle: string
  ogSubtitle?: string
  shortDescription: string
  description: string
  category: string
  status?: string
  year?: string
  capabilities: string[]
  highlights: string[]
  tags: string[]
  links: ProjectLink[]
  visual: ProjectVisualType
  featured?: boolean
  image?: string
  video?: string
  videoPoster?: string
  relatedWritingSlug?: string
  order?: number
  updatedAt?: string
  detail: ProjectDetail
}

const projectsEn: Project[] = [
  {
    slug: "kaiyn-trading-bot",
    title: "Kaiyn Trading Bot",
    subtitle:
      "Structured trading workflow system for community-based market operations.",
    ogSubtitle:
      "Confirmation-first workflows for community-based market operations.",
    shortDescription:
      "A Telegram-based workflow system that turns informal community trading signals into structured signal creation, chart updates, risk checks, and confirmation-first execution flows.",
    description:
      "A Telegram-based execution workflow for crypto trading communities, designed around confirmation-first order flow, fixed-risk sizing, exchange-rule validation, encrypted API credentials, PostgreSQL-backed state, audit records, and Docker-first deployment.",
    category: "Trading Infrastructure",
    status: "Public GitHub project",
    year: "2026",
    visual: "kaiyn-workflow",
    capabilities: [
      "Signal-to-execution workflow",
      "Risk-aware order validation",
      "Audit-ready backend infrastructure",
    ],
    tags: ["Python", "PostgreSQL", "Docker", "Telegram", "Exchange API"],
    highlights: [
      "Transforms Telegram trading signals into a structured execution workflow.",
      "Uses confirmation-first execution and fixed 1R risk sizing.",
      "Includes encrypted API credential storage, audit trails, backups, and CI checks.",
      "Designed as a production-style workflow rather than a profit-guaranteeing trading bot.",
    ],
    links: [
      {
        label: "Landing Page",
        href: "https://kaiyn.kylewu.me/",
        type: "landing-page",
      },
      {
        label: "GitHub",
        href: "https://github.com/kaiyn-capital/kaiyn-trading-bot",
        type: "github",
      },
    ],
    featured: true,
    relatedWritingSlug: "confirmation-first-telegram-trading-workflow",
    order: 1,
    updatedAt: "2026-07-26",
    video: "https://cv.kylewu.me/kaiyn-demo.mp4",
    videoPoster: "https://cv.kylewu.me/kaiyn-demo-poster.webp",
    detail: {
      whyItMatters: {
        title: "Why It Matters",
        body: "This project shows how trading-community workflows can be converted into safer, auditable, confirmation-first execution systems.",
      },
      communityContext: {
        title: "Community Context",
        paragraphs: [
          "Kaiyn Trading Bot came from a real operating problem inside Kaiyn Capital, a crypto trading community that I founded and have operated for around three years.",
          "In a Telegram-based trading community, market commentary, trading signals, chart updates, and risk discussions often move quickly. That speed is useful, but it also creates friction: users need to interpret signals, manage risk, confirm order details, and avoid execution mistakes under time pressure.",
          "This project was built to make that workflow more structured. Instead of treating trading signals as plain text messages, the bot turns them into a confirmation-first execution process with validation, fixed-risk sizing, and clearer audit records.",
        ],
        links: [
          {
            label: "Kaiyn Capital Telegram",
            href: "https://t.me/kaiyncapital",
          },
        ],
      },
      context: {
        title: "Context",
        body: "Crypto trading communities often distribute signals through Telegram, but manual execution introduces friction, inconsistent sizing, repeated actions, and unclear confirmation flow.",
      },
      whatIBuilt: {
        title: "What I Built",
        body: "I built a structured execution workflow that connects Telegram-based signal delivery with confirmation-first trading operations, exchange-rule validation, risk sizing, and backend audit records.",
      },
      process: {
        title: "Workflow",
        items: [
          "Signal parsing",
          "User confirmation",
          "Fixed-risk sizing",
          "Exchange contract validation",
          "Order preparation",
          "Execution",
          "Audit trail",
        ],
      },
      demonstrates: {
        title: "What This Demonstrates",
        items: [
          "Translating community workflow problems into software systems",
          "Designing risk-aware trading infrastructure",
          "Building backend workflows with state, validation, and auditability",
          "Thinking beyond scripts toward production-style operations",
        ],
      },
      techStack: [
        "Python",
        "Telegram",
        "PostgreSQL",
        "SQLAlchemy",
        "Docker",
        "GitHub Actions",
      ],
      disclaimer:
        "This project is presented as an engineering and workflow-design portfolio project. It does not represent financial advice or a claim of trading profitability.",
      artifacts: {
        title: "Representative Artifacts",
        items: [
          {
            id: "kaiyn-signal",
            title: "Signal Workflow",
            description:
              "Parsing unstructured Telegram messages into strict, validated JSON payloads.",
          },
          {
            id: "kaiyn-confirmation",
            title: "Confirmation-First Flow",
            description:
              "Interactive Telegram UI requiring explicit user approval before execution.",
          },
          {
            id: "kaiyn-audit",
            title: "Backend Audit Pipeline",
            description:
              "PostgreSQL-backed state tracking designed to reduce duplicate submissions through idempotency controls and explicit execution states.",
          },
        ],
      },
    },
  },
  {
    slug: "prediction-market-execution-lab",
    title: "Prediction Market Execution Lab",
    subtitle:
      "Testing whether apparent pricing edge survives real execution frictions.",
    ogSubtitle:
      "Testing executable edge after spread, fills, latency, and settlement.",
    shortDescription:
      "A public research lab testing whether apparent short-horizon prediction-market pricing edge survives spread, failed fills, latency, risk limits, and settlement frictions.",
    description:
      "A public fintech and market microstructure research lab studying whether apparent short-horizon prediction-market pricing edge can survive real execution frictions such as spread, fill probability, latency, position limits, and settlement outcomes.",
    category: "Market Microstructure Research",
    status: "Public research lab",
    year: "2026",
    visual: "pm-lab-research",
    capabilities: [
      "Execution-quality analysis",
      "Probability calibration",
      "Public-safe research dashboard",
    ],
    tags: ["Python", "Streamlit", "Polymarket", "Research", "Data Analysis"],
    highlights: [
      "Separates theoretical pricing edge from executable edge.",
      "Includes public-safe sample data, research reports, notebooks, and a live dashboard.",
      "Analyzes execution funnel, probability calibration, ML filtering, and risk simulation.",
      "Explicitly avoids profitability claims and private execution-sensitive details.",
    ],
    links: [
      {
        label: "Portfolio Page",
        href: "https://pm-lab.kylewu.me/",
        type: "case-study",
      },
      {
        label: "Dashboard",
        href: "https://prediction-market-execution-lab-4byaayq2atzengbe26nkfb.streamlit.app/",
        type: "dashboard",
      },
      {
        label: "GitHub",
        href: "https://github.com/kylekkkk61/prediction-market-execution-lab",
        type: "github",
      },
    ],
    featured: true,
    order: 2,
    updatedAt: "2026-07-23",
    detail: {
      whyItMatters: {
        title: "Why It Matters",
        body: "This project separates apparent market edge from executable edge, which is closer to how real trading and execution research should be evaluated.",
      },
      context: {
        title: "Context",
        body: "Short-horizon prediction markets may show apparent pricing edge, but apparent edge is not the same as executable edge.",
      },
      whatIBuilt: {
        title: "What I Built",
        body: "I built a public research lab with sample data, notebooks, reports, dashboard, execution diagnostics, calibration analysis, ML filtering, and risk simulation.",
      },
      process: {
        title: "Research Workflow",
        items: [
          "Market data sample",
          "Signal construction",
          "Execution funnel",
          "Fill diagnostics",
          "Calibration analysis",
          "Risk simulation",
          "Public-safe reporting",
        ],
      },
      demonstrates: {
        title: "What This Demonstrates",
        items: [
          "Market microstructure reasoning",
          "Data analysis and research communication",
          "Separating theoretical signal from executable outcome",
          "Building public-safe research artifacts without exposing sensitive execution data",
        ],
      },
      techStack: ["Python", "Streamlit", "Pandas", "NumPy"],
      disclaimer:
        "This project is presented as a public research and portfolio artifact. It does not represent financial advice, trading advice, or a claim of trading profitability.",
      visualDisclaimer:
        "Illustrative interface values — not live trading performance or empirical research results.",
      artifacts: {
        title: "Representative Artifacts",
        items: [
          {
            id: "pm-lab-funnel",
            title: "Execution Funnel",
            description:
              "Visualizing the degradation of theoretical edge into executable edge due to frictions.",
          },
          {
            id: "pm-lab-calibration",
            title: "Calibration Simulation",
            description:
              "Modeling probability accuracy and risk exposure across varied market conditions.",
          },
          {
            id: "pm-lab-dashboard",
            title: "Research Dashboard",
            description:
              "Abstract view of market depth, liquidity metrics, and execution diagnostics.",
          },
        ],
      },
    },
  },
]

const projectsZh: Project[] = [
  {
    slug: "kaiyn-trading-bot",
    title: "Kaiyn Trading Bot",
    subtitle: "為交易社群營運設計的結構化交易工作流程系統。",
    ogSubtitle: "將社群交易訊號轉化為下單前確認並納入風險控管的執行流程。",
    shortDescription:
      "一套以 Telegram 為介面的交易流程系統，將社群中的非正式交易訊號整理為結構化的訊號建立、圖表更新、風險檢查與下單前確認流程。",
    description:
      "一套為加密貨幣交易社群設計的 Telegram 執行流程，涵蓋下單前確認、固定風險部位計算、交易所規則驗證、API 憑證加密、PostgreSQL 狀態管理、稽核紀錄，以及以 Docker 為核心的部署方式。",
    category: "交易系統與基礎設施",
    status: "公開 GitHub 專案",
    year: "2026",
    visual: "kaiyn-workflow",
    capabilities: [
      "從訊號到執行的工作流程",
      "納入風險控管的訂單驗證",
      "可供稽核的後端架構",
    ],
    tags: ["Python", "PostgreSQL", "Docker", "Telegram", "Exchange API"],
    highlights: [
      "將 Telegram 交易訊號轉換為結構化的執行流程。",
      "採用下單前確認機制與固定 1R 風險部位計算。",
      "內建加密 API 憑證儲存、稽核紀錄、資料庫備份與 CI 檢查流程。",
      "以接近正式營運環境的方式設計，而非宣稱能保證獲利的自動交易機器人。",
    ],
    links: [
      {
        label: "專案首頁",
        href: "https://kaiyn.kylewu.me/",
        type: "landing-page",
      },
      {
        label: "GitHub",
        href: "https://github.com/kaiyn-capital/kaiyn-trading-bot",
        type: "github",
      },
    ],
    featured: true,
    relatedWritingSlug: "confirmation-first-telegram-trading-workflow",
    order: 1,
    updatedAt: "2026-07-26",
    video: "https://cv.kylewu.me/kaiyn-demo.mp4",
    videoPoster: "https://cv.kylewu.me/kaiyn-demo-poster.webp",
    detail: {
      whyItMatters: {
        title: "專案價值",
        body: "本專案呈現如何將原本仰賴人工處理的交易社群流程，轉化為更安全、可供稽核且採下單前確認的執行系統。",
      },
      communityContext: {
        title: "社群背景與痛點",
        paragraphs: [
          "Kaiyn Trading Bot 源自我創立並營運近三年的加密貨幣交易社群 Kaiyn Capital 內部的實際營運問題。",
          "在 Telegram 交易社群中，市場觀點、交易訊號、圖表更新與風險討論往往快速流動。即時性雖有價值，卻也增加操作負擔：使用者必須在時間壓力下解讀訊號、管理風險、確認訂單內容並避免下單錯誤。",
          "此專案將純文字交易訊號轉化為包含資料驗證、固定風險部位計算、下單前確認與清楚稽核紀錄的結構化流程。",
        ],
        links: [
          {
            label: "Kaiyn Capital Telegram",
            href: "https://t.me/kaiyncapital",
          },
        ],
      },
      context: {
        title: "背景與挑戰",
        body: "加密貨幣交易社群經常透過 Telegram 發送訊號，但手動執行容易造成操作負擔、部位大小不一致、重複操作與確認流程不清。",
      },
      whatIBuilt: {
        title: "解決方案",
        body: "我建立一套結構化執行流程，串連 Telegram 訊號、下單前確認、交易所規則驗證、風險部位計算與後端稽核紀錄。",
      },
      process: {
        title: "工作流程",
        items: [
          "訊號解析",
          "使用者確認",
          "固定風險部位計算",
          "交易所合約規則驗證",
          "訂單準備",
          "訂單執行",
          "稽核追蹤",
        ],
      },
      demonstrates: {
        title: "核心能力展現",
        items: [
          "將社群工作流程的問題轉化為軟體系統設計",
          "設計納入風險控管的交易系統",
          "建構具備狀態管理、驗證與稽核能力的後端工作流程",
          "從單一腳本延伸至接近正式營運環境的流程",
        ],
      },
      techStack: [
        "Python",
        "Telegram",
        "PostgreSQL",
        "SQLAlchemy",
        "Docker",
        "GitHub Actions",
      ],
      disclaimer:
        "本專案僅作為工程與工作流程設計作品展示，不構成財務建議，也不宣稱具有交易獲利能力。",
      artifacts: {
        title: "代表性產出",
        items: [
          {
            id: "kaiyn-signal",
            title: "訊號解析流程",
            description:
              "將非結構化 Telegram 訊息解析為符合明確規則並通過驗證的 JSON 資料。",
          },
          {
            id: "kaiyn-confirmation",
            title: "確認優先流程",
            description: "透過 Telegram 互動介面，要求使用者在執行前明確確認。",
          },
          {
            id: "kaiyn-audit",
            title: "後端稽核流程",
            description:
              "以 PostgreSQL 為基礎的狀態追蹤，透過冪等性控制與明確的執行狀態降低重複送單風險。",
          },
        ],
      },
    },
  },
  {
    slug: "prediction-market-execution-lab",
    title: "Prediction Market Execution Lab",
    subtitle: "檢驗看似存在的定價優勢，能否在實際交易成本與執行限制下成立。",
    ogSubtitle:
      "檢驗理論定價優勢在計入價差、成交、延遲與結算條件後是否仍可執行。",
    shortDescription:
      "一項公開研究專案，檢驗預測市場中的短期定價優勢，能否在計入買賣價差、未成交、延遲、風險限制與結算條件後仍然成立。",
    description:
      "一項公開的金融科技與市場微結構研究專案，探討預測市場中的短期定價優勢，能否在買賣價差、成交機率、延遲、部位限制與結算結果等實際條件下成立。",
    category: "市場微結構研究",
    status: "公開研究專案",
    year: "2026",
    visual: "pm-lab-research",
    capabilities: ["執行品質分析", "機率校準", "可公開使用的研究儀表板"],
    tags: ["Python", "Streamlit", "Polymarket", "Research", "Data Analysis"],
    highlights: [
      "區分理論定價優勢與實際可執行的優勢。",
      "提供可公開使用的樣本資料、研究報告、Python Notebook 與互動式儀表板。",
      "分析執行漏斗、機率校準、機器學習篩選與風險模擬。",
      "明確不宣稱獲利能力，亦不公開敏感的交易執行資料。",
    ],
    links: [
      {
        label: "專案介紹",
        href: "https://pm-lab.kylewu.me/",
        type: "case-study",
      },
      {
        label: "互動式儀表板",
        href: "https://prediction-market-execution-lab-4byaayq2atzengbe26nkfb.streamlit.app/",
        type: "dashboard",
      },
      {
        label: "GitHub",
        href: "https://github.com/kylekkkk61/prediction-market-execution-lab",
        type: "github",
      },
    ],
    featured: true,
    order: 2,
    updatedAt: "2026-07-23",
    detail: {
      whyItMatters: {
        title: "專案價值",
        body: "本專案區分表面定價優勢與可實際執行的優勢，這種區分更符合真實交易與執行研究的評估方式。",
      },
      context: {
        title: "背景與挑戰",
        body: "短週期預測市場可能呈現表面上的定價優勢，但這不代表該優勢能夠實際執行並成交。",
      },
      whatIBuilt: {
        title: "解決方案",
        body: "我建立一套公開研究專案，包含樣本資料、Python Notebook、分析報告、互動式儀表板、執行診斷、機率校準、機器學習篩選與風險模擬。",
      },
      process: {
        title: "研究工作流程",
        items: [
          "市場資料抽樣",
          "訊號建構",
          "執行漏斗分析",
          "成交診斷",
          "機率校準分析",
          "風險模擬",
          "產出可公開分享的研究報告",
        ],
      },
      demonstrates: {
        title: "核心能力展現",
        items: [
          "市場微結構分析與推理",
          "資料分析與研究結果溝通",
          "區分理論訊號與實際執行結果",
          "在不公開敏感執行資料的前提下，產出適合公開分享的研究成果",
        ],
      },
      techStack: ["Python", "Streamlit", "Pandas", "NumPy"],
      disclaimer:
        "本專案僅作為公開研究與作品展示，不構成財務或交易建議，也不宣稱具有交易獲利能力。",
      visualDisclaimer: "介面數值僅供示意，不代表實際交易績效或實證研究結果。",
      artifacts: {
        title: "代表性產出",
        items: [
          {
            id: "pm-lab-funnel",
            title: "執行漏斗分析",
            description:
              "呈現理論定價優勢如何因市場摩擦而逐步衰減為可執行優勢。",
          },
          {
            id: "pm-lab-calibration",
            title: "機率校準模擬",
            description: "模擬不同市場條件下的機率準確度與風險曝險。",
          },
          {
            id: "pm-lab-dashboard",
            title: "研究儀表板",
            description: "以概覽方式呈現市場深度、流動性指標與執行診斷。",
          },
        ],
      },
    },
  },
]

export function getProjects(locale: string): Project[] {
  return locale === "zh-TW" ? projectsZh : projectsEn
}

export const projects = projectsEn
