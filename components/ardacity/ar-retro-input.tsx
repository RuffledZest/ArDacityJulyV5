"use client"

import type React from "react"
import { Search, ArrowRight } from "lucide-react"

interface RetroInputProps {
  placeholder?: string
  value?: string
  onChange?: (value: string) => void
  onSubmit?: () => void
  primaryColor?: string
  secondaryColor?: string
  textColor?: string
  borderColor?: string
  className?: string
  icon?: React.ReactNode
  showSubmitButton?: boolean
  size?: "sm" | "md" | "lg"
}

export function RetroInput({
  placeholder = "Search anything ///",
  value,
  onChange,
  onSubmit,
  primaryColor = "#2d2d2d",
  secondaryColor = "#f5f5dc",
  textColor = "#2d2d2d",
  borderColor = "#2d2d2d",
  className = "",
  icon = <Search className="w-5 h-5" />,
  showSubmitButton = true,
  size = "md",
}: RetroInputProps) {
  const sizeClasses = {
    sm: "px-3 py-2 text-sm",
    md: "px-4 py-3 text-base",
    lg: "px-6 py-4 text-lg",
  }

  return (
    <div
      className={`relative flex items-center rounded-lg border-2 transition-all duration-200 hover:shadow-lg ${sizeClasses[size]} ${className}`}
      style={{
        backgroundColor: secondaryColor,
        borderColor: borderColor,
        boxShadow: `4px 4px 0px ${primaryColor}`,
      }}
    >
      <div className="flex items-center mr-3" style={{ color: textColor }}>
        {icon}
      </div>

      <input
        type="text"
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        placeholder={placeholder}
        className="flex-1 bg-transparent outline-none font-mono placeholder:opacity-60"
        style={{ color: textColor }}
        onKeyDown={(e) => e.key === "Enter" && onSubmit?.()}
      />

      {showSubmitButton && (
        <button
          onClick={onSubmit}
          className="ml-3 p-2 rounded transition-all duration-200 hover:scale-110"
          style={{
            backgroundColor: primaryColor,
            color: secondaryColor,
          }}
        >
          <ArrowRight className="w-4 h-4" />
        </button>
      )}
    </div>
  )
}
