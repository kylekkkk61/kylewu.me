const workflow = [
  {
    title: "Create and preview the signal",
    body: "An authorized sender creates a signal in a private Telegram conversation. The bot assigns a permanent signal ID, prepares the message and chart, and asks the sender to confirm before anything reaches the community.",
  },
  {
    title: "Let the user choose an order mode",
    body: "After the confirmed signal is forwarded, users can select a market order or a GTC limit order. This choice starts a private order workflow instead of executing immediately from the public channel.",
  },
  {
    title: "Calculate and validate",
    body: "The bot checks API configuration, fetches current market and contract information, calculates position size from the user’s fixed 1R amount, and validates local risk caps and exchange rules.",
  },
  {
    title: "Persist a pending order",
    body: "A validated order becomes a PostgreSQL-backed pending order. Telegram callbacks carry only short tokens; the full order state remains in the database and can survive a bot restart within its time-to-live.",
  },
  {
    title: "Show the final confirmation",
    body: "The user sees the order mode, calculated size, price assumptions, and risk information before explicitly confirming or cancelling the order.",
  },
  {
    title: "Claim, revalidate, and submit",
    body: "On confirmation, the bot claims the pending order with a row lock, repeats the relevant validation with fresh market data, submits the order to Bitget, and persists the result and audit event.",
  },
]

