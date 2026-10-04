export type Profile = {
  name: string
  alternateName: string
  positioning: string
  heroDescription: string
  howIWork: {
    intro: string
    steps: {
      title: string
      description: string
    }[]
  }
  about: string
  backgroundPath: {
    title: string
    detail: string
  }[]
}

const profileEn: Profile = {
  name: "Kyle Wu",
  alternateName: "Ping-Ju Wu · 吳秉儒",
  positioning: "FinTech Builder / Product Strategy / AI Workflow Orchestration",
  heroDescription:
    "I combine business thinking, data analysis, and AI workflow orchestration to turn market problems and product ideas into working systems. I use Codex to organize research and software development, taking work from problem definition through implementation and validation.",
  howIWork: {
    intro:
      "I organize research and development with Codex, moving from a clearly framed problem to evidence, implementation, and verified results.",
    steps: [
      {
        title: "Frame the problem",
        description:
          "Clarify the business goal, user context, constraints, and how the result will be evaluated.",
      },
      {
        title: "Research the evidence",
        description:
          "Organize source material and context, examine market data and operating conditions, and form testable hypotheses.",
      },
      {
        title: "Translate strategy into a system",
        description:
          "Break the work into tasks and use Codex to coordinate research, implementation, and iteration into a working system.",
      },
      {
        title: "Validate in operation",
        description:
          "Check the output through tests, evidence, feedback, and real operating results, then refine the system.",
      },
    ],
  },
  about:
    "I am a Taiwan-based FinTech builder with a background in business administration at National Cheng Kung University. My next academic chapter is Warwick Business School's MSc Financial Technology programme, 2026–27, with a 25% scholarship.\n\nMy experience spans product development, digital marketing, community building, market operations, and project leadership. Alongside financial technology, I explore independent digital publishing through Readude.\n\nI also applied self-orchestrated AI workflows to white-hat security research, earning over EUR 20,000 in bug bounties within two months.\n\nThis site brings together my projects, writing, and the decisions behind them. Trading systems and prediction-market research are part of that work, not the limits of my interests.",
  backgroundPath: [
    {
      title: "Business foundation",
      detail: "NCKU Business Administration",
    },
    {
      title: "Product & operations",
      detail: "Marketing, e-commerce, and project leadership",
    },
    {
      title: "Venture & public work",
      detail: "Kaiyn Capital, Readude, and public projects",
    },
    {
      title: "Next chapter",
      detail: "MSc Financial Technology at Warwick",
    },
  ],
}

const profileZh: Profile = {
  name: "Kyle Wu",
  alternateName: "Ping-Ju Wu · 吳秉儒",
  positioning: "FinTech Builder / 產品策略 / AI 工作流程編排",
  heroDescription:
    "我結合商業思維、資料分析與 AI 工作流程編排，將市場問題與產品構想轉化為可運作的系統。透過 Codex 組織研究與軟體開發流程，從問題定義、實作到驗證，持續推進可交付的成果。",
  howIWork: {
    intro:
      "我透過 Codex 組織研究與開發，從釐清問題、研究證據到實作，最後驗證成果。",
    steps: [
      {
        title: "定義問題",
        description: "釐清商業目標、使用者情境、限制條件，以及成果的驗收方式。",
      },
      {
        title: "研究證據",
        description:
          "整理來源資料與上下文，分析市場資料和營運條件，形成可驗證的假設。",
      },
      {
        title: "將策略轉為系統",
        description:
          "拆解任務，使用 Codex 編排研究、實作與迭代，逐步建立可運作的系統。",
      },
      {
        title: "在實際運作中驗證",
        description:
          "透過測試、證據、回饋與實際運作結果檢查品質，再持續調整系統。",
      },
    ],
  },
  about:
    "我來自台灣，畢業於國立成功大學企業管理學系，也是一名 FinTech Builder。下一階段的學習是華威商學院金融科技理學碩士，2026–27 學年，獲頒 25% 獎學金。\n\n我的經驗涵蓋產品開發、數位行銷、社群經營、市場營運與專案領導。除了金融科技，我也透過 Readude 探索獨立數位出版。\n\n我也將自行編排的 AI 工作流程應用於白帽資安研究，在兩個月內取得超過 €20,000 的漏洞賞金。\n\n這個網站整理我的作品、文章，以及過程中的決策。交易系統與預測市場研究是其中一部分，而不是我興趣的全部。",
  backgroundPath: [
    {
      title: "商業基礎",
      detail: "成功大學企業管理學系",
    },
    {
      title: "產品與營運",
      detail: "行銷、電子商務與專案領導",
    },
    {
      title: "創業與公開實作",
      detail: "Kaiyn Capital、Readude 與公開專案",
    },
    {
      title: "下一階段",
      detail: "華威商學院金融科技理學碩士",
    },
  ],
}

export function getProfile(locale: string): Profile {
  return locale === "zh-TW" ? profileZh : profileEn
}

// Keep a default export or backward-compatible reference if needed,
// but we will update components to use getProfile().
export const profile = profileEn
