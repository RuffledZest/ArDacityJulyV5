"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Menu, Search, Github, Moon, Sun, X, Twitter } from "lucide-react"
import { useTheme } from "next-themes"
import Image from "next/image"
import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import { ComponentSearch } from "@/components/component-search"

interface HeaderProps {
  onMenuClick: () => void
}

export function Header({ onMenuClick }: HeaderProps) {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setMounted(true)
  }, [])

  // Hide search bar on library page to avoid redundancy
  const isLibraryPage = pathname === "/library"

  if (!mounted) {
    return null
  }

  return (
    <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-14 items-center px-4 lg:px-6">
        <Button variant="ghost" size="icon" className="md:hidden" onClick={onMenuClick}>
          <Menu className="h-5 w-5" />
        </Button>

        <div className="flex-1 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            {!isLibraryPage && (
              <div className="hidden md:flex items-center space-x-2">
                <ComponentSearch className="w-64" />
              </div>
            )}
          </div>

          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="icon" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
              {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="https://x.com/ArDacityUI" target="_blank" rel="noopener noreferrer">
                <Image
                  src="https://upload.wikimedia.org/wikipedia/commons/c/ce/X_logo_2023.svg"
                  alt="Ardacity Logo"
                  width={5}
                  height={5}
                  className="h-3 w-3 text-black dark:text-white dark:invert"
                />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
