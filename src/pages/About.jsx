
import { Reveal }              from "../components/Reveal";
import { useSeo }              from "../hooks/useSeo";
import Banner                  from "../components/Banner";

import TrustStatsGrid          from "../components/TrustStatsGrid";
import WhoWeAreSection         from "../components/WhoWeAreSection";
import RatingPlatformsGrid     from "../components/RatingPlatformsGrid";
import FacilitiesGrid          from "../components/FacilitiesGrid";
import CtaBanner               from "../components/CtaBanner";
import { About_Content, About_Paragraph, About_Social } from "../data/content";


export default function AboutPage() {
  useSeo({
    title: "About & Facilities | Hikal Guest House",
    description:
      "Discover our story, guest trust ratings, and premium facilities at Hikal Guest House — a peaceful mountain retreat in Nagar Valley.",
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
            paragraphs={About_Paragraph}
            contact={About_Content}
            socials={About_Social}
          />
        </Reveal>

       
          <RatingPlatformsGrid />
       

     
          <FacilitiesGrid />
     

      
          <CtaBanner />
       

      </div>

    </div>
  );
}