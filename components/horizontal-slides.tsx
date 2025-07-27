"use client"

import type React from "react"
import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

interface HorizontalSlidesProps {
  children: React.ReactNode
  className?: string
}

export function HorizontalSlides({ children, className = "" }: HorizontalSlidesProps) {
  const targetRef = useRef<HTMLDivElement | null>(null)
  // Use framer-motion's useScroll to track scroll progress of the section
  const { scrollYProgress } = useScroll({
    target: targetRef,
  })

  // The transform range may need tuning based on your content width and number of slides
  // [0, 1] means from top to bottom of the section, x moves from 0% to -100% (or more)
  // You can adjust the second value (e.g., -65%) to control how far the slides move
  const x = useTransform(scrollYProgress, [0, 1], ["10%", "-65%"])

  return (
    <section
      ref={targetRef}
      className={`relative h-[400vh] ${className}`}
      // No data-lenis-prevent, as Lenis is being removed
    >
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-8">
          {children}
        </motion.div>
      </div>
    </section>
  )
}
