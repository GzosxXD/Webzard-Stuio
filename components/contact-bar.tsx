"use client"

import { Mail, MapPin, Phone } from "lucide-react"

export default function ContactBar() {
  return (
    <div className="fixed top-0 left-0 right-0 z-[60] h-10 sm:h-11 bg-navy/95 backdrop-blur-sm border-b border-navy-light/20">
      <div className="max-w-7xl mx-auto px-4 h-full flex items-center justify-between text-xs sm:text-sm">
        {/* Desktop: Email + Phone */}
        <div className="hidden sm:flex items-center gap-6">
          <a
            href="mailto:webzardo@webzardstudios.com"
            className="flex items-center gap-2 text-primary-foreground hover:text-gold transition-colors font-medium"
          >
            <Mail className="w-4 h-4 flex-shrink-0" />
            <span>webzardo@webzardstudios.com</span>
          </a>
          <a
            href="tel:+919304087781"
            className="flex items-center gap-2 text-primary-foreground hover:text-gold transition-colors font-medium"
          >
            <Phone className="w-4 h-4 flex-shrink-0" />
            <span>+91 9304087781</span>
          </a>
        </div>

        {/* Desktop: Location */}
        <div className="hidden sm:flex items-center gap-2 text-primary-foreground/70">
          <MapPin className="w-3.5 h-3.5 flex-shrink-0" />
          <span className="text-xs">Remote-first · Globally located</span>
        </div>

        {/* Mobile: Icons only (centered) */}
        <div className="flex sm:hidden items-center justify-center gap-6 w-full">
          <a
            href="mailto:webzardo@webzardstudios.com"
            className="text-primary-foreground hover:text-gold transition-colors"
            aria-label="Email"
          >
            <Mail className="w-4 h-4" />
          </a>
          <a
            href="tel:+919304087781"
            className="text-primary-foreground hover:text-gold transition-colors"
            aria-label="Phone"
          >
            <Phone className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  )
}
