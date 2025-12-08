import Image from "next/image"
import { Award, Sparkles, Users, Heart } from "lucide-react"

const features = [
  {
    icon: Award,
    title: "Glorify God",
    description:
      "1 Corinthians 10:31 - Whether therefore ye eat, or drink, or whatsoever ye do, do all to the glory of God.",
  },
  {
    icon: Sparkles,
    title: "Believe Biblically",
    description:
      "2 Timothy 3:16-17 - All scripture is given by inspiration of God, and is profitable for doctrine, for reproof, for correction, for instruction in righteousness.",
  },
  {
    icon: Users,
    title: "Live Faithfully",
    description:
      "Hebrews 11:6 - But without faith it is impossible to please him: for he that cometh to God must believe that he is, and that he is a rewarder of them that diligently seek him.",
  },
  {
    icon: Heart,
    title: "Love People",
    description:
      "Ephesians 4:32 - And be ye kind one to another, tenderhearted, forgiving one another, even as God for Christ's sake hath forgiven you.",
  },
]

export function WhyOurChurch() {
  return (
    <section className="py-16 bg-muted">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative h-[400px] lg:h-[600px]">
            <Image src="/images/praying-man.png" alt="Man praying" fill className="object-cover rounded-lg" />
          </div>

          {/* Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-2">
              Why Our <span className="text-primary">Church</span>
            </h2>
            <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-4">
              We are a church that believes in Jesus, loves God and people.
            </h3>
            <p className="text-muted-foreground mb-8">
              River Rouge COGOP embraces all biblical doctrines as taught in the Word of God, and have listed some that
              may be helpful to believers seeking to mature in Christ Jesus.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((feature) => (
                <div key={feature.title} className="flex gap-4">
                  <div className="shrink-0">
                    <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center">
                      <feature.icon className="h-6 w-6 text-secondary" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-1">{feature.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
