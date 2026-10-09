import { DeckRequestForm } from "@/components/deck-request-form"
import { publications } from "@/lib/research"
import { lois } from "@/lib/traction"

// The page's number-one job. Plain language about what Sanafin is and what the deck
// covers, no round size, no financials, and a three-field form.


const inTheDeck = [
  "The problem: payers buy activity, not results",
  "How evaluation, custody and payment release work",
  "Metabolic health in Switzerland first, then any pathway, any payer",
  "Evidence, team, research, the next 24 months",
]

export function InvestorSection() {
  return (
    <section id="investors" aria-labelledby="investors-title" className="relative scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid gap-4 rounded-[32px] bg-[#f5f1ed] p-4 lg:grid-cols-[1fr_1fr] lg:p-6">
          <div className="flex flex-col p-4 sm:p-6">
            <p className="text-[13px] text-[#766d67] mb-4">For investors</p>
            <h2 id="investors-title" className="font-display text-4xl sm:text-5xl leading-[1.04] text-[#1f1a17] mb-6">
              Let any payer, anywhere, buy verified health outcomes.
            </h2>
            <p className="text-[15px] sm:text-base leading-relaxed text-[#6f6660] mb-8 max-w-xl">
              Pre-seed, built on ETH Zurich and HSG research. Metabolic health in Switzerland is the proving ground;
              the same template works for any pathway and any payer. Request the deck — Wasu sends it personally.
            </p>

            <p className="text-[13px] text-[#766d67] mb-3">What&apos;s in the deck</p>
            <ol className="space-y-2.5">
              {inTheDeck.map((item, i) => (
                <li key={item} className="flex gap-3 text-[14.5px] leading-snug text-[#1f1a17]">
                  <span className="font-mono text-[12px] text-[#766d67] pt-0.5">0{i + 1}</span>
                  {item}
                </li>
              ))}
            </ol>
          </div>

          <div className="relative flex flex-col justify-center">
            <DeckRequestForm source="investors" />
          </div>
        </div>
      </div>
    </section>
  )
}
