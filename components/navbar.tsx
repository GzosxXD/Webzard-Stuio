"use client"

import { useState, useEffect } from "react"
import { Menu, X, ChevronDown } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isPricingOpen, setIsPricingOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const visTimer = setTimeout(() => setIsVisible(true), 2900)

    let ticking = false
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 50)
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => {
      clearTimeout(visTimer)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <nav
      className={`fixed top-[38px] left-0 right-0 z-40 transition-all duration-500 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
      } ${isScrolled ? "bg-background/95 backdrop-blur-md" : "bg-transparent"}`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <Image
              src="/android-chrome-192x192.png"
              alt="Webzard Studios"
              width={48}
              height={48}
              className="w-10 h-10 md:w-12 md:h-12 transition-transform group-hover:scale-105"
              priority
              quality={90}
            />
            <div className="flex flex-col">
              <span className="text-lg font-light text-white tracking-widest">WEBZARD</span>
              <span className="text-[0.6rem] text-muted-foreground tracking-widest -mt-0.5">STUDIOS</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10">
            <Link
              href="/services"
              className="text-sm text-muted-foreground hover:text-white transition-colors duration-300 tracking-wide"
            >
              Services
            </Link>

            <div className="relative group">
              <button className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-white transition-colors duration-300 tracking-wide">
                Pricing
                <ChevronDown className="w-3.5 h-3.5" />
              </button>
              <div className="absolute left-0 mt-4 w-52 bg-card border border-border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 py-2">
                <Link
                  href="/pricing"
                  className="block px-5 py-3 text-sm text-muted-foreground hover:text-white hover:bg-secondary transition-all duration-200"
                >
                  Website Building
                </Link>
                <Link
                  href="/website-optimization"
                  className="block px-5 py-3 text-sm text-muted-foreground hover:text-white hover:bg-secondary transition-all duration-200"
                >
                  Website Optimization
                </Link>
              </div>
            </div>

            <Link
              href="/portfolio"
              className="text-sm text-muted-foreground hover:text-white transition-colors duration-300 tracking-wide"
            >
              Work
            </Link>

            <Link
              href="/how-we-work"
              className="text-sm text-muted-foreground hover:text-white transition-colors duration-300 tracking-wide"
            >
              Process
            </Link>

            <Link
              href="/testimonials"
              className="text-sm text-muted-foreground hover:text-white transition-colors duration-300 tracking-wide"
            >
              Clients
            </Link>
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-6">
            <a
              href="mailto:webzardo@webzardstudios.com"
              className="text-xs text-muted-foreground hover:text-gold transition-colors duration-300"
            >
              webzardo@webzardstudios.com
            </a>
            <Link
              href="/contact"
              className="px-6 py-2.5 bg-white text-background text-sm font-medium tracking-wide hover:bg-gold transition-all duration-300"
            >
              Get in Touch
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6 text-white" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-card border-t border-border">
          <div className="px-6 py-6 space-y-5">
            <Link
              href="/services"
              className="block text-sm text-muted-foreground hover:text-white transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Services
            </Link>

            <div>
              <button
                onClick={() => setIsPricingOpen(!isPricingOpen)}
                className="flex items-center justify-between w-full text-sm text-muted-foreground hover:text-white transition-colors"
              >
                Pricing
                <ChevronDown className={`w-4 h-4 transition-transform ${isPricingOpen ? "rotate-180" : ""}`} />
              </button>
              {isPricingOpen && (
                <div className="pl-4 mt-3 space-y-3 border-l border-border">
                  <Link
                    href="/pricing"
                    className="block text-sm text-muted-foreground hover:text-white transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Website Building
                  </Link>
                  <Link
                    href="/website-optimization"
                    className="block text-sm text-muted-foreground hover:text-white transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Website Optimization
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/portfolio"
              className="block text-sm text-muted-foreground hover:text-white transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Work
            </Link>

            <Link
              href="/how-we-work"
              className="block text-sm text-muted-foreground hover:text-white transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Process
            </Link>

            <Link
              href="/testimonials"
              className="block text-sm text-muted-foreground hover:text-white transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Clients
            </Link>

            <Link
              href="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block w-full text-center py-3 bg-white text-background text-sm font-medium"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
