"use client"

import { useStore } from "@/lib/store"
import { useEffect } from "react"

export function useScroll(callback: (data: any) => void, deps: any[] = []) {
  const lenis = useStore((state) => state.lenis)

  useEffect(() => {
    if (!lenis) return

    // Check if lenis has the on method (original Lenis API)
    if (typeof lenis.on === "function") {
      lenis.on("scroll", callback)
      lenis.emit()

      return () => {
        lenis.off("scroll", callback)
      }
    } else {
      // For ReactLenis, we need to use a different approach
      // ReactLenis doesn't expose the same event API
      console.warn("ReactLenis doesn't support direct event listeners. Use alternative approach.")

      // Alternative: Use requestAnimationFrame to track scroll
      let rafId: number

      const handleScroll = () => {
        if (lenis && typeof lenis.scroll !== "undefined") {
          callback({
            scroll: lenis.scroll,
            velocity: lenis.velocity || 0,
            isScrolling: lenis.isScrolling || false,
          })
        }
        rafId = requestAnimationFrame(handleScroll)
      }

      rafId = requestAnimationFrame(handleScroll)

      return () => {
        if (rafId) {
          cancelAnimationFrame(rafId)
        }
      }
    }
  }, [lenis, callback, ...deps])
}
