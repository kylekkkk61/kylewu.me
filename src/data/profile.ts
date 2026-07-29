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
    "I am an incoming MSc Financial Technology student at Warwick Business School and a fintech builder with experience across digital asset market operations, product strategy, and applied market research.\n\nMy current public projects focus on trading workflow automation and prediction-market execution research, with an emphasis on risk controls, public-safe analysis, decision quality, and practical market infrastructure.",
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
    "我即將就讀華威商學院金融科技理學碩士，也是一名具備數位資產市場營運、產品策略與應用市場研究經驗的 FinTech Builder。\n\n目前的公開專案聚焦交易流程自動化與預測市場執行研究，重視風險控管、可公開驗證的分析、決策品質與實際可用的市場基礎設施。",
}

export function getProfile(locale: string): Profile {
  return locale === "zh-TW" ? profileZh : profileEn
}

// Keep a default export or backward-compatible reference if needed,
// but we will update components to use getProfile().
export const profile = profileEn
