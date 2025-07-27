"use client"

import { TableOfContents } from "@/components/table-of-contents"
import AiChat from "@/components/ardacity/ai-chat"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Copy, Check } from "lucide-react"
import { useState } from "react"

export default function AiChatPage() {
  const [copied, setCopied] = useState(false)

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const installCommand = "npx shadcn@latest add https://ardacityui.ar.io/r/ai-chat.json"

  return (
    <div className="flex">
      <div className="flex-1 max-w-4xl mx-auto px-6 py-8">
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Badge variant="outline">Block</Badge>
            <Badge variant="secondary">AI</Badge>
          </div>
          <h1 id="overview" className="text-4xl font-bold mb-4">
            AI Chat Interface
          </h1>
          <p className="text-lg text-muted-foreground">
            A modern chat interface with multimodal input, quick actions, and smooth animations.
          </p>
        </div>

        {/* Preview */}
        <section className="mb-12">
          <h2 id="preview" className="text-2xl font-semibold mb-4">
            Preview
          </h2>
          <div className=" bg-muted/20 rounded-lg overflow-hidden">
            <AiChat />
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
                <code>{`import AiChat from "@/components/ardacity/ai-chat"

export default function ChatPage() {
  return <AiChat />
}`}</code>
              </pre>
              <Button
                size="sm"
                variant="outline"
                className="absolute top-2 right-2"
                onClick={() =>
                  copyToClipboard(`import AiChat from "@/components/ardacity/ai-chat"

export default function ChatPage() {
  return <AiChat />
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
                <CardTitle className="text-lg">Multimodal Input</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Support for text input with keyboard shortcuts and send functionality.
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Pre-defined action buttons for common tasks like search, summarize, and translate.
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Smooth Animations</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Framer Motion powered animations for a polished user experience.</CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Dark Theme</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Beautiful dark gradient background with proper contrast and accessibility.
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
