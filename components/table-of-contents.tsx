"use client"

import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

interface TocItem {
  id: string
  title: string
  level: number
}

interface TableOfContentsProps {
  className?: string
}

export function TableOfContents({ className }: TableOfContentsProps) {
  const [tocItems, setTocItems] = useState<TocItem[]>([])
  const [activeId, setActiveId] = useState<string>("")

  useEffect(() => {
    const headings = document.querySelectorAll("h1, h2, h3, h4, h5, h6")
    const items: TocItem[] = []

    headings.forEach((heading) => {
      if (heading.id) {
        items.push({
          id: heading.id,
          title: heading.textContent || "",
          level: Number.parseInt(heading.tagName.charAt(1)),
        })
      }
    })

    setTocItems(items)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      { rootMargin: "-20% 0% -35% 0%" },
    )

    headings.forEach((heading) => {
      if (heading.id) {
        observer.observe(heading)
      }
    })

    return () => observer.disconnect()
  }, [])

  if (tocItems.length === 0) return null

  return (
    <div className={cn("space-y-2", className)}>
      <h4 className="text-sm font-semibold text-foreground">On this page</h4>
      <nav className="space-y-1">
        {tocItems.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={cn(
              "block text-sm transition-colors hover:text-foreground",
              item.level === 1 && "font-medium",
              item.level === 2 && "pl-2",
              item.level === 3 && "pl-4",
              item.level >= 4 && "pl-6",
              activeId === item.id ? "text-foreground font-medium" : "text-muted-foreground",
            )}
            onClick={(e) => {
              e.preventDefault()
              document.getElementById(item.id)?.scrollIntoView({
                behavior: "smooth",
                block: "start",
              })
            }}
          >
            {item.title}
          </a>
        ))}
      </nav>
    </div>
  )
}
