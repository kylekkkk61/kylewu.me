type DiagramLocale = "en" | "zh-TW"

const admissionsCopy = {
  en: {
    title: "A standardized review can still preserve human judgment",
    description:
      "The system creates comparable evidence and directs attention to uncertainty; the committee owns the final choice.",
    steps: [
      ["Applications", "Collect motivation, experience, and learning goals."],
      ["Classification", "Organize evidence around shared review criteria."],
      ["Cross-review", "About three reviewers assess each application."],
      ["Consolidation", "Combine scores and discuss material differences."],
      [
        "Boundary review",
        "Compare close candidates and make the final decision.",
      ],
    ],
  },
  "zh-TW": {
    title: "標準化審查，仍然可以保留人工判斷",
    description:
      "流程先建立可比較的資訊，再把注意力集中到不確定性；最後的選擇仍由共同會議承擔。",
    steps: [
      ["報名資料", "蒐集參加動機、個人經歷與學習目標。"],
      ["資料分類", "依照共同審查面向整理申請內容。"],
      ["交叉評分", "每份資料平均由三位評分者審查。"],
      ["彙整討論", "整合分數，並討論明顯的評分差異。"],
      ["邊界審查", "比較錄取線附近人選，做出最後決定。"],
    ],
  },
} as const

const decisionCopy = {
  en: {
    title: "Where should automation stop?",
    description:
      "Move down the questions until the workflow reaches the appropriate execution or review boundary.",
    yes: "Yes",
    no: "No",
    questions: [
      {
        question: "Does the step depend heavily on judgment?",
        yes: "Keep it human-led; use AI only to prepare evidence.",
        no: "Continue evaluating the workflow.",
      },
      {
        question: "Is it repetitive or frequent enough to justify a system?",
        yes: "Continue to rule design.",
        no: "Keep the process manual for now.",
      },
      {
        question: "Are the rules stable and describable?",
        yes: "Evaluate the consequence of execution.",
        no: "Standardize and observe the process first.",
      },
      {
        question:
          "Could an error affect money, safety, privacy, or an irreversible action?",
        yes: "Automate preparation, then require human confirmation.",
        no: "Automate execution with monitoring and exception handling.",
      },
    ],
  },
  "zh-TW": {
    title: "自動化應該停在哪裡？",
    description: "依序回答問題，直到流程抵達適合自動執行或需要人工審查的邊界。",
    yes: "是",
    no: "否",
    questions: [
      {
        question: "這個環節是否高度仰賴判斷？",
        yes: "以人工為主，AI 只協助準備與整理證據。",
        no: "繼續評估這項工作。",
      },
      {
        question: "工作是否反覆或頻繁到值得建立系統？",
        yes: "繼續整理可執行的規則。",
        no: "現階段維持人工處理。",
      },
      {
        question: "規則是否穩定而且可以清楚描述？",
        yes: "接著評估執行錯誤的後果。",
        no: "先標準化並觀察流程。",
      },
      {
        question: "錯誤是否涉及金流、安全、隱私或不可逆行動？",
        yes: "自動完成準備工作，再由人確認。",
        no: "自動執行，並保留監測與例外處理。",
      },
    ],
  },
} as const

export function AdmissionsReviewFlow({ locale }: { locale: DiagramLocale }) {
  const copy = admissionsCopy[locale]

  return (
    <figure className="not-prose border-border bg-muted/20 my-10 rounded-2xl border p-5 sm:p-7">
      <figcaption className="mb-7 max-w-2xl space-y-2">
        <h3 className="text-foreground text-lg font-semibold tracking-tight">
          {copy.title}
        </h3>
        <p className="text-muted-foreground text-sm leading-6">
          {copy.description}
        </p>
      </figcaption>
      <ol className="grid gap-4 md:grid-cols-5">
        {copy.steps.map(([title, description], index) => (
          <li
            key={title}
            className="border-border bg-background relative rounded-xl border p-4 md:min-h-44"
          >
            <span className="mb-6 block font-mono text-xs text-primary/70">
              {String(index + 1).padStart(2, "0")}
            </span>
            <h4 className="text-foreground text-sm font-semibold">{title}</h4>
            <p className="text-muted-foreground mt-2 text-xs leading-5">
              {description}
            </p>
          </li>
        ))}
      </ol>
    </figure>
  )
}

export function AutomationDecisionFlow({ locale }: { locale: DiagramLocale }) {
  const copy = decisionCopy[locale]

  return (
    <figure className="not-prose border-border my-10 overflow-hidden rounded-2xl border">
      <figcaption className="bg-muted/20 border-border space-y-2 border-b p-5 sm:p-7">
        <h3 className="text-foreground text-lg font-semibold tracking-tight">
          {copy.title}
        </h3>
        <p className="text-muted-foreground max-w-2xl text-sm leading-6">
          {copy.description}
        </p>
      </figcaption>
      <ol className="divide-border divide-y">
        {copy.questions.map((step, index) => (
          <li
            key={step.question}
            className="grid gap-5 p-5 sm:p-7 md:grid-cols-2"
          >
            <div className="flex gap-4">
              <span className="font-mono text-xs text-primary/70">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h4 className="text-foreground text-sm font-semibold leading-6">
                {step.question}
              </h4>
            </div>
            <dl className="grid gap-3 text-sm sm:grid-cols-2">
              <div className="border-border rounded-lg border p-3">
                <dt className="mb-1 font-mono text-[0.7rem] uppercase tracking-wide text-primary">
                  {copy.yes}
                </dt>
                <dd className="text-muted-foreground leading-5">{step.yes}</dd>
              </div>
              <div className="border-border rounded-lg border p-3">
                <dt className="mb-1 font-mono text-[0.7rem] uppercase tracking-wide text-muted-foreground">
                  {copy.no}
                </dt>
                <dd className="text-muted-foreground leading-5">{step.no}</dd>
              </div>
            </dl>
          </li>
        ))}
      </ol>
    </figure>
  )
}
