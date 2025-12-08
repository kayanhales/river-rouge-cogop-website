import Link from "next/link"
import { Users, Calendar, Heart } from "lucide-react"

const quickLinks = [
  {
    icon: Users,
    title: "About Us",
    description:
      "River Rouge COGOP is a multilingual, multicultural church in Metro Detroit, MI under the umbrella of The Church of God of Prophecy (COGOP).",
    href: "/about",
    color: "bg-primary",
  },
  {
    icon: Calendar,
    title: "Services",
    description:
      "We meet corporately to worship God, to admonish each other and encourage each other. See the below for the variety of gatherings we have at River Rouge COGOP.",
    href: "/services",
    color: "bg-secondary",
  },
  {
    icon: Heart,
    title: "Ministries",
    description:
      "We believe in the equipping of the Saints for the purpose of carrying God’s work and edifying the body of Christ.",
    href: "/ministries",
    color: "bg-primary",
  },
]

export function QuickLinks() {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {quickLinks.map((link) => (
            <Link key={link.title} href={link.href} className="group">
              <div className="text-center">
                <div
                  className={`${link.color} w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}
                >
                  <link.icon className="h-10 w-10 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {link.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{link.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
