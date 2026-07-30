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
      degree: "MSc Financial Technology, Incoming",
      period: "Expected Sep 2026 - Sep 2027",
    },
    {
      school: "National Cheng Kung University (NCKU), Taiwan",
      degree: "B.B.A., Business Administration",
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
        "Built a Telegram-based trading signal workflow for the Kaiyn crypto trading community, converting informal trade calls into structured signal creation, chart updates, and execution-confirmation flows while reducing manual copy-paste friction.",
        "Implemented backend infrastructure with PostgreSQL, Docker Compose, Alembic, pytest, Ruff, and GitHub Actions to support database migrations, automated checks, and maintainable deployment workflows.",
      ],
    },
    {
      title: "Prediction Market Execution Lab",
      role: "Independent FinTech Research Project",
      period: "2026",
      bullets: [
        "Built a public research lab testing whether apparent short-horizon Polymarket BTC pricing edges survive execution frictions including spread, fill probability, latency, risk limits, and settlement outcomes.",
        "Developed reproducible Python notebooks, report figures, and dashboard outputs to decompose theoretical pricing signals into execution-quality metrics and evidence on execution feasibility.",
      ],
    },
    {
      title: "Prinsur",
      role: "Co-founder, InsurTech Product Strategy",
      period: "Sep 2025 - Present",
      bullets: [
        "Developed early-stage product and venture materials for an AI-enabled insurance comparison platform and advisor workstation, including product roadmap, pitch deck, pricing assumptions, and grant application documents.",
        "Conducted competitor and distribution-channel research across Taiwan's insurance market to support regulatory-aware positioning, go-to-market planning, and advisor workflow design.",
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
        "Led a 60-person team to deliver a 5-day residential business programme for 120 participants, generating approximately TWD 800,000 in total revenue; managed programme design, university liaison, corporate outreach, and on-site execution.",
      ],
      link: {
        href: "/writing/participant-needs-service-design",
        label: "Read the service design case study",
      },
    },
  ],
  skills: {
    technical:
      "Python, pandas, Excel, PostgreSQL, Docker Compose, GitHub Actions, pytest, Ruff, Alembic, TradingView / Pine Script",
    analytics:
      "Market microstructure analysis, execution-quality analysis, digital asset market analysis, Google Analytics, advertising data analysis",
    businessProduct:
      "FinTech product strategy, trading operations, risk education, go-to-market research, business model design, product documentation",
    languages: "Mandarin, Hokkien, English, Spanish (basic)",
  },
}

const resumeZh: ResumeData = {
  education: [
    {
      school: "華威商學院（Warwick Business School）",
      degree: "金融科技理學碩士（即將入學）",
      period: "預計 2026 年 9 月至 2027 年 9 月",
    },
    {
      school: "國立成功大學",
      degree: "企業管理學系學士",
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
        "為 Kaiyn 加密貨幣交易社群打造 Telegram 交易訊號工作流程，將非正式交易訊號整理為結構化的訊號建立、圖表更新與下單前確認流程，減少手動複製貼上的重複作業。",
        "使用 PostgreSQL、Docker Compose、Alembic、pytest、Ruff 與 GitHub Actions 建置後端基礎設施，以支援資料庫遷移、自動化檢查與可維護的部署流程。",
      ],
    },
    {
      title: "Prediction Market Execution Lab",
      role: "獨立金融科技研究專案",
      period: "2026",
      bullets: [
        "建立公開研究專案，檢驗 Polymarket BTC 短週期市場中看似存在的定價優勢，能否在買賣價差、成交機率、延遲、風險限制與結算結果等執行條件下成立。",
        "建立可重現的 Python Notebook、研究圖表與儀表板，將理論定價訊號拆解為執行品質指標，並評估實際執行的可行性。",
      ],
    },
    {
      title: "Prinsur",
      role: "共同創辦人｜InsurTech 產品策略",
      period: "2025 年 9 月至今",
      bullets: [
        "為 AI 保險比較平台與保險顧問作業平台製作早期產品與創業規劃文件，包括產品路線圖、募資簡報、定價假設及補助申請資料。",
        "研究台灣保險市場的競爭者與通路，支援兼顧法規要求的產品定位、市場進入策略與顧問工作流程設計。",
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
        "帶領 60 人團隊，為 120 名學員舉辦為期 5 天的住宿型商管營隊，營收約新台幣 80 萬元；負責課程設計、校方協調、企業接洽與現場執行。",
      ],
      link: {
        href: "/writing/participant-needs-service-design",
        label: "閱讀服務設計案例",
      },
    },
  ],
  skills: {
    technical:
      "Python、pandas、Excel、PostgreSQL、Docker Compose、GitHub Actions、pytest、Ruff、Alembic、TradingView／Pine Script",
    analytics:
      "市場微結構分析、執行品質分析、數位資產市場分析、Google Analytics、廣告資料分析",
    businessProduct:
      "金融科技產品策略、交易營運、風險教育、市場進入策略研究、商業模式設計、產品文件撰寫",
    languages: "華語、台語、英文、西班牙文（基礎）",
  },
}

export function getResume(locale: string): ResumeData {
  return locale === "zh-TW" ? resumeZh : resumeEn
}
