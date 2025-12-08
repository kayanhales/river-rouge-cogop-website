import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function OurMinisters() {
  return (
    <section className="py-16 bg-muted">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Our <span className="text-primary">Ministers</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto text-sm leading-relaxed">
          Ephesians 4:11-16: And he gave some, apostles; and some, prophets; and some, evangelists; and some, pastors
          and teachers; For the perfecting of the saints, for the work of the ministry, for the edifying of the body of
          Christ.
        </p>

        <div className="max-w-md mx-auto text-center">
          <div className="relative h-96 w-64 mx-auto mb-6 overflow-hidden rounded-lg">
            <Image src="/images/pastor-clarke.jpg" alt="Pastor Clarke" fill className="object-cover" />
          </div>
          <Button
            asChild
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
          >
            <Link href="/about#biographies">Biographies</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
