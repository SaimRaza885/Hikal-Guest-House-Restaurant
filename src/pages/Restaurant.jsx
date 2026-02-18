
import { Reveal }                   from "../components/Reveal";
import { useSeo }                   from "../hooks/useSeo";
import Banner                       from "../components/Banner";

import ReserveTableFAB              from "../components/ReserveTableFAB";
import FeaturedDishesSection        from "../components/FeaturedDishesSection";
import RestaurantExperienceSection  from "../components/RestaurantExperienceSection";
import MenuGrid                     from "../components/MenuGrid";
import ChefStorySection             from "../components/ChefStorySection";
import ReservationSection           from "../components/ReservationSection";
import RestaurantReviewsSection     from "../components/RestaurantReviewsSection";

const WHATSAPP_NUMBER = "923001234567";

/* =========================================================
   RestaurantPage.jsx
   Full restaurant page — assembles all sections
========================================================= */
export default function RestaurantPage() {
  useSeo({
    title: "Restaurant",
    description:
      "Family-friendly dining with Chinese, Indian, Japanese, Korean, Middle Eastern, and Asian cuisines at Hikal Guest House.",
  });

  return (
    <div id="restaurant" className="min-h-screen bg-background">
    
    

      {/* HERO */}
      <Banner
        image="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=870&auto=format&fit=crop"
        title="Restaurant"
        subtitle="Authentic flavors and warm hospitality in a serene setting."
        rating={5}
        ratingPlatform="Booking.com"
        ratingText="Rated Exceptional"
      />

      {/* FLOATING ACTION BUTTON */}
      <ReserveTableFAB />

      {/* FEATURED DISHES */}
      <Reveal delay={100}>
        <FeaturedDishesSection />
      </Reveal>

      {/* EXPERIENCE */}
      <Reveal delay={130}>
        <RestaurantExperienceSection />
      </Reveal>

      {/* MENU */}
      <Reveal delay={160}>
        <MenuGrid />
      </Reveal>

      {/* CHEF STORY */}
      <Reveal delay={190}>
        <ChefStorySection />
      </Reveal>

      {/* RESERVATION */}
      <ReservationSection whatsappNumber={WHATSAPP_NUMBER} />

      {/* REVIEWS */}
      <Reveal delay={250}>
        <RestaurantReviewsSection />
      </Reveal>

    </div>
  );
}