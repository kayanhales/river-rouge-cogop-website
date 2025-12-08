import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Image from "next/image"
import { Users, Heart, Music, Globe, Home, Baby, UserCircle } from "lucide-react"

const ministries = [
  {
    id: "womens",
    icon: Heart,
    title: "Women's Ministry",
    description:
      "Our Women's Ministry is dedicated to nurturing and empowering women of all ages through Bible study, fellowship, and service. We provide a supportive community where women can grow in their faith, develop leadership skills, and build lasting friendships.",
    image: "/images/womensministry.png",
  },
  {
    id: "mens",
    icon: UserCircle,
    title: "Men's Ministry",
    description:
      "The Men's Ministry focuses on helping men become godly leaders in their homes, churches, and communities. Through accountability groups, Bible studies, and fellowship events, we encourage men to live out their faith boldly.",
    image: "/images/praying-man.png",
  },
  {
    id: "youth",
    icon: Users,
    title: "Youth Ministry",
    description:
      "Our Youth Ministry provides a vibrant, engaging environment for teenagers to explore their faith, build friendships, and develop as young leaders. Through worship, small groups, and fun activities, we help young people discover their purpose in Christ.",
    image: "/images/ministry-youth.jpg",
  },
  {
    id: "missions",
    icon: Globe,
    title: "Missions Ministry",
    description:
      "The Missions Ministry is committed to spreading the Gospel both locally and globally. We support missionaries, organize outreach events, and provide opportunities for congregation members to participate in mission trips and community service.",
    image: "/images/missionsministry.png",
  },
  {
    id: "family",
    icon: Home,
    title: "Family Ministry",
    description:
      "Our Family Ministry strengthens marriages and families through workshops, counseling resources, and family-focused events. We believe strong families are the foundation of a healthy church and community.",
    image: "/images/familyministry.png",
  },
  {
    id: "childrens",
    icon: Baby,
    title: "Children's Ministry",
    description:
      "The Children's Ministry provides age-appropriate biblical teaching and activities for our youngest members. Through creative lessons, worship, and hands-on activities, we help children build a strong foundation of faith.",
    image: "/images/childrensministry.png",
  },
  {
    id: "music",
    icon: Music,
    title: "Music Ministry",
    description:
      "Our Music Ministry leads the congregation in worship through contemporary and traditional music. The choir, praise team, and musicians work together to create an atmosphere of reverence and celebration.",
    image: "/images/musicministry.png",
  },
]

export default function MinistriesPage() {
  return (
    <div id="top">
      <Header />
      <main>
        {/* Page Header */}
        <section className="bg-primary py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground text-center">Ministries</h1>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-12 bg-background">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              We believe in the equipping of the Saints for the purpose of carrying God's work and edifying the body of
              Christ. Below are the wide ranges of ministries you can get involved in today.
            </p>
            <p className="text-muted-foreground italic leading-relaxed">
              Ephesians 4:11-16:{" "}
              <em>
                And he gave some, apostles; and some, prophets; and some, evangelists; and some, pastors and teachers;
                For the perfecting of the saints, for the work of the ministry, for the edifying of the body of Christ.
              </em>
            </p>
          </div>
        </section>

        {/* Ministry Quick Links */}
        <section className="py-8 bg-muted">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-4">
              {ministries.map((ministry) => (
                <a
                  key={ministry.id}
                  href={`#${ministry.id}`}
                  className="bg-background hover:bg-primary hover:text-primary-foreground px-4 py-2 rounded-full text-sm font-medium transition-colors"
                >
                  {ministry.title}
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Ministry Sections */}
        {ministries.map((ministry, index) => (
          <section
            key={ministry.id}
            id={ministry.id}
            className={`py-16 ${index % 2 === 0 ? "bg-background" : "bg-muted"}`}
          >
            <div className="container mx-auto px-4">
              <div
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:grid-flow-dense" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                  <div className="relative h-64 md:h-80 rounded-lg overflow-hidden">
                    <Image
                      src={ministry.image || "/placeholder.svg"}
                      alt={ministry.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center">
                      <ministry.icon className="h-7 w-7 text-primary-foreground" />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground">{ministry.title}</h2>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{ministry.description}</p>
                </div>
              </div>
            </div>
          </section>
        ))}

        {/* Call to Action */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Get Involved Today</h2>
            <p className="mb-8 opacity-90">
              We'd love to have you join one of our ministries. Contact us to learn more about how you can serve.
            </p>
            <a
              href="/contact"
              className="inline-block bg-background text-foreground px-8 py-3 rounded-full font-semibold hover:bg-secondary hover:text-secondary-foreground transition-colors"
            >
              Contact Us
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
