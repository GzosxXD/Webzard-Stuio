"use client"

import { useEffect, useState } from "react"

export default function NewYearBanner() {
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (prefersReducedMotion) {
      setIsPaused(true)
    }
  }, [])

  return (
    <div className="fixed top-0 left-0 right-0 z-50 h-6 bg-gradient-to-r from-amber-50 via-yellow-50 to-amber-50 overflow-hidden border-b border-amber-200/30">
      <div
        className="flex items-center h-full whitespace-nowrap"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div
          className={`flex items-center ${isPaused ? "" : "animate-marquee-rtl"}`}
          style={{
            animationPlayState: isPaused ? "paused" : "running",
          }}
        >
          {[...Array(16)].map((_, i) => (
            <span
              key={i}
              className="text-[11px] sm:text-xs font-semibold tracking-wide px-6 flex items-center gap-2"
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
