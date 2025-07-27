"use client"

import { useScroll, useTransform } from "framer-motion"
import { useEffect, useRef, useState } from "react"
import { twMerge } from "tailwind-merge"

const text = `When I Started Building ArDacity, I wanted to name it 'MuchBetterIdea just to piss off Ankush who made BetterIDEa, Lmao   `
const words = text.split(" ")

export default function WordScrollReveal() {
  const scrollTarget = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLElement>(null)

  const { scrollYProgress } = useScroll({
    target: scrollTarget,
    offset: ["start end", "end end"],
    container: containerRef,
  })

  const [currentWord, setCurrentWord] = useState(0)

  const wordIndex = useTransform(scrollYProgress, [0, 1], [0, words.length])

  useEffect(() => {
    const unsubscribe = wordIndex.on("change", (latest) => {
      setCurrentWord(latest)
    })
    return unsubscribe
  }, [wordIndex])

  return (
    <section ref={containerRef} className="py-28 lg:py-40 bg-zinc-50 dark:bg-zinc-950 h-full overflow-y-auto">
      <div className="container mx-auto px-4">
        <div className="sticky top-28 md:top-20">
          <div className="text-4xl md:text-6xl lg:text-7xl text-center font-medium mt-10 text-zinc-50">
            <span className="text-black dark:text-zinc-300">Fun Fact About ArDacity&nbsp;</span>
            <span>
              {words.map((word, wordIndex) => (
                <span
                  key={wordIndex}
                  className={twMerge(
                    "transition duration-500 text-zinc-200 dark:text-zinc-600",
                    wordIndex < currentWord && "text-black dark:text-zinc-50",
                  )}
                >{`${word} `}</span>
              ))}
            </span>
            <span className="text-cyan-400 block mt-4 mb-10">btw don't bully Ankush, he is a good guy</span>
          </div>
        </div>
        <div ref={scrollTarget} className="h-[150vh]"></div>
      </div>
    </section>
  )
}
