"use client"

import type React from "react"
import { useState } from "react"
import { Menu, X, Home, User, Settings, Mail } from "lucide-react"

interface NavItem {
  label: string
  href: string
  icon?: React.ReactNode
}

interface RetroNavbarProps {
  title?: string
  items?: NavItem[]
  primaryColor?: string
  secondaryColor?: string
  textColor?: string
  className?: string
  logo?: React.ReactNode
}

export function RetroNavbar({
  title = "RETRO SITE",
  items = [
    { label: "Home", href: "#", icon: <Home className="w-4 h-4" /> },
    { label: "About", href: "#", icon: <User className="w-4 h-4" /> },
    { label: "Contact", href: "#", icon: <Mail className="w-4 h-4" /> },
    { label: "Settings", href: "#", icon: <Settings className="w-4 h-4" /> },
  ],
  primaryColor = "#2d2d2d",
  secondaryColor = "#f5f5dc",
  textColor = "#2d2d2d",
  className = "",
  logo,
}: RetroNavbarProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav
      className={`relative border-b-4 ${className}`}
      style={{
        backgroundColor: secondaryColor,
        borderBottomColor: primaryColor,
        color: textColor,
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Title */}
          <div className="flex items-center gap-3">
            {logo}
            <h1 className="font-mono font-bold text-xl" style={{ color: textColor }}>
              {title}
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-1">
              {items.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg font-mono font-bold transition-all duration-200 hover:scale-105 border-2"
                  style={{
                    color: textColor,
                    borderColor: "transparent",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = primaryColor
                    e.currentTarget.style.color = secondaryColor
                    e.currentTarget.style.borderColor = primaryColor
                    e.currentTarget.style.boxShadow = `2px 2px 0px ${primaryColor}`
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "transparent"
                    e.currentTarget.style.color = textColor
                    e.currentTarget.style.borderColor = "transparent"
                    e.currentTarget.style.boxShadow = "none"
                  }}
                >
                  {item.icon}
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg border-2 transition-all duration-200"
              style={{
                backgroundColor: primaryColor,
                color: secondaryColor,
                borderColor: primaryColor,
                boxShadow: `2px 2px 0px ${primaryColor}`,
              }}
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div
          className="md:hidden border-t-2"
          style={{
            backgroundColor: secondaryColor,
            borderTopColor: primaryColor,
          }}
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            {items.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="flex items-center gap-3 px-3 py-2 rounded-lg font-mono font-bold transition-all duration-200 border-2"
                style={{
                  color: textColor,
                  borderColor: "transparent",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = primaryColor
                  e.currentTarget.style.color = secondaryColor
                  e.currentTarget.style.borderColor = primaryColor
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "transparent"
                  e.currentTarget.style.color = textColor
                  e.currentTarget.style.borderColor = "transparent"
                }}
              >
                {item.icon}
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
