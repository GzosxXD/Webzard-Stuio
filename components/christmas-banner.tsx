"use client"

export default function NewYearBanner() {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-background border-b border-border">
      <div className="container mx-auto px-4 py-2 flex items-center justify-center gap-3">
        <span className="text-xs text-gold/60">✦</span>
        <span className="text-xs font-medium tracking-widest uppercase text-muted-foreground">
          New Year Sale — <span className="text-gold font-semibold">15% OFF</span> All Plans Until January 10
        </span>
        <span className="text-xs text-gold/60">✦</span>
      </div>
    </div>
  )
}
