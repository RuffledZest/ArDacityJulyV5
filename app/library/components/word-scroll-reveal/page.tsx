"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Copy, Eye, Code } from "lucide-react"
import { useState } from "react"
import WordScrollReveal from "@/components/ardacity/word-scroll-reveal"

const installCommands = {
  bun: "bunx shadcn@latest add https://ardacityui.ar.io/r/word-scroll-reveal.json",
  npm: "npx shadcn@latest add https://ardacityui.ar.io/r/word-scroll-reveal.json",
  pnpm: "pnpm dlx shadcn@latest add https://ardacityui.ar.io/r/word-scroll-reveal.json",
}

const codeExample = `import WordScrollReveal from "@/components/ardacity/word-scroll-reveal";

export default function Page() {
  return <WordScrollReveal />;
}`

export default function WordScrollRevealPage() {
  const [activeTab, setActiveTab] = useState("preview")
  const [copiedCommand, setCopiedCommand] = useState<string | null>(null)

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
            <h1 className="text-4xl font-bold">Word Scroll Reveal</h1>
            <Badge variant="secondary">Layout</Badge>
          </div>
          <p className="text-lg text-muted-foreground">
            A visually engaging component that reveals words as you scroll, perfect for creating dynamic text effects.
          </p>
        </div>

        {/* Preview/Code Tabs */}
        <Card className="mb-8">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>Component Preview</CardTitle>
                <CardDescription>
                  A scroll-triggered word reveal effect that enhances user engagement and adds a unique touch to your content.
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
                <div className="h-[600px] bg-background rounded-lg border overflow-y-auto overflow-x-hidden scrollbar-hide">
                  <WordScrollReveal />
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
              Install the Word Scroll Reveal component using the shadcn/ui CLI
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
              <Badge variant="outline">tailwind-merge</Badge>
              <Badge variant="outline">@/lib/utils</Badge>
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
