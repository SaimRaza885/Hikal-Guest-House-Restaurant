import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { Hero } from "../components/Hero";
import { RoomCard } from "../components/RoomCard";
import { SkeletonRoomCard } from "../components/SkeletonRoomCard";
import { StickySocial } from "../components/StickySocial";
import { FaqSection } from "../components/FaqSection";
import { Reveal } from "../components/Reveal";
import { useRooms } from "../hooks/useRooms";
import { useReviews } from "../hooks/useReviews";
import { useSeo } from "../hooks/useSeo";
import { PageLoader } from "../components/PageLoader";
import { Mountain, Flower2, Utensils, Star, Quote, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { TrustBanner } from "../components/TrustBanner";

const highlights = [
  {
    id: "high-1",
    icon: Mountain,
    title: "Panoramic Rakaposhi Views",
    text: "Floor-to-ceiling scenery that changes every hour — sunrise gold, midday clarity, and dramatic alpine sunsets."
  },
  {
    id: "high-2",
    icon: Flower2,
    title: "Private Garden Retreat",
    text: "A peaceful courtyard with blossoms, warm lighting, and quiet corners designed for slow mornings and calm evenings."
  },
  {
    id: "high-3",
    icon: Utensils,
    title: "Authentic Hunza Dining",
    text: "Fresh local ingredients, traditional flavors, and comforting meals served in an intimate mountain setting."
  }
];

export default function Home() {
  useSeo({
    title: "Hikal Guest House | Luxury Stay in Hunza Valley",
    description: "Experience mountain luxury, warm hospitality, and breathtaking Rakaposhi views at Hikal Guest House."
  });

  const { data: rooms, isLoading: roomsLoading } = useRooms();
  const { data: reviews, isLoading: reviewsLoading } = useReviews();

  return (
    <div className="min-h-screen bg-background font-sans">
      <Navigation />
      <Hero />
    
        <StickySocial />
    


      {/* ROOMS */}
      <section className="bg-muted/20 py-28" id="rooms">
        <div className="container-custom">
          <div className="mb-16 text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.35em] text-accent">Rooms & Suites</span>
            <h2 className="mt-4 text-4xl font-bold md:text-5xl">Stay With a View</h2>
            <p className="mx-auto mt-5 max-w-2xl text-muted-foreground">
              Every room is designed to frame the mountains and deliver restful comfort.
            </p>
          </div>

          {roomsLoading ? (
            <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
              {Array.from({ length: 3 }).map((_, i) => (
                <SkeletonRoomCard key={i} />
              ))}
            </div>
          ) : (
            <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
              {rooms.slice(0, 3).map((room, idx) => (
                <Reveal key={room.id} delay={120 + idx * 120}>
                  <RoomCard room={room} />
                </Reveal>
              ))}
            </div>
          )}

          <div className="mt-14 text-center">
            <Link
              href="/rooms#rooms"
              className="font-ui inline-flex items-center gap-2 rounded-full border-2 border-primary tetx brightness-95 px-10 py-4 text-primary shadow-lg transition hover:scale-105 "
            >
              View All Rooms
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* EXPERIENCE HIGHLIGHTS */}
      <section className="relative py-28">
        <div className="container-custom">
          <div className="mb-16 text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.35em] text-accent">
              The Experience
            </span>
            <h2 className="mt-4 text-4xl font-bold md:text-5xl">
              Where Nature Meets Comfort
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-muted-foreground">
              Designed for travelers who value silence, scenery and meaningful moments.
            </p>
          </div>

          <div className="grid gap-10 md:grid-cols-3">
            {highlights.map((item, idx) => {
              const Icon = item.icon;
              return (
                <Reveal key={item.id} delay={120 + idx * 120}>
                  <div className="group relative overflow-hidden rounded-3xl border border-border/60 bg-white p-8 shadow-lg transition hover:-translate-y-1 hover:shadow-2xl">
                    <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary transition group-hover:bg-primary group-hover:text-white">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="mb-3 text-xl font-semibold">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.text}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>





      {/* TRUST SECTION */}
      <TrustBanner />

      {/* PHILOSOPHY SPLIT SECTION */}
      <section className="py-28">
        <div className="container-custom grid items-center gap-14 lg:grid-cols-2">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.35em] text-accent">
              Our Philosophy
            </span>
            <h2 className="mt-4 text-4xl font-bold leading-tight md:text-5xl">
              Designed Around the Landscape
            </h2>
            <p className="mt-6 text-muted-foreground">
              We believe the true luxury of Hunza is its silence, scale and natural beauty.
              Our spaces are intentionally minimal so the mountains remain the main attraction.
            </p>
            <p className="mt-4 text-muted-foreground">
              Local materials, warm hospitality and thoughtful details create a stay that feels calm, authentic and deeply personal.
            </p>

            <Link
              href="/facilities#facilities"
              className="font-ui mt-8 inline-block rounded-full border border-primary px-8 py-3 font-medium text-primary transition hover:bg-primary hover:text-white"
            >
              Explore Facilities
            </Link>
          </div>

          <div className="relative h-[420px] overflow-hidden rounded-3xl">
            <img
              src="https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?q=80&w=2070&auto=format&fit=crop"
              alt="Garden courtyard"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="bg-white py-28">
        <div className="container-custom">
          <div className="mb-16 text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.35em] text-accent">Guest Reviews</span>
            <h2 className="mt-4 text-4xl font-bold md:text-5xl">Loved by Travelers</h2>
          </div>

          {reviewsLoading ? (
            <PageLoader label="Loading reviews" />
          ) : (
            <div className="grid gap-10 md:grid-cols-3">
              {reviews.slice(0, 3).map((review, idx) => (
                <Reveal key={review.id} delay={120 + idx * 120}>
                  <div className="rounded-3xl border border-border p-8 shadow-lg">
                    <Quote className="mb-5 h-8 w-8 text-primary/20" />

                    <div className="mb-3 flex gap-1">
                      {Array.from({ length: review.rating }).map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                      ))}
                    </div>

                    <p className="mb-6 text-sm text-muted-foreground">“{review.comment}”</p>

                    <div className="font-semibold">{review.name}</div>
                    <div className="text-xs uppercase tracking-widest text-muted-foreground">
                      {review.location || "Guest"}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* FINAL CTA
      <section className="bg-primary py-24 text-center text-white">
        <div className="container-custom">
          <h2 className="text-4xl font-bold md:text-5xl">Plan Your Hunza Escape</h2>
          <p className="mx-auto mt-4 max-w-2xl text-white/80">
            Book directly for the best experience, personalized service and fastest confirmation.
          </p>

          <Link
            href="/booking"
            className="mt-8 inline-block rounded-full bg-white px-12 py-4 font-semibold text-primary shadow-xl transition hover:scale-105"
          >
            Book Your Stay
          </Link>
        </div>
      </section> */}

      <FaqSection />
      <Footer />
    </div>
  );
}