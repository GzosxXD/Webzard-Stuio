import type React from "react"
import type { Metadata } from "next"
import { Inter, Geist_Mono } from "next/font/google"
import "./globals.css"
import NewYearBanner from "@/components/christmas-banner"
import Navbar from "@/components/navbar"

const _inter = Inter({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Webzard Studios | AI-Powered Web Development",
  description:
    "Custom AI-powered websites for businesses. Transparent pricing, direct developer communication, no long-term contracts.",
  generator: "v0.app",
  icons: {
    icon: [
      { url: "/favicon.ico", type: "image/x-icon" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#1a3a52" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Webzard Studios",
              url: "https://www.webzardstudios.com",
              email: "webzardo@webzardstudios.com",
            }),
          }}
        />
        <script src="https://cdn.botpress.cloud/webchat/v3.5/inject.js" defer></script>
        <script src="https://files.bpcontent.cloud/2025/12/18/16/20251218160236-3CR5L61B.js" defer></script>
      </head>
      <body className={`font-sans antialiased`}>
        <NewYearBanner />
        <Navbar />
        {children}
      </body>
    </html>
  )
}
