import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { Hero } from "../components/Hero";
import { RoomCard } from "../components/RoomCard";
import { StickySocial } from "../components/StickySocial";
import { FaqSection } from "../components/FaqSection";
import { Reveal } from "../components/Reveal";
import { useRooms } from "../hooks/useRooms";
import { useReviews } from "../hooks/useReviews";
import { useSeo } from "../hooks/useSeo";
import { PageLoader } from "../components/PageLoader";
import { Mountain, Flower2, Utensils, Star, Quote } from "lucide-react";
import { Link } from "wouter";

const highlights = [
  {
    id: "high-1",
    icon: Mountain,
    title: "Rakaposhi Views",
    text: "Direct uninterrupted views of the majestic Rakaposhi mountain right from your room's balcony."
  },
  {
    id: "high-2",
    icon: Flower2,
    title: "Cherry Blossom Garden",
    text: "Relax in our private garden surrounded by cherry trees, especially magical during spring season."
  },
  {
    id: "high-3",
    icon: Utensils,
    title: "Exquisite Dining",
    text: "Savor local Hunza cuisine and international dishes prepared by our expert chefs."
  }
];

export default function Home() {
  useSeo({
    title: "Home",
    description: "Stay at Hikal Guest House in Hunza Valley with scenic views, curated rooms, and direct booking options."
  });

  const { data: rooms, isLoading: roomsLoading } = useRooms();
  const { data: reviews, isLoading: reviewsLoading } = useReviews();

  return (
    <div id="home" className="min-h-screen bg-background font-sans">
      <Navigation />
      <Hero />
      <StickySocial />

      <Reveal delay={80}>
        <section className="bg-white py-24">
          <div className="container-custom">
            <div className="grid grid-cols-1 gap-12 text-center md:grid-cols-3">
              {highlights.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <Reveal key={item.id} delay={100 + idx * 120}>
                    <div className="flex flex-col items-center space-y-4 rounded-2xl p-6 transition-colors hover:bg-muted/30">
                      <div className="mb-2 flex h-16 w-16 items-center justify-center rounded-full bg-primary/5 text-primary"><Icon className="h-8 w-8" /></div>
                      <h3 className="text-xl font-bold">{item.title}</h3>
                      <p className="text-sm leading-relaxed text-muted-foreground">{item.text}</p>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal delay={120}>
        <section id="rooms" className="bg-muted/30 py-24">
          <div className="container-custom">
            <div className="mb-16 text-center">
              <span className="text-sm font-semibold uppercase tracking-widest text-accent">Accommodation</span>
              <h2 className="mt-3 mb-6 text-3xl font-bold text-primary md:text-5xl">Luxury Rooms & Suites</h2>
              <p className="mx-auto max-w-2xl text-muted-foreground">Designed for comfort and elegance, blending modern amenities with traditional aesthetics.</p>
            </div>

            {roomsLoading ? <PageLoader label="Loading rooms" /> : (
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                {rooms.slice(0, 3).map((room, idx) => (
                  <Reveal key={room.id} delay={100 + idx * 130}>
                    <RoomCard room={room} />
                  </Reveal>
                ))}
              </div>
            )}

            <div className="mt-12 text-center">
              <Link href="/rooms#rooms" className="rounded-full border border-primary px-10 py-3 text-primary transition-colors hover:bg-primary hover:text-white">View All Rooms</Link>
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal delay={160}>
        <section className="relative py-0">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="relative h-[400px] lg:h-[600px]"><img src="https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?q=80&w=2070&auto=format&fit=crop" alt="Hikal Garden" loading="lazy" className="absolute inset-0 h-full w-full object-cover" /></div>
            <div className="flex flex-col justify-center bg-primary p-12 text-primary-foreground lg:p-24"><span className="mb-4 text-sm font-semibold uppercase tracking-widest text-accent">Our Philosophy</span><h2 className="mb-6 text-3xl font-bold text-white md:text-5xl">Harmony with Nature</h2><p className="mb-8 text-lg leading-relaxed text-primary-foreground/80">At Hikal Guest House, we believe in providing a sanctuary that honors the breathtaking landscape of Hunza. From our eco-friendly practices to our locally sourced cuisine, every detail is curated to connect you with the serene beauty of the valley.</p><Link href="/facilities#facilities" className="self-start rounded-full bg-white px-8 py-3 text-primary transition-colors hover:bg-white/90">Explore Our Facilities</Link></div>
          </div>
        </section>
      </Reveal>

      <Reveal delay={200}>
        <section className="bg-white py-24">
          <div className="container-custom">
            <div className="mb-16 text-center"><h2 className="text-3xl font-bold text-primary md:text-5xl">Guest Experiences</h2></div>

            {reviewsLoading ? <PageLoader label="Loading reviews" /> : (
              <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                {reviews.slice(0, 3).map((review, idx) => (
                  <Reveal key={review.id} delay={100 + idx * 120}>
                    <div className="relative rounded-2xl bg-muted/20 p-8">
                      <Quote className="absolute right-6 top-6 h-12 w-12 text-accent/20" />
                      <div className="mb-4 flex gap-1">{Array.from({ length: review.rating }).map((_, i) => <Star key={`${review.id}-${i}`} className="h-4 w-4 fill-accent text-accent" />)}</div>
                      <p className="mb-6 italic leading-relaxed text-foreground/80">"{review.comment}"</p>
                      <div><h4 className="font-bold">{review.name}</h4><span className="text-xs uppercase tracking-wider text-muted-foreground">{review.location || "Guest"}</span></div>
                    </div>
                  </Reveal>
                ))}
              </div>
            )}
          </div>
        </section>
      </Reveal>

      <Reveal delay={80}>
        <FaqSection />
      </Reveal>

      <Footer />
    </div>
  );
}