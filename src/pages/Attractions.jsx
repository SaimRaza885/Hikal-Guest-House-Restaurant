import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { MapPin } from "lucide-react";
import { attractions } from "../data/attractions";
import { useSeo } from "../hooks/useSeo";

export default function Attractions() {
  useSeo({
    title: "Attractions",
    description: "Explore nearby destinations around Hikal Guest House including Rakaposhi viewpoints, forts, and lakes."
  });

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="bg-primary px-4 pb-16 pt-32 text-center text-white md:pb-24 md:pt-48">
        <div className="container-custom">
          <h1 className="mb-6 text-4xl font-bold text-white md:text-6xl">Nearby Attractions</h1>
          <p className="mx-auto max-w-2xl text-lg text-white/80">Hikal Guest House serves as the perfect base camp to explore the wonders of Hunza and Nagar valleys.</p>
        </div>
      </div>

      <div className="container-custom py-24">
        <div className="space-y-24">
          {attractions.map((place, idx) => (
            <div key={place.id} className={`flex flex-col items-center gap-12 ${idx % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"}`}>
              <div className="w-full flex-1">
                <div className="relative aspect-video overflow-hidden rounded-2xl shadow-xl"><img src={place.image} alt={place.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 hover:scale-105" /></div>
              </div>
              <div className="flex-1 space-y-6">
                <div className="flex items-center gap-2 text-sm font-medium uppercase tracking-wider text-accent"><MapPin className="h-4 w-4" /><span>Explore</span></div>
                <h2 className="text-3xl font-bold text-primary md:text-4xl">{place.title}</h2>
                <p className="text-lg leading-relaxed text-muted-foreground">{place.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}