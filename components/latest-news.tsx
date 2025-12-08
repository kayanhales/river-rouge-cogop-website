import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { news } from "./data/news"

const latestNews = news.slice(0, 3);

export function LatestNews() {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Latest <span className="text-primary">News</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12">See the latest news at River Rouge COGOP</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {latestNews.map((item) => (
            <Link key={item.title} href="/news">
              <Card className="overflow-hidden group hover:shadow-lg transition-shadow">
                <div className="relative h-48">
                  <Image src={item.image || "/placeholder.svg"} alt={item.title} fill className="object-cover" />
                </div>
                <CardContent className="p-6">
                <p className="text-sm text-muted-foreground mb-2">{item.date}</p>
                <h3 className="font-bold text-lg text-foreground group-hover:text-primary transition-colors mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{item.description}</p>
              </CardContent>
            </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
