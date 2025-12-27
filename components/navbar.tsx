"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown, Mail, Phone } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isPricingOpen, setIsPricingOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`sticky top-6 z-40 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-md shadow-sm border-b border-border" : "bg-background"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/android-chrome-192x192.png"
              alt="Webzard Studios"
              width={56}
              height={56}
              className="w-14 h-14 md:w-16 md:h-16"
            />
            <span className="text-xl font-semibold text-navy">Webzard Studios</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/services"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Services
            </Link>

            <div className="relative group">
              <button className="flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                Pricing
                <ChevronDown className="w-4 h-4" />
              </button>
              <div className="absolute left-0 mt-0 w-48 bg-card border border-border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 py-2">
                <Link
                  href="/pricing"
                  className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-colors"
                >
                  Website Building
                </Link>
                <Link
                  href="/website-optimization"
                  className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-colors"
                >
                  Website Optimization
                </Link>
              </div>
            </div>

            <Link
              href="/portfolio"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Portfolio
            </Link>

            <Link
              href="/how-we-work"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              How We Work
            </Link>

            <Link
              href="/testimonials"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Testimonials
            </Link>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <div className="flex flex-col items-end gap-0.5">
              <a
                href="mailto:webzardo@webzardstudios.com"
                className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-gold transition-colors"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>webzardo@webzardstudios.com</span>
              </a>
              <a
                href="tel:+919304087781"
                className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-gold transition-colors"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>+91 9304087781</span>
              </a>
            </div>
            <Button asChild className="bg-navy hover:bg-navy-light text-primary-foreground px-6">
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-background border-b border-border">
          <div className="px-6 py-4 space-y-4">
            <Link
              href="/services"
              className="block text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Services
            </Link>

            <div>
              <button
                onClick={() => setIsPricingOpen(!isPricingOpen)}
                className="flex items-center justify-between w-full text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                Pricing
                <ChevronDown className={`w-4 h-4 transition-transform ${isPricingOpen ? "rotate-180" : ""}`} />
              </button>
              {isPricingOpen && (
                <div className="pl-4 mt-2 space-y-2">
                  <Link
                    href="/pricing"
                    className="block text-xs font-medium text-muted-foreground hover:text-foreground transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Website Building
                  </Link>
                  <Link
                    href="/website-optimization"
                    className="block text-xs font-medium text-muted-foreground hover:text-foreground transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Website Optimization
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/portfolio"
              className="block text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Portfolio
            </Link>

            <Link
              href="/how-we-work"
              className="block text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              How We Work
            </Link>

            <Link
              href="/testimonials"
              className="block text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Testimonials
            </Link>

            <Button asChild className="w-full bg-navy hover:bg-navy-light text-primary-foreground">
              <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                Get in Touch
              </Link>
            </Button>
          </div>
        </div>
      )}
    </nav>
  )
}
