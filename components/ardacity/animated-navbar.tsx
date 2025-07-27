"use client"

import type React from "react"

import { Menu, X } from "lucide-react"
import { useState, useEffect } from "react"
import { AnimatePresence, motion } from "framer-motion"
import Link from "next/link"
import { Button } from "../ui/button"

const navLinks = [
  { label: "Pricing", href: "/pricing" },
  { label: "Features", href: "#features" },
  { label: "Insights", href: "/insights" },
]

interface AnimatedNavbarProps<T extends HTMLElement = HTMLElement> {
  containerRef?: React.RefObject<T>
}

export default function AnimatedNavbar<T extends HTMLElement = HTMLElement>({ containerRef }: AnimatedNavbarProps<T>) {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollContainer = containerRef?.current || window
      const scrollY = containerRef?.current ? containerRef.current.scrollTop : window.scrollY
      setIsScrolled(scrollY > 50)
    }

    const target = containerRef?.current || window
    target.addEventListener("scroll", handleScroll)
    return () => target.removeEventListener("scroll", handleScroll)
  }, [containerRef])

  return (
    <>
      <motion.section
        className={`pb-4 lg:pb-8 w-full top-0 z-50 ${containerRef ? "sticky" : "fixed"}`}
        animate={{
          backgroundColor: isScrolled ? "rgba(24, 24, 27, 0)" : "rgba(24, 24, 27, 0)",
        }}
        transition={{ duration: 0.3 }}
      >
        <div className={`container transition-all duration-300 ${isScrolled ? "max-w-5xl" : "max-w-full px-0"}`}>
          <motion.div
            className={`transition-all duration-300 ${
              isScrolled
                ? "border border-zinc-700 rounded-[27px] lg:rounded-full bg-zinc-900/70 backdrop-blur shadow-sm"
                : "bg-zinc-900/90 backdrop-blur"
            }`}
            animate={{
              borderRadius: isScrolled ? "50px" : "0px",
              marginTop: isScrolled ? "16px" : "0",
              backgroundColor: isScrolled ? "rgba(24, 24, 27, 0.7)" : "transparent",
              boxShadow: isScrolled ? "0 2px 10px rgba(0, 0, 0, 0.3)" : "none",
              marginLeft: isScrolled ? "32px" : "0",
              marginRight: isScrolled ? "32px" : "0",
            }}
            transition={{ duration: 0.3 }}
          >
            <figure
              className={`grid grid-cols-2 lg:grid-cols-3 py-2 items-center ${
                isScrolled ? "lg:px-2 px-4" : "px-4 lg:px-8"
              }`}
            >
              <div>
                <div className="text-2xl font-bold text-cyan-400 px-5">ArDacity</div>
              </div>
              <div className="hidden lg:flex justify-center items-center">
                <nav className="flex gap-6 font-medium text-zinc-300">
                  {navLinks.map((each) => (
                    <Link href={each.href} key={each.href} className="hover:text-cyan-400 transition-colors">
                      {each.label}
                    </Link>
                  ))}
                </nav>
              </div>
              <div className="flex justify-end gap-4">
                <button type="button" onClick={() => setIsOpen(!isOpen)} className="lg:hidden">
                  {!isOpen ? (
                    <motion.div
                      initial={{ opacity: 1 }}
                      animate={{
                        opacity: isOpen ? 0 : 1,
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <Menu className="text-zinc-300" size={30} />
                    </motion.div>
                  ) : (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{
                        opacity: isOpen ? 1 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <X className="text-zinc-300" size={30} />
                    </motion.div>
                  )}
                </button>
                <Link href="#">
                  <Button
                    variant="secondary"
                    className="hidden rounded-full lg:inline-flex items-center bg-zinc-800 text-zinc-200 hover:bg-zinc-700"
                  >
                    Login
                  </Button>
                </Link>
                <Link href="#">
                  <Button
                    variant="default"
                    className="hidden rounded-full lg:inline-flex items-center bg-cyan-600 hover:bg-cyan-700 text-white"
                  >
                    Get Started
                  </Button>
                </Link>
              </div>
            </figure>

            <AnimatePresence>
              {isOpen && (
                <motion.figure
                  initial={{ height: 0 }}
                  animate={{ height: "auto" }}
                  exit={{ height: 0 }}
                  className="overflow-hidden lg:hidden"
                >
                  <div className="flex flex-col items-center gap-4 py-4">
                    {navLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="text-zinc-300 hover:text-cyan-400 transition-colors"
                      >
                        {link.label}
                      </Link>
                    ))}
                    <Link href="#" className="w-3/4">
                      <Button className="w-full bg-zinc-800 text-zinc-200 hover:bg-zinc-700" variant="secondary">
                        Log In
                      </Button>
                    </Link>
                    <Link href="#" className="w-3/4">
                      <Button className="w-full bg-cyan-600 hover:bg-cyan-700 text-white" variant="default">
                        Get Started
                      </Button>
                    </Link>
                  </div>
                </motion.figure>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </motion.section>
      {!containerRef && <div className="pb-[86px] md:pb-[98px]"></div>}
    </>
  )
}
