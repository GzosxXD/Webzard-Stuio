"use client"

export default function NewYearBanner() {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 h-6 bg-gradient-to-r from-amber-50 via-yellow-50 to-amber-50 overflow-hidden border-b border-amber-200/30">
      <div className="flex items-center h-full">
        <div className="flex items-center animate-marquee-rtl">
          {[...Array(20)].map((_, i) => (
            <span
              key={i}
              className="text-[11px] sm:text-xs font-semibold tracking-wide px-8 flex items-center gap-2 whitespace-nowrap"
              style={{ color: "#b8860b" }}
            >
              <span className="text-amber-500">✨</span>
              <span>New Year Sale — 15% OFF All Plans Until January 10</span>
              <span className="text-amber-500">✨</span>
            </span>
          ))}
        </div>
        <div className="flex items-center animate-marquee-rtl" aria-hidden="true">
          {[...Array(20)].map((_, i) => (
            <span
              key={i}
              className="text-[11px] sm:text-xs font-semibold tracking-wide px-8 flex items-center gap-2 whitespace-nowrap"
              style={{ color: "#b8860b" }}
            >
              <span className="text-amber-500">✨</span>
              <span>New Year Sale — 15% OFF All Plans Until January 10</span>
              <span className="text-amber-500">✨</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
