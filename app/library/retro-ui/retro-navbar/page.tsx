"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Copy, Eye, Code, Home, User, Settings, Mail, Heart } from "lucide-react"
import { useState } from "react"
import { RetroNavbar } from "@/components/ardacity/ar-retro-navbar"

const installCommands = {
  bun: "bunx shadcn@latest add https://ardacityui.ar.io/r/ar-retro-navbar.json",
  npm: "npx shadcn@latest add https://ardacityui.ar.io/r/ar-retro-navbar.json",
  pnpm: "pnpm dlx shadcn@latest add https://ardacityui.ar.io/r/ar-retro-navbar.json",
}

const codeExample = `import { RetroNavbar } from "@/components/ardacity/ar-retro-navbar";

export default function Page() {
  return (
    <RetroNavbar
      title="RETRO SITE"
      primaryColor="#2d2d2d"
      secondaryColor="#f5f5dc"
      textColor="#2d2d2d"
    />
  );
}`

export default function RetroNavbarPage() {
  const [activeTab, setActiveTab] = useState("preview")
  const [copiedCommand, setCopiedCommand] = useState<string | null>(null)
  const [primaryColor, setPrimaryColor] = useState("#2d2d2d")
  const [secondaryColor, setSecondaryColor] = useState("#f5f5dc")
  const [textColor, setTextColor] = useState("#2d2d2d")
  const [title, setTitle] = useState("RETRO SITE")

  const copyToClipboard = (text: string, command: string) => {
    navigator.clipboard.writeText(text)
    setCopiedCommand(command)
    setTimeout(() => setCopiedCommand(null), 2000)
  }

  const defaultItems = [
    { label: "Home", href: "#", icon: <Home className="w-4 h-4" /> },
    { label: "About", href: "#", icon: <User className="w-4 h-4" /> },
    { label: "Contact", href: "#", icon: <Mail className="w-4 h-4" /> },
    { label: "Settings", href: "#", icon: <Settings className="w-4 h-4" /> },
  ]

  return (
    <div className="container mx-auto px-6 py-8 max-w-6xl">
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <h1 className="text-4xl font-bold flex items-center gap-2">
            Retro Navbar
            <span className="ml-2 px-2 py-0.5 text-xs bg-green-500 text-white rounded-full animate-pulse">New</span>
          </h1>
          <Badge variant="secondary">Retro</Badge>
        </div>
        <p className="text-lg text-muted-foreground">A retro-styled navigation bar with customizable colors and menu items.</p>
      </div>

      {/* Preview/Code Tabs */}
      <Card className="mb-8">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Component Preview</CardTitle>
              <CardDescription>Interactive preview of the Retro Navbar component</CardDescription>
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
                </div>

                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-2">
                    <label className="text-sm font-medium">Title:</label>
                    <input
                      type="text"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      className="px-2 py-1 rounded border flex-1"
                    />
                  </div>
                </div>

                {/* Preview */}
                <div className="p-8 bg-gradient-to-br from-amber-50 to-orange-100 dark:from-gray-900 dark:to-gray-800 rounded-lg">
                  <RetroNavbar
                    title={title}
                    items={defaultItems}
                    primaryColor={primaryColor}
                    secondaryColor={secondaryColor}
                    textColor={textColor}
                  />
                  <div className="mt-8 p-4 bg-white/50 rounded-lg">
                    <p className="text-center text-gray-600">Page content goes here...</p>
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
          <CardDescription>Install the Retro Navbar component using the shadcn/ui CLI</CardDescription>
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
            <Badge variant="outline">lucide-react</Badge>
          </div>
          <p className="text-sm text-muted-foreground mt-4">
            This component requires lucide-react for icons.
          </p>
        </CardContent>
      </Card>
    </div>
  )
} 