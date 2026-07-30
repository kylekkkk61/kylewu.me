import {
  LiveCaseTimeline,
  NeedsToServiceDesignFlow,
} from "@/components/writing/service-design-diagrams"
import { Link } from "@/i18n/routing"

export function ParticipantNeedsServiceDesignArticleZh() {
  return (
    <div className="space-y-14 [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:tracking-tight [&_h3]:text-lg [&_h3]:font-semibold [&_p]:text-lg [&_p]:leading-8 [&_p]:text-muted-foreground">
      <section className="space-y-5">
        <p>
          詢問使用者想要什麼，確實是理解需求的方法，但不一定足以設計出好的服務。當參與者還缺少回答問題所需的經驗與認知框架時，這件事尤其明顯。
        </p>
        <p>
          2023 年，我擔任第 26
          屆成功大學企管營總召兼行政部部長，帶領一支約六十人的學生團隊，用一年的時間籌備一場五天四夜、共一百二十名高中生參加的住宿型營隊。我們的目標不是說服每個人未來都選擇企管，而是提供足夠的知識、實作與生活體驗，讓他們更有能力判斷自己想走向哪裡。
        </p>
        <p>
          這讓問題不再只是如何排出一張受歡迎的活動表，而是如何把尚未成形的參與者需求、教育目標、社交體驗、安全、預算與每分鐘的現場營運，整合成一套完整的服務。
        </p>
      </section>

      <section className="space-y-5" aria-labelledby="needs-before-answers-zh">
        <h2 id="needs-before-answers-zh">參與者不一定有足夠的語言描述需求</h2>
        <p>
          許多高中生已經對管理、金融、創業或商業產生興趣，有些人甚至做過小型專案。但他們還沒有真正經歷大學生活，也很難具體想像畢業後的工作。報名表能告訴我們哪些主題聽起來有吸引力，卻不一定能直接回答，什麼樣的體驗最能幫助他們理解這個領域。
        </p>
        <p>
          因此，我們把參與者直接提出的需求視為其中一項輸入，而不是完整規格。我重新看過前一屆的報名資料與活動後回饋，接收前任總召整理的完整交接，也查閱更早幾屆留在共用雲端硬碟裡的檔案。針對當屆參與者，我們分析報名表中的興趣與期待，也整理團隊成員透過家教、學弟妹或校園人脈，與高中生非正式交流時得到的觀察。
        </p>
        <p>
          每一種資料都有侷限。歷屆回饋描述的是過去版本；當屆報名表只反映高中生當時能說出口的想法；團隊經驗帶有重要脈絡，也可能混入個人偏好。把它們交叉使用，才比單靠一份問卷更接近真實需求。
        </p>
        <NeedsToServiceDesignFlow locale="zh-TW" />
      </section>

      <section className="space-y-5" aria-labelledby="stable-and-adjustable-zh">
        <h2 id="stable-and-adjustable-zh">
          保留服務主架構，重新設計可調整的部分
        </h2>
        <p>
          一個每年延續的活動，不應該每次都從零開始。有些內容存在是因為它們持續解決同一類需求：參與者需要對企管有完整的初步認識、需要安全的住宿環境、需要建立關係的時間，也需要一套團隊實際執行得了的活動節奏。
        </p>
        <p>
          真正的設計工作，是分清楚哪些屬於穩定的主架構，哪些應該依當屆需求調整。我們原先曾考慮安排四堂以上、每堂可能超過兩小時的企業講師課，最後減少堂數與時間，把部分概念改用互動方式呈現。例如投資遊戲，就比另一堂長時間講課更容易讓參與者實際測試觀念、討論選擇。
        </p>
        <p>
          我們同時保留晚會、舞會與社交活動。五天全部排成課程，看起來或許更有學術深度，卻不符合高中生維持注意力、建立信任與形成回憶的方式。學習與玩樂不是兩個互相競爭的產品，而是同一段服務體驗裡不可分開的部分。
        </p>
      </section>

      <section className="space-y-5" aria-labelledby="live-company-case-zh">
        <h2 id="live-company-case-zh">用一個真實問題，串起整段學習歷程</h2>
        <p>
          當屆最重要的改變，是把部分往屆使用的虛擬個案改成真實企業課題。我們曾評估人力資源、行銷與大型資訊科技公司，最後選擇{" "}
          <a
            href="https://www.happyfood1000.com.tw/"
            target="_blank"
            rel="noreferrer"
            className="text-foreground underline decoration-border underline-offset-4 transition-colors hover:decoration-foreground"
          >
            幸福良食
          </a>
          。這是一家從台南出發，投入在地農業、食品與跨世代農業合作的社會企業。
        </p>
        <p>
          在地農業是當時受到關注的議題，也和營隊所在的台南有直接關係。幸福良食具備足夠的營運規模，能提出真正有討論空間的經營問題，同時又保有高中生可以理解與研究的地方脈絡。
        </p>
        <p>
          企業高層在第一天提出課題。接下來幾天，各組利用每天安排的討論時間，在企管系學生的引導下學習分析工具、整理資訊並反覆調整解方。第五天，他們直接向企業高層簡報。個案因此不再是一堂彼此獨立的課，而是把五天內容串在一起的共同主線。每學到一個新觀念，都有一個真實問題等待應用。
        </p>
        <LiveCaseTimeline locale="zh-TW" />
      </section>

      <section className="space-y-5" aria-labelledby="participant-choice-zh">
        <h2 id="participant-choice-zh">
          讓參與者探索，而不是替他們指定一種未來
        </h2>
        <p>
          另一個名為「虛擬大學」的環節，回應了不同類型的不確定性。參與者想知道的，不只是企管系會上哪些課，也包含大學生活可能長什麼樣子，以及畢業後能走向哪些方向。
        </p>
        <p>
          團隊自行製作了一套模擬成大選課流程的網頁系統。參與者可以從多個場次中選擇自己想聽的主題，再由高年級學生與畢業學長姐分享雙主修、社團、實習、交換、大學生活、人際關係與初入職場等真實經驗。
        </p>
        <p>
          選課介面帶有遊戲感，但背後的產品決策很實際。我們不替參與者決定哪一種未來最重要，而是提供一套有結構的選擇方式，讓他們探索自己當下最想理解的問題。
        </p>
      </section>

      <section className="space-y-5" aria-labelledby="operations-are-design-zh">
        <h2 id="operations-are-design-zh">
          參與者看見的體驗，建立在完整的營運系統上
        </h2>
        <p>
          服務設計早在高中生報到以前，就已經進入營運階段。我先找齊七個部門的部長，對齊活動理念與工作方式，再授權各部門組成自己的團隊。總召需要統整行政、企劃、培訓、人資、媒體、設計與對外協調；身為行政部部長，我也直接負責財務、招生、行銷、場地、後勤與總排程。
          這段領導經驗也記錄在我的
          <Link
            href="/resume"
            className="text-foreground underline decoration-border underline-offset-4 transition-colors hover:decoration-foreground"
          >
            公開履歷
          </Link>
          中。
        </p>
        <p>
          活動排程細到每分鐘，我們反覆推演五天內可能發生的情況，檢查部門之間的交接，也準備不同人數、預算與場地條件下的版本。如果參與人數較少，場地與活動內容就必須調整；最後達成一百二十人的招收目標，才讓團隊能完整實現原先設計的體驗。
        </p>
        <p>
          COVID-19
          也增加了另一層限制。企劃書必須清楚規範口罩、通風、座位安排、量體溫、消毒、快篩與異常通報流程。這些細節不是活動內容以外的行政負擔，而是讓營隊能通過校方審核、安全舉辦的基礎系統。
        </p>
      </section>

      <section className="space-y-6" aria-labelledby="evidence-and-limits-zh">
        <div className="space-y-5">
          <h2 id="evidence-and-limits-zh">資料實際支持了哪些結論</h2>
          <p>
            最後錄取並實際報到的參與者為一百二十人。活動結束後，共有一百人填寫回饋問卷，回收率為
            83.3%。這些結果能支持整體服務方向，但仍是單一梯次的自陳式回饋，不能當成控制實驗的結果。
          </p>
        </div>

        <dl className="not-prose border-border grid overflow-hidden rounded-2xl border sm:grid-cols-2">
          {[
            ["4.41 / 5", "整體活動流程平均評分"],
            ["4.35 / 5", "課程安排平均評分"],
            ["87%", "給予整體流程 4 或 5 分"],
            ["88%", "給予課程安排 4 或 5 分"],
          ].map(([value, label]) => (
            <div
              key={label}
              className="border-border p-5 sm:p-6 sm:odd:border-r"
            >
              <dt className="text-muted-foreground mt-2 text-sm leading-6">
                {label}
              </dt>
              <dd className="font-heading text-3xl text-foreground">{value}</dd>
            </div>
          ))}
        </dl>

        <p>
          在「最有幫助的課程領域」中，四十七人選擇行銷管理、二十七人選擇財務管理、二十六人選擇人力資源。教學遊戲則有四十五人選擇投資遊戲、三十六人選擇樂透賭局、十九人選擇廣告賽局。開放式回答中，舞會也是最常被提到的單一活動之一，顯示參與者在記住學習內容的同時，也重視社交體驗。
        </p>
        <p>
          這些資料無法證明每項設計一定造成某個結果，也不足以支持全台排名或長期教育成效等說法。它能說明的是，只要研究、內容與營運被視為同一套系統，大型營隊仍有機會同時維持學習價值與整體體驗。
        </p>
      </section>

      <section
        className="space-y-5"
        aria-labelledby="service-design-takeaway-zh"
      >
        <h2 id="service-design-takeaway-zh">設計讓人做出更好判斷的條件</h2>
        <p>
          我們不可能要求參與者在活動開始以前，就精準描述一場理想的企管營。團隊真正需要做的，是整合他們說出的期待、歷屆參與者留下的證據、籌備團隊累積的經驗，以及現場營運允許的範圍。
        </p>
        <p>
          最後形成的服務，沒有替高中生決定應該讀什麼科系、成為什麼樣的人。它提供真實問題、有資訊基礎的選擇、與他人建立關係的機會，以及足夠的反思空間，讓每個人離開時更理解自己的興趣。
        </p>
        <blockquote className="border-primary my-8 border-l-2 pl-6 font-heading text-2xl leading-9 text-foreground">
          好的服務設計，不是替參與者回答問題，而是創造讓他們形成更好答案的條件。
        </blockquote>
      </section>
    </div>
  )
}
