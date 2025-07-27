"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Copy, Eye, Code } from "lucide-react"
import { useState } from "react"
import { LiquidGlassMusicPlayer } from "@/components/ardacity/liquid-glass-music-player"
import { motion, useAnimation } from "framer-motion"
import { useRef } from "react"
import { useEffect } from "react"


const installCommands = {
  bun: "bunx shadcn@latest add https://ardacityui.ar.io/r/liquid-music-card.json",
  npm: "npx shadcn@latest add https://ardacityui.ar.io/r/liquid-music-card.json",
  pnpm: "pnpm dlx shadcn@latest add https://ardacityui.ar.io/r/liquid-music-card.json",
}

const codeExample = `import { LiquidGlassMusicPlayer } from "@/components/ardacity/liquid-glass-music-player";

export default function Page() {
  return (
    <LiquidGlassMusicPlayer
      albumArt=\"/placeholder.svg?height=200&width=200\"
      songTitle=\"Midnight Dreams\"
      artist=\"Luna & The Stars\"
      duration={245}
    />
  );
}`

export default function MusicCardPage() {
  const [activeTab, setActiveTab] = useState("preview")
  const [copiedCommand, setCopiedCommand] = useState<string | null>(null)

  const copyToClipboard = (text: string, command: string) => {
    navigator.clipboard.writeText(text)
    setCopiedCommand(command)
    setTimeout(() => setCopiedCommand(null), 2000)
  }

  return (
    <div className="container mx-auto px-6 py-8 max-w-6xl">
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <h1 className="text-4xl font-bold flex items-center gap-2">Music Card <span className="ml-2 px-2 py-0.5 text-xs bg-green-500 text-white rounded-full animate-pulse">New</span></h1>
          <Badge variant="secondary">Liquid Glass</Badge>
        </div>
        <p className="text-lg text-muted-foreground">
          A music player card with a liquid glass effect, animated controls, and glowing highlights.
        </p>
      </div>

      {/* Preview/Code Tabs */}
      <Card className="mb-8">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Component Preview</CardTitle>
              <CardDescription>Interactive preview of the Music Card component</CardDescription>
            </div>
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList>
                <TabsTrigger value="preview" className="flex items-center gap-2">
                  <Eye className="h-4 w-4" />
                  Preview
                </TabsTrigger>
                <TabsTrigger value="code" className="flex items-center gap-2">
                  <Code className="h-4 w-4" />
                  Code
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
        </CardHeader>
        <CardContent>
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsContent value="preview" className="mt-0 ">
              <div className="relative h-[32rem] flex items-center justify-center overflow-hidden">
                {/* Animated background for glass effect demonstration */}
                <div
        className="absolute inset-0 z-0 pointer-events-none bg-cover bg-center invert dark:invert-0"
        style={{
          backgroundImage: 'url(/bgimg.GIF)',
         
          animation: 'moveBackground 60s linear infinite',
        }}
      />
      <style>{`
        @keyframes moveBackground {
          from { background-position: 0% 0%; }
          to { background-position: 0% -4000%; }
        }
        .move-bg {
          animation: moveBackground 60s linear infinite;
        }
      `}</style>
                {/* Draggable Music Card */}
                <DraggableMusicCardOverlay />
              </div>
            </TabsContent>
            <TabsContent value="code" className="mt-0">
              <div className="relative">
                <div className="bg-muted rounded-lg p-4">
                  <pre className="text-sm overflow-x-auto">
                    <code>{codeExample}</code>
                  </pre>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  className="absolute top-2 right-2"
                  onClick={() => copyToClipboard(codeExample, "code")}
                >
                  <Copy className="h-4 w-4" />
                  {copiedCommand === "code" ? "Copied!" : "Copy"}
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      {/* Installation */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Installation</CardTitle>
          <CardDescription>Install the Music Card component using the shadcn/ui CLI</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="bun" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="bun">bun</TabsTrigger>
              <TabsTrigger value="npm">npm</TabsTrigger>
              <TabsTrigger value="pnpm">pnpm</TabsTrigger>
            </TabsList>
            {Object.entries(installCommands).map(([key, command]) => (
              <TabsContent key={key} value={key}>
                <div className="relative">
                  <div className="flex items-center justify-between bg-muted rounded-lg p-4">
                    <code className="text-sm">{command}</code>
                    <Button variant="ghost" size="sm" onClick={() => copyToClipboard(command, key)}>
                      <Copy className="h-4 w-4" />
                      {copiedCommand === key ? "Copied!" : "Copy"}
                    </Button>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </CardContent>
      </Card>

      {/* Dependencies */}
      <Card>
        <CardHeader>
          <CardTitle>Dependencies</CardTitle>
          <CardDescription>Required dependencies for this component</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <Badge variant="outline">motion/react</Badge>
            <Badge variant="outline">@/components/ui/card</Badge>
            <Badge variant="outline">@/lib/utils</Badge>
            <Badge variant="outline">lucide-react</Badge>
          </div>
          <p className="text-sm text-muted-foreground mt-4">
            These dependencies will be automatically installed when using the CLI.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}

function DraggableMusicCardOverlay() {
  const cardRef = useRef<HTMLDivElement | null>(null)
  const controls = useAnimation()
  const [isDragging, setIsDragging] = useState(false)
  const [resetTimeout, setResetTimeout] = useState<NodeJS.Timeout | null>(null)

  // Center position calculation
  const getCenter = () => {
    const width = 400
    const height = 400
    const x = typeof window !== "undefined" ? (window.innerWidth - width) / 2 : 0
    const y = typeof window !== "undefined" ? (window.innerHeight - height) / 2 : 0
    return { x, y }
  }

  useEffect(() => {
    const { x, y } = getCenter()
    controls.start({ x, y, opacity: 1, transition: { duration: 0.2 } })
  }, [controls])

  const handleDragStart = () => {
    setIsDragging(true)
    if (resetTimeout) clearTimeout(resetTimeout)
  }

  const handleDragEnd = () => {
    setIsDragging(false)
    // After 3 seconds, return to center
    const timeout = setTimeout(() => {
      const { x, y } = getCenter()
      controls.start({ x, y, transition: { duration: 0.3, ease: "easeInOut" } })
    }, 3000)
    setResetTimeout(timeout)
  }

  return (
    <motion.div
      ref={cardRef}
      drag
      dragMomentum={false}
      dragElastic={0}
      dragConstraints={false}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      style={{
        zIndex: 50,
        position: "fixed",
        width: 400,
        pointerEvents: "auto",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        top: 0,
        left: 0,
        cursor: isDragging ? "grabbing" : "grab",
      }}
      animate={controls}
      initial={getCenter()}
    >
      <LiquidGlassMusicPlayer
        albumArt="https://upload.wikimedia.org/wikipedia/en/0/01/Ed_Sheeran_-_Old_Phone.png"
        songTitle="Old Phone"
        artist="Ed Sheeran"
        duration={221}
      />
    </motion.div>
  )
} 