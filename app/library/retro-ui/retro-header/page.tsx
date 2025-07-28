"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Copy, Eye, Code } from "lucide-react"
import { useState } from "react"
import { RetroHeader } from "@/components/ardacity/ar-retro-header"
import { RetroVideo } from "@/components/ardacity/ar-retro-video"
import { RetroColorPresets } from "@/components/ardacity/ar-retro-color-presets"
import { RetroSelect } from "@/components/ardacity/ar-retro-select"

const installCommands = {
  bun: "bunx shadcn@latest add https://ardacityui.ar.io/r/ar-retro-header.json",
  npm: "npx shadcn@latest add https://ardacityui.ar.io/r/ar-retro-header.json",
  pnpm: "pnpm dlx shadcn@latest add https://ardacityui.ar.io/r/ar-retro-header.json",
}

const codeExample = `import { RetroHeader } from "@/components/ardacity/ar-retro-header";

export default function Page() {
  return (
    <RetroHeader
      title="GLIMPSE"
      subtitle="SEARCH ALMOST"
      highlightedWord="ANYTHING"
      onSearch={(query, filter) => console.log(query, filter)}
      onNavToggle={(option) => console.log(option)}
    />
  );
}`

export default function RetroHeaderPage() {
  const [activeTab, setActiveTab] = useState("preview")
  const [copiedCommand, setCopiedCommand] = useState<string | null>(null)

  // Customization states
  const [title, setTitle] = useState("GLIMPSE")
  const [subtitle, setSubtitle] = useState("SEARCH ALMOST")
  const [highlightedWord, setHighlightedWord] = useState("ANYTHING")
  const [colors, setColors] = useState({
    primary: "#2d2d2d",
    secondary: "#f5f5dc",
    text: "#2d2d2d",
  })
  const [backgroundColor, setBackgroundColor] = useState("#f5f5dc")

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
            Retro Header
            <span className="ml-2 px-2 py-0.5 text-xs bg-green-500 text-white rounded-full animate-pulse">New</span>
          </h1>
          <Badge variant="secondary">Retro</Badge>
        </div>
        <p className="text-lg text-muted-foreground">
          A complete retro-styled header component with navigation, search, and decorative elements.
        </p>
      </div>

      {/* Header Video Preview */}
      {/* <div className="mb-8">
        <RetroVideo
          title="ArDacity UI - Retro Header Component"
          primaryColor={colors.primary}
          secondaryColor={colors.secondary}
          textColor={colors.text}
          controls={true}
          autoPlay={false}
        />
      </div> */}

      {/* Preview/Code Tabs */}
      <Card className="mb-8">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Component Preview</CardTitle>
              <CardDescription>Interactive preview of the Retro Header component</CardDescription>
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
                {/* Preview */}
                <div className="border rounded-lg overflow-hidden">
                  <RetroHeader
                    title={title}
                    subtitle={subtitle}
                    highlightedWord={highlightedWord}
                    primaryColor={colors.primary}
                    secondaryColor={colors.secondary}
                    backgroundColor={backgroundColor}
                    textColor={colors.text}
                    onSearch={(query: any, filter: any) => console.log("Search:", query, filter)}
                    onNavToggle={(option: any) => console.log("Nav toggle:", option)}
                    onStatusClick={() => console.log("Status clicked")}
                  />
                </div>

                {/* Chat Bubbles and Video Side by Side */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* Chat Bubbles */}
                  {/* <div className="space-y-4">
                    <div className="bg-blue-100 dark:bg-blue-900 p-4 rounded-lg border-2 border-blue-300 dark:border-blue-700">
                      <p className="text-sm text-blue-800 dark:text-blue-200">
                        "Glimpse is the one stop solution to search anything on the hyperbeam and go using vector search feature."
                      </p>
                    </div>
                    <div className="bg-green-100 dark:bg-green-900 p-4 rounded-lg border-2 border-green-300 dark:border-green-700 ml-8">
                      <p className="text-sm text-green-800 dark:text-green-200">
                        "Wow look great!"
                      </p>
                    </div>
                  </div> */}

                  {/* Video Component */}
                  
                </div>

                {/* Color Presets */}
                <div className="p-4 bg-muted rounded-lg">
                  <RetroColorPresets
                    colors={colors}
                    onColorsChange={setColors}
                  />
                </div>

                {/* Component Options */}
                <div className="flex flex-col gap-4 max-w-md mx-auto">
                  <div className="space-y-1">
                    <label className="text-sm font-medium">Title:</label>
                    <input
                      type="text"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      className="px-3 py-2 rounded-lg border-2 font-mono transition-all duration-200 focus:outline-none focus:shadow-lg w-full"
                      style={{
                        backgroundColor: colors.secondary,
                        borderColor: colors.primary,
                        color: colors.text,
                        boxShadow: `2px 2px 0px ${colors.primary}`,
                      }}
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-sm font-medium">Subtitle:</label>
                    <input
                      type="text"
                      value={subtitle}
                      onChange={(e) => setSubtitle(e.target.value)}
                      className="px-3 py-2 rounded-lg border-2 font-mono transition-all duration-200 focus:outline-none focus:shadow-lg w-full"
                      style={{
                        backgroundColor: colors.secondary,
                        borderColor: colors.primary,
                        color: colors.text,
                        boxShadow: `2px 2px 0px ${colors.primary}`,
                      }}
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-sm font-medium">Highlighted Word:</label>
                    <input
                      type="text"
                      value={highlightedWord}
                      onChange={(e) => setHighlightedWord(e.target.value)}
                      className="px-3 py-2 rounded-lg border-2 font-mono transition-all duration-200 focus:outline-none focus:shadow-lg w-full"
                      style={{
                        backgroundColor: colors.secondary,
                        borderColor: colors.primary,
                        color: colors.text,
                        boxShadow: `2px 2px 0px ${colors.primary}`,
                      }}
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-sm font-medium">Background:</label>
                    <input
                      type="color"
                      value={backgroundColor}
                      onChange={(e) => setBackgroundColor(e.target.value)}
                      className="w-full h-10 rounded-lg border-2 border-gray-300"
                    />
                  </div>
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
          <CardDescription>Install the Retro Header component using the shadcn/ui CLI</CardDescription>
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

      {/* Props Documentation */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Props</CardTitle>
          <CardDescription>Available props for the Retro Header component</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-2">Prop</th>
                  <th className="text-left p-2">Type</th>
                  <th className="text-left p-2">Default</th>
                  <th className="text-left p-2">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-2 font-mono">title</td>
                  <td className="p-2">string</td>
                  <td className="p-2">"GLIMPSE"</td>
                  <td className="p-2">Main brand title</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2 font-mono">subtitle</td>
                  <td className="p-2">string</td>
                  <td className="p-2">"SEARCH ALMOST"</td>
                  <td className="p-2">Subtitle text</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2 font-mono">highlightedWord</td>
                  <td className="p-2">string</td>
                  <td className="p-2">"ANYTHING"</td>
                  <td className="p-2">Highlighted word in title</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2 font-mono">navToggleOptions</td>
                  <td className="p-2">string[]</td>
                  <td className="p-2">["WEB", "ARNS"]</td>
                  <td className="p-2">Navigation toggle options</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2 font-mono">searchFilters</td>
                  <td className="p-2">string[]</td>
                  <td className="p-2">["Text", "Image", "Video", "Audio"]</td>
                  <td className="p-2">Search filter options</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2 font-mono">onSearch</td>
                  <td className="p-2">function</td>
                  <td className="p-2">-</td>
                  <td className="p-2">Search callback function</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2 font-mono">onNavToggle</td>
                  <td className="p-2">function</td>
                  <td className="p-2">-</td>
                  <td className="p-2">Navigation toggle callback</td>
                </tr>
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Features */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Features</CardTitle>
          <CardDescription>Key features of the Retro Header component</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <h4 className="font-semibold">🎨 Fully Customizable</h4>
              <p className="text-sm text-muted-foreground">All colors, text, and options can be customized via props</p>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold">📱 Responsive Design</h4>
              <p className="text-sm text-muted-foreground">Adapts to all screen sizes with mobile-first approach</p>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold">🔍 Search Functionality</h4>
              <p className="text-sm text-muted-foreground">Built-in search with filter options and callbacks</p>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold">🎭 Retro Aesthetic</h4>
              <p className="text-sm text-muted-foreground">Authentic retro styling with decorative elements</p>
            </div>
          </div>
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
            <Badge variant="outline">lucide-react</Badge>
          </div>
          <p className="text-sm text-muted-foreground mt-4">
            This component only requires lucide-react for icons and is fully self-contained.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
