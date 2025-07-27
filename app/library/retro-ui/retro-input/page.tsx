"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Copy, Eye, Code, Search, Mail, User } from "lucide-react"
import { useState } from "react"
import { RetroInput } from "@/components/ardacity/ar-retro-input"
import { RetroColorPresets } from "@/components/ardacity/ar-retro-color-presets"
import { RetroSelect } from "@/components/ardacity/ar-retro-select"

const installCommands = {
  bun: "bunx shadcn@latest add https://ardacityui.ar.io/r/ar-retro-input.json",
  npm: "npx shadcn@latest add https://ardacityui.ar.io/r/ar-retro-input.json",
  pnpm: "pnpm dlx shadcn@latest add https://ardacityui.ar.io/r/ar-retro-input.json",
}

const codeExample = `import { RetroInput } from "@/components/ardacity/ar-retro-input";

export default function Page() {
  return (
    <RetroInput
      placeholder="Search anything ///"
      primaryColor="#2d2d2d"
      secondaryColor="#f5f5dc"
      textColor="#2d2d2d"
    />
  );
}`

export default function RetroInputPage() {
  const [activeTab, setActiveTab] = useState("preview")
  const [copiedCommand, setCopiedCommand] = useState<string | null>(null)
  const [inputValue, setInputValue] = useState("")
  const [colors, setColors] = useState({
    primary: "#2d2d2d",
    secondary: "#f5f5dc",
    text: "#2d2d2d",
  })
  const [size, setSize] = useState("md")
  const [icon, setIcon] = useState("search")

  const copyToClipboard = (text: string, command: string) => {
    navigator.clipboard.writeText(text)
    setCopiedCommand(command)
    setTimeout(() => setCopiedCommand(null), 2000)
  }

  const iconOptions = {
    search: <Search className="w-5 h-5" />,
    mail: <Mail className="w-5 h-5" />,
    user: <User className="w-5 h-5" />,
  }

  const sizeOptions = [
    { value: "sm", label: "Small" },
    { value: "md", label: "Medium" },
    { value: "lg", label: "Large" },
  ]

  const iconOptionsList = [
    { value: "search", label: "Search" },
    { value: "mail", label: "Mail" },
    { value: "user", label: "User" },
  ]

  return (
    <div className="container mx-auto px-6 py-8 max-w-6xl">
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <h1 className="text-4xl font-bold flex items-center gap-2">
            Retro Input
            <span className="ml-2 px-2 py-0.5 text-xs bg-green-500 text-white rounded-full animate-pulse">New</span>
          </h1>
          <Badge variant="secondary">Retro</Badge>
        </div>
        <p className="text-lg text-muted-foreground">A retro-styled input field with customizable colors and icons.</p>
      </div>

      {/* Preview/Code Tabs */}
      <Card className="mb-8">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Component Preview</CardTitle>
              <CardDescription>Interactive preview of the Retro Input component</CardDescription>
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
                <div className="flex items-center justify-center p-8 bg-gradient-to-br from-amber-50 to-orange-100 dark:from-gray-900 dark:to-gray-800 rounded-lg">
                  <RetroInput
                    placeholder="Search anything ///"
                    value={inputValue}
                    onChange={setInputValue}
                    primaryColor={colors.primary}
                    secondaryColor={colors.secondary}
                    textColor={colors.text}
                    size={size as "sm" | "md" | "lg"}
                    icon={iconOptions[icon as keyof typeof iconOptions]}
                  />
                </div>

                {/* Color Presets */}
                <div className="p-4 bg-muted rounded-lg">
                  <RetroColorPresets
                    colors={colors}
                    onColorsChange={setColors}
                  />
                </div>

                {/* Component Options */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
          <CardDescription>Install the Retro Input component using the shadcn/ui CLI</CardDescription>
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
