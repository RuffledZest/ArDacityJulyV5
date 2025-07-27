"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Copy, Eye, Code } from "lucide-react"
import { useState } from "react"
import Btn01 from "@/components/ardacity/button/btn-01"
import Btn02 from "@/components/ardacity/button/btn-02"
import Btn03 from "@/components/ardacity/button/btn-03"
import Btn04 from "@/components/ardacity/button/btn-04"
import Btn_05 from "@/components/ardacity/button/btn-05"
import Btn07 from "@/components/ardacity/button/btn-07"
import Btn08 from "@/components/ardacity/button/btn-08"
import Btn09 from "@/components/ardacity/button/btn-09"
import Btn10 from "@/components/ardacity/button/btn-10"
import Btn11 from "@/components/ardacity/button/btn-11"
import Btn12 from "@/components/ardacity/button/btn-12"
import Btn13 from "@/components/ardacity/button/btn-13"
import { Btn14 } from "@/components/ardacity/button/btn-14"
import Btn15 from "@/components/ardacity/button/btn-15"


const installCommands = {
  bun: "bunx shadcn@latest add https://ardacityui.ar.io/r/btn-01.json",
  npm: "npx shadcn@latest add https://ardacityui.ar.io/r/btn-01.json",
  pnpm: "pnpm dlx shadcn@latest add https://ardacityui.ar.io/r/btn-01.json",
}

// Fix codeExample for each button
const codeExampleBtn01 = `import Btn01 from "@/components/ardacity/button/btn-01";

export default function Page() {
  return <Btn01 />;
}`
const codeExampleBtn02 = `import Btn02 from "@/components/ardacity/button/btn-02";

export default function Page() {
  return <Btn02 />;
}`
const codeExampleBtn03 = `import Btn03 from "@/components/ardacity/button/btn-03";

export default function Page() {
  return <Btn03 />;
}`

export default function BentoGridPage() {
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
          <h1 className="text-4xl font-bold">Button</h1>
          <Badge variant="secondary">Layout</Badge>
        </div>
        <p className="text-lg text-muted-foreground">
          A responsive grid layout with hover effects and customizable items.
        </p>
      </div>

      {/* Preview/Code Tabs */}
      {/* btn-03 */}
        <Card className="mb-8">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Component Preview</CardTitle>
              <CardDescription>Interactive preview of the Button component</CardDescription>
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
              <div className="min-h-[400px] bg-muted/20 rounded-lg p-4 flex items-center justify-center">
                <Btn03 />
              </div>
            </TabsContent>
           
            <TabsContent value="code" className="mt-0">
              <div className="relative">
                <div className="bg-muted rounded-lg p-4">
                  <pre className="text-sm overflow-x-auto">
                    <code>{codeExampleBtn03}</code>
                  </pre>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  className="absolute top-2 right-2"
                  onClick={() => copyToClipboard(codeExampleBtn03, "code")}
                >
                  <Copy className="h-4 w-4" />
                  {copiedCommand === "code" ? "Copied!" : "Copy"}
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
      {/* btn-01 */}
      <Card className="mb-8">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Component Preview</CardTitle>
              <CardDescription>Interactive preview of the Button component</CardDescription>
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
              <div className="min-h-[400px] bg-muted/20 rounded-lg p-4 flex items-center justify-center">
                <Btn01 />
              </div>
            </TabsContent>
            <TabsContent value="code" className="mt-0">
              <div className="relative">
                <div className="bg-muted rounded-lg p-4">
                  <pre className="text-sm overflow-x-auto">
                    <code>{codeExampleBtn01}</code>
                  </pre>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  className="absolute top-2 right-2"
                  onClick={() => copyToClipboard(codeExampleBtn01, "code")}
                >
                  <Copy className="h-4 w-4" />
                  {copiedCommand === "code" ? "Copied!" : "Copy"}
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
        {/* btn-02 */}
      <Card className="mb-8">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Component Preview</CardTitle>
              <CardDescription>Interactive preview of the Button component</CardDescription>
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
              <div className="min-h-[400px] bg-muted/20 rounded-lg p-4 flex items-center justify-center">
                <Btn02 />
              </div>
            </TabsContent>
           
            <TabsContent value="code" className="mt-0">
              <div className="relative">
                <div className="bg-muted rounded-lg p-4">
                  <pre className="text-sm overflow-x-auto">
                    <code>{codeExampleBtn02}</code>
                  </pre>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  className="absolute top-2 right-2"
                  onClick={() => copyToClipboard(codeExampleBtn02, "code")}
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
          <CardDescription>Install the Button component using the shadcn/ui CLI</CardDescription>
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
            <Badge variant="outline">@/lib/utils</Badge>
          </div>
          <p className="text-sm text-muted-foreground mt-4">
            These dependencies will be automatically installed when using the CLI.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
