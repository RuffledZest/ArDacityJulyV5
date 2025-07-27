"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Copy, Eye, Code } from "lucide-react"
import { useState, useRef, useEffect } from "react"
import { motion, useAnimation } from "framer-motion"
import { LiquidGlassCard } from "@/components/ardacity/liquid-glass-card"
import bannerImg from "@/public/ArBanner2.png"
import Waves from "@/components/waves"

const installCommands = {
  bun: "bunx shadcn@latest add https://ardacityui.ar.io/r/liquid-glass-card.json",
  npm: "npx shadcn@latest add https://ardacityui.ar.io/r/liquid-glass-card.json",
  pnpm: "pnpm dlx shadcn@latest add https://ardacityui.ar.io/r/liquid-glass-card.json",
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
          to { background-position: 0% -4000%; }
        }
        .move-bg {
          animation: moveBackground 60s linear infinite;
        }
      `}</style>
    </>
  )
}

function CardVariantsShowcase() {
  return (
    <div className="relative py-12 flex flex-col items-center justify-center min-h-[420px]">
      <AnimatedBackground />
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl items-center justify-center">
        {/* Glowing Card (default variant) */}
        <LiquidGlassCard
          title="Glowing Card"
          description="A card with an extra glowing border for special highlights or callouts."
          imageUrl="https://pbs.twimg.com/media/GugZ-u9W0AAEvmr?format=jpg&name=4096x4096"
          imageAlt="Glowing Card"
          className="shadow-[0_0_32px_8px_rgba(91,250,252,0.25)] rounded-[22px] "
          borderWidth={3}
          variant="default"
        >
          <div className="flex gap-2 mt-2">
            <Button size="sm" variant="default">Try Now</Button>
          </div>
        </LiquidGlassCard>
        {/* Overlay Card (overlay variant) */}
        <LiquidGlassCard
          title="ArDacity UI"
          description="A beautiful card with content overlay on the image. Perfect for feature highlights or hero sections."
          imageUrl="https://lh3.googleusercontent.com/y60KH8wArPNVy4kslnWZFX_rDIxxPNmMLsWTwz9GiGnfCmygzsgk2ZItVZ74vBPHyqhT6nzSiWZU8TxFJEo8FN20wtnEPkGDrNksVfP2wmz66xRANzAAdOy11VBosgRmTykIsBMs"
          imageAlt="Overlay Card"
          className="rounded-[22px]  max-w-md mx-auto"
          borderWidth={3}
          variant="overlay"
        >
          <div className="flex gap-2">
            <Button size="sm" variant="secondary">Learn More</Button>
            <Button size="sm" variant="outline" className="text-black dark:text-white">Share</Button>
          </div>
        </LiquidGlassCard>
      </div>
    </div>
  )
}

const codeExample = `import { LiquidGlassCard } from "@/components/ardacity/liquid-glass-card";

export default function Page() {
  return (
    <>
      <LiquidGlassCard
        title="Glowing Card"
        description="A card with an extra glowing border for special highlights or callouts."
        imageUrl="https://pbs.twimg.com/media/GugZ-u9W0AAEvmr?format=jpg&name=4096x4096"
        imageAlt="Glowing Card"
        className="shadow-[0_0_32px_8px_rgba(91,250,252,0.25)] rounded-[22px] min-h-[500px] max-w-md mx-auto"
        borderWidth={3}
        variant="default"
      >
        <div className="flex gap-2 mt-2">
          <Button size="sm" variant="default">Try Now</Button>
        </div>
      </LiquidGlassCard>
      <LiquidGlassCard
        title="ArDacity UI"
        description="A beautiful card with content overlay on the image. Perfect for feature highlights or hero sections."
        imageUrl="https://lh3.googleusercontent.com/y60KH8wArPNVy4kslnWZFX_rDIxxPNmMLsWTwz9GiGnfCmygzsgk2ZItVZ74vBPHyqhT6nzSiWZU8TxFJEo8FN20wtnEPkGDrNksVfP2wmz66xRANzAAdOy11VBosgRmTykIsBMs"
        imageAlt="Overlay Card"
        className="rounded-[22px] min-h-[500px] max-w-md mx-auto"
        borderWidth={3}
        variant="overlay"
      >
        <div className="flex gap-2">
          <Button size="sm" variant="secondary">Learn More</Button>
          <Button size="sm" variant="outline" className="text-black dark:text-white">Share</Button>
        </div>
      </LiquidGlassCard>
    </>
  );
}`

export default function LiquidCardPage() {
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
          <h1 className="text-4xl font-bold flex items-center gap-2">Liquid Card <span className="ml-2 px-2 py-0.5 text-xs bg-green-500 text-white rounded-full animate-pulse">New</span></h1>
          <Badge variant="secondary">Liquid Glass</Badge>
        </div>
        <p className="text-lg text-muted-foreground">
          A card with a liquid glass effect and animated glowing border.
        </p>
      </div>

      {/* Preview/Code Tabs */}
      <Card className="mb-8">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Component Preview</CardTitle>
              <CardDescription>Multiple card variants with a moving background</CardDescription>
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
              <CardVariantsShowcase />
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
          <CardDescription>Install the Liquid Card component using the shadcn/ui CLI</CardDescription>
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