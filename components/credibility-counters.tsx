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
      { threshold: 0.3 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [isVisible])

  useEffect(() => {
    if (!isVisible) return

    const duration = 2000
    const steps = 60
    const increment = end / steps
    const stepTime = duration / steps

    let current = 0
    const timer = setInterval(() => {
      current += increment
      if (current >= end) {
        setCount(end)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, stepTime)

    return () => clearInterval(timer)
  }, [isVisible, end])

  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl sm:text-5xl font-bold text-navy mb-2">
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
          <Counter end={48} suffix="+" label="Projects Delivered" />
          <Counter end={23} suffix="+" label="Early Clients" />
          <Counter end={37} suffix="%+" label="Avg Conversion Lift" />
        </div>
        <p className="text-center text-xs text-muted-foreground mt-8 italic">Based on internal data</p>
      </div>
    </section>
  )
}
