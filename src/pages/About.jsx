
import { Reveal }              from "../components/Reveal";
import { useSeo }              from "../hooks/useSeo";
import Banner                  from "../components/Banner";

import TrustStatsGrid          from "../components/TrustStatsGrid";
import WhoWeAreSection         from "../components/WhoWeAreSection";
import RatingPlatformsGrid     from "../components/RatingPlatformsGrid";
import FacilitiesGrid          from "../components/FacilitiesGrid";
import CtaBanner               from "../components/CtaBanner";

import { Facebook, Instagram, Twitter } from "lucide-react";

/* =========================================================
   Social links passed into WhoWeAreSection
========================================================= */
const SOCIALS = [
  { href: "#", icon: Facebook,  label: "Facebook"  },
  { href: "#", icon: Instagram, label: "Instagram" },
  { href: "#", icon: Twitter,   label: "Twitter"   },
];

const CONTACT = {
  phone:   "+1 (555) 123-4567",
  email:   "contact@restaurant.com",
  address: "123 Culinary Street, City",
};

const WHO_PARAGRAPHS = [
  "We are a team of passionate culinary artisans, dedicated to creating unforgettable dining experiences for every guest who walks through our doors. Rooted in both tradition and innovation, our chefs carefully select the freshest local ingredients and blend them with international techniques to craft dishes that are not only flavorful but also visually stunning.",
  "Every plate tells a story — from the textures and aromas to the intricate presentation — designed to delight the senses and evoke a sense of warmth and hospitality. Our mission is simple yet profound: to transform each meal into a memorable journey, leaving a lasting impression through flavor, creativity, and heartfelt care.",
];

/* =========================================================
   PAGE
========================================================= */
export default function AboutPage() {
  useSeo({
    title: "About & Facilities | Hikal Guest House",
    description:
      "Discover our story, guest trust ratings, and premium facilities at Hikal Guest House — a peaceful mountain retreat in Hunza Valley.",
  });

  return (
    <div className="min-h-screen bg-background">
     

      {/* HERO BANNER */}
      <Banner
        image="https://plus.unsplash.com/premium_photo-1677529498680-fdb9d5ee762a?q=80&w=870&auto=format&fit=crop"
        title="About us"
        subtitle="About Hikal Guest House"
        rating={5}
        ratingPlatform="Booking.com"
        ratingText="About & Facilities"
      />

      <div className="container-custom py-20 space-y-24">
 
        <Reveal>
          <TrustStatsGrid />
        </Reveal>
 
        <Reveal>
          <WhoWeAreSection
            paragraphs={WHO_PARAGRAPHS}
            contact={CONTACT}
            socials={SOCIALS}
          />
        </Reveal>

       
          <RatingPlatformsGrid />
       

     
          <FacilitiesGrid />
     

      
          <CtaBanner />
       

      </div>

    </div>
  );
}