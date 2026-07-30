const workflowZh = [
  {
    title: "建立並預覽交易訊號",
    body: "具備權限的發單員先在 Telegram 私人對話中建立交易訊號。Bot 會產生永久的交易訊號 ID、整理訊息與圖表，並在任何內容送到社群前要求發單員確認。",
  },
  {
    title: "讓使用者選擇下單方式",
    body: "交易訊號確認轉發後，使用者可以選擇市價單或 GTC 限價單。這個選擇會開啟私人的下單流程，而不是直接從公開頻道送出訂單。",
  },
  {
    title: "計算部位並執行驗證",
    body: "Bot 會檢查 API 設定、取得即時市場資料與合約規則，根據使用者設定的固定 1R 風險金額計算部位，並驗證系統內的風控上限與交易所規則。",
  },
  {
    title: "保存待確認訂單",
    body: "通過驗證的訂單會以待確認狀態保存於 PostgreSQL。Telegram callback 只攜帶短 token，完整訂單狀態留在資料庫，因此 Bot 重啟後，只要仍在有效期限內，流程就能繼續。",
  },
  {
    title: "顯示最後確認畫面",
    body: "使用者會先看到下單方式、計算後的部位、價格假設與風險資訊，再明確選擇確認或取消。",
  },
  {
    title: "鎖定、重新驗證並送單",
    body: "收到確認後，Bot 透過資料列鎖定取得待確認訂單，使用最新市場資料重新驗證，再將訂單送到 Bitget，最後保存下單結果與操作紀錄。",
  },
]

