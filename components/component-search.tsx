"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Search, Command, ArrowRight, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { allComponents, type Component } from "@/lib/components-data"
import { motion, AnimatePresence } from "motion/react"

interface ComponentSearchProps {
  className?: string
}

export function ComponentSearch({ className }: ComponentSearchProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedIndex, setSelectedIndex] = useState(0)
  const router = useRouter()

  const filteredComponents = allComponents.filter((component) =>
    component.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    component.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    component.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  )

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setIsOpen(true)
      }
      if (e.key === "Escape") {
        setIsOpen(false)
        setSearchTerm("")
        setSelectedIndex(0)
      }
    }

    document.addEventListener("keydown", handleKeyDown)
    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [])

  useEffect(() => {
    if (isOpen) {
      setSelectedIndex(0)
    }
  }, [searchTerm, isOpen])

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault()
      setSelectedIndex((prev) => (prev + 1) % filteredComponents.length)
    }
    if (e.key === "ArrowUp") {
      e.preventDefault()
      setSelectedIndex((prev) => (prev - 1 + filteredComponents.length) % filteredComponents.length)
    }
    if (e.key === "Enter" && filteredComponents[selectedIndex]) {
      e.preventDefault()
      router.push(filteredComponents[selectedIndex].href)
      setIsOpen(false)
      setSearchTerm("")
      setSelectedIndex(0)
    }
  }

  const handleComponentClick = (component: Component) => {
    router.push(component.href)
    setIsOpen(false)
    setSearchTerm("")
    setSelectedIndex(0)
  }

  return (
    <>
      <Button
        variant="outline"
        className={`relative justify-start text-sm text-muted-foreground ${className}`}
        onClick={() => setIsOpen(true)}
      >
        <Search className="mr-2 h-4 w-4" />
        <span>Search components...</span>
        <kbd className="pointer-events-none absolute right-2 top-2 inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground">
          <span className="text-xs">⌘</span>K
        </kbd>
      </Button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              className="fixed left-[50%] top-[20%] z-50 grid w-full max-w-lg translate-x-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 sm:rounded-lg"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Search className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm font-medium">Search Components</span>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-6 w-6"
                  onClick={() => setIsOpen(false)}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>

              <Input
                placeholder="Search by name, description, or tags..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyDown={handleKeyDown}
                className="border-0 bg-transparent p-0 text-base focus-visible:ring-0 focus-visible:ring-offset-0"
                autoFocus
              />

              <div className="max-h-[300px] overflow-y-auto">
                {filteredComponents.length > 0 ? (
                  <div className="space-y-1">
                    {filteredComponents.map((component, index) => (
                      <motion.div
                        key={component.href}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.05 }}
                      >
                        <Button
                          variant="ghost"
                          className={`w-full justify-start p-3 h-auto ${
                            index === selectedIndex ? "bg-accent" : ""
                          }`}
                          onClick={() => handleComponentClick(component)}
                        >
                          <div className="flex items-center gap-3 w-full">
                            <div className="flex-shrink-0 p-2 bg-primary/10 rounded-lg text-primary">
                              {component.icon}
                            </div>
                            <div className="flex-1 text-left">
                              <div className="font-medium">{component.name}</div>
                              <div className="text-xs text-muted-foreground line-clamp-1">
                                {component.description}
                              </div>
                              <div className="flex gap-1 mt-1">
                                <Badge variant="secondary" className="text-xs">
                                  {component.category}
                                </Badge>
                                {component.tags.slice(0, 2).map((tag) => (
                                  <Badge key={tag} variant="outline" className="text-xs">
                                    {tag}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                            <ArrowRight className="h-4 w-4 text-muted-foreground" />
                          </div>
                        </Button>
                      </motion.div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8 text-muted-foreground">
                    <Search className="h-8 w-8 mx-auto mb-2 opacity-50" />
                    <p>No components found</p>
                    <p className="text-xs">Try a different search term</p>
                  </div>
                )}
              </div>

              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <span>{filteredComponents.length} component{filteredComponents.length !== 1 ? 's' : ''} found</span>
                <div className="flex items-center gap-2">
                  <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium">
                    ↑↓
                  </kbd>
                  <span>to navigate</span>
                  <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium">
                    ↵
                  </kbd>
                  <span>to select</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
} 