"use client"

import { useEffect, useState } from "react"

export function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState<boolean | undefined>(undefined)

  useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${breakpoint - 1}px)`)

    const handleChange = () => {
      setIsMobile(window.innerWidth < breakpoint)
    }

    // Initial check
    handleChange()

    // Add listener
    if (mql.addEventListener) {
      mql.addEventListener("change", handleChange)
    } else {
      // For older browsers
      mql.addListener(handleChange)
    }

    // Cleanup
    return () => {
      if (mql.removeEventListener) {
        mql.removeEventListener("change", handleChange)
      } else {
        mql.removeListener(handleChange)
      }
    }
  }, [breakpoint])

  return !!isMobile
}
