import { Fn } from "@/components/fn"
import { Reveal } from "@/components/reveal"
import { media } from "@/lib/media"

// Four sourced facts, one per asset class and jurisdiction, then one calm comparison.
// The point of the row is breadth: the condition is already law for medicines, for
// GLP-1 therapy, for prescription apps and for gene therapy. Every figure carries a
// footnote into lib/sources.ts or is labelled as a Sanafin estimate.

const facts = [
  {
    value: "CHF 9.7bn",
    label: "of mandatory-insurance spend went on medicines in 2025, about a fifth of all OKP cost",
    sourceId: "okp-medicines",
    region: "Medicines · Switzerland",
    settles: "Settles backward — the insurer pays the listed price, then collects the rebate itself.",
  },
  {
    value: "52%",
    label: "of patients starting a GLP-1 for weight management stop within twelve months",
    sourceId: "glp1-discontinuation",
    region: "GLP-1 · Switzerland",
    settles: "Settles on paper — cost-approval forms and an outcome check every six months.",
  },
  {
    value: "EUR 25m+",
    label: "of repayment claims at risk after apps were paid before proof. Nine manufacturers insolvent",
    sourceId: "diga-repayment",
    region: "Health apps · Germany",
    settles: "Settles through claims — against manufacturers that may no longer exist.",
  },
  {
    value: "11 years",
    label: "that CMS will spend reconciling outcomes it negotiated for 32 states, DC and Puerto Rico",
    sourceId: "cms-cgt",
    region: "Gene therapy · United States",
    settles: "Settles by reconciliation — paid first at millions a patient, rebated later.",
  },
]

const today = [
  "Evidence assembled by hand, per payer, at CHF 100k to 250k a project.",
  "No trial phase before a listing: no payer money until the evidence already exists.",
  "The verdict lives in a spreadsheet nobody else can re-run.",
]

const withSanafin = [
  "A funder commits money up front, held by a licensed custody partner.",
  "The result is checked against the threshold the contract fixed in advance.",
  "Either side re-computes the proof from the exported file.",
]

export function ProblemSection() {
  return (
    <section id="problem" aria-labelledby="problem-title" className="relative scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal className="mb-14 grid gap-6 lg:grid-cols-2 lg:gap-16 lg:items-end">
          <div>
            <p className="text-[13px] text-[#766d67] mb-4">The problem</p>
            <h2 id="problem-title" className="font-display text-4xl sm:text-5xl leading-[1.04] text-[#1f1a17]">
              Healthcare has decided to pay for outcomes.
              <br />
              <span className="text-[#1f1a17]/45">Every programme settles it backward.</span>
            </h2>
          </div>
          <p className="max-w-md text-base sm:text-lg leading-relaxed text-[#6f6660] lg:pb-2">
            The condition is already written into law for medicines, for GLP-1 therapy, for prescription apps and for
            gene therapy. What is missing in every one of them is the same thing: a layer that holds the money and
            releases it forward, against an outcome either side can verify.
          </p>
        </Reveal>

        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {facts.map((f) => (
            <li key={f.value + f.label} className="flex min-h-[240px] flex-col justify-between rounded-3xl bg-[#f5f1ed] p-6 sm:p-7">
              <p className="text-[13px] text-[#766d67]">{f.region}</p>
              <div>
                <p className="font-display text-4xl sm:text-5xl text-[#1f1a17]">
                  {f.value}
                  <Fn id={f.sourceId} />
                </p>
                <p className="mt-3 text-[14.5px] leading-snug text-[#6f6660]">{f.label}</p>
                <p className="mt-4 border-t border-[#e3dcd5] pt-3 text-[13px] leading-snug text-[#766d67]">{f.settles}</p>
              </div>
            </li>
          ))}
        </ul>

        <Reveal className="mt-16 border-t border-[#ece7e2] pt-10" delay={0.1}>
          <div className="grid gap-10 md:grid-cols-2 md:gap-16">
            <div>
              <p className="text-[13px] text-[#766d67] mb-5">Today</p>
              <ul className="space-y-4">
                {today.map((t, i) => (
                  <li key={t} className="flex gap-3 text-[15px] sm:text-base leading-snug text-[#1f1a17]">
                    <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#d9d1ca]" aria-hidden="true" />
                    <span>
                      {t}
                      {i === 0 && <Fn id="consultancy-estimate" />}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-[13px] text-[#0f766e] mb-5">With Sanafin</p>
              <ul className="space-y-4">
                {withSanafin.map((t) => (
                  <li key={t} className="flex gap-3 text-[15px] sm:text-base leading-snug text-[#1f1a17]">
                    <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#14b8a6]" aria-hidden="true" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {media.problemStill && (
            <img
              src={media.problemStill}
              alt="A row of small brass tokens, most tipped over, with a single teal marble resting apart from them"
              className="mt-10 hidden h-56 w-full rounded-3xl object-cover md:block"
              loading="lazy"
            />
          )}
        </Reveal>
      </div>
    </section>
  )
}
