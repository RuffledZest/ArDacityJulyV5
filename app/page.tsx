"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ArrowRight,
  Code,
  Palette,
  Zap,
  Download,
  ExternalLink,
  Database,
  Shield,
  Layers,
  Cpu,
  Wallet,
  MessageSquare,
  BarChart3,
  Terminal,
  Blocks,
} from "lucide-react"
import Link from "next/link"
import { motion } from "motion/react"
import Waves from "@/components/waves"
import ShapeBlur from "@/components/shape-blur"
import TextPressure from "@/components/text-pressure"
import { Header2 } from "@/components/header2"
import { useState } from "react"
import banner from "@/public/ArBanner2.png"
import { HorizontalSlides } from "@/components/horizontal-slides"
import { useIsMobile } from "@/hooks/use-mobile"
import { GlowingEffect } from "@/components/glowing-effect"

const features = [
  {
    icon: <Code className="h-8 w-8" />,
    title: "Registry Based Blocks",
    description:
      "Pre-built components and smart contract integrations for rapid Arweave dApp development with enterprise-grade reliability",
    gradient: "from-blue-500 to-cyan-500",
    bgGradient: "from-blue-500/10 to-cyan-500/10",
  },
  {
    icon: <Palette className="h-8 w-8" />,
    title: "Drag-n-Drop System",
    description:
      "Built-in web builder with Arweave components featuring live editing capabilities for seamless UI creation",
    gradient: "from-purple-500 to-pink-500",
    bgGradient: "from-purple-500/10 to-pink-500/10",
  },
  {
    icon: <Zap className="h-8 w-8" />,
    title: "Web3 Library",
    description:
      "Complete Web3 integration suite covering Arweave wallet connections, NFTs, and permaweb functionality",
    gradient: "from-orange-500 to-red-500",
    bgGradient: "from-orange-500/10 to-red-500/10",
  },
]

const projects = [
  {
    name: "PermaWeb",
    url: "http://perma-way.vercel.app",
    description:
      "Decentralized web hosting platform built on Arweave's permanent storage infrastructure. Experience the future of web hosting with permanent, censorship-resistant storage that never goes down.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-CuuyaQp7d0D7Lucl7PPT4enzSBa5eE.png",
    gradient: "from-emerald-600 to-teal-600",
    tags: ["Web Hosting", "Permanent Storage", "Decentralized"],
    features: ["Permanent Storage", "Zero Downtime", "Censorship Resistant", "Global CDN"],
  },
  {
    name: "ANONxARDACITY",
    url: "https://anon-xardacity-6qye.vercel.app/",
    description:
      "Anonymous communication platform leveraging Arweave's censorship-resistant network. Secure, private messaging that protects your identity while ensuring message permanence.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-CuuyaQp7d0D7Lucl7PPT4enzSBa5eE.png",
    gradient: "from-zinc-700 to-zinc-800",
    tags: ["Anonymous", "Communication", "Privacy"],
    features: ["End-to-End Encryption", "Anonymous Identity", "Permanent Messages", "Zero Logs"],
  },
  {
    name: "AvenPing",
    url: "https://avenping.com",
    description:
      "Real-time monitoring and alerting system for Arweave network infrastructure. Keep track of your applications and get instant notifications when issues arise.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-CuuyaQp7d0D7Lucl7PPT4enzSBa5eE.png",
    gradient: "from-indigo-600 to-purple-600",
    tags: ["Monitoring", "Infrastructure", "Real-time"],
    features: ["Real-time Alerts", "Network Monitoring", "Performance Analytics", "Custom Dashboards"],
  },
  {
    name: "3Gen",
    url: "https://3gen-ardacity.vercel.app/",
    description:
      "Next-generation development tools for building scalable Arweave applications. Comprehensive toolkit with advanced features for modern dApp development.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-CuuyaQp7d0D7Lucl7PPT4enzSBa5eE.png",
    gradient: "from-rose-600 to-pink-600",
    tags: ["Development", "Tools", "Scalable"],
    features: ["Code Generation", "Smart Contracts", "Testing Suite", "Deployment Tools"],
  },
]

const stats = [
  { label: "Components", value: "40+", icon: <Layers className="h-5 w-5" /> },
  { label: "Blocks", value: "10+", icon: <Database className="h-5 w-5" /> },
  { label: "AO blocks", value: "20+", icon: <Cpu className="h-5 w-5" /> },
  { label: "Downloads", value: "200+", icon: <Download className="h-5 w-5" /> },
]

