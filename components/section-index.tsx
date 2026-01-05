"use client"

import { useEffect, useState } from "react"

const sections = [
  { id: "hero", label: "Intro", number: "01" },
  { id: "about", label: "Studio", number: "02" },
  { id: "capabilities", label: "Capabilities", number: "03" },
  { id: "portfolio", label: "Work", number: "04" },
  { id: "process", label: "Process", number: "05" },
  { id: "testimonials", label: "Clients", number: "06" },
  { id: "contact", label: "Contact", number: "07" },
]

export default function SectionIndex() {
  const [activeSection, setActiveSection] = useState("hero")
  const [scrollProgress, setScrollProgress] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Delay visibility until after loader
    const visTimer = setTimeout(() => setIsVisible(true), 3000)

    let ticking = false

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollY = window.scrollY
          const docHeight = document.documentElement.scrollHeight - window.innerHeight
          setScrollProgress(docHeight > 0 ? scrollY / docHeight : 0)

          // Find active section
          const viewportCenter = scrollY + window.innerHeight / 2

          for (let i = sections.length - 1; i >= 0; i--) {
            const element = document.getElementById(sections[i].id)
            if (element) {
              const rect = element.getBoundingClientRect()
              const elementTop = rect.top + scrollY

              if (viewportCenter >= elementTop) {
                setActiveSection(sections[i].id)
                break
              }
            }
          }

          ticking = false
        })
        ticking = true
      }
    }

    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })

    return () => {
      clearTimeout(visTimer)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  return (
    <div
      className={`fixed left-6 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col transition-all duration-700 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"}`}
    >
      {/* Progress line */}
      <div className="absolute left-[3px] top-0 bottom-0 w-px bg-white/10">
        <div
          className="w-full bg-gradient-to-b from-amber-500 to-amber-400 transition-all duration-300"
          style={{ height: `${scrollProgress * 100}%` }}
        />
      </div>

      {/* Section dots */}
      <div className="flex flex-col gap-8">
        {sections.map((section) => (
          <button
            key={section.id}
            onClick={() => scrollToSection(section.id)}
            className="group flex items-center gap-4 text-left relative"
            aria-label={`Go to ${section.label}`}
          >
            {/* Dot */}
            <div
              className={`w-[7px] h-[7px] rounded-full transition-all duration-300 relative z-10 ${
                activeSection === section.id ? "bg-amber-400 scale-150" : "bg-white/20 group-hover:bg-white/40"
              }`}
            />

            {/* Label */}
            <div
              className={`flex items-center gap-2 transition-all duration-300 ${
                activeSection === section.id
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-2 group-hover:opacity-70 group-hover:translate-x-0"
              }`}
            >
              <span className="text-[10px] font-mono text-amber-500/60">{section.number}</span>
              <span
                className={`text-xs tracking-wider uppercase ${activeSection === section.id ? "text-white" : "text-white/50"}`}
              >
                {section.label}
              </span>
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}
