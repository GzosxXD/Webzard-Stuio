"use client"

import { useEffect, useRef, useState } from "react"

interface CounterProps {
  end: number
  suffix: string
  label: string
}

function Counter({ end, suffix, label }: CounterProps) {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true)
        }
      },
      {
        threshold: 0.3,
        rootMargin: "0px 0px -100px 0px",
      },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [isVisible])

  useEffect(() => {
    if (!isVisible) return

    const duration = 2000
    const startTime = performance.now()
    let rafId: number

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      const current = Math.floor(easeOutQuart * end)

      setCount(current)

      if (progress < 1) {
        rafId = requestAnimationFrame(animate)
      } else {
        setCount(end)
      }
    }

    rafId = requestAnimationFrame(animate)

    return () => cancelAnimationFrame(rafId)
  }, [isVisible, end])

  return (
    <div ref={ref} className="text-center min-h-[100px] flex flex-col justify-center">
      <div className="text-4xl sm:text-5xl font-bold text-navy mb-2" style={{ willChange: "contents" }}>
        {count}
        {suffix}
      </div>
      <div className="text-sm text-muted-foreground">{label}</div>
    </div>
  )
}

export default function CredibilityCounters() {
  return (
    <section className="py-16 bg-secondary/50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12">
          <Counter end={16} suffix="+" label="Projects Delivered" />
          <Counter end={14} suffix="+" label="Happy Clients" />
          <Counter end={38} suffix="%" label="Avg Traffic Growth" />
        </div>
        <p className="text-center text-xs text-muted-foreground mt-8 italic">Based on internal data</p>
      </div>
    </section>
  )
}
