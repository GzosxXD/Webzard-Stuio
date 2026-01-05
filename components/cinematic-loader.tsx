"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

export default function CinematicLoader() {
  const [isVisible, setIsVisible] = useState(true)
  const [phase, setPhase] = useState<"loading" | "reveal" | "exit">("loading")

  useEffect(() => {
    document.body.style.overflow = "hidden"

    const revealTimer = setTimeout(() => {
      setPhase("reveal")
    }, 1500)

    const exitTimer = setTimeout(() => {
      setPhase("exit")
    }, 2200)

    const hideTimer = setTimeout(() => {
      setIsVisible(false)
      document.body.style.overflow = "unset"
    }, 2800)

    return () => {
      clearTimeout(revealTimer)
      clearTimeout(exitTimer)
      clearTimeout(hideTimer)
      document.body.style.overflow = "unset"
    }
  }, [])

  if (!isVisible) return null

  return (
    <div
      className={`fixed inset-0 z-[9999] bg-background flex items-center justify-center transition-all duration-600 ease-out ${
        phase === "exit" ? "opacity-0 -translate-y-full" : "opacity-100 translate-y-0"
      }`}
    >
      {/* Background STUDIOS */}
      <div
        className={`absolute inset-0 flex items-center justify-center overflow-hidden transition-all duration-1000 ${
          phase === "loading" ? "opacity-0 scale-110" : "opacity-[0.03] scale-100"
        }`}
      >
        <span className="text-[25vw] font-black tracking-tight text-white whitespace-nowrap select-none">STUDIOS</span>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center">
        {/* W Mark */}
        <div
          className={`transition-all duration-700 ease-out ${
            phase === "loading"
              ? "scale-75 opacity-0"
              : phase === "reveal"
                ? "scale-100 opacity-100"
                : "scale-110 opacity-0"
          }`}
        >
          <Image
            src="/android-chrome-192x192.png"
            alt="Webzard"
            width={140}
            height={140}
            className="w-28 h-28 md:w-36 md:h-36"
            priority
            quality={100}
          />
        </div>

        {/* WEBZARD Text */}
        <h1
          className={`mt-8 text-6xl md:text-8xl font-extralight tracking-widest text-white transition-all duration-700 delay-200 ease-out ${
            phase === "loading"
              ? "opacity-0 translate-y-8"
              : phase === "reveal"
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-4"
          }`}
        >
          WEBZARD
        </h1>

        {/* Tagline */}
        <p
          className={`mt-4 text-sm md:text-base text-muted-foreground tracking-widest uppercase transition-all duration-500 delay-400 ${
            phase === "reveal" ? "opacity-100" : "opacity-0"
          }`}
        >
          Engineering Studio
        </p>
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-border">
        <div
          className="h-full bg-gold transition-all ease-linear"
          style={{
            width: phase === "loading" ? "0%" : phase === "reveal" ? "85%" : "100%",
            transitionDuration: phase === "loading" ? "0ms" : phase === "reveal" ? "700ms" : "300ms",
          }}
        />
      </div>

      {/* Corner markers */}
      <div className="absolute top-8 left-8 text-xs text-muted-foreground font-mono tracking-wider">01</div>
      <div className="absolute top-8 right-8 text-xs text-muted-foreground font-mono tracking-wider">LOADING</div>
      <div className="absolute bottom-8 left-8 text-xs text-muted-foreground font-mono tracking-wider">2025</div>
      <div className="absolute bottom-8 right-8 text-xs text-muted-foreground font-mono tracking-wider">EXPERIENCE</div>
    </div>
  )
}
