import {
  AdmissionsReviewFlow,
  AutomationDecisionFlow,
} from "@/components/writing/workflow-diagrams"
import { Link } from "@/i18n/routing"

export function WorkflowAutomationHumanJudgmentArticle() {
  return (
    <div className="space-y-14 [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:tracking-tight [&_h3]:text-lg [&_h3]:font-semibold [&_p]:text-lg [&_p]:leading-8 [&_p]:text-muted-foreground">
      <section className="space-y-5">
        <p>
          When people discuss AI and automation, the conversation often starts
          with tools: what a model can generate, what tasks an agent can
          complete, or how many hours a workflow might save. That framing starts
          too late. Before choosing a tool, I first need to understand the work
          itself. A useful workflow begins with standardization, not automation.
        </p>
        <p>
          What repeats? Which inputs are reliable? Where do rules remain stable?
          Which actions can be reversed? Most importantly, where does someone
          still need to interpret incomplete context, choose between competing
          values, and take responsibility for the result?
        </p>
        <p>
          Across student programme operations, crowdfunding marketing, community
          work, and software projects, I have repeatedly encountered the same
          problem at different scales. Some steps benefit from consistent rules.
          Some can be automated. Others should only be carried to a clearly
          defined decision boundary, where a person reviews the available
          evidence and makes the final call.
        </p>
      </section>

      <section className="space-y-5" aria-labelledby="three-layers">
        <h2 id="three-layers">
          Standardization, automation, and judgment are different layers
        </h2>
        <p>
          <strong className="text-foreground">Standardization</strong> defines
          how information is classified, which criteria matter, and what
          sequence a team follows. A checklist, review rubric, naming
          convention, or escalation rule can standardize work without automating
          anything.
        </p>
        <p>
          <strong className="text-foreground">Automation</strong> repeatedly
          executes a sufficiently stable rule. It may collect data, calculate a
          result, sort records, route an exception, prepare a draft, or notify
          someone when a threshold is reached.
        </p>
        <p>
          <strong className="text-foreground">Human judgment</strong> is
          required when the available rules do not produce a single responsible
          answer. This often happens when information is incomplete, objectives
          conflict, consequences are difficult to reverse, or two options look
          similar on paper but create different experiences in practice.
        </p>
        <p>
          These layers can work together. The mistake is to treat them as
          interchangeable, or to assume that introducing AI automatically turns
          an unclear process into a good one.
        </p>
      </section>

      <section className="space-y-5" aria-labelledby="standardize-first">
        <h2 id="standardize-first">Standardize before you automate</h2>
        <p>
          Before AI tools became part of my regular work, I served as general
          coordinator for a five-day pre-college business programme at National
          Cheng Kung University. The programme planned to admit 120 high-school
          students, and we wanted participants who were genuinely interested in
          learning about business administration rather than simply collecting
          another activity credential.
        </p>
        <p>
          Applications covered personal experience, motivation, academic
          interests, extracurricular activities, and future direction, so this
          was not a simple ranking problem. Around five reviewers participated,
          and each application was evaluated by approximately three people.
          Before scoring, reviewers received guidance on the relevant dimensions
          and on applying them neutrally.
        </p>
        <p>
          The review considered interest in business administration, existing
          understanding, motivation, school experience, future direction, and
          extracurricular work. We no longer have the original weighting
          document, so I would not reconstruct a precise formula after the fact.
          The value was not a supposedly perfect score, but a shared structure
          around it.
        </p>
        <p>
          Scores were consolidated and used to create an initial ranking. Large
          differences between reviewers could trigger another discussion,
          although this happened infrequently. The final meeting focused on
          candidates near the admission boundary—roughly the lower part of the
          admitted group—and compared them with similarly rated candidates just
          outside it.
        </p>
        <AdmissionsReviewFlow locale="en" />
        <p>
          Nothing about this process required AI or eliminated judgment.
          Standardization reduced arbitrary variation and made disagreement
          visible; the rubric prepared evidence, while people returned to the
          programme&apos;s purpose and decided which differences mattered.
        </p>
      </section>

      <section className="space-y-5" aria-labelledby="structured-iteration">
        <h2 id="structured-iteration">
          Data can structure iteration without deciding what to say
        </h2>
        <p>
          I encountered a different workflow while supporting digital marketing
          and product communication for the CAVE grill crowdfunding campaign.
          Advertising audiences, images, slogans, page copy, and information
          order all interacted. Evaluating them only through taste would have
          been inconsistent; treating a dashboard metric as an automatic verdict
          would have been equally weak.
        </p>
        <p>
          We used Facebook advertising data and Google Analytics to observe the
          path between seeing an advertisement, clicking it, entering the
          campaign page, interacting with different elements, and leaving.
          Facebook&apos;s built-in A/B testing also allowed alternative
          advertising approaches to be compared within the campaign workflow.
        </p>
        <p>
          The useful part was not any single metric. It was the repeatable loop:
        </p>
        <ol className="border-border divide-border divide-y border-y">
          {[
            "Observe where attention or interaction appears weaker than expected.",
            "Separate possible causes, such as the audience, creative, headline, copy, or page structure.",
            "Decide which element can be changed without confusing the rest of the test.",
            "Compare the alternatives and feed the result into the next iteration.",
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
          The data helped locate a problem and narrow the next question, but it
          did not decide what the product should mean to a customer. Monitoring,
          aggregation, and alerts can be automated; understanding why a message
          is underperforming—and whether the answer is to change it at all—still
          requires product knowledge, communication judgment, and awareness of
          what else is changing.
        </p>
      </section>

      <section className="space-y-5" aria-labelledby="decision-boundary">
        <h2 id="decision-boundary">
          Let systems carry work to the decision boundary
        </h2>
        <p>
          The same principle became more consequential when our programme team
          planned its budget. The programme had a target capacity of 120
          participants, but the operating plan needed to remain viable under
          different enrolment outcomes. Venue choices, food, transport, safety,
          and programme quality interacted with one another. Passing certain
          participation thresholds could also make it reasonable to improve a
          venue or part of the participant experience, so the relationship
          between attendance, cost, and the final surplus was not linear.
        </p>
        <p>
          We used an early generative AI tool to surface possible budget
          structures, cost reductions, and consequences. The team still built
          more than ten versions covering different enrolment and operating
          conditions because the tool could not supply constraints, informal
          dependencies, or quality expectations that we had not provided. It
          could produce options; people still had to verify assumptions and
          choose among cost, safety, capacity, transport, food, and participant
          experience.
        </p>
        <p>
          When two venues look similar across price, capacity, and convenience,
          a scoring table can show that they are close but cannot own the
          choice. A useful workflow collects inputs, calculates scenarios, flags
          inconsistencies, and compares assumptions before a person decides
          which contextual differences matter. It should not disguise that
          choice as objective merely because the numbers fit in a spreadsheet.
        </p>
      </section>

      <section
        className="space-y-5"
        aria-labelledby="consequence-reversibility"
      >
        <h2 id="consequence-reversibility">
          Consequence and reversibility determine where automation stops
        </h2>
        <p>
          Frequency helps determine whether a task is worth automating;
          consequences determine where the automation should stop. Repetitive,
          low-impact work with stable inputs is a strong candidate. A financial
          transaction, safety decision, or product action that is difficult to
          reverse demands a different design.
        </p>
        <p>
          I later applied this principle in the{" "}
          <Link
            href="/writing/confirmation-first-telegram-trading-workflow"
            className="text-foreground underline decoration-border underline-offset-4 transition-colors hover:decoration-foreground"
          >
            confirmation-first workflow for Kaiyn Trading Bot
          </Link>
          . The system can validate exchange rules, calculate position size,
          persist pending state, and prepare an order, but the signal sender and
          end user still confirm the consequential transitions.
        </p>
        <p>
          If the outcome of an exchange request is uncertain, the system checks
          the existing order instead of submitting another one. Human
          confirmation is also useful only when it exposes assumptions,
          calculated values, current constraints, and possible consequences;
          adding warnings or clicks alone does not make an action safer.
        </p>
      </section>

      <section className="space-y-6" aria-labelledby="decision-framework">
        <div className="space-y-5">
          <h2 id="decision-framework">
            A practical workflow decision framework
          </h2>
          <p>
            When I consider whether part of a workflow should be standardized or
            automated, I now work through the following questions.
          </p>
        </div>
        <AutomationDecisionFlow locale="en" />
        <div className="space-y-8">
          <div className="space-y-3">
            <h3>1. Does the step depend heavily on judgment?</h3>
            <p>
              If reasonable people can reach different answers from the same
              information, first identify what values or context make those
              answers different. Automation may prepare the comparison, but it
              should not hide the disagreement.
            </p>
          </div>
          <div className="space-y-3">
            <h3>2. Does the work occur often enough to justify a system?</h3>
            <p>
              Repeated work makes standardization valuable. Automation becomes
              more attractive when the repeated work is also time-consuming,
              tedious, or prone to inconsistent execution.
            </p>
          </div>
          <div className="space-y-3">
            <h3>3. Are the rules stable and describable?</h3>
            <p>
              A workflow can contain branches and still be automated if the
              branches can be identified and handled. A process that changes
              unpredictably or relies on unspoken expertise may need to be
              understood before it is automated.
            </p>
          </div>
          <div className="space-y-3">
            <h3>4. Are the inputs and context sufficient?</h3>
            <p>
              An accurate model applied to incomplete context can still produce
              an unsuitable recommendation. The workflow should show what
              information is missing instead of filling every gap with
              confidence.
            </p>
          </div>
          <div className="space-y-3">
            <h3>5. What happens when the system is wrong?</h3>
            <p>
              Consider reversibility, financial impact, safety, privacy, and the
              cost of correcting the outcome. Higher consequence calls for
              stronger validation, audit records, and human approval.
            </p>
          </div>
          <div className="space-y-3">
            <h3>6. Can the system explain why a person needs to intervene?</h3>
            <p>
              “Manual review required” is not enough. A useful handoff presents
              the relevant evidence, highlights the unresolved assumption, and
              makes the available options clear.
            </p>
          </div>
          <div className="space-y-3">
            <h3>7. Who owns the final decision?</h3>
            <p>
              If nobody can answer this, the workflow has a governance problem,
              not an automation problem.
            </p>
          </div>
        </div>
      </section>

      <section className="space-y-5" aria-labelledby="judgment-not-step">
        <h2 id="judgment-not-step">
          Human judgment is not another processing step
        </h2>
        <p>
          When privacy and access controls are in place, AI can help organize
          records, summarize feedback, calculate scenarios, generate
          alternatives, and identify unusual patterns. Those capabilities can
          make standardized workflows faster and more consistent, but some
          choices still have no unique objective answer. A cheaper venue and a
          more comfortable venue may be equally defensible under different
          priorities. Two applicants may receive similar scores while bringing
          different kinds of curiosity to a programme. A marketing message may
          improve clicks while weakening how the product is understood.
        </p>
        <p>
          In those situations, subjectivity is not automatically a defect. It
          can be the point where someone integrates context that was not
          captured by the model, chooses which value matters, and accepts
          responsibility for the trade-off.
        </p>
        <blockquote className="border-primary my-8 border-l-2 pl-6 font-heading text-2xl leading-9 text-foreground">
          A system can carry work to the decision boundary. The person who
          crosses it must still own the choice.
        </blockquote>
      </section>

      <aside className="border-border bg-muted/30 space-y-4 rounded-xl border p-6 md:p-8">
        <h2>Scope and limitations</h2>
        <div className="space-y-4">
          <p className="text-base! leading-7!">
            This is not an argument against automation or a prediction about a
            permanent limit on AI capability. The appropriate boundary can move
            as tools improve, inputs become more complete, and teams develop
            better controls.
          </p>
          <p className="text-base! leading-7!">
            The principle is narrower: design the boundary according to the
            information, consequences, and responsibility that exist now.
            Automate stable execution. Use AI to improve analysis and
            preparation. Keep consequential judgment visible, reviewable, and
            owned by a person rather than quietly burying it inside a workflow.
          </p>
        </div>
      </aside>
    </div>
  )
}
