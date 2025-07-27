"use client"

import type React from "react"

interface RetroButtonProps {
  children: React.ReactNode
  onClick?: () => void
  variant?: "primary" | "secondary"
  size?: "sm" | "md" | "lg"
  primaryColor?: string
  secondaryColor?: string
  textColor?: string
  disabled?: boolean
  className?: string
  icon?: React.ReactNode
}

export function RetroButton({
  children,
  onClick,
  variant = "primary",
  size = "md",
  primaryColor = "#2d2d2d",
  secondaryColor = "#f5f5dc",
  textColor,
  disabled = false,
  className = "",
  icon,
}: RetroButtonProps) {
  const sizeClasses = {
    sm: "px-3 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  }

  const isPrimary = variant === "primary"
  const bgColor = isPrimary ? primaryColor : secondaryColor
  const color = textColor || (isPrimary ? secondaryColor : primaryColor)

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        inline-flex items-center gap-2 font-mono font-bold rounded-lg border-2 
        transition-all duration-200 hover:scale-105 active:scale-95
        disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100
        ${sizeClasses[size]} ${className}
      `}
      style={{
        backgroundColor: bgColor,
        color: color,
        borderColor: primaryColor,
        boxShadow: disabled ? "none" : `4px 4px 0px ${primaryColor}`,
        transform: disabled ? "none" : undefined,
      }}
    >
      {icon && <span>{icon}</span>}
      {children}
    </button>
  )
}
