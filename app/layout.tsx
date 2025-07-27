import type React from "react"
import ClientLayout from "./clientLayout"


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <ClientLayout>{children}</ClientLayout>
}


import './globals.css'

export const metadata = {
  generator: 'Ardacity',
  title: 'Ardacity',
  description: 'Ardacity is a decentralized web platform for building and hosting Arweave-based applications.',
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
};
