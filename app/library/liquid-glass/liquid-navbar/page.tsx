"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Copy, Eye, Code } from "lucide-react"
import { useRef, useState } from "react"
import { LiquidGlassNavbar } from "@/components/ardacity/liquid-glass-navbar"
import { motion, useScroll, useTransform } from "framer-motion"

const installCommands = {
  bun: "bunx shadcn@latest add https://ardacityui.ar.io/r/liquid-glass-navbar.json",
  npm: "npx shadcn@latest add https://ardacityui.ar.io/r/liquid-glass-navbar.json",
  pnpm: "pnpm dlx shadcn@latest add https://ardacityui.ar.io/r/liquid-glass-navbar.json",
}

const codeExample = `import { LiquidGlassNavbar } from "@/components/ardacity/liquid-glass-navbar";

export default function Page() {
  return (
    <LiquidGlassNavbar
      brand=\"ArDacity UI\"
      links={[
        { label: 'Home', href: '#' },
        { label: 'Features', href: '#' },
        { label: 'Docs', href: '#' },
      ]}
      cta={{ label: 'Get Started', href: '#' }}
    />
  );
}`

export default function LiquidNavbarPage() {
  const [activeTab, setActiveTab] = useState("preview")
  const [copiedCommand, setCopiedCommand] = useState<string | null>(null)
  const previewRef = useRef<HTMLDivElement>(null)
  const [scrolled, setScrolled] = useState(false)

  // Shrink on scroll logic
  const handleScroll = () => {
    if (previewRef.current) {
      setScrolled(previewRef.current.scrollTop > 30)
    }
  }

  const copyToClipboard = (text: string, command: string) => {
    navigator.clipboard.writeText(text)
    setCopiedCommand(command)
    setTimeout(() => setCopiedCommand(null), 2000)
  }

  return (
    <div className="container mx-auto px-6 py-8 max-w-6xl">
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <h1 className="text-4xl font-bold flex items-center gap-2">Liquid Glass Navbar <span className="ml-2 px-2 py-0.5 text-xs bg-green-500 text-white rounded-full animate-pulse">New</span></h1>
          <Badge variant="secondary">Liquid Glass</Badge>
        </div>
        <p className="text-lg text-muted-foreground">
          A glass-effect navbar that shrinks on scroll, sticky to the top of the preview canvas.
        </p>
      </div>

      {/* Preview/Code Tabs */}
      <Card className="mb-8">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Component Preview</CardTitle>
              <CardDescription>Sticky glass navbar with shrink-on-scroll effect</CardDescription>
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
              <div
                ref={previewRef}
                onScroll={handleScroll}
                className="relative h-[32rem] overflow-y-auto flex flex-col items-center justify-start rounded-xl border border-muted shadow-inner"
              >
                {/* Animated background for glass effect demonstration */}
                <div
        className="absolute inset-0 z-0 pointer-events-none bg-cover bg-center invert dark:invert-0"
        style={{
          backgroundImage: 'url(/bgimg.GIF)',
          backgroundSize: '400px',
          animation: 'moveBackground 60s linear infinite',
        }}
      />
      <style>{`
        @keyframes moveBackground {
          from { background-position: 0% 0%; }
          to { background-position: 0% -1000%; }
        }
        .move-bg {
          animation: moveBackground 60s linear infinite;
        }
      `}</style>
                <motion.div
                  className="w-full sticky top-0 z-20"
                  animate={{
                    scale: scrolled ? 0.92 : 1,
                    boxShadow: scrolled
                      ? "0 2px 10px rgba(0,0,0,0.12)"
                      : "0 4px 24px rgba(0,0,0,0.18)",
                      borderRadius: scrolled ? "5rem" : "1rem",
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <LiquidGlassNavbar
                    brand="ArDacity UI"
                    links={[
                      { label: 'Home', href: '#' },
                      { label: 'Features', href: '#' },
                      { label: 'Docs', href: '#' },
                    ]}
                    cta={{ label: 'Get Started', href: '#' }}
                    className="w-full"
                    scrolled={scrolled}
                  />
                </motion.div>
                <div className="pt-32 w-full max-w-2xl mx-auto z-10">
                  <div className="h-40 bg-white/10 backdrop-blur-lg dark:bg-black/10 rounded-xl shadow mb-8 flex items-center justify-center text-xl font-semibold">Scroll to see navbar shrink</div>
                  <div className="h-40 bg-white/10 backdrop-blur-lg dark:bg-black/10 rounded-xl shadow mb-8 flex items-center justify-center text-lg">More content below</div>
                  <div className="h-40 bg-white/10 backdrop-blur-lg dark:bg-black/10 rounded-xl shadow mb-8 flex items-center justify-center text-lg">Even more content</div>
                  <div className="h-40 bg-white/10 backdrop-blur-lg dark:bg-black/10 rounded-xl shadow mb-8 flex items-center justify-center text-lg">Keep scrolling!</div>
                </div>
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
          <CardDescription>Install the Liquid Glass Navbar component using the shadcn/ui CLI</CardDescription>
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
          </div>
          <p className="text-sm text-muted-foreground mt-4">
            These dependencies will be automatically installed when using the CLI.
          </p>
        </CardContent>
      </Card>
    </div>
  )
} 