"use client"

import { useEffect, useState } from "react"

export default function ChristmasBanner() {
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (prefersReducedMotion) {
      setIsPaused(true)
    }
  }, [])

  return (
    <div className="fixed top-10 sm:top-11 left-0 right-0 z-50 h-7 sm:h-8 bg-gradient-to-r from-red-900/40 via-green-900/40 to-red-900/40 backdrop-blur-sm overflow-hidden border-b border-gold/20">
      <div
        className="flex items-center h-full whitespace-nowrap"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div
          className={`flex items-center gap-12 ${isPaused ? "" : "animate-marquee"}`}
          style={{
            animationPlayState: isPaused ? "paused" : "running",
          }}
        >
          {[...Array(20)].map((_, i) => (
            <span
              key={i}
              className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-white/90 px-4 flex items-center gap-2"
            >
              <span className="text-sm">🎄</span> Christmas Offer — 15% off all plans until 10 Jan{" "}
              <span className="text-sm">🎁</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
