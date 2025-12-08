import Link from "next/link"
import { Play } from "lucide-react"
import { Button } from "@/components/ui/button"

export function SermonsSection() {
  return (
    <section className="py-16 bg-muted">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Finish Well 2020</h2>
        <p className="text-muted-foreground mb-8">Sermons from Pastor Clarke on our theme for 2020</p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-8">
          <Link
            href="https://www.facebook.com/pg/RiverRougeCOGOP/videos/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary hover:bg-primary/90 text-primary-foreground p-6 rounded-full transition-transform hover:scale-110"
          >
            <Play className="h-8 w-8" />
          </Link>
          <Link
            href="https://www.facebook.com/pg/RiverRougeCOGOP/videos/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary hover:bg-primary/90 text-primary-foreground p-6 rounded-full transition-transform hover:scale-110"
          >
            <Play className="h-8 w-8" />
          </Link>
        </div>

        <Button
          asChild
          variant="outline"
          className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
        >
          <Link href="https://www.facebook.com/pg/RiverRougeCOGOP/videos/" target="_blank" rel="noopener noreferrer">
            VIEW ALL SERMONS
          </Link>
        </Button>
      </div>
    </section>
  )
}
