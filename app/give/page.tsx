import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Heart, CreditCard, Building, Gift } from "lucide-react"
import Link from "next/link"

const givingOptions = [
  {
    icon: CreditCard,
    title: "Online Giving",
    description: "Give securely online using CashApp ($RiverRougeCOGOP).",
  },
  {
    icon: Building,
    title: "In-Person",
    description: "Give during our Sunday services through our offering collection.",
  },
  {
    icon: Gift,
    title: "Special Offerings",
    description: "Support specific ministries, missions, or building projects.",
  },
]

export default function GivePage() {
  return (
    <div id="top">
      <Header />
      <main>
        {/* Page Header */}
        <section className="bg-primary py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground text-center">Give</h1>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 max-w-3xl text-center">
            <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
              <Heart className="h-10 w-10 text-primary-foreground" />
            </div>
            <h2 className="text-3xl font-bold mb-6">
              Thank You for Your <span className="text-primary">Generosity</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              Your generous giving supports the ministries of River Rouge COGOP and helps us spread the Gospel, serve
              our community, and make a difference in the world.
            </p>
            <p className="text-muted-foreground italic">
              2 Corinthians 9:7 –{" "}
              <em>
                Each of you should give what you have decided in your heart to give, not reluctantly or under
                compulsion, for God loves a cheerful giver.
              </em>
            </p>
          </div>
        </section>

        {/* Giving Options */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              Ways to <span className="text-primary">Give</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {givingOptions.map((option) => (
                <Card key={option.title} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                      <option.icon className="h-8 w-8 text-primary-foreground" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2">{option.title}</h3>
                    <p className="text-muted-foreground text-sm">{option.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Give Now CTA */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Give?</h2>
            <p className="mb-8 opacity-90 max-w-xl mx-auto">
              Your gift makes a difference. Thank you for partnering with us in ministry.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-background text-foreground hover:bg-secondary hover:text-secondary-foreground"
            >
              <Link href="https://cash.app/$RiverRougeCOGOP" target="_blank" rel="noopener noreferrer">
                Give Now
              </Link>
            </Button>
          </div>
        </section>

        {/* Additional Info */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-2xl font-bold text-center mb-8">
              Other Ways to <span className="text-primary">Support</span>
            </h2>
            <div className="space-y-6 text-muted-foreground">
              <div>
                <h3 className="font-bold text-foreground mb-2">Mail a Check</h3>
                <p>
                  Make checks payable to "River Rouge COGOP" and mail to:
                  <br />
                  41 Orchard Street, River Rouge, MI, 48218
                </p>
              </div>
              <div>
                <h3 className="font-bold text-foreground mb-2">Questions?</h3>
                <p>
                  If you have any questions about giving, please{" "}
                  <Link href="/contact" className="text-primary hover:underline">
                    contact us
                  </Link>
                  .
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
