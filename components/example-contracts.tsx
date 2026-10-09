import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { example } from "@/lib/examples"
import { CTA } from "@/lib/site"

// The wedge in one glance: the metabolic template as a single contract card (the
// money as one bar, split into what is released and what is still held) next to a
// three-line pilot offer. Uses the shared example dataset, labelled illustrative.

const offer = [
  ["Downside", "Capped at the committed budget"],
  ["Upside", "A share of the verified savings"],
  ["Live", "In two weeks, our target"],
] as const

// CHF amounts as numbers, for the bar widths
const amount = (s: string) => Number(s.replace(/[^\d]/g, ""))

export function ExampleContracts() {
  const total = example.milestones.reduce((sum, m) => sum + amount(m.amount), 0)

  return (
    <section id="examples" aria-labelledby="examples-title" className="relative scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 id="examples-title" className="font-display text-4xl sm:text-5xl leading-[1.04] text-[#1f1a17] mb-5">
            One pathway, written once.
          </h2>
          <p className="text-base sm:text-lg leading-relaxed text-[#6f6660]">
            Metabolic health first: HbA1c, weight and drug costs over twelve months, at a price per verified outcome
            agreed up front. Every next payer reuses it.
          </p>
        </div>

        <div className="grid gap-4 lg:grid-cols-[1.25fr_0.75fr]">
          {/* The contract, as a card */}
          <div className="rounded-3xl border border-[#ece7e2] bg-white p-6 sm:p-8">
            <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
              <p className="text-lg font-medium text-[#1f1a17]">Type 2 diabetes</p>
              <p className="font-mono text-[12px] text-[#766d67]">
                {example.cohort} patients · {example.duration} · {example.committed}
              </p>
            </div>

            <div className="mt-6 flex flex-col gap-1 rounded-2xl bg-[#f5f1ed] px-4 py-3 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
              <p className="text-[14px] text-[#1f1a17]">{example.threshold.label}</p>
              <p className="font-mono text-[13px] text-[#0f766e]">{example.threshold.value} ✓</p>
            </div>

            <div className="mt-8" role="img" aria-label={`${example.committed} committed: CHF 60,000 released at month 6, CHF 120,000 still held`}>
              <div className="flex h-3 gap-1 overflow-hidden rounded-full">
                {example.milestones.map((m) => (
                  <span
                    key={m.label}
                    className={m.status === "Released" ? "bg-[#14b8a6]" : "bg-[#e9e3dd]"}
                    style={{ width: `${(amount(m.amount) / total) * 100}%` }}
                  />
                ))}
              </div>
              <div className="mt-3 flex gap-1">
                {example.milestones.map((m) => (
                  <div key={m.label} className="min-w-0" style={{ width: `${(amount(m.amount) / total) * 100}%` }}>
                    <p className={`font-mono text-[12px] tabular-nums ${m.status === "Released" ? "text-[#0f766e]" : "text-[#1f1a17]"}`}>
                      {m.amount.replace("CHF ", "")}
                    </p>
                    <p className="truncate text-[12px] text-[#766d67]">{m.status}</p>
                  </div>
                ))}
              </div>
            </div>

            <p className="mt-8 text-[12px] text-[#766d67]">Illustrative contract. Anything not verified goes back to the payer.</p>
          </div>

          {/* The pilot offer */}
          <div className="flex flex-col rounded-3xl bg-[#1f1a17] p-6 text-white sm:p-8">
            <p className="font-display text-2xl leading-snug sm:text-3xl">One payer, one cohort, one pathway.</p>
            <dl className="mt-8 divide-y divide-white/10 border-y border-white/10">
              {offer.map(([k, v]) => (
                <div key={k} className="flex items-baseline justify-between gap-4 py-3">
                  <dt className="text-[13px] text-white/55">{k}</dt>
                  <dd className="text-right text-[14.5px]">{v}</dd>
                </div>
              ))}
            </dl>
            <div className="flex-1" aria-hidden="true" />
            <Link
              href="/demo"
              data-cta="book_call"
              data-location="pilot"
              className="mt-8 inline-flex min-h-11 items-center justify-center gap-1.5 rounded-full bg-white px-6 py-2.5 text-[15px] font-medium text-[#1f1a17] transition-colors hover:bg-[#f1ece7]"
            >
              {CTA.buyer}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
