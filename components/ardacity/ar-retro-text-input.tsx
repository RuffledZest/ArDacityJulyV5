"use client"

interface RetroTextInputProps {
  value: string
  onChange: (value: string) => void
  placeholder?: string
  primaryColor?: string
  secondaryColor?: string
  textColor?: string
  className?: string
}

export function RetroTextInput({
  value,
  onChange,
  placeholder = "Enter text...",
  primaryColor = "#2d2d2d",
  secondaryColor = "#f5f5dc",
  textColor = "#2d2d2d",
  className = "",
}: RetroTextInputProps) {
  return (
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className={`px-3 py-2 rounded-lg border-2 font-mono transition-all duration-200 focus:outline-none focus:shadow-lg ${className}`}
      style={{
        backgroundColor: secondaryColor,
        borderColor: primaryColor,
        color: textColor,
        boxShadow: `2px 2px 0px ${primaryColor}`,
      }}
    />
  )
} 