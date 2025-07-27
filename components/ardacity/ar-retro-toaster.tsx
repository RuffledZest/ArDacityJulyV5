"use client"
import { useState, useEffect } from "react"
import { CheckCircle, XCircle, AlertCircle, Info, X } from "lucide-react"

interface Toast {
  id: string
  type: "success" | "error" | "warning" | "info"
  title?: string
  message: string
  duration?: number
}

interface RetroToasterProps {
  primaryColor?: string
  secondaryColor?: string
  textColor?: string
  position?: "top-right" | "top-left" | "bottom-right" | "bottom-left"
}

let toastId = 0
const toasts: Toast[] = []
const listeners: ((toasts: Toast[]) => void)[] = []

export const toast = {
  success: (message: string, title?: string, duration = 5000) => {
    addToast({ type: "success", message, title, duration })
  },
  error: (message: string, title?: string, duration = 5000) => {
    addToast({ type: "error", message, title, duration })
  },
  warning: (message: string, title?: string, duration = 5000) => {
    addToast({ type: "warning", message, title, duration })
  },
  info: (message: string, title?: string, duration = 5000) => {
    addToast({ type: "info", message, title, duration })
  },
}

function addToast(toast: Omit<Toast, "id">) {
  const newToast = { ...toast, id: (++toastId).toString() }
  toasts.push(newToast)
  listeners.forEach((listener) => listener([...toasts]))

  if (toast.duration && toast.duration > 0) {
    setTimeout(() => removeToast(newToast.id), toast.duration)
  }
}

function removeToast(id: string) {
  const index = toasts.findIndex((toast) => toast.id === id)
  if (index > -1) {
    toasts.splice(index, 1)
    listeners.forEach((listener) => listener([...toasts]))
  }
}

export function RetroToaster({
  primaryColor = "#2d2d2d",
  secondaryColor = "#f5f5dc",
  textColor = "#2d2d2d",
  position = "top-right",
}: RetroToasterProps) {
  const [toastList, setToastList] = useState<Toast[]>([])

  useEffect(() => {
    const listener = (newToasts: Toast[]) => setToastList(newToasts)
    listeners.push(listener)
    return () => {
      const index = listeners.indexOf(listener)
      if (index > -1) listeners.splice(index, 1)
    }
  }, [])

  const positionClasses = {
    "top-right": "top-4 right-4",
    "top-left": "top-4 left-4",
    "bottom-right": "bottom-4 right-4",
    "bottom-left": "bottom-4 left-4",
  }

  const typeConfig = {
    success: { icon: CheckCircle, bgColor: "#dcfce7", borderColor: "#22c55e" },
    error: { icon: XCircle, bgColor: "#fee2e2", borderColor: "#ef4444" },
    warning: { icon: AlertCircle, bgColor: "#fef3c7", borderColor: "#f59e0b" },
    info: { icon: Info, bgColor: "#dbeafe", borderColor: "#3b82f6" },
  }

  return (
    <div className={`fixed z-50 space-y-2 ${positionClasses[position]}`}>
      {toastList.map((toast) => {
        const config = typeConfig[toast.type]
        const Icon = config.icon

        return (
          <div
            key={toast.id}
            className="flex items-start gap-3 p-4 rounded-lg border-2 min-w-80 animate-in slide-in-from-right duration-300"
            style={{
              backgroundColor: config.bgColor,
              borderColor: config.borderColor,
              boxShadow: `4px 4px 0px ${config.borderColor}`,
              color: textColor,
            }}
          >
            <Icon className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: config.borderColor }} />

            <div className="flex-1">
              {toast.title && (
                <h4 className="font-mono font-bold text-sm mb-1" style={{ color: textColor }}>
                  {toast.title}
                </h4>
              )}
              <p className="font-mono text-sm" style={{ color: textColor }}>
                {toast.message}
              </p>
            </div>

            <button
              onClick={() => removeToast(toast.id)}
              className="p-1 rounded transition-all duration-200 hover:scale-110"
              style={{
                backgroundColor: config.borderColor,
                color: config.bgColor,
              }}
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        )
      })}
    </div>
  )
}
