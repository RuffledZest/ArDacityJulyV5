"use client"

import { TableOfContents } from "@/components/table-of-contents"
import AICardGeneration from "@/components/ardacity/ai-card-generation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Copy, Check } from "lucide-react"
import { useState } from "react"

export default function AICardGenerationPage() {
  const [copied, setCopied] = useState(false)

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const installCommand = "npx shadcn@latest add https://ardacityui.ar.io/r/ai-card-generation.json"

  return (
    <div className="flex">
      <div className="flex-1 max-w-4xl mx-auto px-6 py-8">
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Badge variant="outline">Block</Badge>
            <Badge variant="secondary">AI</Badge>
          </div>
          <h1 id="overview" className="text-4xl font-bold mb-4">
            AI Card Generation
          </h1>
          <p className="text-lg text-muted-foreground">
            An interactive AI portrait generation interface with customizable settings and real-time preview.
          </p>
        </div>

        {/* Preview */}
        <section className="mb-12">
          <h2 id="preview" className="text-2xl font-semibold mb-4">
            Preview
          </h2>
          <div className="flex justify-center p-8 bg-muted/20 rounded-lg">
            <AICardGeneration />
          </div>
        </section>

        {/* Installation */}
        <section className="mb-12">
          <h2 id="installation" className="text-2xl font-semibold mb-4">
            Installation
          </h2>
          <div className="space-y-4">
            <p className="text-muted-foreground">Install the component using the shadcn CLI:</p>
            <div className="relative">
              <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                <code>{installCommand}</code>
              </pre>
              <Button
                size="sm"
                variant="outline"
                className="absolute top-2 right-2"
                onClick={() => copyToClipboard(installCommand)}
              >
                {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
              </Button>
            </div>
          </div>
        </section>

        {/* Usage */}
        <section className="mb-12">
          <h2 id="usage" className="text-2xl font-semibold mb-4">
            Usage
          </h2>
          <div className="space-y-4">
            <p className="text-muted-foreground">Import and use the component in your React application:</p>
            <div className="relative">
              <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                <code>{`import AICardGeneration from "@/components/ardacity/ai-card-generation"

export default function MyPage() {
  return (
    <div className="flex justify-center p-8">
      <AICardGeneration />
    </div>
  )
}`}</code>
              </pre>
              <Button
                size="sm"
                variant="outline"
                className="absolute top-2 right-2"
                onClick={() =>
                  copyToClipboard(`import AICardGeneration from "@/components/ardacity/ai-card-generation"

export default function MyPage() {
  return (
    <div className="flex justify-center p-8">
      <AICardGeneration />
    </div>
  )
}`)
                }
              >
                {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
              </Button>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="mb-12">
          <h2 id="features" className="text-2xl font-semibold mb-4">
            Features
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Interactive Form</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Customizable settings for style, background, lighting, and pose with real-time updates.
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Loading States</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Animated loading indicators with progress tracking and dynamic status messages.
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Error Handling</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Graceful error states with user-friendly messages and retry functionality.
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Responsive Design</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Fully responsive layout that works seamlessly across all device sizes.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>

      {/* Table of Contents */}
      <div className="hidden xl:block w-64 shrink-0">
        <div className="sticky top-20 p-6">
          <TableOfContents />
        </div>
      </div>
    </div>
  )
}
