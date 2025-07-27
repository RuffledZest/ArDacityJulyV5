"use client"

import { motion } from "motion/react"
import clsx from "clsx"
import { useState } from "react"

import logo from "@/public/logo.png"
interface BackgroundCirclesProps {
  title?: string
  description?: string
  className?: string
  variant?: keyof typeof COLOR_VARIANTS
}

const COLOR_VARIANTS = {
  primary: {
    border: [
      "border-black/60 dark:border-white/60",
      "border-black/50 dark:border-white/50",
      "border-black/30 dark:border-white/30",
    ],
    gradient: "from-black/30 dark:from-white/30",
  },
  secondary: {
    border: [
      "border-black/60 dark:border-white/60",
      "border-black/50 dark:border-white/50",
      "border-black/30 dark:border-white/30",
    ],
    gradient: "from-black/30 dark:from-white/30",
  },
} as const

const AnimatedGrid = () => (
  <motion.div
    className="absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,transparent_30%,black)]"
    animate={{
      backgroundPosition: ["0% 0%", "100% 100%"],
    }}
    transition={{
      duration: 40,
      repeat: Number.POSITIVE_INFINITY,
      ease: "linear",
    }}
  >
    <div className="h-full w-full [background-image:repeating-linear-gradient(100deg,#000_0%,#000_1px,transparent_1px,transparent_4%)] dark:[background-image:repeating-linear-gradient(100deg,#fff_0%,#fff_1px,transparent_1px,transparent_4%)] opacity-20" />
  </motion.div>
)

export function BackgroundCircles({
  title = "Background Circles",
  description = "Optional Description",
  className,
  variant = "primary",
}: BackgroundCirclesProps) {
  const variantStyles = COLOR_VARIANTS[variant]

  return (
    <div
      className={clsx(
        "relative flex h-screen w-full items-center justify-center overflow-hidden",
        "bg-white dark:bg-black",
        className,
      )}
    >
      <AnimatedGrid />
      <motion.div className="absolute h-[480px] w-[480px]">
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className={clsx(
              "absolute inset-0 rounded-full",
              "border-2 bg-linear-to-br to-transparent",
              variantStyles.border[i],
              variantStyles.gradient,
            )}
            animate={{
              rotate: 360,
              scale: [1, 1.05 + i * 0.05, 1],
              opacity: [0.8, 1, 0.8],
            }}
            transition={{
              duration: 5,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          >
            <div
              className={clsx(
                "absolute inset-0 rounded-full mix-blend-screen",
                `bg-[radial-gradient(ellipse_at_center,${variantStyles.gradient.replace(
                  "from-",
                  "",
                )}/10%,transparent_70%)]`,
              )}
            />
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        className="relative z-10 text-center  mt-[-50px]"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* <h1
          className={clsx(
            "text-5xl font-bold tracking-tight md:text-7xl",
            "bg-linear-to-b from-black to-black/70 dark:from-white dark:to-white/70 bg-clip-text text-transparent",
            "drop-shadow-[0_0_32px_rgba(0,0,0,0.4)] dark:drop-shadow-[0_0_32px_rgba(255,255,255,0.4)]",
          )}
        >
          {title}
        </h1> */}
<img
            src={logo.src}
            alt="Ardacity Logo"
            className="inline-block  mr-2"
          />
        <motion.p
          className="mt-6 text-lg md:text-xl text-black dark:text-white mt-[-100px]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          
          {description}
          <span className="mx-3 opacity-50">·</span>
          Ardacity UI
        </motion.p>
      </motion.div>

      <div className="absolute inset-0 [mask-image:radial-gradient(90%_60%_at_50%_50%,#000_40%,transparent)]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,#000/30%,transparent_70%)] dark:bg-[radial-gradient(ellipse_at_center,#fff/30%,transparent_70%)] blur-[120px]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,#000/15%,transparent)] dark:bg-[radial-gradient(ellipse_at_center,#fff/15%,transparent)] blur-[80px]" />
      </div>
    </div>
  )
}

export default function DemoCircles() {
  const [currentVariant, setCurrentVariant] = useState<keyof typeof COLOR_VARIANTS>("primary")

  const variants = Object.keys(COLOR_VARIANTS) as (keyof typeof COLOR_VARIANTS)[]

  function getNextVariant() {
    const currentIndex = variants.indexOf(currentVariant)
    const nextVariant = variants[(currentIndex + 1) % variants.length]
    return nextVariant
  }

  return (
    <>
      <BackgroundCircles variant={currentVariant} />
      
    </>
  )
}
