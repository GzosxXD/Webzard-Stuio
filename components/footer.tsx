import { Mail, Phone } from "lucide-react"
import Image from "next/image"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    company: [
      { label: "Services", href: "/services" },
      { label: "About", href: "/about" },
      { label: "Portfolio", href: "/portfolio" },
      { label: "Pricing", href: "/pricing" },
      { label: "Testimonials", href: "/testimonials" },
    ],
    support: [
      { label: "Contact", href: "#contact" },
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
    ],
  }

  return (
    <footer className="bg-navy text-primary-foreground">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/android-chrome-192x192.png"
                alt="Webzard Studios"
                width={40}
                height={40}
                className="w-10 h-10"
              />
              <span className="text-xl font-medium">Webzard Studios</span>
            </div>
            <p className="text-primary-foreground/70 max-w-sm leading-relaxed">
              Remote-first AI web development studio. Custom business websites with transparent pricing and direct
              developer communication.
            </p>

            <div className="mt-6 space-y-2">
              <div className="flex items-center gap-2 text-sm text-primary-foreground/70">
                <Mail className="w-4 h-4" />
                <span>webzardo@webzardstudios.com</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-primary-foreground/70">
                <Phone className="w-4 h-4" />
                <span>+91 9304087781</span>
              </div>
              <p className="text-xs text-primary-foreground/50 mt-2">Remote studio · Response within 24 hours</p>
            </div>

            <div className="mt-6 flex items-center gap-3">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 border border-primary-foreground/20">
                <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
                  <path d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.37 3.477a.64.64 0 0 1 .633-.538h7.397c2.093 0 3.655.523 4.642 1.554.97 1.013 1.33 2.447.96 4.264-.032.156-.068.31-.109.459l-.007.03c-.03.11-.063.224-.1.336-.015.042-.03.086-.045.128a7.37 7.37 0 0 1-.141.361l-.047.111a6.03 6.03 0 0 1-.196.408l-.002.004a5.78 5.78 0 0 1-.262.434l-.053.08a5.236 5.236 0 0 1-.312.415l-.018.022a4.87 4.87 0 0 1-.362.395l-.082.079a4.56 4.56 0 0 1-.37.31l-.113.086a4.96 4.96 0 0 1-.447.289 5.64 5.64 0 0 1-.535.276l-.147.063c-.18.076-.37.143-.565.203l-.152.046a6.59 6.59 0 0 1-.67.156l-.078.013c-.218.04-.445.07-.68.091l-.126.01a8.31 8.31 0 0 1-.654.032H9.28l-.433 2.749-.003.016a.64.64 0 0 1-.633.54H7.076zm8.73-14.56c-.002.017-.005.033-.007.05l-.006.045c-.27 1.745-1.196 2.349-2.754 2.349h-.698a.32.32 0 0 0-.316.27l-.534 3.389-.151.959a.168.168 0 0 0 .166.194h1.918a.32.32 0 0 0 .316-.27l.13-.827.034-.218.266-1.689a.32.32 0 0 1 .316-.27h.199c1.29 0 2.3-.524 2.596-2.041.124-.634.06-1.163-.27-1.536a1.47 1.47 0 0 0-.455-.326 2.5 2.5 0 0 0-.604-.174 4.63 4.63 0 0 0-.146.095z" />
                </svg>
                <span className="text-sm">Secure PayPal Payments</span>
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-medium mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="font-medium mb-4">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/10">
          <p className="text-center text-sm text-primary-foreground/60">
            © {currentYear} Webzard Studios. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
