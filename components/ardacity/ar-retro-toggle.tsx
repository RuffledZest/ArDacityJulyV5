"use client"

interface RetroToggleProps {
  options: string[]
  activeOption: string
  onChange: (option: string) => void
  primaryColor?: string
  secondaryColor?: string
  textColor?: string
  activeTextColor?: string
  className?: string
  size?: "sm" | "md" | "lg"
}

export function RetroToggle({
  options,
  activeOption,
  onChange,
  primaryColor = "#2d2d2d",
  secondaryColor = "#f5f5dc",
  textColor = "#666",
  activeTextColor = "#f5f5dc",
  className = "",
  size = "md",
}: RetroToggleProps) {
  const sizeClasses = {
    sm: "px-3 py-1 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  }

  return (
    <div
      className={`inline-flex border-2 rounded-lg overflow-hidden ${className}`}
      style={{
        borderColor: primaryColor,
        boxShadow: `4px 4px 0px ${primaryColor}`,
      }}
    >
      {options.map((option, index) => (
        <button
          key={option}
          onClick={() => onChange(option)}
          className={`font-mono font-bold transition-all duration-200 border-r-2 last:border-r-0 hover:scale-105 ${sizeClasses[size]}`}
          style={{
            backgroundColor: activeOption === option ? primaryColor : secondaryColor,
            color: activeOption === option ? activeTextColor : textColor,
            borderRightColor: primaryColor,
          }}
        >
          {option}
        </button>
      ))}
    </div>
  )
}
