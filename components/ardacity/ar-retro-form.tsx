"use client"

import type React from "react"
import { useState } from "react"
import { Mail, User, MessageSquare, Send } from "lucide-react"

interface RetroFormProps {
  title?: string
  primaryColor?: string
  secondaryColor?: string
  textColor?: string
  className?: string
}

export function RetroForm({
  title = "Contact Form",
  primaryColor = "#2d2d2d",
  secondaryColor = "#f5f5dc",
  textColor = "#2d2d2d",
  className = "",
}: RetroFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  return (
    <div
      className={`rounded-lg border-2 p-6 ${className}`}
      style={{
        backgroundColor: secondaryColor,
        borderColor: primaryColor,
        boxShadow: `6px 6px 0px ${primaryColor}`,
        color: textColor,
      }}
    >
      <h2 className="font-mono font-bold text-2xl mb-6 text-center" style={{ color: textColor }}>
        {title}
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <label className="font-mono font-bold text-sm flex items-center gap-2">
            <User className="w-4 h-4" />
            Name
          </label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => handleChange("name", e.target.value)}
            className="w-full px-4 py-3 rounded-lg border-2 font-mono transition-all duration-200 focus:outline-none focus:shadow-lg"
            style={{
              backgroundColor: secondaryColor,
              borderColor: primaryColor,
              color: textColor,
              boxShadow: `2px 2px 0px ${primaryColor}`,
            }}
            placeholder="Enter your name"
            required
          />
        </div>

        <div className="space-y-2">
          <label className="font-mono font-bold text-sm flex items-center gap-2">
            <Mail className="w-4 h-4" />
            Email
          </label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => handleChange("email", e.target.value)}
            className="w-full px-4 py-3 rounded-lg border-2 font-mono transition-all duration-200 focus:outline-none focus:shadow-lg"
            style={{
              backgroundColor: secondaryColor,
              borderColor: primaryColor,
              color: textColor,
              boxShadow: `2px 2px 0px ${primaryColor}`,
            }}
            placeholder="Enter your email"
            required
          />
        </div>

        <div className="space-y-2">
          <label className="font-mono font-bold text-sm flex items-center gap-2">
            <MessageSquare className="w-4 h-4" />
            Message
          </label>
          <textarea
            value={formData.message}
            onChange={(e) => handleChange("message", e.target.value)}
            rows={4}
            className="w-full px-4 py-3 rounded-lg border-2 font-mono transition-all duration-200 focus:outline-none focus:shadow-lg resize-none"
            style={{
              backgroundColor: secondaryColor,
              borderColor: primaryColor,
              color: textColor,
              boxShadow: `2px 2px 0px ${primaryColor}`,
            }}
            placeholder="Enter your message"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg border-2 font-mono font-bold transition-all duration-200 hover:scale-105 active:scale-95"
          style={{
            backgroundColor: primaryColor,
            color: secondaryColor,
            borderColor: primaryColor,
            boxShadow: `4px 4px 0px ${primaryColor}`,
          }}
        >
          <Send className="w-4 h-4" />
          Send Message
        </button>
      </form>
    </div>
  )
}