// Bento Grid Items for Why Choose ArDacity
const whyChooseItems = [
  {
    area: "md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]",
    icon: <Code className="h-4 w-4 text-black dark:text-neutral-400" />,
    title: "Registry Based Architecture",
    description: "Pre-built components with smart contract integrations for rapid Arweave dApp development.",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    area: "md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]",
    icon: <Palette className="h-4 w-4 text-black dark:text-neutral-400" />,
    title: "Visual Builder System",
    description: "Drag-and-drop interface with live editing capabilities for seamless UI creation.",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    area: "md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]",
    icon: <Zap className="h-4 w-4 text-black dark:text-neutral-400" />,
    title: "Complete Web3 Integration",
    description:
      "Full suite covering Arweave wallet connections, NFTs, and permaweb functionality with enterprise-grade reliability.",
    gradient: "from-orange-500 to-red-500",
  },
  {
    area: "md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]",
    icon: <Shield className="h-4 w-4 text-black dark:text-neutral-400" />,
    title: "Production Ready",
    description: "Battle-tested components used by leading Arweave applications worldwide.",
    gradient: "from-green-500 to-emerald-500",
  },
  {
    area: "md:[grid-area:3/1/4/13] xl:[grid-area:2/8/3/13]",
    icon: <Terminal className="h-4 w-4 text-black dark:text-neutral-400" />,
    title: "Developer Experience",
    description: "Comprehensive documentation, TypeScript support, and modern development tools.",
    gradient: "from-teal-500 to-cyan-500",
  },
]

// Bento Grid Items for Complete Ecosystem
const ecosystemItems = [
  {
    area: "md:[grid-area:1/1/3/5] xl:[grid-area:1/1/3/4]",
    icon: <Blocks className="h-6 w-6 text-black dark:text-neutral-400" />,
    title: "Arweave Functional Blocks",
    description:
      "Enterprise-ready components for smart contracts, transaction builders, state readers, and contract interaction handlers with built-in error handling and validation.",
    gradient: "from-blue-500 to-cyan-500",
    large: true,
  },
  {
    area: "md:[grid-area:1/5/2/9] xl:[grid-area:1/4/2/7]",
    icon: <Wallet className="h-5 w-5 text-black dark:text-neutral-400" />,
    title: "Wallet Integration",
    description: "Seamless integration with ArConnect, Arweave.app, and popular wallets.",
    gradient: "from-green-500 to-emerald-500",
  },
  {
    area: "md:[grid-area:1/9/2/13] xl:[grid-area:1/7/2/10]",
    icon: <Database className="h-5 w-5 text-black dark:text-neutral-400" />,
    title: "Data Storage UI",
    description: "Professional components for permanent data storage on Arweave.",
    gradient: "from-purple-500 to-violet-500",
  },
  {
    area: "md:[grid-area:2/5/3/9] xl:[grid-area:2/4/3/7]",
    icon: <MessageSquare className="h-5 w-5 text-black dark:text-neutral-400" />,
    title: "Chat & Messaging",
    description: "Decentralized chat components with permanent message history.",
    gradient: "from-orange-500 to-amber-500",
  },
  {
    area: "md:[grid-area:2/9/3/13] xl:[grid-area:2/7/3/10]",
    icon: <BarChart3 className="h-5 w-5 text-black dark:text-neutral-400" />,
    title: "Analytics Tools",
    description: "Advanced transaction management and monitoring capabilities.",
    gradient: "from-red-500 to-rose-500",
  },
  {
    area: "md:[grid-area:3/1/4/13] xl:[grid-area:1/10/3/13]",
    icon: <Terminal className="h-5 w-5 text-black dark:text-neutral-400" />,
    title: "Developer Tools",
    description:
      "Comprehensive debugging tools, network status indicators, and development utilities designed to streamline your Arweave development workflow with real-time monitoring.",
    gradient: "from-teal-500 to-cyan-500",
    large: true,
  },
]

