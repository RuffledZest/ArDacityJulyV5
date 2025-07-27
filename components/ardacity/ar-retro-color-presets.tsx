"use client"

import { useState } from "react"
import { Palette } from "lucide-react"

export interface ColorPreset {
  name: string
  primary: string
  secondary: string
  text: string
}

export const defaultPresets: ColorPreset[] = [
  { name: "Classic", primary: "#2d2d2d", secondary: "#f5f5dc", text: "#2d2d2d" },
  { name: "Ocean", primary: "#1e3a8a", secondary: "#dbeafe", text: "#1e3a8a" },
  { name: "Forest", primary: "#166534", secondary: "#dcfce7", text: "#166534" },
  { name: "Sunset", primary: "#dc2626", secondary: "#fee2e2", text: "#dc2626" },
  { name: "Purple", primary: "#7c3aed", secondary: "#ede9fe", text: "#7c3aed" },
  { name: "Orange", primary: "#ea580c", secondary: "#fed7aa", text: "#ea580c" },
  { name: "Dark", primary: "#1f2937", secondary: "#374151", text: "#f9fafb" },
  { name: "Neon", primary: "#00ff88", secondary: "#000000", text: "#00ff88" },
]

interface RetroColorPresetsProps {
  colors: {
    primary: string
    secondary: string
    text: string
  }
  onColorsChange: (colors: { primary: string; secondary: string; text: string }) => void
  className?: string
}

export function RetroColorPresets({ colors, onColorsChange, className = "" }: RetroColorPresetsProps) {
  const [isDarkMode, setIsDarkMode] = useState(false)

  const handlePresetClick = (preset: ColorPreset) => {
    if (isDarkMode) {
      // Invert colors for dark mode
      onColorsChange({
        primary: preset.secondary,
        secondary: preset.primary,
        text: preset.secondary,
      })
    } else {
      onColorsChange(preset)
    }
  }

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
    // Invert current colors
    onColorsChange({
      primary: colors.secondary,
      secondary: colors.primary,
      text: colors.secondary,
    })
  }

  return (
    <div className={`space-y-4 ${className}`}>
      {/* Dark Mode Toggle */}
      <div className="flex items-center gap-2">
        <Palette className="w-4 h-4" />
        <span className="text-sm font-medium">Color Presets</span>
        <button
          onClick={toggleDarkMode}
          className={`ml-auto px-3 py-1 rounded text-xs font-mono border-2 transition-all ${
            isDarkMode 
              ? "bg-gray-800 text-white border-gray-800" 
              : "bg-white text-gray-800 border-gray-800 hover:bg-gray-100"
          }`}
          style={{
            boxShadow: isDarkMode ? "2px 2px 0px #000" : "2px 2px 0px #2d2d2d"
          }}
        >
          {isDarkMode ? "🌙 Dark" : "☀️ Light"}
        </button>
      </div>

      {/* Preset Buttons */}
      <div className="grid grid-cols-2 gap-2">
        {defaultPresets.map((preset) => (
          <button
            key={preset.name}
            onClick={() => handlePresetClick(preset)}
            className="p-2 rounded border-2 font-mono text-xs hover:scale-105 transition-transform"
            style={{
              backgroundColor: isDarkMode ? preset.primary : preset.secondary,
              borderColor: isDarkMode ? preset.secondary : preset.primary,
              color: isDarkMode ? preset.secondary : preset.primary,
              boxShadow: `2px 2px 0px ${isDarkMode ? preset.secondary : preset.primary}`,
            }}
          >
            {preset.name}
          </button>
        ))}
      </div>

      {/* Custom Color Picker */}
      <div className="space-y-3 pt-2 border-t">
        <div className="flex items-center gap-2">
          <label className="text-sm font-medium">Primary:</label>
          <input
            type="color"
            value={colors.primary}
            onChange={(e) => onColorsChange({ ...colors, primary: e.target.value, text: e.target.value })}
            className="w-8 h-8 rounded border-2 border-gray-800"
          />
        </div>
        <div className="flex items-center gap-2">
          <label className="text-sm font-medium">Secondary:</label>
          <input
            type="color"
            value={colors.secondary}
            onChange={(e) => onColorsChange({ ...colors, secondary: e.target.value })}
            className="w-8 h-8 rounded border-2 border-gray-800"
          />
        </div>
      </div>
    </div>
  )
} 