import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, MapPin } from "lucide-react"
import Image from "next/image"
import {events} from "@/components/data/events"


export default function EventsPage() {
  return (
    <div id="top">
      <Header />
      <main>
        {/* Page Header */}
        <section className="bg-primary py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground text-center">Upcoming Events</h1>
          </div>
        </section>

        {/* Events List */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Stay connected with all the exciting events happening at River Rouge COGOP. We look forward to seeing you!
            </p>

            <div className="space-y-8 max-w-4xl mx-auto">
              {events.map((event) => (
                <Card key={event.title} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="grid grid-cols-1 md:grid-cols-3">
                    <div className="relative h-48 md:h-auto">
                      <Image src={event.image || "/placeholder.svg"} alt={event.title} fill className="object-cover" />
                    </div>
                    <CardContent className="md:col-span-2 p-6">
                      <h3 className="text-xl font-bold text-foreground mb-4">{event.title}</h3>
                      <div className="space-y-2 mb-4">
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Calendar className="h-4 w-4 text-primary" />
                          <span>{event.date}</span>
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <MapPin className="h-4 w-4 text-primary" />
                          <span>{event.location}</span>
                        </div>
                      </div>
                      <p className="text-muted-foreground">{event.description}</p>
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
              Follow us on social media to stay updated on all our upcoming events and announcements.
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
