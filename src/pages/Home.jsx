
import { Hero }             from "../components/Hero";
import { FaqSection }       from "../components/FaqSection";
import { TrustBanner }      from "../components/TrustBanner";
import { Location }         from "../components/Location";
import { useSeo }           from "../hooks/useSeo";
import { useRooms }         from "../hooks/useRooms";
import { useReviews }       from "../hooks/useReviews";

import RoomsSection         from "../components/RoomsSection";
import HighlightsSection    from "../components/HighlightsSection";
import PhilosophySection    from "../components/PhilosophySection";
import ReviewsSection       from "../components/ReviewsSection";

/* =========================================================
   HomePage.jsx
   Full home page — assembles all sections
========================================================= */
export default function HomePage() {
  useSeo({
    title: "Hikal Guest House | Luxury Stay in Hunza Valley",
    description:
      "Experience mountain luxury, warm hospitality, and breathtaking Rakaposhi views at Hikal Guest House.",
  });

  const { data: rooms,   isLoading: roomsLoading   } = useRooms();
  const { data: reviews, isLoading: reviewsLoading } = useReviews();

  return (
    <div className="min-h-screen bg-background font-sans">
      

      {/* HERO */}
      <Hero />

      {/* ROOMS */}
      <RoomsSection rooms={rooms} isLoading={roomsLoading} />

      {/* EXPERIENCE HIGHLIGHTS */}
      <HighlightsSection />

      {/* TRUST */}
      <TrustBanner />

      {/* PHILOSOPHY */}
      <PhilosophySection />

      {/* REVIEWS */}
      <ReviewsSection reviews={reviews} isLoading={reviewsLoading} />

      {/* FAQ */}
      <FaqSection />

      {/* LOCATION */}
      <Location />
 
    </div>
  );
}