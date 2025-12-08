import type React from "react"
import type { Metadata } from "next"
import { Open_Sans, Playfair_Display } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const openSans = Open_Sans({ subsets: ["latin"], variable: "--font-open-sans" })
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" })

export const metadata: Metadata = {
  title: "River Rouge COGOP - Glorifying God through Prayer, Harvest and Leadership Development",
  description:
    "River Rouge COGOP is a multilingual, multicultural church in Metro Detroit, MI under the umbrella of The Church of God of Prophecy",
  keywords: ["church", "River Rouge", "COGOP", "Church of God of Prophecy", "Detroit", "Michigan"],
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${openSans.variable} ${playfair.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
