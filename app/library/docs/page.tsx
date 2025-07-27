"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Copy, Terminal, Package, Download } from "lucide-react"
import { useState } from "react"

const installCommands = {
  bun: "bunx shadcn@latest add https://ardacityui.ar.io/r/utils.json",
  npm: "npx shadcn@latest add https://ardacityui.ar.io/r/utils.json",
  pnpm: "pnpm dlx shadcn@latest add https://ardacityui.ar.io/r/utils.json",
}

export default function DocsPage() {
  const [copiedCommand, setCopiedCommand] = useState<string | null>(null)

  const copyToClipboard = (text: string, command: string) => {
    navigator.clipboard.writeText(text)
    setCopiedCommand(command)
    setTimeout(() => setCopiedCommand(null), 2000)
  }

  return (
    <div className="container mx-auto px-6 py-8 max-w-4xl">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">Installation</h1>
        <p className="text-lg text-muted-foreground">Getting started with Ardacity component library</p>
      </div>

      <div className="space-y-8">
        {/* Prerequisites */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Package className="h-5 w-5" />
              Prerequisites
            </CardTitle>
            <CardDescription>Make sure you have these dependencies installed in your project</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Badge variant="outline" className="mb-2">
                Required
              </Badge>
              <p className="text-sm text-muted-foreground mb-2">
                All components use Tailwind CSS v4, so ensure it's installed in your project.
              </p>
            </div>
            <div>
              <Badge variant="outline" className="mb-2">
                Recommended
              </Badge>
              <p className="text-sm text-muted-foreground">
                Many components also use the `cn` utility function and shadcn/ui components.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Installation Steps */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Download className="h-5 w-5" />
              Install Utilities
            </CardTitle>
            <CardDescription>Install the required utilities and dependencies</CardDescription>
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
                      <div className="flex items-center gap-2">
                        <Terminal className="h-4 w-4" />
                        <code className="text-sm">{command}</code>
                      </div>
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

        {/* Usage Example */}
        <Card>
          <CardHeader>
            <CardTitle>Usage Example</CardTitle>
            <CardDescription>How to add and use components in your project</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-medium mb-2">1. Install a component</h4>
              <div className="bg-muted rounded-lg p-4">
                <code className="text-sm">bunx shadcn@latest add https://ardacityui.ar.io/r/avatar-picker.json</code>
              </div>
            </div>
            <div>
              <h4 className="font-medium mb-2">2. Import and use</h4>
              <div className="bg-muted rounded-lg p-4">
                <pre className="text-sm">
                  {`import AvatarPicker from "@/components/ardacity/avatar-picker";

export default function Page() {
  return <AvatarPicker />;
}`}
                </pre>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Additional Info */}
        <Card>
          <CardHeader>
            <CardTitle>Additional Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-medium mb-2">Dependencies</h4>
              <p className="text-sm text-muted-foreground mb-2">
                We use lucide-icons for most components that include icons, along with some shadcn/ui components. These
                dependencies will be automatically installed when using the CLI.
              </p>
            </div>
            <div>
              <h4 className="font-medium mb-2">Monorepo Support</h4>
              <p className="text-sm text-muted-foreground mb-2">
                For monorepo setups, use the `-c` flag to specify your workspace path:
              </p>
              <div className="bg-muted rounded-lg p-4">
                <code className="text-sm">
                  bunx shadcn@latest add https://ardacityui.ar.io/r/avatar-picker.json -c ./apps/www
                </code>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
