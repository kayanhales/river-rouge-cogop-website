import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HeroSlider } from "@/components/hero-slider"
import { QuickLinks } from "@/components/quick-links"
import { WhyOurChurch } from "@/components/why-our-church"
import { UpcomingEvents } from "@/components/upcoming-events"
import { SermonsSection } from "@/components/sermons-section"
import { LatestNews } from "@/components/latest-news"
import { OurMinisters } from "@/components/our-ministers"

export default function HomePage() {
  return (
    <div id="top">
      <Header />
      <main>
        <HeroSlider />
        <QuickLinks />
        <WhyOurChurch />
        <UpcomingEvents />
        <SermonsSection />
        <LatestNews />
        <OurMinisters />
      </main>
      <Footer />
    </div>
  )
}
