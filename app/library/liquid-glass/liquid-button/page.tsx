"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Copy, Eye, Code } from "lucide-react"
import { useState } from "react"
import { motion } from "framer-motion"
import { LiquidGlassButton } from "@/components/ardacity/liquid-glass-button"
import Waves from "@/components/waves"

const installCommands = {
  bun: "bunx shadcn@latest add https://ardacityui.ar.io/r/liquid-glass-button.json",
  npm: "npx shadcn@latest add https://ardacityui.ar.io/r/liquid-glass-button.json",
  pnpm: "pnpm dlx shadcn@latest add https://ardacityui.ar.io/r/liquid-glass-button.json",
}

function AnimatedBackground() {
  // Animated background from music card
  return (
    <>
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
          to { background-position: 0% -1000%; }
        }
        .move-bg {
          animation: moveBackground 60s linear infinite;
        }
      `}</style>
    </>
  )
}

function ButtonVariantsShowcase() {
  return (
    <div className="relative py-12 flex flex-col items-center justify-center min-h-[320px]">
      <AnimatedBackground />
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-2xl">
        <LiquidGlassButton variant="primary" size="md">Primary</LiquidGlassButton>
        <LiquidGlassButton variant="secondary" size="md">Secondary</LiquidGlassButton>
        <LiquidGlassButton variant="outline" size="md">Outline</LiquidGlassButton>
        <LiquidGlassButton variant="primary" size="lg">Large Primary</LiquidGlassButton>
        <LiquidGlassButton variant="secondary" size="lg">Large Secondary</LiquidGlassButton>
        <LiquidGlassButton variant="outline" size="lg">Large Outline</LiquidGlassButton>
        <LiquidGlassButton variant="primary" size="sm">Small Primary</LiquidGlassButton>
        <LiquidGlassButton variant="secondary" size="sm">Small Secondary</LiquidGlassButton>
        <LiquidGlassButton variant="outline" size="sm">Small Outline</LiquidGlassButton>
        <LiquidGlassButton variant="primary" size="md" disabled>Disabled</LiquidGlassButton>
      </div>
    </div>
  )
}

const codeExample = `import { LiquidGlassButton } from "@/components/ardacity/liquid-glass-button";

export default function Page() {
  return (
    <>
      <LiquidGlassButton variant="primary" size="md">Primary</LiquidGlassButton>
      <LiquidGlassButton variant="secondary" size="md">Secondary</LiquidGlassButton>
      <LiquidGlassButton variant="outline" size="md">Outline</LiquidGlassButton>
      <LiquidGlassButton variant="primary" size="lg">Large Primary</LiquidGlassButton>
      <LiquidGlassButton variant="secondary" size="lg">Large Secondary</LiquidGlassButton>
      <LiquidGlassButton variant="outline" size="lg">Large Outline</LiquidGlassButton>
      <LiquidGlassButton variant="primary" size="sm">Small Primary</LiquidGlassButton>
      <LiquidGlassButton variant="secondary" size="sm">Small Secondary</LiquidGlassButton>
      <LiquidGlassButton variant="outline" size="sm">Small Outline</LiquidGlassButton>
      <LiquidGlassButton variant="primary" size="md" disabled>Disabled</LiquidGlassButton>
    </>
  );
}`

export default function LiquidButtonPage() {
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
          <h1 className="text-4xl font-bold flex items-center gap-2">Liquid Button <span className="ml-2 px-2 py-0.5 text-xs bg-green-500 text-white rounded-full animate-pulse">New</span></h1>
          <Badge variant="secondary">Liquid Glass</Badge>
        </div>
        <p className="text-lg text-muted-foreground">
          A button with a liquid glass effect and animated glowing border.
        </p>
      </div>

      {/* Preview/Code Tabs */}
      <Card className="mb-8">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Component Preview</CardTitle>
              <CardDescription>All button variants with a moving background</CardDescription>
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
              <ButtonVariantsShowcase />
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
          <CardDescription>Install the Liquid Button component using the shadcn/ui CLI</CardDescription>
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