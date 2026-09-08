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
  positioning: "FinTech Builder / Product Strategy / Market Analysis",
  heroDescription:
    "I turn market problems, product ideas, and financial workflows into practical fintech systems — combining business thinking, data analysis, and AI-native software execution.",
  howIWork: {
    intro:
      "I move from a clearly framed problem to evidence, a working system, and validation in real operations.",
    steps: [
      {
        title: "Frame the problem",
        description:
          "Clarify the business goal, user context, financial workflow, and the decision that needs to improve.",
      },
      {
        title: "Research the evidence",
        description:
          "Examine market data, user behavior, operating conditions, and technical constraints to identify hypotheses and risks.",
      },
      {
        title: "Translate strategy into a system",
        description:
          "Turn the analysis into a product specification, workflow, research method, dashboard, or working tool.",
      },
      {
        title: "Validate in operation",
        description:
          "Test the result through feedback, audit records, and edge cases, then assess whether it improves decision quality.",
      },
    ],
  },
  about:
    "I am a Taiwan-based FinTech builder with a background in business administration at National Cheng Kung University. My next academic chapter is Warwick Business School's MSc Financial Technology programme, 2026–27, with a 25% scholarship.\n\nMy experience spans product development, digital marketing, community building, market operations, and project leadership. Alongside financial technology, I explore independent digital publishing through Readude.\n\nThis site brings together my projects, writing, and the decisions behind them. Trading systems and prediction-market research are part of that work, not the limits of my interests.",
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
  positioning: "FinTech Builder / 產品策略 / 市場分析",
  heroDescription:
    "我將市場問題、產品構想與金融流程，轉化為可實際運作的 FinTech 系統，結合商業思維、資料分析與 AI 原生軟體開發。",
  howIWork: {
    intro:
      "我從釐清問題開始，接著研究證據、建立可運作的系統，最後回到實際情境中驗證。",
    steps: [
      {
        title: "定義問題",
        description:
          "釐清商業目標、使用者情境、金融流程，以及真正需要改善的決策。",
      },
      {
        title: "研究證據",
        description:
          "分析市場資料、使用者行為、營運情境與技術限制，找出假設、風險與可行方向。",
      },
      {
        title: "將策略轉為系統",
        description:
          "把分析結果轉化為產品規格、工作流程、研究方法、資料儀表板或可實際使用的工具。",
      },
      {
        title: "在實際運作中驗證",
        description:
          "透過測試、回饋、稽核紀錄與例外情境，確認成果是否真正改善決策品質。",
      },
    ],
  },
  about:
    "我來自台灣，畢業於國立成功大學企業管理學系，也是一名 FinTech Builder。下一階段的學習是華威商學院金融科技理學碩士，2026–27 學年，獲頒 25% 獎學金。\n\n我的經驗涵蓋產品開發、數位行銷、社群經營、市場營運與專案領導。除了金融科技，我也透過 Readude 探索獨立數位出版。\n\n這個網站整理我的作品、文章，以及過程中的決策。交易系統與預測市場研究是其中一部分，而不是我興趣的全部。",
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