export function ConfirmationFirstTradingWorkflowArticleZh() {
  return (
    <div className="space-y-14 [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:tracking-tight [&_h3]:text-lg [&_h3]:font-semibold [&_p]:text-lg [&_p]:leading-8 [&_p]:text-muted-foreground">
      <section className="space-y-5">
        <p>
          在資訊快速流動的 Telegram
          交易社群裡，從交易訊號到交易所訂單的步驟越少，看起來越像理想的產品體驗：少點幾次，就能少一點延遲。但牽涉真實期貨訂單時，不可逆的操作並不是一般的轉換漏斗。速度必須同時面對語意不清、資料過期、部位計算不一致、重複操作，以及單純的人為失誤。
        </p>
        <p>
          我在設計 Kaiyn Trading Bot
          時，換了一個角度思考：如何維持操作速度，同時讓每一個會產生實際後果的轉換都清楚可見？最後形成的是一套「確認優先」系統——交易訊號不再等同於立即下單的指令，而是有明確狀態與驗證步驟的產品流程起點。
        </p>
      </section>

      <section className="space-y-5" aria-labelledby="operating-problem">
        <h2 id="operating-problem">實際營運中的問題</h2>
        <p>
          Kaiyn Capital 透過 Telegram
          發布市場觀察、交易訊號、圖表更新與風險討論。這個環境的優勢就是資訊傳遞快速，但速度也會帶來操作上的摩擦。使用者仍然需要解讀訊號、決定進場方式、計算部位、確認停損方向，並檢查訂單是否符合交易所的合約規則。
        </p>
        <p>
          全部由使用者手動處理，容易出現不一致的下單結果；把所有步驟壓縮成一個按鈕，又會產生另一個問題：使用者還沒看見系統採用的假設，訂單就已經送出。因此，產品需要的是中間解法——讓自動化負責整理與驗證流程，但把重要決定保留在清楚的確認節點。
        </p>
      </section>

      <section className="space-y-6" aria-labelledby="workflow">
        <div className="space-y-3">
          <h2 id="workflow">確認優先的完整流程</h2>
          <p>
            系統會進行兩次確認，而且面對的是兩種不同角色。發單員先確認要發布到社群的內容；使用者之後再確認可能送到交易所的實際訂單。
          </p>
        </div>
        <ol className="border-border divide-border divide-y border-y">
          {workflowZh.map((step, index) => (
            <li
              key={step.title}
              className="grid gap-3 py-6 sm:grid-cols-[3rem_1fr] sm:gap-5"
            >
              <span className="font-mono text-sm text-primary/60">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div className="space-y-2">
                <h3>{step.title}</h3>
                <p className="text-base! leading-7!">{step.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="space-y-5" aria-labelledby="confirmation-boundary">
        <h2 id="confirmation-boundary">確認是產品邊界，不只是一個彈出視窗</h2>
        <p>
          確認畫面只有在增加使用者理解時才有價值。如果系統隱藏所有計算過程，最後只問一句「確定嗎？」，那只是增加操作步驟，並沒有增加控制權。在這套流程中，預覽畫面會在操作變得不可逆之前，清楚呈現下單方式與系統計算出的結果。
        </p>
        <p>
          系統也會保存預覽與待確認訂單，而不是把完整狀態塞進 Telegram callback
          資料。確認因此成為真正的生命週期，包含
          pending、processing、executed、failed、cancelled 與 expired
          等狀態。只要預覽仍在有效期限內，即使 Bot
          重新啟動，使用者仍能繼續原本的預覽流程。
        </p>
      </section>

      <section className="space-y-5" aria-labelledby="risk-controls">
        <h2 id="risk-controls">確認前後都必須重新檢查風險</h2>
        <p>
          訂單預覽會根據固定 1R
          風險金額，以及計算價格與停損價之間的距離，推算部位名目價值與下單數量。下單關鍵路徑中的金融數值使用
          Decimal 計算，並以 PostgreSQL Numeric 欄位保存，避免使用二進位浮點數。
        </p>
        <p>
          顯示預覽前，Bot
          會檢查合約狀態、最小下單量、最小名目價值、數量與價格精度、單筆上限，以及停損方向。系統也會套用最大部位與每日下單次數限制；若使用者另有更嚴格的個人設定，就以較嚴格的數值為準。
        </p>
        <p>
          使用者確認後，系統會用最新市場資料與合約規則再驗證一次。這個第二次檢查很重要，因為確認本身需要時間：預覽產生時有效的訂單，不代表使用者按下確認時仍然有效。
        </p>
      </section>

      <section className="space-y-5" aria-labelledby="duplicate-orders">
        <h2 id="duplicate-orders">面對不確定狀態，而不是直接重新送單</h2>
        <p>
          使用者重複點擊 Telegram 按鈕時，系統會透過資料列鎖定（row
          lock）取得待確認訂單，並將它移到 processing
          狀態。送往交易所的請求也會使用由 pending order token 產生的固定 client
          order
          ID。這些控制的目標是降低重複送單風險，而不是宣稱分散式系統永遠不會失敗。
        </p>
        <p>
          更棘手的情況是：交易所可能已經收到訂單，但本機程序沒有取得明確回應。健康檢查服務會使用同一個
          client order ID，從 Bitget 的訂單明細與歷史紀錄核對長時間停在
          processing
          的訂單。找到訂單後，系統會補齊本機狀態，但不會自動再送一次。當交易所請求的結果不明時，應先查明原訂單狀態，而不是直接重新送單。
        </p>
      </section>

      <section className="space-y-5" aria-labelledby="operations-product">
        <h2 id="operations-product">維運也是產品體驗的一部分</h2>
        <p>
          使用者看見的流程會在下單摘要結束，但一套需要長期運作的系統，還得依賴操作紀錄、管理員告警、健康檢查、資料保留清理、資料庫備份，以及有文件可循的還原程序。這些功能不會讓主要操作畫面更吸引人，卻能讓團隊在問題發生時查得清楚。
        </p>
        <p>
          部署流程也遵循相同原則。CI 會沿用 Docker Compose
          的執行路徑，檢查資料庫 migration、型別、測試與 PostgreSQL
          整合測試；發布流程會建立容器映像，並在正式環境核准後部署。維運方式因此和使用者流程放在同一套文件裡，而不是被當成看不見的實作細節。
        </p>
      </section>

      <aside className="border-border bg-muted/30 space-y-4 rounded-xl border p-6 md:p-8">
        <h2>範圍與限制</h2>
        <div className="space-y-4">
          <p className="text-base! leading-7!">
            Kaiyn Trading Bot 會連接真實的 Bitget USDT-FUTURES
            API，但這篇文章討論的是產品流程與工程決策，不構成任何投資建議，也不代表或宣稱交易獲利能力。
          </p>
          <p className="text-base! leading-7!">
            目前系統只記錄 Bitget 是否接受 GTC
            限價單，不會持續同步之後的成交、取消或到期狀態；自動掛出止盈單與大規模負載測試也不在目前公開的專案範圍內。
          </p>
        </div>
      </aside>

      <section className="space-y-5" aria-labelledby="takeaway">
        <h2 id="takeaway">背後的產品原則</h2>
        <p>
          確認優先不代表加入越多警告或點擊步驟越好，而是找出哪些狀態轉換需要讓使用者取得新資訊，或讓系統重新確認資料仍然有效。在這個專案中，這些節點分別落在建立與發布交易訊號之間、選擇下單方式與建立待確認訂單之間，以及確認與實際送單之間。
        </p>
        <p>
          這項原則不只適用於交易系統。當軟體要把非正式的意圖轉成會影響外部世界的操作時，產品應該主動揭露假設、保存可供檢查的狀態，並把不確定性視為需要處理的正式結果，而不是用自動重試把它藏起來。
        </p>
      </section>
    </div>
  )
}
