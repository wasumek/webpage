import Image from "next/image"
import stamp from "@/components/ui/logo/ibsdf-stamp.png"
import wordmark from "@/components/ui/logo/ibsdf-wordmark.png"

// The Innovation Booster win, shown the way award sites do it (Origin pattern): the
// programme's own marks between two laurel branches. Official marks only: the
// Innosuisse "Innovation Booster" stamp and the Sustainable Digital Finance wordmark
// from ibsdf.ch.

function Laurel({ flip = false }: { flip?: boolean }) {
  // Seven leaves along a gentle arc, drawn once and mirrored for the right side
  const leaves = [0, 1, 2, 3, 4, 5, 6]
  return (
    <svg viewBox="0 0 24 56" className={`h-12 w-auto shrink-0 sm:h-16 text-[#b5aaa0] ${flip ? "-scale-x-100" : ""}`} aria-hidden="true">
      <path d="M18 54 C 6 44, 4 24, 12 4" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      {leaves.map((i) => {
        const t = i / 6
        const y = 50 - t * 44
        const x = 16 - Math.sin(t * Math.PI) * 9 + t * 2
        return <ellipse key={i} cx={x - 3.5} cy={y} rx="4.2" ry="1.9" transform={`rotate(${-35 - t * 30} ${x - 3.5} ${y})`} fill="currentColor" />
      })}
    </svg>
  )
}

export function AwardBadge({ className = "" }: { className?: string }) {
  return (
    <a
      href="https://ibsdf.ch/"
      target="_blank"
      rel="noopener noreferrer"
      className={`group inline-flex items-center gap-2 ${className}`}
      aria-label="Winner of the Innovation Booster Sustainable Digital Finance, powered by Innosuisse"
    >
      <Laurel />
      <span className="flex items-center gap-2.5 text-left sm:gap-3.5">
        <Image src={stamp} alt="" className="h-11 w-11 shrink-0 sm:h-14 sm:w-14" />
        <span className="flex flex-col gap-1">
          <span className="whitespace-nowrap text-[10.5px] font-medium uppercase tracking-[0.1em] text-[#1f1a17] sm:text-[12px] sm:tracking-[0.14em]">Winner · Innovation Booster</span>
          <Image src={wordmark} alt="Sustainable Digital Finance" className="h-[16px] w-auto sm:h-[20px]" style={{ width: "auto" }} />
        </span>
      </span>
      <Laurel flip />
    </a>
  )
}
