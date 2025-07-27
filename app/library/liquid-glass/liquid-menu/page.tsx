"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Eye, Code } from "lucide-react"
import { useState, useRef, useEffect } from "react"
import { motion, useAnimation } from "framer-motion"
import { LiquidGlassMenu } from "@/components/ardacity/liquid-glass-menu"
import Waves from "@/components/waves"
import { MoreVertical, Edit, Star, Download, Trash2, Share, Copy } from "lucide-react"

const installCommands = {
  bun: "bunx shadcn@latest add https://ardacityui.ar.io/r/liquid-glass-menu.json",
  npm: "npx shadcn@latest add https://ardacityui.ar.io/r/liquid-glass-menu.json",
  pnpm: "pnpm dlx shadcn@latest add https://ardacityui.ar.io/r/liquid-glass-menu.json",
}

const codeExample = `import { LiquidGlassMenu } from "@/components/ardacity/liquid-glass-menu";

export default function Page() {
  return <LiquidGlassMenu />;
}`

function MenuVariantsShowcase() {
  return (
    <div className="relative py-12 flex flex-col items-center justify-center min-h-[220px]">
      {/* Animated background for glass effect demonstration */}
      <div
        className="absolute inset-0 z-0 pointer-events-none bg-cover h-full bg-center invert dark:invert-0 move-bg"
        style={{
          backgroundImage: 'url(/bgimg.GIF)',
          backgroundSize: '400px',
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
      <div className="relative z-10 flex flex-wrap gap-4 w-full max-w-2xl items-center justify-center">
        <LiquidGlassMenu trigger={<MoreVertical className="h-5 w-5" />} />
        <LiquidGlassMenu trigger={<Edit className="h-5 w-5" />} />
        <LiquidGlassMenu trigger={<Star className="h-5 w-5" />} />
        <LiquidGlassMenu trigger={<Download className="h-5 w-5" />} />
        <LiquidGlassMenu trigger={<Trash2 className="h-5 w-5 text-red-500" />} />
        <LiquidGlassMenu trigger={<Share className="h-5 w-5" />} />
        <LiquidGlassMenu trigger={<Copy className="h-5 w-5" />} />
        <LiquidGlassMenu trigger={<span className="font-bold text-xs px-2">Menu</span>} />
        <LiquidGlassMenu trigger={<span className="font-bold text-xs px-2">⋮</span>} />
      </div>
    </div>
  )
}

export default function LiquidMenuPage() {
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
          <h1 className="text-4xl font-bold flex items-center gap-2">Liquid Menu <span className="ml-2 px-2 py-0.5 text-xs bg-green-500 text-white rounded-full animate-pulse">New</span></h1>
          <Badge variant="secondary">Liquid Glass</Badge>
        </div>
        <p className="text-lg text-muted-foreground">
          A context menu with a liquid glass effect and animated glowing highlights.
        </p>
      </div>

      {/* Preview/Code Tabs */}
      <Card className="mb-8">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Component Preview</CardTitle>
              <CardDescription>All menu button variants with a moving background</CardDescription>
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
              <MenuVariantsShowcase />
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
          <CardDescription>Install the Liquid Menu component using the shadcn/ui CLI</CardDescription>
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