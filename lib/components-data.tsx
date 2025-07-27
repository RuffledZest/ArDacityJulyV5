import React from "react"
import { Code, Zap, Blocks, Palette, Search, MessageSquare, Music, LayoutGrid, Gamepad2 } from "lucide-react"

export interface Component {
  name: string
  description: string
  href: string
  category: "Interactive" | "Layout" | "Background" | "Typography" | "Glassmorphism" | "Retro"
  tags: string[]
  icon: React.ReactNode
}

export const allComponents: Component[] = [
  // Interactive Components
  {
    name: "Action Search Bar",
    description: "Command palette with keyboard navigation and search",
    href: "/library/components/action-search-bar",
    category: "Interactive",
    tags: ["Search", "Command", "Keyboard", "Navigation"],
    icon: <Search className="h-5 w-5" />,
  },
  {
    name: "Word Scroll Reveal",
    description: "Animated word reveal effect on scroll",
    href: "/library/components/word-scroll-reveal",
    category: "Interactive",
    tags: ["Animation", "Scroll", "Text"],
    icon: <Zap className="h-5 w-5" />,
  },
  {
    name: "Button Demos",
    description: "A collection of beautiful, animated buttons",
    href: "/library/components/button",
    category: "Interactive",
    tags: ["Button", "UI", "Animation", "Interactive"],
    icon: <Code className="h-5 w-5" />,
  },
  {
    name: "Checkout Interaction",
    description: "Shopping cart interface with animations",
    href: "/library/components/checkout-interaction",
    category: "Interactive",
    tags: ["E-commerce", "Cart", "Animation"],
    icon: <Code className="h-5 w-5" />,
  },
  {
    name: "Currency Transfer",
    description: "Currency exchange interface with success animations",
    href: "/library/components/currency-transfer",
    category: "Interactive",
    tags: ["Finance", "Animation", "Transfer"],
    icon: <Code className="h-5 w-5" />,
  },
  {
    name: "Toolbar",
    description: "Interactive toolbar with expandable buttons",
    href: "/library/components/toolbar",
    category: "Interactive",
    tags: ["Toolbar", "Navigation", "Expandable"],
    icon: <Code className="h-5 w-5" />,
  },
  {
    name: "Tweet Card",
    description: "Social media card component with reply functionality",
    href: "/library/components/tweet-card",
    category: "Interactive",
    tags: ["Social", "Card", "Media"],
    icon: <MessageSquare className="h-5 w-5" />,
  },
  {
    name: "Vercel V0 Chat",
    description: "Chat interface inspired by Vercel's v0",
    href: "/library/components/vercel-v0-chat",
    category: "Interactive",
    tags: ["Chat", "Interface", "AI"],
    icon: <Code className="h-5 w-5" />,
  },
  {
    name: "Avatar Picker",
    description: "An animated avatar picker with smooth transitions",
    href: "/library/components/avatar-picker",
    category: "Interactive",
    tags: ["Avatar", "Picker", "Animation"],
    icon: <Palette className="h-5 w-5" />,
  },

  // Layout Components
  {
    name: "Animated Navbar",
    description: "A responsive animated navbar with smooth transitions",
    href: "/library/components/animated-navbar",
    category: "Layout",
    tags: ["Navigation", "Responsive", "Animation"],
    icon: <Blocks className="h-5 w-5" />,
  },
  {
    name: "Bento Grid",
    description: "A responsive grid layout with hover effects",
    href: "/library/components/bento-grid",
    category: "Layout",
    tags: ["Grid", "Responsive", "Layout"],
    icon: <LayoutGrid className="h-5 w-5" />,
  },
  {
    name: "Hero Geometric",
    description: "Hero section with floating geometric shapes",
    href: "/library/components/hero-geometric",
    category: "Layout",
    tags: ["Hero", "Geometric", "Shapes"],
    icon: <Zap className="h-5 w-5" />,
  },

  // Background Components
  {
    name: "Particles Background",
    description: "Animated particles background effect",
    href: "/library/components/particles-background",
    category: "Background",
    tags: ["Animation", "Background", "Particles"],
    icon: <Zap className="h-5 w-5" />,
  },
  {
    name: "Background Circles",
    description: "Animated circular background elements",
    href: "/library/components/background-circles",
    category: "Background",
    tags: ["Animation", "Background", "Circles"],
    icon: <Zap className="h-5 w-5" />,
  },
  {
    name: "Beams Background",
    description: "Animated background with flowing beams",
    href: "/library/components/beams-background",
    category: "Background",
    tags: ["Animation", "Background", "Beams"],
    icon: <Zap className="h-5 w-5" />,
  },

  // Typography Components
  {
    name: "Hand Written Title",
    description: "Animated hand-drawn title effect",
    href: "/library/components/hand-written-title",
    category: "Typography",
    tags: ["Animation", "Typography", "Hand-drawn"],
    icon: <Palette className="h-5 w-5" />,
  },

  // Glassmorphism Components
  {
    name: "Liquid Glass Card",
    description: "Frosted glass card with glowing and overlay variants",
    href: "/library/liquid-glass/liquid-card",
    category: "Glassmorphism",
    tags: ["Card", "Glass", "Frosted", "Overlay"],
    icon: <Blocks className="h-5 w-5" />,
  },
  {
    name: "Liquid Glass Button",
    description: "Animated glassmorphic button",
    href: "/library/liquid-glass/liquid-button",
    category: "Glassmorphism",
    tags: ["Button", "Glass", "Animated"],
    icon: <Zap className="h-5 w-5" />,
  },
  {
    name: "Liquid Glass Menu",
    description: "Glassmorphic menu with animated background",
    href: "/library/liquid-glass/liquid-menu",
    category: "Glassmorphism",
    tags: ["Menu", "Glass", "Animated"],
    icon: <Blocks className="h-5 w-5" />,
  },
  {
    name: "Liquid Glass Music Card",
    description: "Draggable glassmorphic music card with animated background",
    href: "/library/liquid-glass/music-card",
    category: "Glassmorphism",
    tags: ["Music", "Card", "Glass", "Draggable"],
    icon: <Music className="h-5 w-5" />,
  },
  {
    name: "Liquid Glass Navigation",
    description: "Glassmorphic navigation bar (bottom/top switch)",
    href: "/library/liquid-glass/liquid-navigation",
    category: "Glassmorphism",
    tags: ["Navigation", "Glass", "Bar"],
    icon: <Blocks className="h-5 w-5" />,
  },
  {
    name: "Liquid Glass Navbar",
    description: "Sticky glassmorphic navbar that shrinks on scroll",
    href: "/library/liquid-glass/liquid-navbar",
    category: "Glassmorphism",
    tags: ["Navbar", "Glass", "Sticky", "Scroll"],
    icon: <Blocks className="h-5 w-5" />,
  },
  {
    name: "Liquid Glass Dock",
    description: "Glassmorphic dock with hover effects",
    href: "/library/liquid-glass/glass-dock",
    category: "Glassmorphism",
    tags: ["Dock", "Glass", "Hover"],
    icon: <Blocks className="h-5 w-5" />,
  },

  // Retro Components
  {
    name: "Retro Header",
    description: "Complete retro-styled header component with navigation, search, and decorative elements",
    href: "/library/retro-ui/retro-header",
    category: "Retro",
    tags: ["Header", "Navigation", "Search", "Retro", "Complete"],
    icon: <Gamepad2 className="h-5 w-5" />,
  },
  {
    name: "Retro Input",
    description: "Retro-styled input field with customizable colors and icons",
    href: "/library/retro-ui/retro-input",
    category: "Retro",
    tags: ["Input", "Retro", "Customizable", "Icons"],
    icon: <Gamepad2 className="h-5 w-5" />,
  },
  {
    name: "Retro Button",
    description: "Retro-styled button with customizable colors and variants",
    href: "/library/retro-ui/retro-button",
    category: "Retro",
    tags: ["Button", "Retro", "Customizable", "Variants"],
    icon: <Gamepad2 className="h-5 w-5" />,
  },
  {
    name: "Retro Card",
    description: "Retro-styled card component with customizable colors and content",
    href: "/library/retro-ui/retro-card",
    category: "Retro",
    tags: ["Card", "Retro", "Customizable", "Content"],
    icon: <Gamepad2 className="h-5 w-5" />,
  },
  {
    name: "Retro Alert",
    description: "Retro-styled alert component with different types and customizable content",
    href: "/library/retro-ui/retro-alert",
    category: "Retro",
    tags: ["Alert", "Retro", "Types", "Customizable"],
    icon: <Gamepad2 className="h-5 w-5" />,
  },
  {
    name: "Retro Popup",
    description: "Retro-styled popup/modal component with customizable colors and content",
    href: "/library/retro-ui/retro-popup",
    category: "Retro",
    tags: ["Popup", "Modal", "Retro", "Customizable"],
    icon: <Gamepad2 className="h-5 w-5" />,
  },
  {
    name: "Retro Navbar",
    description: "Retro-styled navigation bar with customizable colors and menu items",
    href: "/library/retro-ui/retro-navbar",
    category: "Retro",
    tags: ["Navbar", "Navigation", "Retro", "Customizable"],
    icon: <Gamepad2 className="h-5 w-5" />,
  },
  {
    name: "Retro Toggle",
    description: "Retro-styled toggle component with customizable options and colors",
    href: "/library/retro-ui/retro-toggle",
    category: "Retro",
    tags: ["Toggle", "Retro", "Options", "Customizable"],
    icon: <Gamepad2 className="h-5 w-5" />,
  },
  {
    name: "Retro Video",
    description: "Retro-styled video player component with customizable colors and controls",
    href: "/library/retro-ui/retro-video",
    category: "Retro",
    tags: ["Video", "Player", "Retro", "Controls"],
    icon: <Gamepad2 className="h-5 w-5" />,
  },
  {
    name: "Retro Form",
    description: "Retro-styled form component with customizable colors and fields",
    href: "/library/retro-ui/retro-form",
    category: "Retro",
    tags: ["Form", "Retro", "Fields", "Customizable"],
    icon: <Gamepad2 className="h-5 w-5" />,
  },

  // AI Blocks
  {
    name: "AI Card Generation",
    description: "AI-powered card generation interface",
    href: "/library/blocks/ai-card-generation",
    category: "Interactive",
    tags: ["AI", "Generation", "Cards"],
    icon: <Code className="h-5 w-5" />,
  },
  {
    name: "AI Chat",
    description: "AI chat interface with streaming responses",
    href: "/library/blocks/ai-chat",
    category: "Interactive",
    tags: ["AI", "Chat", "Streaming"],
    icon: <MessageSquare className="h-5 w-5" />,
  },
]

export const categories = ["All", "Interactive", "Layout", "Background", "Typography", "Glassmorphism", "Retro"] as const 