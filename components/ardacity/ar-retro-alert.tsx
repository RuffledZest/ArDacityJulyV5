"use client"
import { AlertCircle, CheckCircle, XCircle, Info, X } from "lucide-react"

interface RetroAlertProps {
  type?: "info" | "success" | "warning" | "error"
  title?: string
  message: string
  onClose?: () => void
  primaryColor?: string
  secondaryColor?: string
  textColor?: string
  className?: string
  closable?: boolean
}

export function RetroAlert({
  type = "info",
  title,
  message,
  onClose,
  primaryColor = "#2d2d2d",
  secondaryColor = "#f5f5dc",
  textColor = "#2d2d2d",
  className = "",
  closable = true,
}: RetroAlertProps) {
  const typeConfig = {
    info: { icon: Info, bgColor: "#dbeafe", borderColor: "#3b82f6" },
    success: { icon: CheckCircle, bgColor: "#dcfce7", borderColor: "#22c55e" },
    warning: { icon: AlertCircle, bgColor: "#fef3c7", borderColor: "#f59e0b" },
    error: { icon: XCircle, bgColor: "#fee2e2", borderColor: "#ef4444" },
  }

  const config = typeConfig[type]
  const Icon = config.icon

  return (
    <div
      className={`relative p-4 rounded-lg border-2 ${className}`}
      style={{
        backgroundColor: config.bgColor,
        borderColor: config.borderColor,
        boxShadow: `4px 4px 0px ${config.borderColor}`,
        color: textColor,
      }}
    >
      <div className="flex items-start gap-3">
        <Icon className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: config.borderColor }} />

        <div className="flex-1">
          {title && (
            <h4 className="font-mono font-bold text-sm mb-1" style={{ color: textColor }}>
              {title}
            </h4>
          )}
          <p className="font-mono text-sm" style={{ color: textColor }}>
            {message}
          </p>
        </div>

        {closable && onClose && (
          <button
            onClick={onClose}
            className="p-1 rounded transition-all duration-200 hover:scale-110"
            style={{
              backgroundColor: config.borderColor,
              color: config.bgColor,
            }}
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>
    </div>
  )
}
