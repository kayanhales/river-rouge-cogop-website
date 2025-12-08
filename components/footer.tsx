import Link from "next/link"
import { Facebook, Twitter, Instagram } from "lucide-react"

const usefulLinks = [
  { name: "About Us", href: "/about" },
  { name: "Contact Us", href: "/contact" },
  { name: "Upcoming Events", href: "/events" },
  { name: "Ministries", href: "/ministries" },
  { name: "Services", href: "/services" },
  { name: "COGOP International", href: "https://cogop.org", external: true },
]

const latestNews = [
  {
    title: "Download the RiverRouge COGOP app today!",
    date: "April 6, 2025",
    href: "#",
  },
  {
    title: "YES! Responding to God's Call",
    date: "May 5, 2020",
    href: "#",
  },
]

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* About the Church */}
          <div>
            <h3 className="text-lg font-bold mb-4">The Church</h3>
            <p className="text-background/80 text-sm leading-relaxed mb-4">
              The Church of God of Prophecy is a vibrant, worldwide body of believers, united in worship, working
              hand-in-hand to share God's love and a message of hope to the brokenhearted. The Church of God of Prophecy
              has over one-and-a-half million members, worshiping in over 10,000 churches our missions in 125 nations of
              the world. Nearly 90% of our global membership is outside of North America.
            </p>
            <div className="flex items-center gap-4">
              <Link
                href="https://facebook.com/riverrougecogop"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-secondary transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </Link>
              <Link
                href="https://twitter.com/riverrougecogop"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-secondary transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </Link>
              <Link
                href="https://instagram.com/riverrougecogop"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-secondary transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Useful Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Useful Links</h3>
            <ul className="space-y-2">
              {usefulLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                    className="text-background/80 hover:text-secondary transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Latest News */}
          <div>
            <h3 className="text-lg font-bold mb-4">Latest News</h3>
            <div className="space-y-4">
              {latestNews.map((news) => (
                <Link key={news.title} href={news.href} className="block group">
                  <h4 className="text-sm font-medium group-hover:text-secondary transition-colors">{news.title}</h4>
                  <p className="text-xs text-background/60">{news.date}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-background/20">
        <div className="container mx-auto px-4 py-4">
          <p className="text-center text-sm text-background/60">
            Copyright © {new Date().getFullYear()}. All rights reserved | River Rouge COGOP
          </p>
        </div>
      </div>

      {/* Back to Top */}
      <Link
        href="#top"
        className="fixed bottom-6 right-6 bg-primary hover:bg-primary/90 text-primary-foreground p-3 rounded-full shadow-lg transition-all"
        aria-label="Back to top"
      >
        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </Link>
    </footer>
  )
}
