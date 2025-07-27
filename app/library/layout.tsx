"use client"

import type React from "react"

import { useState } from "react"
import { Sidebar } from "@/components/sidebar"
import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"

export default function LibraryLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (

    


    <div className="flex h-screen bg-background" data-lenis-prevent>
                <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
                <div className="flex-1 flex flex-col overflow-hidden">
                  <Header onMenuClick={() => setSidebarOpen(true)} />
        {/* Arweave Web Builder Banner */}
        <div className="w-full bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 border-b border-border/50">
          <a
            href="https://ardacity-builder.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="shimmer-banner relative overflow-hidden bg-black dark:bg-white text-white dark:text-black backdrop-blur-sm border-b border-border/50 shadow-sm hover:shadow-md transition-all duration-300 h-12 px-6 flex items-center justify-center gap-3 text-sm font-medium hover:bg-black/90 dark:hover:bg-white/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-background focus:ring-primary group"
            style={{ boxShadow: "0 2px 4px rgba(255, 255, 255, 0.1)" }}
          >
            <ExternalLink className="h-4 w-4 z-10 group-hover:scale-110 transition-transform duration-200" />
            <span className="z-10 font-semibold">Browse Arweave Web Builder</span>
            <span className="z-10 text-xs opacity-70">→ Build your next web3 app</span>
          </a>
          <style jsx global>{`
            .shimmer-banner::before {
              content: "";
              position: absolute;
              inset: 0;
              z-index: 0;
              background: conic-gradient(
                #7dd3fc 0deg 90deg,
                #a78bfa 90deg 180deg,
                #f472b6 180deg 270deg,
                #fbbf24 270deg 360deg
              );
              opacity: 0.6;
              filter: blur(1px);
              animation: shimmer-spin-rotate 3s linear infinite;
              pointer-events: none;
              transition: filter 0.2s, opacity 0.2s;
            }
            .shimmer-banner > * {
              position: relative;
              z-index: 1;
              
            }
            .shimmer-banner:hover::before {
              filter: blur(0.5px) brightness(1.2);
              opacity: 0.5;
            }
            @keyframes shimmer-spin-rotate {
              0% { transform: rotate(0deg);}
              100% { transform: rotate(360deg);}
            }
          `}</style>
        </div>
        
        <main className="overflow-y-auto flex-1 md:ml-0">
          {children}
        </main>
      </div>
    </div>
  )
}
