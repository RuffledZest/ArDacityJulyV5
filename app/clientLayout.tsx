"use client"

import type React from "react"
import GoogleAnalytics from "@/components/GoogleAnalytics"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { useState, useEffect } from "react"
import { useIsMobile } from "@/hooks/use-mobile"

const inter = Inter({ subsets: ["latin"] })

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Don't render until mounted to avoid hydration mismatch
  if (!mounted) {
    return (
      <html lang="en" suppressHydrationWarning>
        <GoogleAnalytics />
        <body className={inter.className}>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
            <div className="min-h-screen bg-background">
              <main className="w-full">{children}</main>
            </div>
          </ThemeProvider>
        </body>
      </html>
    )
  }

  // Just render the layout for all devices, no smooth scroll
  return (
    <html lang="en" suppressHydrationWarning>
      <GoogleAnalytics />
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <div className="min-h-screen bg-background">
            <main className="w-full">{children}</main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
