import {
  AdmissionsReviewFlow,
  AutomationDecisionFlow,
} from "@/components/writing/workflow-diagrams"
import { Link } from "@/i18n/routing"

export function WorkflowAutomationHumanJudgmentArticleZh() {
  return (
    <div className="space-y-14 [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:tracking-tight [&_h3]:text-lg [&_h3]:font-semibold [&_p]:text-lg [&_p]:leading-8 [&_p]:text-muted-foreground">
      <section className="space-y-5">
        <p>
          談到 AI 與自動化時，我們很容易先從工具開始：模型能生成什麼、Agent
          能完成哪些任務，或一套流程能省下多少時間。但在選擇工具以前，更應該先理解工作本身。真正有用的流程，通常從標準化開始，而不是從自動化開始。
        </p>
        <p>
          哪些事情會反覆發生？輸入資料是否可靠？規則是否穩定？執行錯誤能不能復原？更重要的是，流程進行到哪裡時，仍然需要有人理解未被記錄的脈絡、在互相衝突的目標之間做出選擇，並承擔最後的結果？
        </p>
        <p>
          從學生營隊、群眾募資、社群營運到軟體專案，我反覆遇到規模不同、但本質相近的問題。有些環節需要一致的規則，有些適合交由系統執行，也有些只能推進到一個清楚的決策邊界，再由人根據整理好的資訊做出最後判斷。
        </p>
      </section>

      <section className="space-y-5" aria-labelledby="three-layers-zh">
        <h2 id="three-layers-zh">標準化、自動化與人工判斷，是三個不同層次</h2>
        <p>
          <strong className="text-foreground">標準化</strong>
          是在定義資料如何分類、哪些條件需要被考慮，以及團隊應按照什麼順序處理。一張評分表、一份檢查清單、一套命名方式或例外處理規則，都能讓工作更一致，不必然涉及任何自動化。
        </p>
        <p>
          <strong className="text-foreground">自動化</strong>
          則是讓系統反覆執行足夠穩定的規則，例如蒐集資料、完成計算、排序紀錄、分流例外、準備草稿，或在數值達到門檻時通知負責人。
        </p>
        <p>
          <strong className="text-foreground">人工判斷</strong>
          出現在規則無法產生唯一且負責任的答案時。資訊可能不完整、不同目標可能互相衝突、結果可能難以復原，或兩個選項在表面條件上相近，實際上卻會帶來不同體驗。
        </p>
        <p>
          三者可以出現在同一套流程裡。真正的問題，是把它們混為一談，或以為只要加入
          AI，原本不清楚的流程就會自然變好。
        </p>
      </section>

      <section className="space-y-5" aria-labelledby="standardize-first-zh">
        <h2 id="standardize-first-zh">先標準化，再思考自動化</h2>
        <p>
          在 AI
          工具進入日常工作以前，我曾擔任成功大學企管營總召，帶領團隊舉辦一場為期五天、預計招收
          120
          名高中生的住宿型營隊。我們希望錄取真正想了解企業管理、願意投入學習的學生，而不只是把營隊當成另一項經歷。
        </p>
        <p>
          報名資料涵蓋個人經歷、參加動機、學習興趣、課外活動與未來方向，無法只靠單一數字判斷。評分團隊約有五人，每位報名者平均由三人交叉評分；正式評分以前，我們先說明不同情況應如何給分、需要觀察哪些面向，以及為什麼評分時應保持中立。
        </p>
        <p>
          評分面向包含對企管的興趣與基本認識、報名動機、高中經歷、未來方向，以及社團、專案與競賽等課外參與。原始權重文件目前已經找不到，因此我不會事後重建一套看似精確的公式；這套流程的價值不在於產生「完美分數」，而是讓評分者用相近的結構理解資料。
        </p>
        <p>
          彙整分數後，我們先建立初步排序。若不同評分者之間出現明顯差距，便會重新討論，不過實際發生的次數不多。最後的共同會議則聚焦在錄取線附近，大約是錄取名單較後段的候選人，再與排名剛好落在錄取線外、條件相近的報名者重新比較。
        </p>
        <AdmissionsReviewFlow locale="zh-TW" />
        <p>
          這套流程完全不需要
          AI，也沒有試圖消除人工判斷。評分標準降低了隨意性，也讓意見不一致時有跡可循；評分表可以為決策準備資訊，最後仍要由人回到招募目的，判斷哪些差異真正重要。
        </p>
      </section>

      <section className="space-y-5" aria-labelledby="structured-iteration-zh">
        <h2 id="structured-iteration-zh">
          數據可以讓迭代更有依據，但不能替團隊做決定
        </h2>
        <p>
          後來，我在協助 CAVE
          烤爐群眾募資專案的數位行銷與產品溝通時，遇到另一種工作流程。募資首頁、廣告圖片、標語、文案、資訊順序與投放受眾彼此影響；只依賴個人偏好會失去一致性，把後台數字直接當成答案也同樣過度簡化。
        </p>
        <p>
          我們透過 Facebook 廣告資料與 Google
          Analytics，觀察使用者從看到廣告、點擊、進入募資頁面，到與頁面不同位置或元素互動、最後離開的過程。Facebook
          內建的 A/B 測試，也讓不同廣告素材或投放方式能在同一套流程中比較。
        </p>
        <p>真正有價值的不是某一個單獨指標，而是圍繞數據建立的反覆流程：</p>
        <ol className="border-border divide-border divide-y border-y">
          {[
            "觀察哪些位置的注意力或互動低於預期。",
            "將可能原因分成受眾、廣告素材、標題、文案或頁面結構。",
            "選擇一個可以調整、又不會干擾其他變因的項目。",
            "比較不同版本，再把結果帶進下一輪調整。",
          ].map((step, index) => (
            <li key={step} className="grid gap-3 py-5 sm:grid-cols-[3rem_1fr]">
              <span className="font-mono text-sm text-primary/60">
                {String(index + 1).padStart(2, "0")}
              </span>
              <p className="text-base! leading-7!">{step}</p>
            </li>
          ))}
        </ol>
        <p>
          數據可以協助定位問題，也能縮小接下來需要回答的範圍，但不會自動決定產品應該如何被理解。監測、彙整與提醒可以自動化；數字為什麼出現，以及答案是否真的應該是修改文案，仍需要團隊理解產品、受眾與同一時間正在改變的其他變因。
        </p>
      </section>

      <section className="space-y-5" aria-labelledby="decision-boundary-zh">
        <h2 id="decision-boundary-zh">讓系統把工作推進到決策邊界</h2>
        <p>
          企管營的預算規劃，則讓同一項原則變得更關鍵。營隊預計招收 120
          名學員，但活動必須面對不同報名與錄取人數。場地、食材、交通、安全與活動品質彼此影響；當人數跨過不同門檻時，也可能有條件升級場地或活動內容，因此參與人數、成本與最後結餘並不是單純的線性關係。
        </p>
        <p>
          我們曾使用當時可用的生成式 AI
          工具，協助提出預算架構、支出調整與可能影響。團隊仍自行建立了十多個版本，涵蓋不同招收人數與營運情境，因為工具無法補上未提供的限制、非正式依賴與活動品質要求。AI
          可以協助產生方案，最後仍需要人檢查假設，並在成本、安全、場地容量、交通、食材與參與者體驗之間做出選擇。
        </p>
        <p>
          當兩個場地在價格、容量與便利性上都很接近時，評分表只能顯示兩者差距有限，無法替團隊承擔選擇。好的流程應在決策之前整理資料、計算情境、找出矛盾並比較假設，再由人判斷哪些體驗差異更重要，而不是因為數字能放進試算表，就把選擇包裝成完全客觀的輸出。
        </p>
      </section>

      <section
        className="space-y-5"
        aria-labelledby="consequence-reversibility-zh"
      >
        <h2 id="consequence-reversibility-zh">
          後果與可逆性，決定自動化應該停在哪裡
        </h2>
        <p>
          發生頻率決定一件事是否值得自動化，後果則決定自動化應該停在哪裡。經常發生、影響有限、輸入穩定的工作適合自動化；涉及金流、安全或難以撤回的產品操作時，設計方式就必須不同。
        </p>
        <p>
          我後來把這項原則運用在{" "}
          <Link
            href="/writing/confirmation-first-telegram-trading-workflow"
            className="text-foreground underline decoration-border underline-offset-4 transition-colors hover:decoration-foreground"
          >
            Kaiyn Trading Bot 的確認優先流程
          </Link>
          。系統可以驗證交易所規則、計算部位、保存待處理狀態並準備訂單，但不會把社群訊號直接視為下單許可。訊號發布前先由發單員確認，計算完成的訂單再由使用者確認。
        </p>
        <p>
          如果交易所請求的結果不明，系統會先查詢既有訂單，而不是直接重新送單。人工確認也只有在呈現計算假設、衍生數值、目前限制與可能後果時才有價值；單純增加警告或點擊，並不會讓操作更安全。
        </p>
      </section>

      <section className="space-y-6" aria-labelledby="decision-framework-zh">
        <div className="space-y-5">
          <h2 id="decision-framework-zh">一套實際可用的工作流程判斷框架</h2>
          <p>
            現在，當我判斷一個工作環節應該標準化、自動化或保留人工處理時，會依序思考以下問題。
          </p>
        </div>
        <AutomationDecisionFlow locale="zh-TW" />
        <div className="space-y-8">
          <div className="space-y-3">
            <h3>1. 這個環節是否高度仰賴判斷？</h3>
            <p>
              如果不同的人面對同一份資訊，仍可能得到合理但不同的答案，就要先找出造成差異的價值與脈絡。自動化可以整理比較，但不應把真實存在的分歧隱藏起來。
            </p>
          </div>
          <div className="space-y-3">
            <h3>2. 工作是否反覆發生到值得建立系統？</h3>
            <p>
              反覆工作通常值得標準化。如果人工處理同時繁瑣、耗時，或容易因執行者不同而出現差異，自動化的價值便會提高。
            </p>
          </div>
          <div className="space-y-3">
            <h3>3. 規則是否穩定而且可以描述？</h3>
            <p>
              有分支不代表不能自動化，只要各種分支能被辨識，也有對應處理方式。若流程經常無法預測，或高度依賴沒有說出口的經驗，就應先理解工作，而不是急著自動化。
            </p>
          </div>
          <div className="space-y-3">
            <h3>4. 輸入資料與上下文是否足夠？</h3>
            <p>
              再準確的模型，遇到不完整的上下文，仍可能提出不適合的建議。流程應該指出缺少哪些資訊，而不是用自信的輸出掩蓋空白。
            </p>
          </div>
          <div className="space-y-3">
            <h3>5. 系統犯錯時會發生什麼？</h3>
            <p>
              需要考慮結果能否復原、金流影響、安全、隱私，以及修正錯誤的成本。後果越高，就越需要嚴格驗證、稽核紀錄與人工確認。
            </p>
          </div>
          <div className="space-y-3">
            <h3>6. 系統能否說明為什麼需要人工介入？</h3>
            <p>
              只顯示「需要人工審核」並不足夠。良好的交接應呈現相關證據、指出尚未解決的假設，並讓人清楚理解可以選擇什麼。
            </p>
          </div>
          <div className="space-y-3">
            <h3>7. 最後由誰承擔決策？</h3>
            <p>如果沒有人能回答，這不是自動化問題，而是治理問題。</p>
          </div>
        </div>
      </section>

      <section className="space-y-5" aria-labelledby="judgment-not-step-zh">
        <h2 id="judgment-not-step-zh">人工判斷不是流程中的另一個處理步驟</h2>
        <p>
          在隱私與權限控制明確時，AI
          可以協助整理資料、摘要回饋、計算情境、產生方案或找出異常數據，讓標準化流程更快、更一致。但有些選擇沒有唯一的客觀答案：較便宜的場地與較舒適的場地，可能分別對應不同但合理的優先順序；兩位報名者分數相近，卻可能帶著不同類型的好奇心；某一則文案可能提高點擊，卻讓產品被理解成另一件事。
        </p>
        <p>
          在這些情況下，主觀不必然代表流程有缺陷。它可能正是有人整合模型沒有捕捉的脈絡、選擇哪一項價值更重要，並願意承擔取捨的時刻。
        </p>
        <blockquote className="border-primary my-8 border-l-2 pl-6 font-heading text-2xl leading-9 text-foreground">
          系統可以把工作推進到決策邊界，但跨過邊界的人，也必須承擔選擇的責任。
        </blockquote>
      </section>

      <aside className="border-border bg-muted/30 space-y-4 rounded-xl border p-6 md:p-8">
        <h2>適用範圍與限制</h2>
        <div className="space-y-4">
          <p className="text-base! leading-7!">
            這篇文章不是反對自動化，也不試圖預測 AI
            永遠做不到什麼。隨著工具改善、輸入資料更完整、控制機制更成熟，適合交給系統的邊界本來就可能移動。
          </p>
          <p className="text-base! leading-7!">
            本文的主張比較有限：依照現在能取得的資訊、可能造成的後果，以及實際由誰負責，設計當下合理的決策邊界。讓系統穩定執行規則，讓
            AI
            改善分析與準備，同時讓真正具有後果的判斷保持可見、可複核，並由人明確承擔。
          </p>
        </div>
      </aside>
    </div>
  )
}
