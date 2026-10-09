"use client"

import { useState } from "react"
import Link from "next/link"
import { Plus } from "lucide-react"

// Objections by persona. Answers marked with a trailing note are drafted for the
// founders to confirm before launch; none makes a claim the deck does not.

const groups = [
  {
    id: "payers",
    label: "Payers",
    faqs: [
      {
        q: "How do I trust the measurement?",
        a: "The evaluation is independent of both the payer and the provider. It scores the outcome on cost-effectiveness criteria built on the Swiss WZW standard, the methodology is published, and every verdict comes with an audit record either side can re-run on its own machine from the exported file.",
      },
      {
        q: "Who holds the money, and in what currency?",
        a: "A licensed custody partner. You pay in your own currency; the funds are held by the custodian and only leave when Sanafin issues a payment instruction on a verified pass. Nothing touches speculative assets, and Sanafin never holds funds and is not a bank or payment institution.",
      },
      {
        q: "What is the regulatory set-up?",
        a: "A pilot is structured as outcome-based procurement: you buy a verified result instead of a service. How the money is held and paid is kept separate from the healthcare regulation of the care itself, and each programme is reviewed with regulatory counsel before production use.",
      },
      {
        q: "How do you prevent gaming or selection bias?",
        a: "The threshold, cohort definition and data sources are fixed before enrolment, every value is fingerprinted on entry, and the verdict is re-computable offline. Changing one value after the fact changes the fingerprint, which either side can detect without trusting Sanafin.",
      },
    ],
  },
  {
    id: "providers",
    label: "Care providers",
    faqs: [
      {
        q: "What does Sanafin cost?",
        a: "A platform licence, a per-patient fee on enrolment into an outcome-linked pathway, and a success fee on verified outcomes. The first pilot is a fixed price agreed on the call.",
      },
      {
        q: "What happens when data is missing or a patient drops out?",
        a: "Dropout and data-freshness rules are part of the contract. Monitoring surfaces gaps early, and unmet or unverifiable milestones are held or returned to the payer rather than paid on trust.",
      },
      {
        q: "How fast can a pilot start?",
        a: "Our target is a scoped pilot within two weeks of the first call: data connected in week one, rules live with a first verification report in week two. Going live depends on data access and the payer's sign-off.",
      },
      {
        q: "Where is data hosted and who can see it?",
        a: "Hosting region is agreed per contract. Data is pseudonymised for verification, access is role-based, and both parties receive the same audit record.",
      },
    ],
  },
  {
    id: "investors",
    label: "Investors",
    faqs: [
      {
        q: "Why start with metabolic health in Switzerland?",
        a: "Metabolic disease is the largest, best-measured and most medication-cost-sensitive chronic target, and Swiss reimbursement is among the strictest bars in Europe. A template that clears it is a credential everywhere else. The contract itself is pathway- and jurisdiction-agnostic: the same four fields describe a German app price, a US chronic-care threshold or a medicine rebate.",
      },
      {
        q: "Why not Lyfegen, EY or a rebate platform?",
        a: "Each covers one third of the workflow: evidence, contract logic or payment. Rebate platforms move money only as a claw-back inside an existing commercial relationship. Sanafin combines independent evaluation, a reusable contract template and payment release in one layer, with proofs anyone can re-run.",
      },
      {
        q: "What is the traction today?",
        a: "Four signed letters of intent with Swiss care partners, a diabetes-care proof of concept with a Swiss cantonal hospital, now in implementation, eight publications behind the model, and non-dilutive support from Innosuisse-funded programmes. No payer has committed money and no fee has been tested yet. The next milestones are one payer with a named budget owner and the first CHF committed conditionally.",
      },
      {
        q: "How do I get the deck?",
        a: "Use the form above. Wasu, the CEO, sends it personally within one working day.",
        link: { href: "#investors", label: "Request the deck" },
      },
    ],
  },
] as const

export function FAQSection() {
  const [active, setActive] = useState<(typeof groups)[number]["id"]>("payers")
  const group = groups.find((g) => g.id === active) ?? groups[0]

  return (
    <section id="faq" aria-labelledby="faq-title" className="relative scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-[0.8fr_1.2fr] gap-10 lg:gap-20">
        <div>
          <p className="text-[13px] text-[#766d67] mb-4">FAQ</p>
          <h2 id="faq-title" className="font-display text-4xl sm:text-5xl leading-[1.05] text-[#1f1a17] mb-6">
            The questions each side asks first.
          </h2>
          <p className="text-[15px] text-[#766d67] leading-relaxed max-w-sm mb-8">
            Anything else?{" "}
            <Link href="/demo" className="text-[#1f1a17] underline decoration-[#d9d1ca] underline-offset-4 hover:decoration-[#1f1a17]">
              Book a discovery call
            </Link>{" "}
            and we&apos;ll walk you through it.
          </p>

          <div role="tablist" aria-label="Questions by audience" className="flex flex-wrap gap-2">
            {groups.map((g) => {
              const selected = g.id === active
              return (
                <button
                  key={g.id}
                  type="button"
                  role="tab"
                  id={`faq-tab-${g.id}`}
                  aria-selected={selected}
                  aria-controls={`faq-panel-${g.id}`}
                  onClick={() => setActive(g.id)}
                  className={`rounded-full px-4 py-2 text-[14px] transition-colors ${
                    selected ? "bg-[#1f1a17] text-white" : "bg-[#f5f1ed] text-[#1f1a17] hover:bg-[#ece7e2]"
                  }`}
                >
                  {g.label}
                </button>
              )
            })}
          </div>
        </div>

        <div id={`faq-panel-${group.id}`} role="tabpanel" aria-labelledby={`faq-tab-${group.id}`} className="divide-y divide-[#ece7e2] border-y border-[#ece7e2]">
          {group.faqs.map((faq) => (
            <details key={faq.q} className="group/details">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 [&::-webkit-details-marker]:hidden">
                <h3 className="text-[17px] sm:text-lg font-medium text-[#1f1a17] leading-snug">{faq.q}</h3>
                <Plus className="h-5 w-5 shrink-0 text-[#766d67] transition-transform duration-300 group-open/details:rotate-45" aria-hidden="true" />
              </summary>
              <p className="pb-6 pr-10 text-[15px] leading-relaxed text-[#6f6660]">
                {faq.a}
                {"link" in faq && faq.link ? (
                  <>
                    {" "}
                    <Link href={faq.link.href} className="text-[#1f1a17] underline decoration-[#d9d1ca] underline-offset-4 hover:decoration-[#1f1a17]">
                      {faq.link.label} →
                    </Link>
                  </>
                ) : null}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
