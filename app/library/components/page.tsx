"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Search, Palette, Code, Zap, Blocks } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { motion } from "motion/react"

const components = [
  {
    name: "Action Search Bar",
    description: "Command palette with keyboard navigation and search",
    href: "/components/action-search-bar",
    category: "Interactive",
    tags: ["Search", "Command", "Keyboard"],
    icon: <Code className="h-5 w-5" />,
  },
  {
    name: "Word Scroll Reveal",
    description: "Animated word reveal effect on scroll",
    href: "/components/word-scroll-reveal",
    category: "Interactive",
    tags: ["Animation", "Scroll"],
    icon: <Zap className="h-5 w-5" />,
  },
  {
    name: "Animated Navbar",
    description: "A responsive animated navbar with smooth transitions",
    href: "/components/animated-navbar",
    category: "Layout",
    tags: ["Navigation", "Responsive"],
    icon: <Blocks className="h-5 w-5" />,
  },
  {
    name: "Avatar Picker",
    description: "An animated avatar picker with smooth transitions",
    href: "/components/avatar-picker",
    category: "Interactive",
    tags: ["Motion", "User Interface"],
    icon: <Palette className="h-5 w-5" />,
  },
  {
    name: "Background Circles",
    description: "Animated circular background elements",
    href: "/components/background-circles",
    category: "Background",
    tags: ["Animation", "Background"],
    icon: <Zap className="h-5 w-5" />,
  },
  {
    name: "Beams Background",
    description: "Animated background with flowing beams",
    href: "/components/beams-background",
    category: "Background",
    tags: ["Animation", "Background"],
    icon: <Zap className="h-5 w-5" />,
  },
  {
    name: "Bento Grid",
    description: "A responsive grid layout with hover effects",
    href: "/components/bento-grid",
    category: "Layout",
    tags: ["Grid", "Responsive"],
    icon: <Blocks className="h-5 w-5" />,
  },
  {
    name: "Buttons",
    description: "Collection of interactive button components",
    href: "/components/button",
    category: "Interactive",
    tags: ["Button", "Interactive"],
    icon: <Code className="h-5 w-5" />,
  },
  {
    name: "Checkout Interaction",
    description: "Shopping cart interface with animations",
    href: "/components/checkout-interaction",
    category: "Interactive",
    tags: ["E-commerce", "Cart"],
    icon: <Code className="h-5 w-5" />,
  },
  {
    name: "Currency Transfer",
    description: "Currency exchange interface with success animations",
    href: "/components/currency-transfer",
    category: "Interactive",
    tags: ["Finance", "Animation"],
    icon: <Code className="h-5 w-5" />,
  },
  {
    name: "Hand Written Title",
    description: "Animated hand-drawn title effect",
    href: "/components/hand-written-title",
    category: "Typography",
    tags: ["Animation", "Typography"],
    icon: <Palette className="h-5 w-5" />,
  },
  {
    name: "Hero Geometric",
    description: "Hero section with floating geometric shapes",
    href: "/components/hero-geometric",
    category: "Layout",
    tags: ["Hero", "Geometric"],
    icon: <Zap className="h-5 w-5" />,
  },
  {
    name: "Particles Background",
    description: "Particle system background with noise-based movement",
    href: "/components/particles-background",
    category: "Background",
    tags: ["Particles", "Animation"],
    icon: <Zap className="h-5 w-5" />,
  },
  {
    name: "Toolbar",
    description: "Interactive toolbar with expandable buttons",
    href: "/components/toolbar",
    category: "Interactive",
    tags: ["Toolbar", "Navigation"],
    icon: <Code className="h-5 w-5" />,
  },
  {
    name: "Tweet Card",
    description: "Social media card component with reply functionality",
    href: "/components/tweet-card",
    category: "Interactive",
    tags: ["Social", "Card"],
    icon: <Code className="h-5 w-5" />,
  },
  {
    name: "Vercel V0 Chat",
    description: "Chat interface inspired by Vercel's v0",
    href: "/components/vercel-v0-chat",
    category: "Interactive",
    tags: ["Chat", "Interface"],
    icon: <Code className="h-5 w-5" />,
  },
]

const categories = ["All", "Interactive", "Layout", "Background", "Typography"]

export default function ComponentsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")

  const filteredComponents = components.filter((component) => {
    const matchesSearch =
      component.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      component.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "All" || component.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <div className="container mx-auto px-6 py-8 max-w-6xl">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">Components</h1>
        <p className="text-lg text-muted-foreground">
          A collection of beautiful, reusable components built with React and Tailwind CSS.
        </p>
      </div>

      {/* Search and Filter */}
      <div className="mb-8 space-y-4">
        <div className="relative">
          <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search components..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>

        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <Badge
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              className="cursor-pointer"
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </Badge>
          ))}
        </div>
      </div>

      {/* Components Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredComponents.map((component, index) => (
          <motion.div
            key={component.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <Link href={component.href}>
              <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer group">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-primary/10 rounded-lg text-primary group-hover:bg-primary/20 transition-colors">
                        {component.icon}
                      </div>
                      <div>
                        <CardTitle className="text-lg">{component.name}</CardTitle>
                        <Badge variant="outline" className="mt-1">
                          {component.category}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4">{component.description}</CardDescription>
                  <div className="flex flex-wrap gap-1">
                    {component.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </Link>
          </motion.div>
        ))}
      </div>

      {filteredComponents.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground">No components found matching your criteria.</p>
        </div>
      )}
    </div>
  )
}
