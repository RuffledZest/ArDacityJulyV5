"use client"

import type React from "react"
import { memo, useCallback, useEffect, useRef } from "react"
import { cn } from "@/lib/utils"
import { animate } from "motion/react"

interface LiquidGlassCardProps {
  title: string
  description: string
  imageUrl: string
  imageAlt: string
  className?: string
  children?: React.ReactNode
  borderWidth?: number // NEW
  variant?: 'default' | 'overlay' // NEW
}

const GlowingEffect = memo(
  ({
    blur = 0,
    inactiveZone = 0.01,
    proximity = 64,
    spread = 40,
    variant = "default",
    glow = true,
    className,
    disabled = false,
    movementDuration = 2,
    borderWidth = 1,
  }: {
    blur?: number
    inactiveZone?: number
    proximity?: number
    spread?: number
    variant?: "default" | "white"
    glow?: boolean
    className?: string
    disabled?: boolean
    movementDuration?: number
    borderWidth?: number
  }) => {
    const containerRef = useRef<HTMLDivElement>(null)
    const lastPosition = useRef({ x: 0, y: 0 })
    const animationFrameRef = useRef<number>(0)

    const handleMove = useCallback(
      (e?: MouseEvent | { x: number; y: number }) => {
        if (!containerRef.current) return
        if (animationFrameRef.current) {
          cancelAnimationFrame(animationFrameRef.current)
        }
        animationFrameRef.current = requestAnimationFrame(() => {
          const element = containerRef.current
          if (!element) return
          const { left, top, width, height } = element.getBoundingClientRect()
          const mouseX = e?.x ?? lastPosition.current.x
          const mouseY = e?.y ?? lastPosition.current.y
          if (e) {
            lastPosition.current = { x: mouseX, y: mouseY }
          }
          const center = [left + width * 0.5, top + height * 0.5]
          const distanceFromCenter = Math.hypot(mouseX - center[0], mouseY - center[1])
          const inactiveRadius = 0.5 * Math.min(width, height) * inactiveZone
          if (distanceFromCenter < inactiveRadius) {
            element.style.setProperty("--active", "0")
            return
          }
          const isActive =
            mouseX > left - proximity &&
            mouseX < left + width + proximity &&
            mouseY > top - proximity &&
            mouseY < top + height + proximity
          element.style.setProperty("--active", isActive ? "1" : "0")
          if (!isActive) return
          const currentAngle = Number.parseFloat(element.style.getPropertyValue("--start")) || 0
          const targetAngle = (180 * Math.atan2(mouseY - center[1], mouseX - center[0])) / Math.PI + 90
          const angleDiff = ((targetAngle - currentAngle + 180) % 360) - 180
          const newAngle = currentAngle + angleDiff
          animate(currentAngle, newAngle, {
            duration: movementDuration,
            ease: [0.16, 1, 0.3, 1],
            onUpdate: (value) => {
              element.style.setProperty("--start", String(value))
            },
          })
        })
      },
      [inactiveZone, proximity, movementDuration],
    )

    useEffect(() => {
      if (disabled) return
      const handleScroll = () => handleMove()
      const handlePointerMove = (e: PointerEvent) => handleMove(e)
      window.addEventListener("scroll", handleScroll, { passive: true })
      document.body.addEventListener("pointermove", handlePointerMove, {
        passive: true,
      })
      return () => {
        if (animationFrameRef.current) {
          cancelAnimationFrame(animationFrameRef.current)
        }
        window.removeEventListener("scroll", handleScroll)
        document.body.removeEventListener("pointermove", handlePointerMove)
      }
    }, [handleMove, disabled])

    return (
      <>
        <div
          className={cn(
            "pointer-events-none absolute -inset-px hidden rounded-[inherit] border opacity-0 transition-opacity",
            glow && "opacity-100",
            variant === "white" && "border-white",
            disabled && "!block",
          )}
        />
        <div
          ref={containerRef}
          style={
            {
              "--blur": `${blur}px`,
              "--spread": spread,
              "--start": "0",
              "--active": "0",
              "--glowingeffect-border-width": `${borderWidth}px`,
              "--repeating-conic-gradient-times": "5",
              "--gradient":
                variant === "white"
                  ? `repeating-conic-gradient(
                  from 236.84deg at 50% 50%,
                  var(--black),
                  var(--black) calc(25% / var(--repeating-conic-gradient-times))
                )`
                  : `radial-gradient(circle, #dd7bbb 10%, #dd7bbb00 20%),
                radial-gradient(circle at 40% 40%, #d79f1e 5%, #d79f1e00 15%),
                radial-gradient(circle at 60% 60%, #5a922c 10%, #5a922c00 20%),
                 radial-gradient(circle at 40% 60%, #4c7894 10%, #4c789400 20%),
                repeating-conic-gradient(
                  from 236.84deg at 50% 50%,
                  #dd7bbb 0%,
                  #d79f1e calc(25% / var(--repeating-conic-gradient-times)),
                  #5a922c calc(50% / var(--repeating-conic-gradient-times)),
                   #4c7894 calc(75% / var(--repeating-conic-gradient-times)),
                  #dd7bbb calc(100% / var(--repeating-conic-gradient-times))
                )`,
            } as React.CSSProperties
          }
          className={cn(
            "pointer-events-none absolute inset-0 rounded-[inherit] opacity-100 transition-opacity",
            glow && "opacity-100",
            blur > 0 && "blur-[var(--blur)] ",
            className,
            disabled && "!hidden",
          )}
        >
          <div
            className={cn(
              "glow",
              "rounded-[inherit]",
              'after:content-["\""] after:rounded-[inherit] after:absolute after:inset-[calc(-1*var(--glowingeffect-border-width))]',
              "after:[border:var(--glowingeffect-border-width)_solid_transparent]",
              "after:[background:var(--gradient)] after:[background-attachment:fixed]",
              "after:opacity-[var(--active)] after:transition-opacity after:duration-300",
              "after:[mask-clip:padding-box,border-box]",
              "after:[mask-composite:intersect]",
              "after:[mask-image:linear-gradient(#0000,#0000),conic-gradient(from_calc((var(--start)-var(--spread))*1deg),#00000000_0deg,#fff,#00000000_calc(var(--spread)*2deg))]",
            )}
          />
        </div>
      </>
    )
  },
)

