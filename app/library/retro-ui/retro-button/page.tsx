"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Copy, Eye, Code, Heart, Star, Zap } from "lucide-react"
import { useState, useEffect } from "react"
import { RetroButton } from "@/components/ardacity/ar-retro-button"
import { RetroColorPresets } from "@/components/ardacity/ar-retro-color-presets"
import { RetroSelect } from "@/components/ardacity/ar-retro-select"
import { useTheme } from "next-themes"

const installCommands = {
  bun: "bunx shadcn@latest add https://ardacityui.ar.io/r/ar-retro-button.json",
  npm: "npx shadcn@latest add https://ardacityui.ar.io/r/ar-retro-button.json",
  pnpm: "pnpm dlx shadcn@latest add https://ardacityui.ar.io/r/ar-retro-button.json",
}

export default function RetroButtonPage() {
  const [activeTab, setActiveTab] = useState("preview")
  const [copiedCommand, setCopiedCommand] = useState<string | null>(null)
  const [colors, setColors] = useState({
    primary: "#2d2d2d",
    secondary: "#f5f5dc",
    text: "#f5f5dc",
  })
  const [variant, setVariant] = useState("primary")
  const [size, setSize] = useState("md")
  const [icon, setIcon] = useState("none")
  const { resolvedTheme } = useTheme()

  useEffect(() => {
    if (resolvedTheme === "dark") {
      setColors({ primary: "#00ff88", secondary: "#000000", text: "#00ff88" })
    } else {
      setColors({ primary: "#2d2d2d", secondary: "#f5f5dc", text: "#f5f5dc" })
    }
  }, [resolvedTheme])

  const copyToClipboard = (text: string, command: string) => {
    navigator.clipboard.writeText(text)
    setCopiedCommand(command)
    setTimeout(() => setCopiedCommand(null), 2000)
  }

  const iconOptions = {
    none: null,
    heart: <Heart className="w-4 h-4" />,
    star: <Star className="w-4 h-4" />,
    zap: <Zap className="w-4 h-4" />,
  }

  const variantOptions = [
    { value: "primary", label: "Primary" },
    { value: "secondary", label: "Secondary" },
  ]

  const sizeOptions = [
    { value: "sm", label: "Small" },
    { value: "md", label: "Medium" },
    { value: "lg", label: "Large" },
  ]

  const iconOptionsList = [
    { value: "none", label: "None" },
    { value: "heart", label: "Heart" },
    { value: "star", label: "Star" },
    { value: "zap", label: "Zap" },
  ]

  const codeExample = `import { RetroButton } from "@/components/ardacity/ar-retro-button";

export default function Page() {
  return (
    <RetroButton
      primaryColor="${colors.primary}"
      secondaryColor="${colors.secondary}"
      textColor="${colors.text}"
      variant="${variant}"
      size="${size}"
      icon={${icon !== "none" ? `<${icon.charAt(0).toUpperCase() + icon.slice(1)} />` : undefined}}
    >
      Click Me
    </RetroButton>
  );
}`

  return (
    <div className="container mx-auto px-6 py-8 max-w-6xl">
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <h1 className="text-4xl font-bold flex items-center gap-2">
            Retro Button
            <span className="ml-2 px-2 py-0.5 text-xs bg-green-500 text-white rounded-full animate-pulse">New</span>
          </h1>
          <Badge variant="secondary">Retro</Badge>
        </div>
        <p className="text-lg text-muted-foreground">A retro-styled button with customizable colors and variants.</p>
      </div>

      {/* Preview/Code Tabs */}
      <Card className="mb-8">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Component Preview</CardTitle>
              <CardDescription>Interactive preview of the Retro Button component</CardDescription>
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
                <div className="flex items-center justify-center p-8 bg-gradient-to-br from-amber-50 to-orange-100 dark:from-gray-900 dark:to-black rounded-lg">
                  <RetroButton
                    primaryColor={colors.primary}
                    secondaryColor={colors.secondary}
                    variant={variant as "primary" | "secondary"}
                    size={size as "sm" | "md" | "lg"}
                    icon={iconOptions[icon as keyof typeof iconOptions]}
                  >
                    Click Me
                  </RetroButton>
                </div>

                {/* Color Presets */}
                <div className="p-4 bg-muted rounded-lg">
                  <RetroColorPresets
                    colors={colors}
                    onColorsChange={setColors}
                    onPresetChange={(preset) => setColors(preset)}
                    isDarkMode={resolvedTheme === "dark"}
                  />
                </div>

                {/* Component Options */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Variant:</label>
                    <RetroSelect
                      value={variant}
                      onChange={setVariant}
                      options={variantOptions}
                      primaryColor={colors.primary}
                      secondaryColor={colors.secondary}
                      textColor={colors.text}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Size:</label>
                    <RetroSelect
                      value={size}
                      onChange={setSize}
                      options={sizeOptions}
                      primaryColor={colors.primary}
                      secondaryColor={colors.secondary}
                      textColor={colors.text}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Icon:</label>
                    <RetroSelect
                      value={icon}
                      onChange={setIcon}
                      options={iconOptionsList}
                      primaryColor={colors.primary}
                      secondaryColor={colors.secondary}
                      textColor={colors.text}
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
          <CardDescription>Install the Retro Button component using the shadcn/ui CLI</CardDescription>
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
            This component only requires lucide-react for icons.
          </p>
        </CardContent>
      </Card>
    </div>
  )
} 