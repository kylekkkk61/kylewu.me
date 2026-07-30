export type ResumeEntry = {
  title: string
  role: string
  period: string
  bullets: string[]
  link?: {
    href: string
    label: string
  }
}

export type ResumeEducation = {
  school: string
  degree: string
  period?: string
  detail?: string
}

export type ResumeData = {
  education: ResumeEducation[]
  selectedWork: ResumeEntry[]
  experience: ResumeEntry[]
  leadership: ResumeEntry[]
  skills: {
    technical: string
    analytics: string
    businessProduct: string
    languages: string
  }
}

const resumeEn: ResumeData = {
  education: [
    {
      school: "Warwick Business School",
      degree: "MSc Financial Technology, Incoming (25% Scholarship)",
      period: "Expected Sep 2026 - Sep 2027",
    },
    {
      school: "National Cheng Kung University (NCKU), Taiwan",
      degree: "B.B.A., Business Administration",
      period: "Sep 2020 - Jun 2024",
      detail: "GPA: 3.62 / 4.3",
    },
    {
      school: "University of Innsbruck, Austria",
      degree: "Exchange, International Business and Economics",
      period: "Winter Semester 2023/24",
    },
  ],
  selectedWork: [
    {
      title: "Kaiyn Capital",
      role: "Founder & Market Analyst",
      period: "Aug 2023 - Present",
      bullets: [
        "Built and operated a Mandarin-language digital asset research community with 3,000+ members, covering market structure, trading playbooks, position sizing, and downside-risk control.",
        "Scaled a paid private cohort to 150 subscribers at peak in 2024 Q2, sustaining a 40% monthly active member rate across community channels.",
        "Produced market analysis and risk-education content reaching 100,000+ users; developed 5+ TradingView tools and established 11 crypto-exchange referral partnerships contributing to USD 100M+ in cumulative referred trading volume.",
      ],
    },
    {
      title: "Kaiyn Trading Bot",
      role: "Product & Backend Project",
      period: "2026",
      bullets: [
        "Launched an open-source Telegram trading signal and execution workflow supporting 10+ daily signals in a private Kaiyn community.",
        "Built fixed-risk order confirmation, exchange-rule validation, encrypted credential storage, audit trails, and backup / restore workflows using Python, PostgreSQL, Docker Compose, and automated tests.",
      ],
    },
    {
      title: "Prediction Market Execution Lab",
      role: "Independent FinTech Research Project",
      period: "2026",
      bullets: [
        "Built a public research lab and Streamlit dashboard testing whether short-horizon Polymarket BTC pricing edges survive spread, failed fills, latency, quote staleness, risk limits, and settlement outcomes.",
        "Developed reproducible Python notebooks, public-safe sample datasets, and report figures showing that practical feasibility depends on execution quality rather than price signals alone.",
      ],
    },
    {
      title: "Prinsur",
      role: "Co-founder, InsurTech Product Strategy (Non-operating / Advisory)",
      period: "Sep 2025 - Present",
      bullets: [
        "Conducted market research and competitive analysis; supported product strategy, business-model design, GTM planning, pricing assumptions, and early validation discussions with Taiwanese insurance distribution partners.",
        "Produced pitch decks, product mockups, and funding materials; assessed regulatory and brokerage-licence constraints that informed a pivot towards a B2B adviser workflow.",
      ],
    },
  ],
  experience: [
    {
      title: "QIANG ZHUANG CO., LTD.",
      role: "Digital Marketing & Product Development Intern",
      period: "Jul 2023 - Aug 2023",
      bullets: [
        "Supported digital marketing and product communication for CAVE™ grill, a zeczec crowdfunding campaign that raised NT$4.4M+ from 551 backers and reached 2,218% of its funding target.",
        "Analysed Meta Ads and Google Analytics data across 2 performance channels to evaluate traffic quality, audience behaviour, and campaign conversion issues.",
      ],
    },
    {
      title: "Laurel Enterprises Corporation",
      role: "Social Media Marketing & E-commerce Intern",
      period: "Jul 2021 - Aug 2021",
      bullets: [
        "Coordinated KOL outreach and Shopee / Shopline storefront operations; analysed Google Analytics and advertising data to refine targeting, contributing to TWD 100,000+ revenue over a two-month internship.",
      ],
    },
  ],
  leadership: [
    {
      title: "NCKU Business Administration Pre-college Camp",
      role: "General Coordinator",
      period: "Jan 2022 - Feb 2023",
      bullets: [
        "Led a 60-person team to deliver a 5-day residential business programme for 120 participants, generating approximately TWD 800,000 in revenue and over TWD 200,000 in net profit.",
        "Owned workstream design, budget control, recruitment marketing, vendor and venue coordination, and on-site issue handling across seven teams.",
      ],
      link: {
        href: "/writing/participant-needs-service-design",
        label: "Read the service design case study",
      },
    },
  ],
  skills: {
    technical:
      "Python, pandas, Excel, PostgreSQL, Docker Compose, GitHub Actions, pytest, mypy, Ruff, Alembic, TradingView / Pine Script",
    analytics:
      "Market microstructure analysis, execution-quality analysis, digital asset research, Google Analytics",
    businessProduct:
      "Project execution, cross-functional coordination, FinTech product strategy, workflow design, go-to-market research, business model design",
    languages:
      "Mandarin, Hokkien, English (IELTS Academic 7.0), Spanish (basic)",
  },
}

