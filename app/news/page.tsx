import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Calendar, Link as LinkIcon, MapPin } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import {news} from "@/components/data/news"
import { Button } from "@/components/ui/button"

export default function newsPage() {
  return (
    <div id="top">
      <Header />
      <main>
        {/* Page Header */}
        <section className="bg-primary py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground text-center">Upcoming news</h1>
          </div>
        </section>

        {/* news List */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Stay connected with all the exciting news happening at River Rouge COGOP. We look forward to seeing you!
            </p>

            <div className="space-y-8 max-w-4xl mx-auto">
              {news.map((item) => (
                <Card key={item.title} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="grid grid-cols-1 md:grid-cols-3">
                    <div className="relative h-48 md:h-auto">
                      <Image src={item.image || "/placeholder.svg"} alt={item.title} fill className="object-cover" />
                    </div>
                    <CardContent className="md:col-span-2 p-6">
                      <h3 className="text-xl font-bold text-foreground mb-4">{item.title}</h3>
                      <div className="space-y-2 mb-4">
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Calendar className="h-4 w-4 text-primary" />
                          <span>{item.date}</span>
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <MapPin className="h-4 w-4 text-primary" />
                          <span>{item.location}</span>
                        </div>
                      </div>
                      <p className="text-muted-foreground">{item.description}</p>
                      <p><Link href={item.href} className="inline-flex items-center text-primary font-semibold mt-4 hover:underline">
                        {item.linkText}
                      </Link></p>
                    </CardContent>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Subscribe CTA */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Stay <span className="text-primary">Updated</span>
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Follow us on social media to stay updated on all our upcoming news and announcements.
            </p>
            <div className="flex justify-center gap-4">
              <a
                href="https://facebook.com/riverrougecogop"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-full font-semibold transition-colors"
              >
                Follow on Facebook
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
