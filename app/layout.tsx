import type { Metadata } from "next"
import { Inter } from 'next/font/google'
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Litti Chokha Podcast",
  description: "A podcast celebrating Bihar's culture, traditions, and stories",
  icons: {
    icon: "/images/litti-chokha.jpg",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/litti-chokha.jpg" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}

