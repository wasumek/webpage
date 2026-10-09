import { Fn } from "@/components/fn"
import { Reveal } from "@/components/reveal"

// The problem in one sentence and three numbers: payers buy activity, and the most
// expensive, best-measured chronic disease shows what that costs. A short stat row
// with no cards; the remedy is told by the four pictures in How it works. Every figure
// carries a footnote into lib/sources.ts or is labelled as a Sanafin estimate.

const facts = [
  {
    value: "12%",
    label: "of global health spending goes on diabetes alone: over USD 1 trillion in 2024.",
    sourceId: "idf-atlas",
  },
  {
    value: "52%",
    label: "of GLP-1 patients stop within twelve months. The payer has already paid for the prescriptions.",
    sourceId: "glp1-discontinuation",
  },
  {
    value: "EUR 25m+",
    label: "in German health-app repayments is now at risk, because the apps were paid before any proof of benefit.",
    sourceId: "diga-repayment",
  },
]

export function ProblemSection() {
  return (
    <section id="problem" aria-labelledby="problem-title" className="relative scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal className="mb-14 grid gap-6 lg:grid-cols-2 lg:gap-16 lg:items-end">
          <div>
            <h2 id="problem-title" className="font-display text-4xl sm:text-5xl leading-[1.04] text-[#1f1a17]">
              Payers pay for activity, not for results.
            </h2>
          </div>
          <p className="max-w-md text-base sm:text-lg leading-relaxed text-[#6f6660] lg:pb-2">
            Insurers, employers, governments and reinsurers fund chronic metabolic disease visit by visit and
            prescription by prescription. Whether anyone got healthier does not change what they pay.
          </p>
        </Reveal>

        <ul className="grid grid-cols-1 gap-10 border-t border-[#ece7e2] pt-10 md:grid-cols-3 md:gap-12">
          {facts.map((f) => (
            <li key={f.value}>
              <p className="font-display text-5xl sm:text-6xl text-[#1f1a17]">
                {f.value}
                <Fn id={f.sourceId} />
              </p>
              <p className="mt-3 max-w-xs text-[15px] leading-snug text-[#6f6660]">{f.label}</p>
            </li>
          ))}
        </ul>

      </div>
    </section>
  )
}
