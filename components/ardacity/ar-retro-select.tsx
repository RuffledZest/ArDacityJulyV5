"use client"

import { useState, useRef, useEffect } from "react"
import { ChevronDown } from "lucide-react"

interface RetroSelectProps {
  value: string
  onChange: (value: string) => void
  options: { value: string; label: string }[]
  placeholder?: string
  primaryColor?: string
  secondaryColor?: string
  textColor?: string
  className?: string
}

export function RetroSelect({
  value,
  onChange,
  options,
  placeholder = "Select option",
  primaryColor = "#2d2d2d",
  secondaryColor = "#f5f5dc",
  textColor = "#2d2d2d",
  className = "",
}: RetroSelectProps) {
  const [isOpen, setIsOpen] = useState(false)
  const selectRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const selectedOption = options.find(option => option.value === value)

  return (
    <div ref={selectRef} className={`relative ${className}`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-3 py-2 rounded-lg border-2 font-mono transition-all duration-200 hover:shadow-lg flex items-center justify-between"
        style={{
          backgroundColor: secondaryColor,
          borderColor: primaryColor,
          color: textColor,
          boxShadow: `2px 2px 0px ${primaryColor}`,
        }}
      >
        <span>{selectedOption?.label || placeholder}</span>
        <ChevronDown 
          className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          style={{ color: textColor }}
        />
      </button>

      {isOpen && (
        <div
          className="absolute top-full left-0 right-0 mt-1 rounded-lg border-2 z-50 max-h-48 overflow-y-auto"
          style={{
            backgroundColor: secondaryColor,
            borderColor: primaryColor,
            boxShadow: `4px 4px 0px ${primaryColor}`,
          }}
        >
          {options.map((option) => (
            <button
              key={option.value}
              onClick={() => {
                onChange(option.value)
                setIsOpen(false)
              }}
              className="w-full px-3 py-2 text-left font-mono hover:bg-opacity-80 transition-colors"
              style={{
                color: textColor,
                backgroundColor: value === option.value ? `${primaryColor}20` : 'transparent',
              }}
            >
              {option.label}
            </button>
          ))}
        </div>
      )}
    </div>
  )
} 