export function ConfirmationFirstTradingWorkflowArticle() {
  return (
    <div className="space-y-14 [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:tracking-tight [&_h3]:text-lg [&_h3]:font-semibold [&_p]:text-lg [&_p]:leading-8 [&_p]:text-muted-foreground">
      <section className="space-y-5">
        <p>
          In a fast-moving Telegram trading community, the shortest path from a
          signal to an exchange order can look like the best product experience.
          Fewer taps mean less delay. But an irreversible action involving live
          futures orders is not an ordinary conversion funnel: speed has to be
          balanced against ambiguity, stale information, inconsistent sizing,
          duplicate input, and simple human error.
        </p>
        <p>
          I built Kaiyn Trading Bot around a different question: how can the
          workflow remain quick while making every consequential transition
          explicit? The result is a confirmation-first system that treats a
          trading signal as the beginning of a stateful product flow, not as a
          command to place an order immediately.
        </p>
      </section>

      <section className="space-y-5" aria-labelledby="operating-problem">
        <h2 id="operating-problem">The operating problem</h2>
        <p>
          Kaiyn Capital distributes market commentary, signals, chart updates,
          and risk discussion through Telegram. That environment is useful
          precisely because information moves quickly, but the same speed
          creates operational friction. A user still needs to interpret the
          signal, decide how to enter, calculate a position, confirm the
          stop-loss direction, and check that the order is valid for the
          exchange contract.
        </p>
        <p>
          Leaving every step manual creates inconsistent execution. Automating
          everything behind one button creates a different problem: the system
          can act before the user has seen the assumptions it made. The product
          therefore needed a middle ground—structured automation with deliberate
          confirmation boundaries.
        </p>
      </section>

      <section className="space-y-6" aria-labelledby="workflow">
        <div className="space-y-3">
          <h2 id="workflow">The confirmation-first workflow</h2>
          <p>
            Confirmation happens twice, for two different actors. The signal
            sender first approves what will be distributed. The end user later
            approves the calculated order that may reach the exchange.
          </p>
        </div>
        <ol className="border-border divide-border divide-y border-y">
          {workflow.map((step, index) => (
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
        <h2 id="confirmation-boundary">
          Confirmation is a product boundary, not a modal
        </h2>
        <p>
          A confirmation screen is only useful when it changes what the user can
          understand. Asking “Are you sure?” after hiding the calculation adds
          friction without adding control. In this workflow, the preview is
          where the system exposes the order mode and its derived values before
          the action becomes irreversible.
        </p>
        <p>
          The server also persists previews and pending orders instead of
          storing the entire state inside Telegram callback data. This makes
          confirmation a real lifecycle with pending, processing, executed,
          failed, cancelled, and expired states. It also means that an active
          preview can survive a bot restart while its session remains valid.
        </p>
      </section>

      <section className="space-y-5" aria-labelledby="risk-controls">
        <h2 id="risk-controls">
          Put risk checks on both sides of confirmation
        </h2>
        <p>
          The order preview uses a fixed 1R amount and the distance between the
          calculation price and stop loss to derive the position’s notional
          value and quantity. Financial values on the order path use Decimal
          arithmetic and PostgreSQL Numeric fields rather than binary floating
          point.
        </p>
        <p>
          Before showing the preview, the bot checks the contract status,
          minimum order size, minimum notional value, quantity and price
          precision, per-order limits, and the direction of the stop loss. It
          also applies local maximum-position and daily-trade limits, choosing
          the stricter value when a user-level override exists.
        </p>
        <p>
          Those checks run again after confirmation with current market and
          contract data. The second pass matters because confirmation introduces
          time: a preview can be valid when rendered and invalid when the user
          finally acts.
        </p>
      </section>

      <section className="space-y-5" aria-labelledby="duplicate-orders">
        <h2 id="duplicate-orders">
          Design for uncertainty without resubmitting
        </h2>
        <p>
          Repeated Telegram clicks are handled by claiming a pending order under
          a database row lock and moving it into a processing state. The
          exchange request also receives a deterministic client order ID derived
          from the pending order token. Together, these controls are designed to
          reduce duplicate submissions; they are not presented as a guarantee
          that a distributed system can never fail.
        </p>
        <p>
          A harder case appears when the exchange request may have succeeded but
          the local process did not receive a conclusive response. The health
          monitor reconciles stale processing orders by looking up that client
          order ID through Bitget’s order detail and history endpoints. It
          updates local state when it finds the order, but it does not
          automatically submit another one. When the outcome of an exchange
          request is uncertain, investigating the original request is safer than
          retrying it.
        </p>
      </section>

      <section className="space-y-5" aria-labelledby="operations-product">
        <h2 id="operations-product">
          Operations are part of the product surface
        </h2>
        <p>
          The visible experience ends with an execution summary, but a workflow
          used over time also depends on audit events, administrator alerts,
          health checks, retention cleanup, database backups, and a documented
          restore path. These features do not make the primary interaction more
          attractive. They make the product inspectable when something goes
          wrong.
        </p>
        <p>
          The same principle shaped the deployment pipeline. CI exercises the
          Docker Compose path with migration checks, type checks, tests, and
          PostgreSQL integration coverage. Releases are published as container
          images and deployed only after approval for the production
          environment. The operating model is therefore documented alongside the
          user flow rather than treated as an invisible implementation detail.
        </p>
      </section>

      <aside className="border-border bg-muted/30 space-y-4 rounded-xl border p-6 md:p-8">
        <h2>Scope and limitations</h2>
        <div className="space-y-4">
          <p className="text-base! leading-7!">
            Kaiyn Trading Bot connects to live Bitget USDT-FUTURES APIs, but
            this case study describes workflow and engineering decisions. It is
            not financial advice and does not make a claim of trading
            profitability.
          </p>
          <p className="text-base! leading-7!">
            The current system records whether Bitget accepts a GTC limit order;
            it does not continuously synchronize subsequent order states such as
            filled, cancelled, or expired. Automated take-profit placement and
            large-scale load testing also remain outside the documented scope.
          </p>
        </div>
      </aside>

      <section className="space-y-5" aria-labelledby="takeaway">
        <h2 id="takeaway">The product principle</h2>
        <p>
          Confirmation-first does not mean maximizing the number of warnings or
          clicks. It means choosing the transitions where a person needs new
          information or where the system needs to re-establish validity. In
          this project, those transitions sit between drafting and publishing a
          signal, between selecting an order mode and creating a pending order,
          and between confirming and submitting to the exchange.
        </p>
        <p>
          The broader lesson applies beyond trading infrastructure: when
          software turns informal intent into a consequential external action,
          the product should make assumptions visible, persist an inspectable
          state, and treat uncertainty as a first-class outcome rather than
          hiding it behind an automatic retry.
        </p>
      </section>
    </div>
  )
}
