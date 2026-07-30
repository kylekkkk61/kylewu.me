type DiagramLocale = "en" | "zh-TW"

const discoveryCopy = {
  en: {
    title: "Research becomes a service architecture",
    description:
      "No single source could explain what participants needed. The program combined historical evidence, current signals, and operating constraints.",
    sources: [
      [
        "Past applications",
        "Questions, motivations, and expectations from previous cohorts",
      ],
      [
        "Post-event feedback",
        "What participants valued, missed, or found difficult",
      ],
      [
        "Team handover",
        "Decisions, failures, and operating knowledge from earlier teams",
      ],
      [
        "Current signals",
        "Application responses and informal conversations with high-school students",
      ],
    ],
    synthesis: "Participant needs",
    synthesisBody:
      "Enough structure to explore business, with enough freedom to discover what matters personally.",
    fixed: "Stable program spine",
    fixedBody: "Core learning, community, safety, and operating requirements",
    flexible: "Adjustable modules",
    flexibleBody: "Topics, formats, speakers, games, and the company case",
    outcome: "Five-day service experience",
  },
  "zh-TW": {
    title: "把分散的研究資料，轉化為服務架構",
    description:
      "單一資料來源無法完整說明參與者需要什麼，因此我們同時整理歷史證據、當屆訊號與營運限制。",
    sources: [
      ["歷屆報名資料", "整理過去參與者的疑問、動機與期待"],
      ["活動後回饋", "了解參與者重視、遺漏或感到困難的環節"],
      ["團隊交接與檔案", "保留歷屆決策、失誤與營運經驗"],
      ["當屆需求訊號", "結合報名表與高中生的非正式訪談"],
    ],
    synthesis: "參與者需求",
    synthesisBody: "既需要足夠的架構理解企管，也需要探索空間，形成自己的判斷。",
    fixed: "穩定的活動主架構",
    fixedBody: "核心學習、社群體驗、安全與營運需求",
    flexible: "可調整的內容模組",
    flexibleBody: "主題、形式、講師、遊戲與企業個案",
    outcome: "五天的完整服務體驗",
  },
} as const

const caseCopy = {
  en: {
    title: "One live case connected the five days",
    description:
      "The company challenge was not a final-day exercise. It gave participants a reason to apply each new tool throughout the camp.",
    days: [
      [
        "Day 1",
        "Frame the problem",
        "Happy Food 1000 introduced a current business challenge.",
      ],
      [
        "Days 2-4",
        "Investigate and iterate",
        "Teams used business tools, coaching, and daily discussion time to develop proposals.",
      ],
      [
        "Day 5",
        "Present to decision-makers",
        "Participants presented their recommendations directly to company leaders.",
      ],
    ],
  },
  "zh-TW": {
    title: "用一個真實個案，串起五天的學習",
    description:
      "企業個案不是最後一天才出現的作業，而是讓參與者在整段營期持續應用新工具的共同主線。",
    days: [
      ["第一天", "理解問題", "由幸福良食提出當時正在面對的真實經營課題。"],
      [
        "第二至四天",
        "研究與迭代",
        "各組透過分析工具、學長姐引導與每日討論，逐步形成提案。",
      ],
      [
        "第五天",
        "向決策者提案",
        "參與者直接向企業高層簡報解方，並接受現場回饋。",
      ],
    ],
  },
} as const

export function NeedsToServiceDesignFlow({
  locale,
}: {
  locale: DiagramLocale
}) {
  const copy = discoveryCopy[locale]

  return (
    <figure className="not-prose border-border bg-muted/20 my-10 overflow-hidden rounded-2xl border">
      <figcaption className="border-border space-y-2 border-b p-5 sm:p-7">
        <h3 className="text-foreground text-lg font-semibold tracking-tight">
          {copy.title}
        </h3>
        <p className="text-muted-foreground max-w-2xl text-sm leading-6">
          {copy.description}
        </p>
      </figcaption>

      <div className="space-y-7 p-5 sm:p-7">
        <ul className="grid gap-3 sm:grid-cols-2">
          {copy.sources.map(([title, description]) => (
            <li
              key={title}
              className="border-border bg-background rounded-xl border p-4"
            >
              <h4 className="text-foreground text-sm font-semibold">{title}</h4>
              <p className="text-muted-foreground mt-2 text-xs leading-5">
                {description}
              </p>
            </li>
          ))}
        </ul>

        <div className="mx-auto max-w-lg border-l-2 border-primary/50 pl-5">
          <h4 className="text-foreground text-sm font-semibold">
            {copy.synthesis}
          </h4>
          <p className="text-muted-foreground mt-2 text-sm leading-6">
            {copy.synthesisBody}
          </p>
        </div>

        <div className="grid gap-3 md:grid-cols-2">
          <div className="border-border rounded-xl border p-4">
            <h4 className="text-foreground text-sm font-semibold">
              {copy.fixed}
            </h4>
            <p className="text-muted-foreground mt-2 text-xs leading-5">
              {copy.fixedBody}
            </p>
          </div>
          <div className="border-border rounded-xl border p-4">
            <h4 className="text-foreground text-sm font-semibold">
              {copy.flexible}
            </h4>
            <p className="text-muted-foreground mt-2 text-xs leading-5">
              {copy.flexibleBody}
            </p>
          </div>
        </div>

        <p className="border-primary bg-primary/5 rounded-xl border px-5 py-4 text-center text-sm font-semibold text-foreground">
          {copy.outcome}
        </p>
      </div>
    </figure>
  )
}

export function LiveCaseTimeline({ locale }: { locale: DiagramLocale }) {
  const copy = caseCopy[locale]

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

      <ol className="grid md:grid-cols-[1fr_1.35fr_1fr]">
        {copy.days.map(([day, title, description], index) => (
          <li
            key={day}
            className="border-border relative p-5 sm:p-7 md:border-r md:last:border-r-0"
          >
            <p className="font-mono text-xs text-primary">{day}</p>
            <h4 className="text-foreground mt-4 text-sm font-semibold">
              {title}
            </h4>
            <p className="text-muted-foreground mt-2 text-sm leading-6">
              {description}
            </p>
            {index < copy.days.length - 1 && (
              <span
                aria-hidden="true"
                className="bg-primary/50 absolute right-5 bottom-0 h-px w-10 md:top-1/2 md:right-0 md:bottom-auto md:w-5"
              />
            )}
          </li>
        ))}
      </ol>
    </figure>
  )
}
