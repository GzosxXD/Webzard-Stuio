"use client"

export default function NewYearBanner() {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-amber-50 via-yellow-50 to-amber-50 border-b border-amber-200/50">
      <div className="container mx-auto px-4 py-1.5 flex items-center justify-center gap-2">
        <span className="text-base text-amber-500/80">✨</span>
        <span className="text-xs sm:text-sm font-medium tracking-wide text-amber-800/90 text-center">
          New Year Sale — <span className="text-amber-700 font-semibold">15% OFF</span> All Plans Until January 10
        </span>
        <span className="text-base text-amber-500/80">✨</span>
      </div>
    </div>
  )
}