const resumeZh: ResumeData = {
  education: [
    {
      school: "華威商學院（Warwick Business School）",
      degree: "金融科技理學碩士（即將入學，25% 獎學金）",
      period: "預計 2026 年 9 月至 2027 年 9 月",
    },
    {
      school: "國立成功大學",
      degree: "企業管理學系學士",
      period: "2020 年 9 月至 2024 年 6 月",
      detail: "GPA：3.62 / 4.3",
    },
    {
      school: "奧地利因斯布魯克大學",
      degree: "國際商務與經濟學交換學生",
      period: "2023/24 冬季學期",
    },
  ],
  selectedWork: [
    {
      title: "Kaiyn Capital",
      role: "創辦人暨市場分析師",
      period: "2023 年 8 月至今",
      bullets: [
        "建立並營運擁有 3,000+ 名成員的中文數位資產研究社群，內容涵蓋市場結構、交易策略、部位管理與下檔風險控管。",
        "付費私人社群於 2024 年第二季高峰達 150 名訂閱會員，跨社群頻道的月活躍會員比例維持 40%。",
        "產製觸及 100,000+ 名使用者的市場分析與風險教育內容；開發 5+ 個 TradingView 工具，並與 11 家加密貨幣交易所建立推薦合作，累計推薦交易量達 USD 100M+。",
      ],
    },
    {
      title: "Kaiyn Trading Bot",
      role: "產品與後端專案",
      period: "2026",
      bullets: [
        "為 Kaiyn 私人社群推出開源的 Telegram 交易訊號與執行工作流程，每日支援超過 10 則交易訊號。",
        "使用 Python、PostgreSQL、Docker Compose 與自動化測試，建置固定風險下單確認、交易所規則驗證、加密憑證儲存、稽核軌跡，以及備份與還原流程。",
      ],
    },
    {
      title: "Prediction Market Execution Lab",
      role: "獨立金融科技研究專案",
      period: "2026",
      bullets: [
        "建立公開研究專案與 Streamlit 儀表板，檢驗 Polymarket BTC 短週期定價優勢能否在買賣價差、未成交、延遲、報價過時、風險限制與結算結果等條件下成立。",
        "建立可重現的 Python Notebook、可安全公開的樣本資料集與研究圖表，呈現實務可行性取決於執行品質，而非僅由價格訊號決定。",
      ],
    },
    {
      title: "Prinsur",
      role: "共同創辦人｜InsurTech 產品策略（非營運／顧問角色）",
      period: "2025 年 9 月至今",
      bullets: [
        "進行市場研究與競爭分析，支援產品策略、商業模式設計、市場進入規劃、定價假設，以及與台灣保險通路合作夥伴的早期驗證討論。",
        "製作募資簡報、產品原型與資金申請資料；評估法規與保險經紀業執照限制，作為產品轉向 B2B 顧問工作流程的依據。",
      ],
    },
  ],
  experience: [
    {
      title: "強壯有限公司",
      role: "數位行銷與產品開發實習生",
      period: "2023 年 7 月至 2023 年 8 月",
      bullets: [
        "協助 CAVE™ 烤爐的數位行銷與產品溝通；該 zeczec 群眾募資專案募得超過新台幣 440 萬元，獲得 551 名贊助者，達成率為 2,218%。",
        "分析 Meta Ads 與 Google Analytics 資料，評估流量品質、受眾行為與轉換問題。",
      ],
    },
    {
      title: "桂冠實業股份有限公司",
      role: "社群行銷與電子商務實習生",
      period: "2021 年 7 月至 2021 年 8 月",
      bullets: [
        "負責 KOL 聯繫及 Shopee／SHOPLINE 商店營運；分析 Google Analytics 與廣告資料以優化受眾設定，兩個月實習期間協助創造超過新台幣 10 萬元營收。",
      ],
    },
  ],
  leadership: [
    {
      title: "成功大學企管營",
      role: "總召集人",
      period: "2022 年 1 月至 2023 年 2 月",
      bullets: [
        "帶領 60 人團隊，為 120 名學員舉辦為期 5 天的住宿型商管營隊，創造約新台幣 80 萬元營收與超過新台幣 20 萬元淨利。",
        "統籌七個團隊的工作流程設計、預算控管、招生行銷、供應商與場地協調，以及現場問題處理。",
      ],
      link: {
        href: "/writing/participant-needs-service-design",
        label: "閱讀服務設計案例",
      },
    },
  ],
  skills: {
    technical:
      "Python、pandas、Excel、PostgreSQL、Docker Compose、GitHub Actions、pytest、mypy、Ruff、Alembic、TradingView／Pine Script",
    analytics: "市場微結構分析、執行品質分析、數位資產研究、Google Analytics",
    businessProduct:
      "專案執行、跨職能協作、金融科技產品策略、工作流程設計、市場進入策略研究、商業模式設計",
    languages: "華語、台語、英文（IELTS Academic 7.0）、西班牙文（基礎）",
  },
}

export function getResume(locale: string): ResumeData {
  return locale === "zh-TW" ? resumeZh : resumeEn
}
