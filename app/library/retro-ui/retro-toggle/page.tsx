"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Copy, Eye, Code } from "lucide-react"
import { useState } from "react"
import { RetroToggle } from "@/components/ardacity/ar-retro-toggle"

const installCommands = {
  bun: "bunx shadcn@latest add https://ardacityui.ar.io/r/ar-retro-toggle.json",
  npm: "npx shadcn@latest add https://ardacityui.ar.io/r/ar-retro-toggle.json",
  pnpm: "pnpm dlx shadcn@latest add https://ardacityui.ar.io/r/ar-retro-toggle.json",
}

const codeExample = `import { RetroToggle } from "@/components/ardacity/ar-retro-toggle";

export default function Page() {
  const [activeOption, setActiveOption] = useState("Option 1");

  return (
    <RetroToggle
      options={["Option 1", "Option 2", "Option 3"]}
      activeOption={activeOption}
      onChange={setActiveOption}
      primaryColor="#2d2d2d"
      secondaryColor="#f5f5dc"
    />
  );
}`

export default function RetroTogglePage() {
  const [activeTab, setActiveTab] = useState("preview")
  const [copiedCommand, setCopiedCommand] = useState<string | null>(null)
  const [primaryColor, setPrimaryColor] = useState("#2d2d2d")
  const [secondaryColor, setSecondaryColor] = useState("#f5f5dc")
  const [textColor, setTextColor] = useState("#666")
  const [activeTextColor, setActiveTextColor] = useState("#f5f5dc")
  const [activeOption, setActiveOption] = useState("Option 1")
  const [size, setSize] = useState<"sm" | "md" | "lg">("md")
  const [options, setOptions] = useState(["Option 1", "Option 2", "Option 3"])

  const copyToClipboard = (text: string, command: string) => {
    navigator.clipboard.writeText(text)
    setCopiedCommand(command)
    setTimeout(() => setCopiedCommand(null), 2000)
  }

  return (
    <div className="container mx-auto px-6 py-8 max-w-6xl">
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <h1 className="text-4xl font-bold flex items-center gap-2">
            Retro Toggle
            <span className="ml-2 px-2 py-0.5 text-xs bg-green-500 text-white rounded-full animate-pulse">New</span>
          </h1>
          <Badge variant="secondary">Retro</Badge>
        </div>
        <p className="text-lg text-muted-foreground">A retro-styled toggle component with customizable options and colors.</p>
      </div>

      {/* Preview/Code Tabs */}
      <Card className="mb-8">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Component Preview</CardTitle>
              <CardDescription>Interactive preview of the Retro Toggle component</CardDescription>
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
              <div className="space-y-6">
                {/* Controls */}
                <div className="flex flex-wrap gap-4 p-4 bg-muted rounded-lg">
                  <div className="flex items-center gap-2">
                    <label className="text-sm font-medium">Primary Color:</label>
                    <input
                      type="color"
                      value={primaryColor}
                      onChange={(e) => setPrimaryColor(e.target.value)}
                      className="w-8 h-8 rounded border"
                    />
                  </div>
                  <div className="flex items-center gap-2">
                    <label className="text-sm font-medium">Secondary Color:</label>
                    <input
                      type="color"
                      value={secondaryColor}
                      onChange={(e) => setSecondaryColor(e.target.value)}
                      className="w-8 h-8 rounded border"
                    />
                  </div>
                  <div className="flex items-center gap-2">
                    <label className="text-sm font-medium">Text Color:</label>
                    <input
                      type="color"
                      value={textColor}
                      onChange={(e) => setTextColor(e.target.value)}
                      className="w-8 h-8 rounded border"
                    />
                  </div>
                  <div className="flex items-center gap-2">
                    <label className="text-sm font-medium">Active Text Color:</label>
                    <input
                      type="color"
                      value={activeTextColor}
                      onChange={(e) => setActiveTextColor(e.target.value)}
                      className="w-8 h-8 rounded border"
                    />
                  </div>
                  <div className="flex items-center gap-2">
                    <label className="text-sm font-medium">Size:</label>
                    <select
                      value={size}
                      onChange={(e) => setSize(e.target.value as "sm" | "md" | "lg")}
                      className="px-2 py-1 rounded border"
                    >
                      <option value="sm">Small</option>
                      <option value="md">Medium</option>
                      <option value="lg">Large</option>
                    </select>
                  </div>
                </div>

                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-2">
                    <label className="text-sm font-medium">Options (comma-separated):</label>
                    <input
                      type="text"
                      value={options.join(", ")}
                      onChange={(e) => setOptions(e.target.value.split(", ").filter(Boolean))}
                      className="px-2 py-1 rounded border flex-1"
                      placeholder="Option 1, Option 2, Option 3"
                    />
                  </div>
                  <div className="flex items-center gap-2">
                    <label className="text-sm font-medium">Active Option:</label>
                    <select
                      value={activeOption}
                      onChange={(e) => setActiveOption(e.target.value)}
                      className="px-2 py-1 rounded border"
                    >
                      {options.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Preview */}
                <div className="flex items-center justify-center p-8 bg-gradient-to-br from-amber-50 to-orange-100 dark:from-gray-900 dark:to-gray-800 rounded-lg">
                  <RetroToggle
                    options={options}
                    activeOption={activeOption}
                    onChange={setActiveOption}
                    primaryColor={primaryColor}
                    secondaryColor={secondaryColor}
                    textColor={textColor}
                    activeTextColor={activeTextColor}
                    size={size}
                  />
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
          <CardDescription>Install the Retro Toggle component using the shadcn/ui CLI</CardDescription>
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
            <Badge variant="outline">None</Badge>
          </div>
          <p className="text-sm text-muted-foreground mt-4">
            This component has no external dependencies.
          </p>
        </CardContent>
      </Card>
    </div>
  )
} 