import {
  LiveCaseTimeline,
  NeedsToServiceDesignFlow,
} from "@/components/writing/service-design-diagrams"
import { Link } from "@/i18n/routing"

export function ParticipantNeedsServiceDesignArticle() {
  return (
    <div className="space-y-14 [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:tracking-tight [&_h3]:text-lg [&_h3]:font-semibold [&_p]:text-lg [&_p]:leading-8 [&_p]:text-muted-foreground">
      <section className="space-y-5">
        <p>
          Asking people what they want is useful, but it is not always enough to
          design a good service. This is especially true when the participants
          are still forming the frame they need to answer the question.
        </p>
        <p>
          In 2023, I served as General Coordinator and Head of Administration
          for the 26th National Cheng Kung University Business Administration
          Pre-college Camp. A 60-person student team had one year to design and
          operate a five-day residential experience for 120 high-school
          students. The goal was not to persuade every participant to study
          business. It was to give them enough knowledge, practice, and lived
          experience to make a better judgment for themselves.
        </p>
        <p>
          That changed the design problem. We were not assembling a timetable of
          popular activities. We were building a service that had to connect
          uncertain participant needs, educational intent, social experience,
          safety, budget, and minute-by-minute operations.
        </p>
      </section>

      <section className="space-y-5" aria-labelledby="needs-before-answers">
        <h2 id="needs-before-answers">
          Participants do not always have the language for their needs
        </h2>
        <p>
          Many high-school students already had an interest in management,
          finance, entrepreneurship, or business. Some had even tried small
          projects of their own. What they did not yet have was direct
          experience of university study or the work that might follow it. Their
          application answers could tell us what sounded interesting, but not
          necessarily what experience would help them understand the field.
        </p>
        <p>
          We therefore treated direct requests as one input rather than a full
          specification. I reviewed applications and post-event feedback from
          the previous cohort, received a detailed handover from its
          coordinator, and worked through archives left by earlier teams. For
          the current cohort, we studied application responses and gathered
          informal observations from team members who regularly spoke with
          high-school students through tutoring or school networks.
        </p>
        <p>
          Each source had a different weakness. Historical feedback described a
          past version of the camp. Current applications reflected what students
          could already articulate. Team experience carried useful context, but
          also personal bias. Used together, they gave us a more reliable view
          of the service than any one survey could provide.
        </p>
        <NeedsToServiceDesignFlow locale="en" />
      </section>

      <section className="space-y-5" aria-labelledby="stable-and-adjustable">
        <h2 id="stable-and-adjustable">
          Preserve the service spine, redesign the adjustable parts
        </h2>
        <p>
          A recurring program should not be rebuilt from zero each year. Some
          parts existed for good reasons: participants needed a coherent
          introduction to business, a safe residential environment, time to
          build relationships, and a schedule the organizing team could actually
          operate.
        </p>
        <p>
          The design work was to distinguish that stable spine from the parts
          that should respond to the current cohort. We reduced the number and
          length of external speaker sessions we had initially considered, then
          used more interactive formats to introduce business concepts. An
          investment game, for example, made abstract ideas easier to test and
          discuss than another long lecture would have.
        </p>
        <p>
          We also kept social activities, an evening program, and a dance. A
          five-day camp made entirely of classes might appear academically
          rigorous, but it would not match how teenagers sustain attention,
          build trust, or remember an experience. Learning and enjoyment were
          not competing products. They were two parts of the same service.
        </p>
      </section>

      <section className="space-y-5" aria-labelledby="live-company-case">
        <h2 id="live-company-case">
          Use one real problem to connect the program
        </h2>
        <p>
          The most important change was replacing a fictional case with a live
          company challenge. We considered companies in human resources,
          marketing, and information technology before selecting{" "}
          <a
            href="https://www.happyfood1000.com.tw/"
            target="_blank"
            rel="noreferrer"
            className="text-foreground underline decoration-border underline-offset-4 transition-colors hover:decoration-foreground"
          >
            Happy Food 1000 Co., Ltd.
          </a>
          , a Tainan-based social enterprise working across local agriculture,
          food products, and intergenerational farming collaboration.
        </p>
        <p>
          Local agriculture was a timely issue, and the company connected that
          issue to the city where the camp took place. It was also established
          enough to offer a substantive operating problem while remaining close
          enough to the local context for high-school students to investigate.
        </p>
        <p>
          Company leaders introduced the challenge on the first day. Over the
          next several days, teams received time, analytical tools, and coaching
          from business students. On the final day, they presented their
          proposals directly to the company. The case became the thread
          connecting otherwise separate lessons. Every new concept had a
          practical question waiting for it.
        </p>
        <LiveCaseTimeline locale="en" />
      </section>

      <section className="space-y-5" aria-labelledby="participant-choice">
        <h2 id="participant-choice">
          Let participants explore instead of prescribing one future
        </h2>
        <p>
          Another part of the program, called Virtual University, addressed a
          different uncertainty. Participants did not only want to know what a
          business course contained. They wanted to understand what university
          life and the paths after it might feel like.
        </p>
        <p>
          Our team built a small web-based course registration system modelled
          on NCKU&apos;s own enrolment experience. Participants chose from
          several sessions led by senior students and alumni, covering topics
          such as double majors, clubs, internships, overseas exchange,
          relationships, university life, and early career experience.
        </p>
        <p>
          The interface was playful, but the product decision was serious. We
          did not decide which future mattered most. We created a structured way
          for participants to choose what they were ready to explore.
        </p>
      </section>

      <section className="space-y-5" aria-labelledby="operations-are-design">
        <h2 id="operations-are-design">
          The experience depended on an operating system
        </h2>
        <p>
          Service design became operational long before participants arrived. I
          recruited and aligned the heads of seven departments, then worked
          across administration, program design, training, human resources,
          media, design, and external coordination. As Head of Administration, I
          also carried direct responsibility for finance, admissions, marketing,
          venues, logistics, and the integrated schedule. This leadership role
          is also documented in my{" "}
          <Link
            href="/resume"
            className="text-foreground underline decoration-border underline-offset-4 transition-colors hover:decoration-foreground"
          >
            public resume
          </Link>
          .
        </p>
        <p>
          The schedule was reviewed at minute-level detail. We replayed what
          could happen across the five days, checked handoffs between teams, and
          prepared different budget and capacity scenarios. A smaller cohort
          would have required changes to venues and activities; reaching the
          target of 120 participants allowed us to deliver the fuller version of
          the experience.
        </p>
        <p>
          COVID-19 added another service constraint. The operating plan covered
          masks, ventilation, seating, temperature checks, sanitation, rapid
          testing, and escalation procedures. These details were not separate
          from the participant experience. They were the system that allowed the
          program to run safely and retain university approval.
        </p>
      </section>

      <section className="space-y-6" aria-labelledby="evidence-and-limits">
        <div className="space-y-5">
          <h2 id="evidence-and-limits">What the evidence supports</h2>
          <p>
            All 120 selected participants attended. After the camp, 100
            participants completed the feedback survey, an 83.3 percent response
            rate. The results support the overall service direction, while
            remaining self-reported feedback from one cohort rather than a
            controlled evaluation.
          </p>
        </div>

        <dl className="not-prose border-border grid overflow-hidden rounded-2xl border sm:grid-cols-2">
          {[
            ["4.41 / 5", "Average rating for the overall program flow"],
            ["4.35 / 5", "Average rating for course arrangement"],
            ["87%", "Rated the overall flow 4 or 5"],
            ["88%", "Rated course arrangement 4 or 5"],
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
          When asked which course area was most beneficial, 47 respondents
          selected marketing, 27 selected financial management, and 26 selected
          human resources. For the learning games, 45 selected the investment
          game, 36 selected the lottery wager, and 19 selected the advertising
          game theory activity. Open responses also frequently mentioned the
          dance, showing that the social experience remained memorable beside
          the academic content.
        </p>
        <p>
          These results do not prove that every design choice caused a specific
          outcome, and they do not justify claims about national rankings or
          long-term educational impact. They do show that a large program could
          maintain both learning value and experience quality when research,
          content, and operations were designed as one system.
        </p>
      </section>

      <section className="space-y-5" aria-labelledby="service-design-takeaway">
        <h2 id="service-design-takeaway">
          Design the conditions for a better decision
        </h2>
        <p>
          Participants could not be expected to specify the perfect camp in
          advance. Our responsibility was to combine what they said, what past
          cohorts revealed, what the team had learned, and what the operating
          environment allowed.
        </p>
        <p>
          The resulting service did not tell high-school students what to study
          or who to become. It gave them real problems, informed choices, social
          connection, and enough reflection to leave with a clearer view of
          their own interests.
        </p>
        <blockquote className="border-primary my-8 border-l-2 pl-6 font-heading text-2xl leading-9 text-foreground">
          Good service design does not answer for participants. It creates the
          conditions in which they can form a better answer themselves.
        </blockquote>
      </section>
    </div>
  )
}
