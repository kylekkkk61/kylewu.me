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
  items: string[]
}

export type ProjectNarrativeSection = {
  title: string
  paragraphs: string[]
}

export type ProjectDecision = {
  title: string
  body: string
}

export type ProjectArtifact = {
  id: string
  title: string
  description: string
}

export type ProjectDetail = {
  role: string
  context: ProjectNarrativeSection
  decisions: ProjectDecision[]
  outcome: ProjectNarrativeSection
  limitations: ProjectSection
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
    status: "Deployed in Kaiyn Capital operations",
    year: "2026",
    visual: "kaiyn-workflow",
    capabilities: [
      "Signal-to-execution workflow",
      "Risk-aware order validation",
      "Audit-ready backend infrastructure",
    ],
    tags: ["Python", "PostgreSQL", "Docker", "Telegram", "Exchange API"],
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
      {
        label: "Community",
        href: "https://t.me/kaiyncapital",
        type: "external",
      },
    ],
    featured: true,
    relatedWritingSlug: "confirmation-first-telegram-trading-workflow",
    order: 1,
    updatedAt: "2026-07-29",
    video: "https://cv.kylewu.me/kaiyn-demo.mp4",
    videoPoster: "https://cv.kylewu.me/kaiyn-demo-poster.webp",
    detail: {
      role: "Founder of Kaiyn Capital, product owner, and sole developer responsible for product requirements, the Telegram user flow, backend engineering, deployment, and ongoing operations.",
      context: {
        title: "Context and Operating Problem",
        paragraphs: [
          "Kaiyn Capital distributes market commentary and trading signals through Telegram. The operating problem was not simply parsing a message: users still had to verify the instrument, size the position, check exchange rules, and avoid repeated actions under time pressure.",
          "The system was built to close that gap between signal publication and order submission with an explicit confirmation point, consistent risk calculations, persisted state, and an auditable execution path.",
        ],
      },
      decisions: [
        {
          title: "Require confirmation before execution",
          body: "The system creates an inspectable order preview and requires explicit user approval. This gives up some speed, but keeps an irreversible financial action behind a human decision point.",
        },
        {
          title: "Persist workflow state in PostgreSQL",
          body: "Pending orders, signals, and preview sessions resolve from short Telegram tokens to database-backed state. The added schema and migration work provides restart-safe workflows, audit records, and row-level locking against repeated confirmation.",
        },
        {
          title: "Escalate ambiguous exchange results",
          body: "Network timeouts and uncertain responses are not treated as failed orders or retried automatically. Deterministic client order IDs, a manual-review state, and later reconciliation reduce duplicate-order risk at the cost of administrative review.",
        },
      ],
      outcome: {
        title: "Outcome and Evidence",
        paragraphs: [
          "The system is deployed and used in Kaiyn Capital operations. It implements the path from Telegram signals and order previews through fixed-risk sizing, exchange-rule validation, Bitget submission, persisted state, and audit records.",
          "Docker-first CI checks migrations, typing, order-safety rules, and PostgreSQL integration. Deployment, health checks, encrypted offsite backups, and restore procedures are documented as part of the operating system rather than treated as afterthoughts.",
        ],
      },
      limitations: {
        title: "Current Limitations",
        items: [
          "The full post-submission lifecycle of limit orders is not tracked.",
          "Cancellation, expiry synchronization, and automatic take-profit orders remain outside the system boundary.",
          "The project has not undergone large-scale load or trading-volume simulation and does not claim that duplicate orders are impossible or that trading is profitable.",
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
    updatedAt: "2026-07-29",
    detail: {
      role: "Independent researcher and developer responsible for framing the research question, building the private prototype and data workflow, running replay and model experiments, and converting sensitive work into reproducible public artifacts.",
      context: {
        title: "Research Context",
        paragraphs: [
          "Early tick replay suggested that short-horizon prediction markets might contain pricing edge. Live-like execution produced a weaker result once network latency, API response time, stale order books, failed fills, and reversals near settlement were included.",
          "The research question therefore shifted from whether a model could find a price discrepancy to whether that discrepancy could survive the execution funnel and become reliable filled exposure.",
        ],
      },
      decisions: [
        {
          title: "Study the simulation-to-live gap",
          body: "Instead of presenting the strongest early replay result, the project made execution degradation the main research object. This gives up an easier strategy narrative in favor of a question that better reflects real market conditions.",
        },
        {
          title: "Use ML as an execution gate",
          body: "ML is applied after edge detection to decide whether a candidate deserves exposure, with chronological splits used for later-sample checks. This avoids treating an expected-value score as a profitability guarantee.",
        },
        {
          title: "Preserve public reproducibility",
          body: "The public version keeps anonymized, downsampled, and normalized data with simplified diagnostics while excluding wallets, signers, private ledgers, model artifacts, and strategy-sensitive parameters.",
        },
      ],
      outcome: {
        title: "Outcome and Evidence",
        paragraphs: [
          "The public execution sample records 1,000 attempts with 5.8% accepted and filled rates. Across 986 joined market-level observations, market-implied probability was slightly better calibrated than the fair-probability model on both Brier score and log loss.",
          "The sample does not support a stable profitability claim. Its main result is diagnostic: most apparent edge did not become filled exposure, extreme probability buckets were sparse and unstable, and reasonable ML or fill-probability gates could fail on later data or suppress nearly all trade flow.",
        ],
      },
      limitations: {
        title: "Research Limitations",
        items: [
          "Public data is anonymized, downsampled, and normalized and does not represent complete historical performance.",
          "Tick replay and bootstrap simulation are not equivalent to live execution, and full capital, fees, and venue-level fill dynamics are not reconstructed.",
          "Binance is used as a faster reference layer, but the lead-lag assumption has not been tested in a dedicated study.",
        ],
      },
      techStack: ["Python", "Streamlit", "Pandas", "NumPy"],
      disclaimer:
        "This project is presented as a public research and portfolio artifact. It does not represent financial advice, trading advice, or a claim of trading profitability.",
      visualDisclaimer:
        "Illustrative interface values - not live trading performance or empirical research results.",
      artifacts: {
        title: "Representative Artifacts",
        items: [
          {
            id: "pm-lab-funnel",
            title: "Execution Funnel",
            description:
              "Tracing how public-sample attempts move through submission, acceptance, and fill states.",
          },
          {
            id: "pm-lab-calibration",
            title: "Calibration Analysis",
            description:
              "Comparing fair and market-implied probabilities against 986 joined public-sample outcomes.",
          },
          {
            id: "pm-lab-dashboard",
            title: "Research Dashboard",
            description:
              "A public-sample interface for execution, calibration, ML-filter, and risk diagnostics.",
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
    status: "已部署於 Kaiyn Capital 實際營運",
    year: "2026",
    visual: "kaiyn-workflow",
    capabilities: [
      "從訊號到執行的工作流程",
      "納入風險控管的訂單驗證",
      "可供稽核的後端架構",
    ],
    tags: ["Python", "PostgreSQL", "Docker", "Telegram", "Exchange API"],
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
      {
        label: "Kaiyn Capital 社群",
        href: "https://t.me/kaiyncapital",
        type: "external",
      },
    ],
    featured: true,
    relatedWritingSlug: "confirmation-first-telegram-trading-workflow",
    order: 1,
    updatedAt: "2026-07-29",
    video: "https://cv.kylewu.me/kaiyn-demo.mp4",
    videoPoster: "https://cv.kylewu.me/kaiyn-demo-poster.webp",
    detail: {
      role: "Kaiyn Capital 創辦人、產品負責人與獨立開發者，完整負責產品需求、Telegram 使用流程、後端開發、部署與後續營運。",
      context: {
        title: "背景與實際營運問題",
        paragraphs: [
          "Kaiyn Capital 透過 Telegram 發布市場觀點與交易訊號。實際問題不只是如何解析訊息，使用者仍必須在時間壓力下核對交易標的、計算部位、確認交易所規則，並避免重複操作。",
          "這套系統以明確的下單前確認、固定風險計算、狀態保存與稽核流程，銜接訊號發布與實際送單之間原本容易出錯的環節。",
        ],
      },
      decisions: [
        {
          title: "要求使用者在送單前確認",
          body: "系統先建立可核對的訂單預覽，再由使用者明確確認。這犧牲部分速度，但將不可逆的金融操作保留在人類決策點，也讓錯誤能在送單前被發現。",
        },
        {
          title: "將工作流程狀態保存於 PostgreSQL",
          body: "待處理訂單、訊號與預覽工作階段透過短 token 連回資料庫狀態。額外的資料結構與資料庫遷移成本，換來重啟後可恢復的流程、清楚的稽核紀錄，以及以資料列鎖定控制重複確認的能力。",
        },
        {
          title: "不確定的交易所結果交由人工覆核",
          body: "網路逾時或回應不明時，系統不直接視為失敗，也不自動重送。依固定規則產生的 client order ID、人工覆核狀態與後續查單能降低重複送單風險，代價是部分情況必須由管理員核對。",
        },
      ],
      outcome: {
        title: "成果與驗證證據",
        paragraphs: [
          "系統已部署並用於 Kaiyn Capital 的實際營運，涵蓋 Telegram 訊號、訂單預覽、固定風險部位計算、交易所規則驗證、Bitget 送單、狀態保存與稽核紀錄。",
          "Docker-first CI 會檢查資料庫遷移、型別、訂單安全規則與 PostgreSQL 整合流程；部署、健康檢查、加密異地備份與還原程序也納入正式營運設計。",
        ],
      },
      limitations: {
        title: "目前限制",
        items: [
          "目前不追蹤限價單送出後的完整成交生命週期。",
          "掛單取消、過期同步與自動止盈仍不在系統責任範圍內。",
          "專案尚未進行大量壓測或交易量模擬，也不宣稱能完全避免重複訂單或保證交易獲利。",
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
    updatedAt: "2026-07-29",
    detail: {
      role: "獨立研究者與獨立開發者，負責定義研究問題、建立私有原型與資料流程、執行歷史回放與模型實驗，並將敏感研究轉化為可公開重現的成果。",
      context: {
        title: "研究背景",
        paragraphs: [
          "早期逐筆報價回放顯示短週期預測市場可能存在定價優勢，但進入近似實盤的執行後，網路延遲、API 回應時間、過期委託簿、未成交與結算前反轉都讓結果明顯轉弱。",
          "研究問題因此從「模型能否找到價格差」轉為「價格差能否通過完整執行漏斗，形成可靠的實際曝險」。",
        ],
      },
      decisions: [
        {
          title: "研究模擬與實際執行的落差",
          body: "專案沒有選擇呈現早期較漂亮的歷史回放結果，而是把執行過程中的衰減當成主要研究對象。這放棄較容易宣傳的策略敘事，換來更接近真實市場條件的問題。",
        },
        {
          title: "將機器學習定位為執行篩選機制",
          body: "模型只在偵測到潛在優勢後，判斷候選訊號是否值得進一步執行，並使用時間順序切分檢查後段樣本。這能避免把預期價值分數誤當成獲利保證。",
        },
        {
          title: "優先保留可公開重現性",
          body: "公開版本只保留匿名、降採樣與標準化的資料及簡化診斷流程，並排除錢包、簽署工具、私有帳本、模型產物與策略敏感參數。",
        },
      ],
      outcome: {
        title: "研究結果與證據",
        paragraphs: [
          "公開執行樣本包含 1,000 次嘗試，訂單接受率與成交率皆為 5.8%。在 986 筆可對齊的市場層級觀察中，市場隱含機率的 Brier 分數與對數損失均略優於合理機率模型。",
          "公開樣本不支持穩定獲利的宣稱。主要結果在於，多數表面定價優勢沒有形成實際成交曝險；極端機率區間樣本較少且不穩定，合理的機器學習或成交機率篩選也可能在後段資料失效，或壓縮幾乎所有交易流量。",
        ],
      },
      limitations: {
        title: "研究限制",
        items: [
          "公開資料經過匿名、降採樣與標準化，不能代表完整歷史績效。",
          "逐筆報價回放與 bootstrap 模擬不等同實際交易，也未重建完整資金、手續費與交易場所層級的成交動態。",
          "研究以 Binance 作為較快的參考價格來源，但尚未完成專門的領先與落後關係驗證。",
        ],
      },
      techStack: ["Python", "Streamlit", "Pandas", "NumPy"],
      disclaimer:
        "本專案僅作為公開研究與作品展示，不構成財務或交易建議，也不宣稱具有交易獲利能力。",
      visualDisclaimer: "介面數值僅供示意，不代表實際交易績效或研究樣本結果。",
      artifacts: {
        title: "代表性產出",
        items: [
          {
            id: "pm-lab-funnel",
            title: "執行漏斗分析",
            description: "追蹤公開樣本從送單、接受到實際成交的各階段狀態。",
          },
          {
            id: "pm-lab-calibration",
            title: "機率校準分析",
            description:
              "以 986 筆可對齊的公開樣本結果，比較合理機率與市場隱含機率。",
          },
          {
            id: "pm-lab-dashboard",
            title: "研究儀表板",
            description: "集中呈現公開樣本的執行、校準、模型篩選與風險診斷。",
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