// Mobile-optimized horizontal scroll component
function MobileHorizontalProjects() {
  return (
    <section className="py-24 bg-white dark:bg-black">
      <div className="px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge
            variant="outline"
            className="mb-6 border-black/20 dark:border-white/20 text-black dark:text-white px-4 py-2 text-sm font-medium"
          >
            Built with ArDacity
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-black dark:text-white mb-6">
            Projects Built on ArDacity
          </h2>
          <p className="text-lg md:text-xl text-black/70 dark:text-white/70 max-w-3xl mx-auto leading-relaxed">
            Discover innovative applications built using our comprehensive Arweave development toolkit
          </p>
        </div>

        {/* Mobile: Stack cards vertically */}
        <div className="space-y-8 md:hidden">
          {projects.map((project, index) => (
            <ProjectCard key={`mobile-${project.name}-${index}`} project={project} />
          ))}
        </div>

        {/* Tablet: Horizontal scroll */}
        <div className="hidden md:block lg:block xl:hidden">
          <div className="overflow-x-auto pb-4">
            <div className="flex gap-6" style={{ width: "max-content" }}>
              {projects.map((project, index) => (
                <div key={`tablet-${project.name}-${index}`} className="w-[80vw]">
                  <ProjectCard project={project} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Desktop: Use HorizontalSlides */}
        <div className="hidden xl:block">
          <HorizontalSlides>
            {projects.map((project, index) => (
              <div key={`desktop-${project.name}-${index}`} className="w-[50vw] px-4 flex-shrink-0">
                <ProjectCard project={project} />
              </div>
            ))}
          </HorizontalSlides>
        </div>
      </div>
    </section>
  )
}

// Project card component
function ProjectCard({ project }: { project: (typeof projects)[0] }) {
  return (
    <Card className="h-[70vh] bg-gradient-to-br from-black/10 to-black/5 dark:from-white/10 dark:to-white/5 backdrop-blur-sm dark:border-white/20 border-black/20 hover:dark:border-white/40 hover:border-black/40 transition-all duration-500 hover:scale-[1.02] overflow-hidden group">
      <div className={`h-1/2 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
        <div className="absolute inset-0 dark:bg-black/30 bg-white/30"></div>
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${project.image})` }}
        ></div>
        <div className="absolute top-6 left-6 right-6 flex justify-between items-start">
          <Badge
            variant="secondary"
            className="dark:bg-white/20 bg-black/20 dark:text-white text-black dark:border-white/30 border-black/30 backdrop-blur-sm"
          >
            Live Project
          </Badge>
          <ExternalLink className="h-6 w-6 dark:text-white/80 text-black/80 group-hover:dark:text-white group-hover:text-black transition-colors" />
        </div>
        <div className="absolute bottom-6 left-6 right-6">
          <h3 className="text-2xl md:text-4xl lg:text-5xl font-bold text-black dark:text-white mb-4">{project.name}</h3>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <Badge
                key={tag}
                variant="outline"
                className="dark:border-white/40 border-black/40 text-black dark:text-white text-sm backdrop-blur-sm"
              >
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </div>
      <div className="h-1/2 p-6 md:p-8 flex flex-col justify-between">
        <div>
          <p className="text-black/90 dark:text-white/90 text-base md:text-lg leading-relaxed mb-6">
            {project.description}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
            {project.features.map((feature) => (
              <div key={feature} className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-black/60 dark:bg-white/60 rounded-full flex-shrink-0"></div>
                <span className="text-black/70 dark:text-white/70 text-sm">{feature}</span>
              </div>
            ))}
          </div>
        </div>
        <Button
          asChild
          size="lg"
          className="w-full bg-black/10 dark:bg-white/10 border border-black/30 dark:border-white/30 text-black dark:text-white hover:dark:bg-white hover:bg-black hover:dark:text-black hover:text-white transition-all duration-300 backdrop-blur-sm"
        >
          <a href={project.url} target="_blank" rel="noopener noreferrer">
            Visit Project
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </Button>
      </div>
    </Card>
  )
}

// Bento Grid Item Component
interface BentoGridItemProps {
  area: string
  icon: React.ReactNode
  title: string
  description: string
  gradient: string
  large?: boolean
}

const BentoGridItem = ({ area, icon, title, description, gradient, large = false }: BentoGridItemProps) => {
  return (
    <li className={`min-h-[14rem] list-none ${area} ${large ? "md:min-h-[20rem]" : ""}`}>
      <div className="relative h-full rounded-2xl border border-black/10 dark:border-white/10 p-2 md:rounded-3xl md:p-3 group hover:scale-[1.02] transition-all duration-500">
        <GlowingEffect spread={40} glow={true} disabled={false} proximity={64} inactiveZone={0.01} />
        <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl p-6 md:p-6 bg-gradient-to-br from-white to-zinc-50/50 dark:from-black dark:to-zinc-950/50 dark:shadow-[0px_0px_27px_0px_#2D2D2D]">
          <div className="relative flex flex-1 flex-col justify-between gap-3">
            <div
              className={`w-fit rounded-lg border border-gray-600 dark:border-gray-400 p-2 bg-gradient-to-r ${gradient}/10`}
            >
              <div className={`bg-gradient-to-r ${gradient} bg-clip-text text-transparent`}>{icon}</div>
            </div>
            <div className="space-y-3">
              <h3 className="font-sans text-lg md:text-xl lg:text-2xl font-semibold text-balance text-black dark:text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-black group-hover:to-zinc-600 dark:group-hover:from-white dark:group-hover:to-zinc-300 group-hover:bg-clip-text transition-all duration-300">
                {title}
              </h3>
              <p className="font-sans text-sm md:text-base text-black/70 dark:text-neutral-400 leading-relaxed">
                {description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </li>
  )
}

export default function LandingPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const isMobile = useIsMobile(1024)

  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <div className="border z-50">
        <Header2 onMenuClick={() => setSidebarOpen(true)} />
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white dark:bg-black px-6 border sm:py-32 lg:px-8" data-lenis-prevent>
        <div className="mx-auto text-center">
          <div className="relative">
            <div className="absolute inset-0 overflow-hidden mt-[-100px]">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent dark:to-black to-white z-10 h-screen pointer-events-none"></div>
                <Waves
                  lineColor="#5bfafcb3"
                  backgroundColor="bg-transparent"
                  waveSpeedX={0.02}
                  waveSpeedY={0.01}
                  waveAmpX={40}
                  waveAmpY={20}
                  friction={0.9}
                  tension={0.01}
                  maxCursorMove={120}
                  xGap={12}
                  yGap={36}
                  className="border border-black dark:border-white/60 rounded-3xl h-screen"
                />
              </div>
            </div>
            <div className="absolute inset-0 z-0 opacity-45 mt-[-250px]">
              <ShapeBlur
                variation={0}
                pixelRatioProp={typeof window !== "undefined" ? window.devicePixelRatio || 1 : 1}
                shapeSize={1}
                roundness={1}
                borderSize={0.05}
                circleSize={0.5}
                circleEdge={0.6}
              />
            </div>

            <section className="relative w-full min-h-screen flex flex-col justify-center overflow-hidden">
              <div className="relative z-10 text-center mt-[-180px] mx-4 md:mx-20">
                <div className="">
                  <div className="w-full overflow-hidden">
                    <div className="inset-0 overflow-visible items-center -translate-y-0 md:translate-y-10 justify-center w-full bg-transparent text-white overflow-x-hidden my-0 md:my-2 z-40">
                      <TextPressure
                        text="ArDacity"
                        flex={true}
                        alpha={false}
                        stroke={false}
                        width={true}
                        weight={true}
                        strokeColor="#ff0000"
                        minFontSize={36}
                        className="text-black dark:text-white text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight"
                      />
                    </div>
                    <p className="mt-6 text-base md:text-lg lg:text-xl text-black/70 dark:text-white/70">
                      A collection of UI components and AO blocks for the Arweave ecosystem
                    </p>
                  </div>
                </div>
                <div className="mt-6 flex flex-col sm:flex-row gap-4 sm:gap-6 items-center justify-center" data-lenis-prevent>
                  <Button
                    asChild
                    size="lg"
                    className="bg-black text-white hover:bg-black/90 dark:bg-white dark:text-black dark:hover:bg-white/90 w-full sm:w-auto"
                  >
                    <Link href="/library">
                      Browse Components
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    asChild
                    className="border-black text-black hover:bg-black hover:text-white dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-black bg-transparent w-full sm:w-auto"
                  >
                    <Link href="/library/docs">
                      <Download className="mr-2 h-4 w-4" />
                      Get Started
                    </Link>
                  </Button>
                </div>
              </div>
            </section>
            <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <img
                src={banner.src || "/placeholder.svg"}
                alt="ArDacity Banner"
                className="relative z-40 mx-auto mt-[-120px] invert dark:invert-0 w-full max-w-5xl rounded-lg shadow-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-6 lg:px-8" data-lenis-prevent>
        <div className="mx-auto max-w-4xl">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat, index) => (
              <div
                
                className="text-center"
              >
                <div className="text-2xl md:text-3xl font-bold text-black dark:text-white">{stat.value}</div>
                <div className="text-sm text-black/60 dark:text-white/60">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Showcase Section - Fixed spacing */}
      <section className="py-16 px-6 lg:px-8 bg-gradient-to-b from-zinc-50/50 to-white dark:from-zinc-950/50 dark:to-black"data-lenis-prevent>
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <Badge
              variant="outline"
              className="mb-6 border-black/20 dark:border-white/20 px-4 py-2 text-sm font-medium"
            >
              See It In Action
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-black dark:text-white mb-6">
              Experience ArDacity in Motion
            </h2>
            <p className="text-lg md:text-xl text-black/70 dark:text-white/70 max-w-3xl mx-auto leading-relaxed">
              Watch how our components seamlessly integrate with Arweave blockchain technology to create powerful
              decentralized applications
            </p>
          </div>
          <div
            
            className="relative"
          >
            <Card className="overflow-hidden border-0 shadow-2xl bg-white/90 dark:bg-black/90 backdrop-blur-sm">
            
                <GlowingEffect spread={40} glow={true} disabled={false} proximity={64} inactiveZone={0.01} />
              <div className="relative rounded-2xl overflow-hidden">
                <iframe
                  src="https://www.youtube.com/embed/uUH5AvSpNlA"
                  className="w-full h-auto rounded-2xl"
                  style={{ aspectRatio: "16/9" }}
                  title="ArDacity Demo Video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section - Responsive with better spacing */}
      <div className="py-8" id="projects" data-lenis-prevent>
        <MobileHorizontalProjects />
      </div>

      {/* Why Choose ArDacity Section - Bento Grid */}
      <section className="py-16 px-6 lg:px-8 bg-white dark:bg-black" data-lenis-prevent>
        <div className="mx-auto max-w-7xl">
          <div
            
            className="text-center mb-16"
          >
            <Badge
              variant="outline"
              className="mb-6 border-black/20 dark:border-white/20 px-4 py-2 text-sm font-medium"
            >
              Why Choose ArDacity
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-black dark:text-white mb-6">
              Built for Modern Developers
            </h2>
            <p className="text-lg md:text-xl text-black/70 dark:text-white/70 max-w-3xl mx-auto leading-relaxed">
              Professional-grade components designed for developers who demand quality, performance, and reliability
            </p>
          </div>

          <div
           
          >
            <ul className="grid grid-cols-1 grid-rows-none gap-4 md:grid-cols-12 md:grid-rows-3 lg:gap-6 xl:max-h-[40rem] xl:grid-rows-2">
              {whyChooseItems.map((item, index) => (
                <BentoGridItem
                  key={index}
                  area={item.area}
                  icon={item.icon}
                  title={item.title}
                  description={item.description}
                  gradient={item.gradient}
                />
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Complete Ecosystem Section - Enhanced Bento Grid */}
      {/* <section
        className="py-16 px-6 lg:px-8 bg-gradient-to-b from-white to-zinc-50 dark:from-black dark:to-zinc-950"
        id="features" data-lenis-prevent
      >
        <div className="mx-auto max-w-7xl">
          <div
            
          >
            <Badge
              variant="outline"
              className="mb-6 border-black/20 dark:border-white/20 px-4 py-2 text-sm font-medium"
            >
              Complete Ecosystem
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-black dark:text-white mb-6">
              Everything You Need for Arweave Development
            </h2>
            <p className="text-lg md:text-xl text-black/70 dark:text-white/70 max-w-4xl mx-auto leading-relaxed">
              ArDacity provides a comprehensive suite of professional-grade tools and components specifically designed
              for the Arweave ecosystem, enabling developers to build powerful decentralized applications with
              enterprise-level reliability.
            </p>
          </div>

          <div
            
          >
            <ul className="grid grid-cols-1 grid-rows-none gap-4 md:grid-cols-12 md:grid-rows-3 lg:gap-6 xl:max-h-[45rem] xl:grid-rows-2">
              {ecosystemItems.map((item, index) => (
                <BentoGridItem
                  key={index}
                  area={item.area}
                  icon={item.icon}
                  title={item.title}
                  description={item.description}
                  gradient={item.gradient}
                  large={item.large}
                />
              ))}
            </ul>
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="py-16 px-6 lg:px-8 bg-gradient-to-br from-white via-zinc-100 to-white dark:from-black dark:via-zinc-900 dark:to-black" data-lenis-prevent>
        <div
          
          className="mx-auto max-w-4xl text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-black dark:text-white mb-6">
            Ready to Build the Future?
          </h2>
          <p className="text-lg md:text-xl text-black/70 dark:text-white/70 mb-12 leading-relaxed">
            Join the next generation of developers building on Arweave with our comprehensive component library and
            blockchain integrations
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              size="lg"
              asChild
              className="bg-black text-white hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-100 text-lg px-8 py-4 h-auto w-full sm:w-auto"
            >
              <Link href="/library/docs">
                <Download className="mr-2 h-5 w-5" />
                Installation Guide
              </Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              asChild
              className="border-black/30 text-black hover:bg-black hover:text-white dark:border-white/30 dark:text-white dark:hover:bg-white dark:hover:text-black text-lg px-8 py-4 h-auto bg-transparent w-full sm:w-auto"
            >
              <a href="https://x.com/ArDacityUI" target="_blank" rel="noopener noreferrer">
                Follow on X
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