GlowingEffect.displayName = "GlowingEffect"

export function LiquidGlassCard({ title, description, imageUrl, imageAlt, className, children, borderWidth, variant = 'default' }: LiquidGlassCardProps) {
  return (
    <>
      {/* SVG Filter for Liquid Glass Effect */}
      <svg style={{ display: "none" }}>
        <filter id="glass-distortion-card" x="0%" y="0%" width="100%" height="100%" filterUnits="objectBoundingBox">
          <feTurbulence type="fractalNoise" baseFrequency="0.002 0.008" numOctaves="2" seed="17" result="turbulence" />
          <feComponentTransfer in="turbulence" result="mapped">
            <feFuncR type="gamma" amplitude="1.2" exponent="8" offset="0.4" />
            <feFuncG type="gamma" amplitude="0.1" exponent="1" offset="0.1" />
            <feFuncB type="gamma" amplitude="0.1" exponent="1" offset="0.6" />
          </feComponentTransfer>
          <feGaussianBlur in="turbulence" stdDeviation="4" result="softMap" />
          <feSpecularLighting
            in="softMap"
            surfaceScale="8"
            specularConstant="1.5"
            specularExponent="120"
            lightingColor="white"
            result="specLight"
          >
            <fePointLight x="-150" y="-150" z="400" />
          </feSpecularLighting>
          <feComposite in="specLight" operator="arithmetic" k1="0" k2="1.2" k3="1.2" k4="0" result="litImage" />
          <feDisplacementMap in="SourceGraphic" in2="softMap" scale="300" xChannelSelector="R" yChannelSelector="G" />
        </filter>
      </svg>

      <div className={cn("relative w-full max-w-md mx-auto", className)}>
        <div className="liquidGlass-wrapper relative flex font-semibold overflow-hidden text-black cursor-pointer shadow-[0_6px_6px_rgba(0,0,0,0.2),0_0_20px_rgba(0,0,0,0.1)] transition-all duration-[400ms] ease-[cubic-bezier(0.175,0.885,0.32,2.2)] rounded-2xl md:rounded-3xl p-2 hover:p-3 hover:scale-[1.02] hover:shadow-[0_12px_12px_rgba(0,0,0,0.3),0_0_40px_rgba(0,0,0,0.2)]">
          {/* Liquid Glass Effect Layer */}
          <div className="liquidGlass-effect absolute z-0 inset-0 [backdrop-filter:blur(1.2px)] [filter:url(#glass-distortion-card)] overflow-hidden [isolation:isolate] rounded-2xl md:rounded-3xl" />

          {/* Tint Layer */}
          <div className="liquidGlass-tint z-[1] absolute inset-0 bg-white/[0.048] rounded-2xl md:rounded-3xl" />

          {/* Shine Layer */}
          <div className="liquidGlass-shine absolute inset-0 z-[2] overflow-hidden rounded-2xl md:rounded-3xl shadow-[inset_2px_2px_1px_0_rgba(255,255,255,0.5),inset_-1px_-1px_1px_1px_rgba(255,255,255,0.5)]" />

          {/* Content Layer */}
          <div className="liquidGlass-text z-[3] relative flex h-full flex-col overflow-hidden rounded-xl w-full p-3">
            <GlowingEffect spread={40} glow={true} disabled={false} proximity={64} inactiveZone={0.01} borderWidth={borderWidth ?? 1} />

            {variant === 'default' && (
              <>
                <div className="relative h-48 md:h-56 overflow-hidden rounded-t-xl">
                  <img
                    src={imageUrl || "/placeholder.svg"}
                    alt={imageAlt}
                    className="w-full h-full rounded-lg object-cover transition-transform duration-700 hover:scale-110"
                  />
                  <div className="absolute inset-0  to-transparent" />
                </div>
                <div className="flex flex-1 flex-col justify-between gap-4 p-6  ">
                  <div className="space-y-3">
                    <h3 className="font-sans text-xl font-semibold text-balance text-black dark:text-white md:text-2xl">{title}</h3>
                    <p className="font-sans text-sm text-black/90 dark:text-white/90 md:text-base">{description}</p>
                  </div>
                  {children && <div className="mt-4">{children}</div>}
                </div>
              </>
            )}
            {variant === 'overlay' && (
              <div className="relative flex-1 flex flex-col justify-end min-h-[420px]">
                <img
                  src={imageUrl || "/placeholder.svg"}
                  alt={imageAlt}
                  className="absolute inset-0 w-full h-full object-cover z-0 rounded-xl"
                />
                <div className="absolute  inset-0 bg-gradient-to-b from-transparent to-black/80 rounded-xl z-10" />
                <div className="relative z-20 flex flex-col justify-end h-full p-6">
                  <h3 className="text-2xl font-bold mb-2 text-white ">{title}</h3>
                  <p className="mb-4 text-white/90 ">{description}</p>
                  {children}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  )
} 