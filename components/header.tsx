"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X, ChevronDown, Mail, Phone, Facebook, Twitter, Instagram, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

const navigation = [
  { name: "Home", href: "/" },
  {
    name: "About Us",
    href: "/about",
    children: [
      { name: "Biographies", href: "/about#biographies" },
      { name: "History", href: "/about#history" },
      { name: "What We Believe", href: "/about#beliefs" },
      { name: "FAQ", href: "/about#faq" },
      { name: "COGOP International", href: "https://cogop.org", external: true },
    ],
  },
  {
    name: "Ministries",
    href: "/ministries",
    children: [
      { name: "Women's Ministry", href: "/ministries#womens" },
      { name: "Men's Ministry", href: "/ministries#mens" },
      { name: "Youth Ministry", href: "/ministries#youth" },
      { name: "Missions Ministry", href: "/ministries#missions" },
      { name: "Family Ministry", href: "/ministries#family" },
      { name: "Children's Ministry", href: "/ministries#childrens" },
      { name: "Music Ministry", href: "/ministries#music" },
    ],
  },
  { name: "Services", href: "/services" },
  { name: "Upcoming Events", href: "/events" },
  { name: "News", href: "/news" },
  { name: "Give", href: "/give" },
  { name: "Contact Us", href: "/contact" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="w-full">
      {/* Top Bar */}
      <div className="bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 py-2 flex items-center justify-between">
          <nav className="hidden md:flex items-center gap-6 text-sm">
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                {item.children ? (
                  <DropdownMenu>
                    <DropdownMenuTrigger className="flex items-center gap-1 hover:text-secondary transition-colors">
                      {item.name}
                      <ChevronDown className="h-4 w-4" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="bg-background text-foreground">
                      {item.children.map((child) => (
                        <DropdownMenuItem key={child.name} asChild>
                          <Link
                            href={child.href}
                            target={child.external ? "_blank" : undefined}
                            rel={child.external ? "noopener noreferrer" : undefined}
                          >
                            {child.name}
                          </Link>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                ) : (
                  <Link href={item.href} className="hover:text-secondary transition-colors">
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              className="text-primary-foreground hover:text-secondary hover:bg-transparent"
            >
              <Search className="h-4 w-4" />
            </Button>
            <div className="hidden md:flex items-center gap-2">
              <Link
                href="https://facebook.com/riverrougecogop"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-secondary transition-colors"
              >
                <Facebook className="h-4 w-4" />
              </Link>
              <Link
                href="https://twitter.com/riverrougecogop"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-secondary transition-colors"
              >
                <Twitter className="h-4 w-4" />
              </Link>
              <Link
                href="https://instagram.com/riverrougecogop"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-secondary transition-colors"
              >
                <Instagram className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="bg-background border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
              <div className="flex flex-col">
                <span className="text-2xl md:text-3xl font-bold">
                  <span className="text-primary">RIVER ROUGE</span> <span className="text-secondary">COGOP</span>
                </span>
                <span className="text-xs md:text-sm text-muted-foreground">
                  Glorifying God through Prayer, Harvest and Leadership Development
                </span>
              </div>
            </Link>

            {/* Contact Info & CTA */}
            <div className="hidden lg:flex items-center gap-8">
              <div className="flex items-center gap-3">
                <Mail className="h-6 w-6 text-primary" />
                <div className="flex flex-col">
                  <span className="text-sm text-muted-foreground">Contact us</span>
                  <Link href="/contact" className="text-primary font-semibold hover:underline">
                    HERE
                  </Link>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-6 w-6 text-primary" />
                <div className="flex flex-col">
                  <span className="text-sm text-muted-foreground">24 Hour Prayer Line</span>
                  <Link href="tel:1-423-559-5100" className="text-primary font-semibold hover:underline">
                    1.423.559.5100
                  </Link>
                </div>
              </div>
              <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8">
                <Link href="/give">Give!</Link>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-background border-b border-border">
          <nav className="container mx-auto px-4 py-4">
            {navigation.map((item) => (
              <div key={item.name} className="py-2">
                {item.children ? (
                  <details className="group">
                    <summary className="flex items-center justify-between cursor-pointer font-medium">
                      {item.name}
                      <ChevronDown className="h-4 w-4 group-open:rotate-180 transition-transform" />
                    </summary>
                    <div className="pl-4 mt-2 space-y-2">
                      {item.children.map((child) => (
                        <Link
                          key={child.name}
                          href={child.href}
                          className="block py-1 text-muted-foreground hover:text-primary"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  </details>
                ) : (
                  <Link
                    href={item.href}
                    className="block font-medium hover:text-primary"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
            <div className="mt-4 pt-4 border-t border-border">
              <Button asChild className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                <Link href="/give">Give!</Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
