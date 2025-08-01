"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Copy, Eye, Code } from "lucide-react"
import { useState, useEffect } from "react"
import { RetroPopup } from "@/components/ardacity/ar-retro-popup"
import { RetroButton } from "@/components/ardacity/ar-retro-button"
import { useTheme } from "next-themes"
import { RetroColorPresets } from "@/components/ardacity/ar-retro-color-presets"

const installCommands = {
  bun: "bunx shadcn@latest add https://ardacityui.ar.io/r/ar-retro-popup.json",
  npm: "npx shadcn@latest add https://ardacityui.ar.io/r/ar-retro-popup.json",
  pnpm: "pnpm dlx shadcn@latest add https://ardacityui.ar.io/r/ar-retro-popup.json",
}

export default function RetroPopupPage() {
  const [activeTab, setActiveTab] = useState("preview")
  const [copiedCommand, setCopiedCommand] = useState<string | null>(null)
  const [isOpen, setIsOpen] = useState(false)
  const [colors, setColors] = useState({
    primary: "#2d2d2d",
    secondary: "#f5f5dc",
    text: "#2d2d2d",
  })
  const [title, setTitle] = useState("Retro Popup")
  const [size, setSize] = useState("md")
  const [showCloseButton, setShowCloseButton] = useState(true)
  const { resolvedTheme } = useTheme()

  useEffect(() => {
    if (resolvedTheme === "dark") {
      setColors({ primary: "#00ff88", secondary: "#000000", text: "#00ff88" })
    } else {
      setColors({ primary: "#2d2d2d", secondary: "#f5f5dc", text: "#2d2d2d" })
    }
  }, [resolvedTheme])

  const copyToClipboard = (text: string, command: string) => {
    navigator.clipboard.writeText(text)
    setCopiedCommand(command)
    setTimeout(() => setCopiedCommand(null), 2000)
  }

  const codeExample = `import { RetroPopup } from "@/components/ardacity/ar-retro-popup";

export default function Page() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(true)}>Open Popup</button>
      <RetroPopup
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="${title}"
        primaryColor="${colors.primary}"
        secondaryColor="${colors.secondary}"
        textColor="${colors.text}"
        size="${size}"
        showCloseButton={${showCloseButton}}
      >
        <p>This is the content of the retro popup.</p>
      </RetroPopup>
    </>
  );
}`

  return (
    <div className="container mx-auto px-6 py-8 max-w-6xl">
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <h1 className="text-4xl font-bold flex items-center gap-2">
            Retro Popup
            <span className="ml-2 px-2 py-0.5 text-xs bg-green-500 text-white rounded-full animate-pulse">New</span>
          </h1>
          <Badge variant="secondary">Retro</Badge>
        </div>
        <p className="text-lg text-muted-foreground">A retro-styled popup/modal component with customizable colors and content.</p>
      </div>

      {/* Preview/Code Tabs */}
      <Card className="mb-8">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Component Preview</CardTitle>
              <CardDescription>Interactive preview of the Retro Popup component</CardDescription>
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
                      value={colors.primary}
                      onChange={(e) => setColors({ ...colors, primary: e.target.value })}
                      className="w-8 h-8 rounded border"
                    />
                  </div>
                  <div className="flex items-center gap-2">
                    <label className="text-sm font-medium">Secondary Color:</label>
                    <input
                      type="color"
                      value={colors.secondary}
                      onChange={(e) => setColors({ ...colors, secondary: e.target.value })}
                      className="w-8 h-8 rounded border"
                    />
                  </div>
                  <div className="flex items-center gap-2">
                    <label className="text-sm font-medium">Text Color:</label>
                    <input
                      type="color"
                      value={colors.text}
                      onChange={(e) => setColors({ ...colors, text: e.target.value })}
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
                  <div className="flex items-center gap-2">
                    <label className="text-sm font-medium">Show Close Button:</label>
                    <input
                      type="checkbox"
                      checked={showCloseButton}
                      onChange={(e) => setShowCloseButton(e.target.checked)}
                      className="rounded"
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
                <div className="flex items-center justify-center p-8 bg-gradient-to-br from-amber-50 to-orange-100 dark:from-gray-900 dark:to-black rounded-lg">
                  <RetroButton
                    primaryColor={colors.primary}
                    secondaryColor={colors.secondary}
                    onClick={() => setIsOpen(true)}
                  >
                    Open Popup
                  </RetroButton>
                </div>
                <RetroColorPresets
                  colors={colors}
                  onColorsChange={setColors}
                  onPresetChange={(preset) => setColors(preset)}
                  isDarkMode={resolvedTheme === "dark"}
                />
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
          <CardDescription>Install the Retro Popup component using the shadcn/ui CLI</CardDescription>
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

      {/* Popup */}
      <RetroPopup
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title={title}
        primaryColor={colors.primary}
        secondaryColor={colors.secondary}
        textColor={colors.text}
        size={size}
        showCloseButton={showCloseButton}
      >
        <div className="space-y-4">
          <p>This is the content of the retro popup. You can put any content here including text, images, or other components.</p>
          <div className="flex gap-2">
            <RetroButton
              primaryColor={colors.primary}
              secondaryColor={colors.secondary}
              onClick={() => setIsOpen(false)}
            >
              Close
            </RetroButton>
            <RetroButton
              primaryColor={colors.secondary}
              secondaryColor={colors.primary}
              variant="secondary"
            >
              Action
            </RetroButton>
          </div>
        </div>
      </RetroPopup>
    </div>
  )
} 