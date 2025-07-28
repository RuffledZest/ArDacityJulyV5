"use client"

import { Button } from "@/components/ui/button"
import { Menu, Moon, Sun, Wallet } from "lucide-react"
import { useTheme } from "next-themes"
import { useState, useEffect } from "react"
import Link from "next/link"
import ArweaveWalletBtn from '@ar-dacity/ardacity-wallet-btn';
//import logo img
import logo from "@/public/logo.png"
import Image from "next/image"

interface HeaderProps {
  onMenuClick: () => void
}

export function Header2({ onMenuClick }: HeaderProps) {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Function to handle smooth scrolling
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  if (!mounted) {
    return null
  }

  return (
    <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-14 items-center px-4 lg:px-8">
        <Button variant="ghost" size="icon" className="md:hidden" onClick={onMenuClick}>
          <Menu className="h-5 w-5" />
        </Button>

        

        <div className=" flex items-center justify-between w-full">
       

          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center space-x-2">
              <div className="relative">
                <img
                  src={logo.src || "/placeholder.svg"}
                  alt="Ardacity Logo"
                  className="h-12 w-full invert dark:invert-0"
                />
              </div>
            </div>
          </div>
        

          {/* Navigation Links in Center */}
          

          <nav className="hidden translate-x-12 md:flex items-center space-x-6">
            <Link href="/library/docs/" className="text-sm font-medium transition-colors hover:text-cyan-500">
              Docs
            </Link>
            <Link href="/library/" className="text-sm font-medium transition-colors hover:text-cyan-500">
              Components
            </Link>
            <Link href="/#projects" className="text-sm font-medium transition-colors hover:text-cyan-500">
              Projects
            </Link>
          </nav>
         

          <div className="flex items-center space-x-2">
            {/* Connect Wallet Button */}
            {/* <Button variant="outline" size="sm" className="hidden md:flex items-center gap-2">
              <Wallet className="h-4 w-4" />
              Connect Wallet
            </Button> */}
            <ArweaveWalletBtn
        variant="outline"
        size="sm"
        label={{
          connect: ` Connect Wallet`,
          disconnect: "",
          connecting: "Please wait..."
        }}
        showAddress={true}
        addressDisplayLength={8}
        className="hidden md:flex items-center gap-2 px-3 py-[6px]"
      ></ArweaveWalletBtn>

            <Button variant="ghost" size="icon" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
              {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="https://x.com/ArDacityUI" target="_blank" rel="noopener noreferrer">
                {/* <Github className="h-5 w-5" /> */}

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
