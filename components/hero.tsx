"use client"

import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"
import { useEffect, useRef } from "react"

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const hero = heroRef.current
    if (!hero) return

    const circles = hero.querySelectorAll("[data-circle]")
    const blobs = hero.querySelectorAll("[data-blob]")

    let rafId: number
    let scrollY = 0
    const startTime = performance.now()

    const handleScroll = () => {
      scrollY = window.scrollY
    }

    const animate = (currentTime: number) => {
      const elapsed = (currentTime - startTime) / 1000
      const offset = scrollY * 0.5

      circles.forEach((circle, i) => {
        const element = circle as HTMLElement
        const float = Math.sin(elapsed * 0.5 + i * 0.5) * 10
        const scale = 1 + Math.sin(elapsed * 0.3 + i * 0.3) * 0.02
        element.style.transform = `translate(-50%, -50%) translateY(${offset * (1 + i * 0.1) + float}px) scale(${scale})`
      })

      blobs.forEach((blob, i) => {
        const element = blob as HTMLElement
        const float = Math.sin(elapsed * 0.4 + i * 2) * 15
        const rotate = elapsed * 10 + i * 30
        element.style.transform = `translateY(${offset * 0.3 + float}px) rotate(${rotate}deg)`
      })

      rafId = requestAnimationFrame(animate)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    rafId = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      cancelAnimationFrame(rafId)
    }
  }, [])

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen pt-[152px] sm:pt-[176px] flex items-center justify-center overflow-hidden bg-gradient-to-b from-secondary/50 to-background"
    >
      {/* Background Elements - GPU Optimized */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2" style={{ willChange: "transform" }}>
          <div
            data-circle
            className="w-[300px] h-[300px] md:w-[600px] md:h-[600px] rounded-full border border-border/30 absolute top-1/2 left-1/2"
            style={{ transform: "translate(-50%, -50%)", willChange: "transform" }}
          />
          <div
            data-circle
            className="w-[400px] h-[400px] md:w-[800px] md:h-[800px] rounded-full border border-border/20 absolute top-1/2 left-1/2"
            style={{ transform: "translate(-50%, -50%)", willChange: "transform" }}
          />
          <div
            data-circle
            className="w-[500px] h-[500px] md:w-[1000px] md:h-[1000px] rounded-full border border-border/10 absolute top-1/2 left-1/2"
            style={{ transform: "translate(-50%, -50%)", willChange: "transform" }}
          />
        </div>
        <div
          data-blob
          className="absolute top-20 right-10 md:right-20 w-48 h-48 md:w-72 md:h-72 bg-gold/5 rounded-full blur-3xl"
          style={{ willChange: "transform" }}
        />
        <div
          data-blob
          className="absolute bottom-20 left-10 md:left-20 w-64 h-64 md:w-96 md:h-96 bg-navy/5 rounded-full blur-3xl"
          style={{ willChange: "transform" }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto">
        {/* Floating Badge */}
        <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-secondary border border-border mb-6 sm:mb-8">
          <div className="w-2 h-2 rounded-full bg-gold animate-pulse" />
          <span className="text-xs sm:text-sm font-medium text-muted-foreground">Systems-First Web Development</span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-7xl font-extralight tracking-tight text-foreground mb-4 sm:mb-6 text-balance">
          Websites Built, Optimized,{" "}
          <span className="bg-gradient-to-r from-gold to-gold-light bg-clip-text text-transparent">and Engineered</span>{" "}
          to Perform
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed text-pretty">
          We design and engineer high-performance websites, backend systems, and optimizations that improve speed,
          conversions, and long-term reliability—without unnecessary rebuilds.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
          <Button
            asChild
            size="lg"
            className="w-full sm:w-auto bg-navy hover:bg-navy-light text-primary-foreground px-6 sm:px-8 py-5 sm:py-6 text-sm sm:text-base"
          >
            <a href="#contact">Start Your Project</a>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="w-full sm:w-auto border-navy text-navy hover:bg-navy hover:text-primary-foreground px-6 sm:px-8 py-5 sm:py-6 text-sm sm:text-base bg-transparent"
          >
            <a href="#portfolio">View Our Work</a>
          </Button>
        </div>
      </div>

      {/* Scroll Indicator - hidden on very small screens */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden sm:block">
        <a
          href="#services"
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
        >
          <span className="text-xs font-medium uppercase tracking-wider">Scroll</span>
          <ChevronDown className="w-5 h-5" />
        </a>
      </div>
    </section>
  )
}
