export const registry = [
  {
    name: "action-search-bar",
    type: "registry:component",
    dependencies: ["motion", "@/components/ui/input", "@/components/ui/badge", "lucide-react", "@/lib/utils"],
    files: [
      {
        path: "components/ardacity/action-search-bar.tsx",
        type: "registry:component",
      },
    ],
  },
  {
    name: "word-scroll-reveal",
    type: "registry:component",
    dependencies: ["motion", "tailwind-merge", "@/lib/utils"],
    files: [
      {
        path: "components/ardacity/word-scroll-reveal.tsx",
        type: "registry:component",
      },
    ],
  },
  {
    name: "avatar-picker",
    type: "registry:component",
    dependencies: ["motion", "@/components/ui/card", "@/lib/utils"],
    files: [
      {
        path: "components/ardacity/avatar-picker.tsx",
        type: "registry:component",
      },
    ],
  },
  {
    name: "background-circles",
    type: "registry:component",
    dependencies: ["motion", "clsx", "@/lib/utils"],
    files: [
      {
        path: "components/ardacity/background-circles.tsx",
        type: "registry:component",
      },
    ],
  },
  {
    name: "beams-background",
    type: "registry:component",
    dependencies: ["motion", "@/lib/utils"],
    files: [
      {
        path: "components/ardacity/beams-background.tsx",
        type: "registry:component",
      },
    ],
  },
  {
    name: "bento-grid",
    type: "registry:component",
    dependencies: ["lucide-react", "@/lib/utils"],
    files: [
      {
        path: "components/ardacity/bento-grid.tsx",
        type: "registry:component",
      },
    ],
  },
  {
    name: "checkout-interaction",
    type: "registry:component",
    dependencies: [
      "motion",
      "@/components/ui/button",
      "lucide-react",
      "next/image",
      "@/lib/utils",
      "@number-flow/react",
    ],
    files: [
      {
        path: "components/ardacity/checkout-interaction.tsx",
        type: "registry:component",
      },
    ],
  },
  {
    name: "currency-transfer",
    type: "registry:component",
    dependencies: ["motion", "@/components/ui/card", "@/components/ui/button", "lucide-react"],
    files: [
      {
        path: "components/ardacity/currency-transfer.tsx",
        type: "registry:component",
      },
    ],
  },
  {
    name: "hand-written-title",
    type: "registry:component",
    dependencies: ["motion"],
    files: [
      {
        path: "components/ardacity/hand-written-title.tsx",
        type: "registry:component",
      },
    ],
  },
  {
    name: "hero-geometric",
    type: "registry:component",
    dependencies: ["motion", "next/font/google", "next/image", "@/lib/utils"],
    files: [
      {
        path: "components/ardacity/hero-geometric.tsx",
        type: "registry:component",
      },
    ],
  },
  {
    name: "particles-background",
    type: "registry:component",
    dependencies: ["motion", "@/lib/utils"],
    files: [
      {
        path: "components/ardacity/particles-background.tsx",
        type: "registry:component",
      },
    ],
  },
  {
    name: "toolbar",
    type: "registry:component",
    dependencies: ["motion", "@/lib/utils", "lucide-react"],
    files: [
      {
        path: "components/ardacity/toolbar.tsx",
        type: "registry:component",
      },
    ],
  },
  {
    name: "tweet-card",
    type: "registry:component",
    dependencies: ["lucide-react", "@/lib/utils", "next/link"],
    files: [
      {
        path: "components/ardacity/tweet-card.tsx",
        type: "registry:component",
      },
    ],
  },
  {
    name: "vercel-v0-chat",
    type: "registry:component",
    dependencies: ["@/components/ui/textarea", "@/lib/utils", "@/hooks/use-auto-resize-textarea", "lucide-react"],
    files: [
      {
        path: "components/ardacity/vercel-v0-chat.tsx",
        type: "registry:component",
      },
    ],
  },
  {
    name: "utils",
    type: "registry:lib",
    dependencies: ["clsx", "tailwind-merge"],
    files: [
      {
        path: "lib/utils.ts",
        type: "registry:lib",
      },
    ],
  },
]
