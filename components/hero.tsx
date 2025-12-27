"use client"

import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"

export default function Hero() {
  return (
    <section className="relative min-h-screen pt-[152px] sm:pt-[176px] flex items-center justify-center overflow-hidden bg-gradient-to-b from-secondary/50 to-background">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="w-[300px] h-[300px] md:w-[600px] md:h-[600px] rounded-full border border-border/30 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
          <div className="w-[400px] h-[400px] md:w-[800px] md:h-[800px] rounded-full border border-border/20 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
          <div className="w-[500px] h-[500px] md:w-[1000px] md:h-[1000px] rounded-full border border-border/10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
        </div>
        <div className="absolute top-20 right-10 md:right-20 w-48 h-48 md:w-72 md:h-72 bg-gold/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 md:left-20 w-64 h-64 md:w-96 md:h-96 bg-navy/5 rounded-full blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto">
        {/* Floating Badge */}
        <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-secondary border border-border mb-6 sm:mb-8">
          <div className="w-2 h-2 rounded-full bg-gold animate-pulse" />
          <span className="text-xs sm:text-sm font-medium text-muted-foreground">AI-Powered Web Solutions</span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-7xl font-extralight tracking-tight text-foreground mb-4 sm:mb-6 text-balance">
          Custom{" "}
          <span className="bg-gradient-to-r from-gold to-gold-light bg-clip-text text-transparent">
            AI-Powered Websites
          </span>{" "}
          for Your Business
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed text-pretty">
          AI web development for businesses that want clarity and results. Transparent pricing, direct developer
          communication, no long-term contracts.
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
