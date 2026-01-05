"use client"

import { useEffect, useRef, useState } from "react"

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const loadTimer = setTimeout(() => setIsLoaded(true), 2900)

    const handleScroll = () => {
      const scrollY = window.scrollY
      const windowHeight = window.innerHeight
      const progress = Math.min(scrollY / windowHeight, 1)
      setScrollProgress(progress)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => {
      clearTimeout(loadTimer)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background"
      style={{ paddingTop: "calc(2rem + 40px)" }}
    >
      {/* Dynamic background layers */}
      <div className="absolute inset-0">
        <div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-gold/5 blur-3xl"
          style={{
            transform: `translate(${scrollProgress * -50}px, ${scrollProgress * 30}px)`,
            opacity: 1 - scrollProgress * 0.5,
          }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-blue-500/5 blur-3xl"
          style={{
            transform: `translate(${scrollProgress * 40}px, ${scrollProgress * -20}px)`,
            opacity: 1 - scrollProgress * 0.5,
          }}
        />
      </div>

      {/* Main content */}
      <div
        className="relative z-10 text-center px-6 max-w-5xl mx-auto"
        style={{
          transform: `translateY(${scrollProgress * -80}px)`,
          opacity: 1 - scrollProgress * 1.5,
        }}
      >
        {/* Chapter marker */}
        <div
          className={`mb-12 transition-all duration-1000 delay-300 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
        >
          <span className="text-xs font-mono text-gold/60 tracking-widest uppercase">/ 01 — Introduction</span>
        </div>

        {/* Main heading */}
        <h1
          className={`text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extralight tracking-tight text-white leading-tight mb-8 transition-all duration-1000 delay-500 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <span className="block">Websites Built,</span>
          <span className="block">
            Optimized, &{" "}
            <span className="bg-gradient-to-r from-gold to-gold-light bg-clip-text text-transparent">Engineered</span>
          </span>
          <span className="block text-muted-foreground">to Perform</span>
        </h1>

        {/* Subheading */}
        <p
          className={`text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed font-light transition-all duration-1000 delay-700 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          We optimize frontend, backend, and infrastructure so your site loads fast, stays stable, and turns visitors
          into customers.
        </p>

        {/* CTA buttons */}
        <div
          className={`mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-1000 delay-900 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <a
            href="#contact"
            className="px-8 py-4 bg-white text-background font-medium text-sm tracking-wider uppercase transition-all duration-300 hover:bg-gold"
          >
            Start Your Project
          </a>
          <a
            href="#portfolio"
            className="px-8 py-4 border border-border text-muted-foreground font-medium text-sm tracking-wider uppercase transition-all duration-300 hover:border-muted-foreground hover:text-white"
          >
            View Work
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className={`absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 transition-all duration-500 ${scrollProgress > 0.1 ? "opacity-0" : "opacity-100"} ${isLoaded ? "translate-y-0" : "translate-y-4"}`}
        style={{ transitionDelay: isLoaded ? "1100ms" : "0ms" }}
      >
        <span className="text-xs text-muted-foreground tracking-widest uppercase">Scroll to Explore</span>
        <div className="w-px h-16 bg-gradient-to-b from-muted-foreground to-transparent relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-4 bg-gold animate-[scrollLine_2s_ease-in-out_infinite]" />
        </div>
      </div>
    </section>
  )
}
