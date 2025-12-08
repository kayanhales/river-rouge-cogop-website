import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Clock, Video, BookOpen, Users } from "lucide-react"
import Link from "next/link"

const services = [
  {
    icon: BookOpen,
    title: "Sunday School",
    time: "11:00 AM - 12:00 PM",
    description: "Join us for in-depth Bible study and discussion. All ages welcome.",
  },
  {
    icon: Users,
    title: "Sunday Service",
    time: "12:00 PM - 1:30 PM",
    description: "Our main worship service featuring praise, prayer, and preaching.",
  },
  {
    icon: Clock,
    title: "Bible Study",
    time: "Wednesdays 6:00 PM - 8:00 PM",
    description: "Midweek Bible study to deepen your understanding of God's Word.",
  },
]

export default function ServicesPage() {
  return (
    <div id="top">
      <Header />
      <main>
        {/* Page Header */}
        <section className="bg-primary py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground text-center">Services</h1>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-12 bg-background">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              We meet corporately to worship God, to admonish each other and encourage each other. See the below for the
              variety of gatherings we have at River Rouge COGOP.
            </p>
            <p className="text-muted-foreground italic">
              Colossians 3:16 –{" "}
              <em>
                Let the word of Christ dwell in you richly in all wisdom; teaching and admonishing one another in psalms
                and hymns and spiritual songs, singing with grace in your hearts to the Lord.
              </em>
            </p>
          </div>
        </section>

        {/* Join Online CTA */}
        <section className="py-8 bg-muted">
          <div className="container mx-auto px-4">
            <Card className="max-w-2xl mx-auto bg-primary text-primary-foreground">
              <CardContent className="p-6 text-center">
                <Video className="h-12 w-12 mx-auto mb-4" />
                <h2 className="text-xl font-bold mb-2">Join Us Online</h2>
                <p className="mb-4 opacity-90">Join us on Zoom during any of our services.</p>
                <p className="text-sm mb-4">
                  Meeting ID: <strong>296 329 7107</strong> | Password: <strong>563602</strong>
                </p>
                <Button
                  asChild
                  className="bg-background text-foreground hover:bg-secondary hover:text-secondary-foreground"
                >
                  <Link href="https://bit.ly/RRCOGOP" target="_blank" rel="noopener noreferrer">
                    Join Service
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Service Times */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              Service <span className="text-primary">Times</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {services.map((service) => (
                <Card key={service.title} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                      <service.icon className="h-8 w-8 text-primary-foreground" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2">{service.title}</h3>
                    <p className="text-primary font-semibold mb-4">{service.time}</p>
                    <p className="text-muted-foreground text-sm">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Location */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">
              Visit Us <span className="text-primary">In Person</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-4">41 Orchard Street, River Rouge, MI, 48218</p>
            <Button
              asChild
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
            >
              <Link href="/contact">Get Directions</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
