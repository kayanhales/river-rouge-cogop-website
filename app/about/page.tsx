import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Image from "next/image"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div id="top">
      <Header />
      <main>
        {/* Page Header */}
        <section className="bg-primary py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground text-center">About Us</h1>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                River Rouge COGOP is a multilingual, multicultural church in Metro Detroit, MI under the umbrella of The
                Church of God of Prophecy (COGOP). COGOP is a vibrant, worldwide body of believers, united in worship,
                working hand-in-hand to share God's love and a message of hope to the brokenhearted. The Church of God
                of Prophecy has over one-and-a-half million members, worshiping in over 10,000 churches our missions in
                125 nations of the world. Nearly 90% of our global membership is outside of North America.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
                <Link href="/about#biographies" className="text-primary hover:underline font-semibold">
                  → Pastor's and First Lady's Biography
                </Link>
                <Link href="/about#history" className="text-primary hover:underline font-semibold">
                  → History
                </Link>
                <Link
                  href="https://cogop.org/resources/biblical-principles-beliefs-and-practices/"
                  target="_blank"
                  className="text-primary hover:underline font-semibold"
                >
                  → Biblical Principles, Beliefs and Practices
                </Link>
                <Link
                  href="https://cogop.org/about/doctrine/"
                  target="_blank"
                  className="text-primary hover:underline font-semibold"
                >
                  → Doctrine
                </Link>
                <Link
                  href="https://cogop.org/about/frequently-asked-questions/"
                  target="_blank"
                  className="text-primary hover:underline font-semibold"
                >
                  → Frequently Asked Questions
                </Link>
                <Link href="https://cogop.org" target="_blank" className="text-primary hover:underline font-semibold">
                  → COGOP International
                </Link>
              </div>

              {/* Biographies Section */}
              <section id="biographies" className="py-12 border-t border-border">
                <h2 className="text-3xl font-bold mb-6">
                  Pastor's <span className="text-primary">Biography</span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="relative h-96 w-64 mx-auto mb-6 overflow-hidden rounded-lg">
                    <Image
                      src="/images/pastor-clarke.jpg"
                      alt="Bishop Leonard Clarke"
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <h3 className="text-xl font-bold mb-4">BISHOP LEONARD C. CLARKE (T.T. Cert., Cert. Ed.M, M.Ed., D.P.M., EdS.)</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Bishop Leonard Clarke began his walk with the Lord in 1972 when he became a member of the New Testament Church of God in Jamaica. He served in various capacities, including Sunday School Teacher, Youth Leader, Secretary for various auxiliaries, and member of the Pastor’s Council.

                      He migrated to the United States in 1998, became a member of the Greenfield Church of God of Prophecy, and thereafter, began work on his ministerial credentials; which were obtained in 2004. After four years as lay Minister at Greenfield, he was appointed Pastor of the River Rouge Church of God of Prophecy. In 2010 he received his Bishop’s licensure, and currently serves on the Ministerial Review Board (M.R.B.) in the Great Lakes Region.

                     Clarke is a graduate of Mico Teachers’ Training College (Jamaica), The University of the West Indies (Mona), Ashland Theological Seminary and Wayne State University (Detroit). A retired Math Teacher of forty years, he is married to his wife Deserene for over forty years and has two adult children, Nichole (Duran) and Shane (Kayan), who support him in the Ministry.
                    </p>
                  </div>
                </div>
                <div className="relative h-60 w-70 mx-auto mb-6 overflow-hidden rounded-lg"><Image
                      src="/images/website_pastorclarkepic2.jpg"
                      alt="First Lady Deserene Clarke"
                      fill
                      className="object-cover rounded-lg"
                    /></div>
                <h2 className="text-3xl font-bold mb-6">
                  First Lady's <span className="text-primary">Biography</span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="relative h-96 w-64 mx-auto mb-6 overflow-hidden rounded-lg">
                    <Image
                      src="/images/website_pastorclarkepic3.jpg"
                      alt="First Lady Deserene Clarke"
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <h3 className="text-xl font-bold mb-4">DESERENE E. CLARKE (T.T. Cert., DP.Ed., M.Ed.) </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Deserene “grew up” in the New Testament Church of God, in Jamaica, under the nurturing of a Christian mother who was always guided by the tenets of Proverbs 22:6; in raising her – Train up a child in the way that he should go, and when he is old he will not depart from it. She accepted the Lord as her personal savior at an early age and served the church in various capacities. These include Youth Leader, Sunday School Teacher/Superintendent, Usher, Ladies’ Ministry Director and V.B.S. Coordinator.

                      She is a graduate of Mico Teachers’ Training College (Jamaica), G.C. Foster College of Physical Education (Jamaica), University of the West Indies (Mona, Jamaica) and Wayne State University (Detroit). After teaching both regular and Special Needs students for forty years, she is now retired and enjoying the fruits of her labor. Daughter, Nichole has a Bachelor’s degree in Electrical Engineering and an MBA from Wayne State University. While son Shane, has a Bachelor’s degree in Mechanical Engineering from Wayne State University and an MBA from the University of Michigan. Her hobbies include; listening to gospel music, crocheting and playing scrabble.
                    </p>
                  </div>
                </div>
              </section>

              {/* History Section */}
              <section id="history" className="py-12 border-t border-border">
                <h2 className="text-3xl font-bold mb-6">
                  Our <span className="text-primary">History</span>
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  The Church of God of Prophecy is a vibrant, worldwide body of believers, united in worship, working hand-in-hand to share God’s love and a message of hope to the brokenhearted. The Church of God of Prophecy has over one-and-a-half million members, worshiping in over 10,000 churches our missions in 125 nations of the world. Nearly 90% of our global membership is outside of North America.

                  The Church of God movement began over one hundred years ago in the humble hearts of earnest believers in the rural mountains of Cherokee County, North Carolina. Following a miracle-filled revival that took place in a schoolhouse near Camp Creek in 1886, a small congregation formed a Christian Union to pray and study the scriptures.

                  Soon led by an energetic young pastor from Indiana named A.J. Tomlinson, the group was more formally organized in 1903 into the Church of God and relocated its headquarters to neighboring Cleveland, Tennessee the following year. From Appalachia to the World, the century that followed saw great growth in all the branches of this movement.

                  From the beginning, these spiritual pioneers traced their roots to the New Testament church and considered themselves a continuation of the Spirit-filled Christianity exhibited in the book of Acts. This desired connection with early Christian expression continues today with a mandate that all church decisions be committed to prayer and based on scripture.

                  In contemporary theological terms, the Church of God of Prophecy is a Protestant, Evangelical, Wesleyan holiness, Pentecostal movement that believes in man’s freewill regarding salvation.

                  -Courtesy of Church Of God Of Prophecy Headquarters
                </p>
              </section>

              {/* Beliefs Section */}
              <section id="beliefs" className="py-12 border-t border-border">
                <h2 className="text-3xl font-bold mb-6">
                  What We <span className="text-primary">Believe</span>
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>We believe in:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>The inspired Word of God (Bible)</li>
                    <li>One God eternally existing in three persons: Father, Son, and Holy Spirit</li>
                    <li>The virgin birth and deity of Jesus Christ</li>
                    <li>Salvation through faith in Jesus Christ</li>
                    <li>Water baptism by immersion</li>
                    <li>The baptism of the Holy Spirit</li>
                    <li>Divine healing through faith</li>
                    <li>The second coming of Jesus Christ</li>
                  </ul>
                </div>
              </section>

              {/* FAQ Section */}
              <section id="faq" className="py-12 border-t border-border">
                <h2 className="text-3xl font-bold mb-6">
                  Frequently Asked <span className="text-primary">Questions</span>
                </h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-bold text-lg mb-2">What time are services?</h3>
                    <p className="text-muted-foreground">
                      Sunday School is at 11:00 AM, followed by our Sunday Service at 12:00 PM. Bible Study is held on
                      Wednesdays from 6:00 PM - 8:00 PM.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Where are you located?</h3>
                    <p className="text-muted-foreground">
                      We are located at 41 Orchard Street, River Rouge, MI, 48218.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Can I join online?</h3>
                    <p className="text-muted-foreground">
                      Yes! Join us on Zoom during any of our services. Meeting ID: 296 329 7107 | Password: 563602
                    </p>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
