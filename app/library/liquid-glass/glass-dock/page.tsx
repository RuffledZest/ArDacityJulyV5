"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Copy, Eye, Code } from "lucide-react"
import { useState } from "react"
import { LiquidGlassDock } from "@/components/ardacity/liquid-glass-dock"
// import bgImg from "@/public/bgimg.GIF"
import { motion, useAnimation } from "framer-motion"
import { useRef } from "react"
import { useEffect } from "react"

const installCommands = {
  bun: "bunx shadcn@latest add https://ardacityui.ar.io/r/liquid-glass-dock.json",
  npm: "npx shadcn@latest add https://ardacityui.ar.io/r/liquid-glass-dock.json",
  pnpm: "pnpm dlx shadcn@latest add https://ardacityui.ar.io/r/liquid-glass-dock.json",
}

const codeExample = `import { LiquidGlassDock } from "@/components/ardacity/liquid-glass-dock";

export default function Page() {
  return (
    <div className=\"relative h-32 flex items-center justify-center\">
      <LiquidGlassDock position=\"bottom\" />
    </div>
  );
}`

export default function GlassDockPage() {
  const [activeTab, setActiveTab] = useState("preview")
  const [copiedCommand, setCopiedCommand] = useState<string | null>(null)
  const [dockPosition, setDockPosition] = useState<"bottom" | "left" | "right">("bottom")

  const copyToClipboard = (text: string, command: string) => {
    navigator.clipboard.writeText(text)
    setCopiedCommand(command)
    setTimeout(() => setCopiedCommand(null), 2000)
  }

  return (
    <div className="container mx-auto px-6 py-8 max-w-6xl">
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <h1 className="text-4xl font-bold flex items-center gap-2">Glass Dock <span className="ml-2 px-2 py-0.5 text-xs bg-green-500 text-white rounded-full animate-pulse">New</span></h1>
          <Badge variant="secondary">Liquid Glass</Badge>
        </div>
        <p className="text-lg text-muted-foreground">
          A macOS-style dock with a liquid glass effect and interactive glowing icons.
        </p>
      </div>

      {/* Preview/Code Tabs */}
      <Card className="mb-8">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Component Preview</CardTitle>
              <CardDescription>Interactive preview of the Glass Dock component</CardDescription>
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
              <div className="relative h-64 flex flex-col items-center justify-center">
                <div className="mb-4 flex gap-2">
                  <button onClick={() => setDockPosition("bottom")}
                    className={`px-3 py-1 rounded ${dockPosition === "bottom" ? "bg-primary text-white" : "bg-muted"}`}>Bottom</button>
                  <button onClick={() => setDockPosition("left")}
                    className={`px-3 py-1 rounded ${dockPosition === "left" ? "bg-primary text-white" : "bg-muted"}`}>Left</button>
                  <button onClick={() => setDockPosition("right")}
                    className={`px-3 py-1 rounded ${dockPosition === "right" ? "bg-primary text-white" : "bg-muted"}`}>Right</button>
                </div>
                <LiquidGlassDock position={dockPosition} />
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
          <CardDescription>Install the Glass Dock component using the shadcn/ui CLI</CardDescription>
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