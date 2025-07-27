"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Search, Palette, Code, Zap, Blocks, Sparkles, Gamepad2 } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { motion } from "motion/react"
import { allComponents, categories } from "@/lib/components-data"

export default function LibraryPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")

  const filteredComponents = allComponents.filter((component) => {
    const matchesSearch =
      component.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      component.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      component.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    const matchesCategory = selectedCategory === "All" || component.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Interactive":
        return "bg-blue-500/10 text-blue-700 dark:text-blue-300 border-blue-500/20"
      case "Layout":
        return "bg-purple-500/10 text-purple-700 dark:text-purple-300 border-purple-500/20"
      case "Background":
        return "bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border-emerald-500/20"
      case "Typography":
        return "bg-orange-500/10 text-orange-700 dark:text-orange-300 border-orange-500/20"
      case "Glassmorphism":
        return "bg-pink-500/10 text-pink-700 dark:text-pink-300 border-pink-500/20"
      case "Retro":
        return "bg-amber-500/10 text-amber-700 dark:text-amber-300 border-amber-500/20"
      default:
        return "bg-gray-500/10 text-gray-700 dark:text-gray-300 border-gray-500/20"
    }
  }

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Interactive":
        return <Code className="h-4 w-4" />
      case "Layout":
        return <Blocks className="h-4 w-4" />
      case "Background":
        return <Zap className="h-4 w-4" />
      case "Typography":
        return <Palette className="h-4 w-4" />
      case "Glassmorphism":
        return <Sparkles className="h-4 w-4" />
      case "Retro":
        return <Gamepad2 className="h-4 w-4" />
      default:
        return <Blocks className="h-4 w-4" />
    }
  }

  return (
    <div className="container mx-auto px-6 py-8 max-w-7xl">
      <div className="mb-12">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 dark:from-gray-100 dark:via-gray-200 dark:to-gray-100 bg-clip-text text-transparent"
        >
          Component Library
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-xl text-muted-foreground max-w-3xl"
        >
          A comprehensive collection of beautiful, reusable components built with React and Tailwind CSS. 
          From interactive elements to stunning backgrounds, find everything you need for your next project.
        </motion.p>
      </div>

      {/* Search and Filter */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mb-12 space-y-6 z-30"
      >
        <div className="relative max-w-md">
          <Search className="absolute left-4 top-3.5 h-5 w-5 text-muted-foreground" />
          <Input
            placeholder="Search components..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-12 h-12 text-base border-2 focus:border-primary/50 transition-colors"
          />
        </div>

        <div className="flex flex-wrap gap-3 z-30">
          {categories.map((category) => (
            <motion.div
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Badge
                variant={selectedCategory === category ? "default" : "outline"}
                className={`cursor-pointer px-4 py-2 text-sm font-medium transition-all duration-200 hover:shadow-md ${
                  selectedCategory === category 
                    ? "bg-primary text-primary-foreground shadow-lg" 
                    : "hover:bg-accent hover:text-accent-foreground"
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                <div className="flex items-center gap-2">
                  {getCategoryIcon(category)}
                  {category}
                </div>
              </Badge>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Components Grid */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 z-30">
        {filteredComponents.map((component, index) => (
          <motion.div
            key={component.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            whileHover={{ y: -4 }}
          >
            <Link href={component.href}>
              <Card className="h-full hover:shadow-xl transition-all duration-300 cursor-pointer group border-2 hover:border-primary/20 bg-gradient-to-br from-background to-muted/20">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-4 w-full">
                      <div className="p-3 bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl text-primary group-hover:from-primary/20 group-hover:to-primary/10 transition-all duration-300 shadow-sm">
                        {component.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors">
                          {component.name}
                        </CardTitle>
                        <Badge 
                          variant="outline" 
                          className={`${getCategoryColor(component.category)} border-2`}
                        >
                          {component.category}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <CardDescription className="mb-6 text-base leading-relaxed text-muted-foreground">
                    {component.description}
                  </CardDescription>
                  <div className="flex flex-wrap gap-2">
                    {component.tags.map((tag) => (
                      <Badge 
                        key={tag} 
                        variant="secondary" 
                        className="text-xs px-2 py-1 bg-secondary/50 hover:bg-secondary/70 transition-colors"
                      >
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
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center py-16"
        >
          <Search className="h-16 w-16 mx-auto mb-4 text-muted-foreground/50" />
          <h3 className="text-xl font-semibold mb-2">No components found</h3>
          <p className="text-muted-foreground">Try adjusting your search terms or category filter</p>
        </motion.div>
      )}
    </div>
  )
}
