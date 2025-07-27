"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Copy, Eye, Code } from "lucide-react"
import { useState, useRef } from "react"
import AnimatedNavbar from "@/components/ardacity/animated-navbar"

const installCommands = {
  bun: "bunx shadcn@latest add https://ardacityui.ar.io/r/animated-navbar.json",
  npm: "npx shadcn@latest add https://ardacityui.ar.io/r/animated-navbar.json",
  pnpm: "pnpm dlx shadcn@latest add https://ardacityui.ar.io/r/animated-navbar.json",
}

const codeExample = `import AnimatedNavbar from "@/components/ardacity/animated-navbar";

export default function Page() {
  return <AnimatedNavbar />;
}`

export default function AnimatedNavbarPage() {
  const [activeTab, setActiveTab] = useState("preview")
  const [copiedCommand, setCopiedCommand] = useState<string | null>(null)
  const previewContainerRef = useRef<HTMLDivElement>(null!)

  const copyToClipboard = (text: string, command: string) => {
    navigator.clipboard.writeText(text)
    setCopiedCommand(command)
    setTimeout(() => setCopiedCommand(null), 2000)
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto px-6 py-8 max-w-6xl">
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <h1 className="text-4xl font-bold">Animated Navbar</h1>
            <Badge variant="secondary">Navigation</Badge>
          </div>
          <p className="text-lg text-muted-foreground">
            A responsive animated navigation bar that transforms on scroll with smooth transitions and mobile menu.
          </p>
        </div>

        {/* Preview/Code Tabs */}
        <Card className="mb-8">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>Component Preview</CardTitle>
                <CardDescription>
                  Interactive preview of the Animated Navbar component with scroll effects
                </CardDescription>
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
              <TabsContent value="preview" className="mt-0">
                <div
                  ref={previewContainerRef}
                  className="h-[600px] bg-background p-4 rounded-lg border overflow-y-auto scrollbar-hide"
                >
                  <AnimatedNavbar<HTMLDivElement> containerRef={previewContainerRef} />
                  <div className="px-8 py-16 space-y-8">
                    <div className="text-center">
                      <h2 className="text-3xl font-bold mb-4">Scroll to see the navbar animation</h2>
                      <p className="text-muted-foreground">The navbar will transform as you scroll down</p>
                    </div>
                    {/* Demo content to enable scrolling */}
                    {Array.from({ length: 5 }).map((_, i) => (
                      <div key={i} className="bg-transparent backdrop-blur-2xl rounded-lg p-6 border">
                        <h3 className="text-xl font-semibold mb-2">Demo Section {i + 1}</h3>
                        <p className="text-muted-foreground">
                          This is demo content to showcase the navbar scroll animation. Keep scrolling to see how the
                          navbar transforms from a full-width bar to a compact rounded pill shape.
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="code" className="mt-0">
                <div className="relative">
                  <div className="bg-muted rounded-lg p-4 border">
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
            <CardDescription>
              Install the Animated Navbar component using the shadcn/ui CLI
            </CardDescription>
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
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline">framer-motion</Badge>
              <Badge variant="outline">lucide-react</Badge>
              <Badge variant="outline">next/link</Badge>
              <Badge variant="outline">@/components/ui/button</Badge>
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              These dependencies will be automatically installed when using the CLI.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
