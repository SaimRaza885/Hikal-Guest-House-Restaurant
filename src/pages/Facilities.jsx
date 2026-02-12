import { Link } from "wouter";
import {
  Baby,
  BedDouble,
  Car,
  Coffee,
  Flame,
  KeyRound,
  Luggage,
  Mountain,
  ShieldCheck,
  Utensils,
  Wifi,
  Wind,
  Building2,
  Trees,
  ConciergeBell,
  Accessibility,
  Sparkles
} from "lucide-react";
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { Reveal } from "../components/Reveal";
import { useSeo } from "../hooks/useSeo";

const categories = [
  { id: "room-comfort", title: "Room & Comfort", items: [
    { id: "rc-1", icon: BedDouble, name: "Comfortable beds", desc: "Cozy bedding and restful sleep setup." },
    { id: "rc-2", icon: Building2, name: "Private bathrooms", desc: "Clean attached bathrooms in each room." },
    { id: "rc-3", icon: Wind, name: "Heating / fan", desc: "Season-ready temperature comfort." },
    { id: "rc-4", icon: ConciergeBell, name: "Work desk", desc: "Dedicated desk for remote work and planning." },
    { id: "rc-5", icon: BedDouble, name: "Extra long beds", desc: "Spacious bedding for additional comfort." },
  ]},
  { id: "food-dining", title: "Food & Dining", items: [
    { id: "fd-1", icon: Utensils, name: "On-site restaurant", desc: "Local Hunza and international meals." },
    { id: "fd-2", icon: Coffee, name: "Breakfast included", desc: "Continental, halal, and Asian options." },
    { id: "fd-3", icon: ConciergeBell, name: "Room service", desc: "Quick service directly to your room." },
    { id: "fd-4", icon: Sparkles, name: "Special diet options", desc: "Vegetarian and custom meal support." },
  ]},
  { id: "view-outdoors", title: "View & Outdoors", items: [
    { id: "vo-1", icon: Mountain, name: "Mountain view rooms", desc: "Direct Rakaposhi-facing windows." },
    { id: "vo-2", icon: Trees, name: "Garden view rooms", desc: "Peaceful green-side outlook." },
    { id: "vo-3", icon: Building2, name: "Terrace / sun deck", desc: "Open-air sitting with valley views." },
    { id: "vo-4", icon: Flame, name: "Outdoor fireplace", desc: "Warm evening sitting zone." },
    { id: "vo-5", icon: Utensils, name: "Picnic area", desc: "Relaxed outdoor dining and tea space." },
    { id: "vo-6", icon: Flame, name: "BBQ facilities", desc: "Seasonal barbecue setup on request." },
  ]},
  { id: "services-connectivity", title: "Services & Connectivity", items: [
    { id: "sc-1", icon: Wifi, name: "Free WiFi", desc: "Fast and secure internet in rooms and common areas." },
    { id: "sc-2", icon: Car, name: "Airport shuttle", desc: "Available with extra charge." },
    { id: "sc-3", icon: Luggage, name: "Baggage storage", desc: "Secure luggage assistance." },
    { id: "sc-4", icon: ConciergeBell, name: "Tour desk", desc: "Help planning local sightseeing." },
    { id: "sc-5", icon: ShieldCheck, name: "Front desk 24/7", desc: "Always-available guest support." },
  ]},
  { id: "parking-access", title: "Parking & Accessibility", items: [
    { id: "pa-1", icon: Car, name: "Free private parking", desc: "Convenient and secure on-site parking." },
    { id: "pa-2", icon: Car, name: "Valet parking", desc: "Optional valet support on request." },
    { id: "pa-3", icon: Accessibility, name: "Accessible entrances", desc: "Easy-access entry points for guests." },
  ]},
  { id: "family-kids", title: "Family & Kids", items: [
    { id: "fk-1", icon: Baby, name: "Indoor play area", desc: "Safe indoor zone for children." },
    { id: "fk-2", icon: ShieldCheck, name: "Child safety features", desc: "Family-friendly room safety essentials." },
    { id: "fk-3", icon: Building2, name: "Family rooms", desc: "Larger room setups for family stays." },
  ]},
  { id: "safety-security", title: "Safety & Security", items: [
    { id: "ss-1", icon: ShieldCheck, name: "CCTV", desc: "Monitored common and entrance areas." },
    { id: "ss-2", icon: Flame, name: "Fire extinguishers", desc: "Safety equipment on each floor." },
    { id: "ss-3", icon: KeyRound, name: "Key access", desc: "Controlled room and zone access." },
  ]},
];

const favorites = [
  { id: "fav-1", icon: Mountain, title: "Terrace Views", desc: "Most loved spot for sunrise tea and evening mountain skies.", image: "https://images.unsplash.com/photo-1501554728187-ce583db33af7?auto=format&fit=crop&q=80&w=1200" },
  { id: "fav-2", icon: Coffee, title: "Breakfast Experience", desc: "Fresh breakfast with local ingredients and valley-facing seating.", image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&q=80&w=1200" },
  { id: "fav-3", icon: Trees, title: "Garden Relax Zone", desc: "Quiet garden corners for reading, conversation, and calm evenings.", image: "https://images.unsplash.com/photo-1470246973918-29a93221c455?auto=format&fit=crop&q=80&w=1200" }
];

function FacilityCard({ item }) {
  const Icon = item.icon;
  return (
    <article className="rounded-2xl border border-border/50 bg-[#FAF9F6] p-5 shadow-sm transition-all duration-300 hover:scale-[1.03] hover:shadow-lg">
      <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary"><Icon className="h-5 w-5" /></div>
      <h3 className="text-base font-semibold md:text-lg">{item.name}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
    </article>
  );
}

export default function Facilities() {
  useSeo({
    title: "Facilities",
    description: "Hikal Guest House offers comfort, convenience, and stunning natural views for a perfect stay in Hunza Valley."
  });

  return (
    <div id="facilities" className="min-h-screen bg-background">
      <Navigation />

      <Reveal delay={60}>
        <div className="bg-primary px-4 pb-16 pt-32 text-center text-white md:pb-24 md:pt-48">
          <div className="container-custom">
            <h1 className="mb-5 text-4xl font-bold text-white md:text-6xl">Our Facilities</h1>
            <p className="mx-auto max-w-3xl text-lg text-white/80">Hikal Guest House offers comfort, convenience, and stunning natural views for a perfect stay in Hunza Valley.</p>
          </div>
        </div>
      </Reveal>

      <div className="container-custom py-12 md:py-20">
        <Reveal delay={100}>
          <section className="mb-14">
            <h2 className="mb-5 text-2xl font-bold md:text-3xl">Most Loved by Guests</h2>
            <div className="-mx-4 flex gap-4 overflow-x-auto px-4 pb-2 md:mx-0 md:grid md:grid-cols-3 md:overflow-visible md:px-0">
              {favorites.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <Reveal key={item.id} delay={80 + idx * 130}>
                    <article className="min-w-[85%] overflow-hidden rounded-2xl border border-border/50 bg-white shadow-sm md:min-w-0">
                      <img src={item.image} alt={item.title} loading="lazy" className="h-44 w-full object-cover" />
                      <div className="p-5"><div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-accent/15 text-accent"><Icon className="h-5 w-5" /></div><h3 className="text-lg font-semibold">{item.title}</h3><p className="mt-2 text-sm text-muted-foreground">{item.desc}</p></div>
                    </article>
                  </Reveal>
                );
              })}
            </div>
          </section>
        </Reveal>

        <Reveal delay={140}>
          <div className="space-y-10 md:space-y-12">
            {categories.map((category, categoryIdx) => (
              <section key={category.id}>
                <h2 className="mb-5 text-2xl font-bold md:text-3xl">{category.title}</h2>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
                  {category.items.map((item, idx) => (
                    <Reveal key={item.id} delay={80 + categoryIdx * 40 + idx * 110}>
                      <FacilityCard item={item} />
                    </Reveal>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </Reveal>

        <Reveal delay={170}>
          <div className="mt-14 flex flex-col gap-4 sm:flex-row">
            <Link href="/rooms#rooms" className="inline-flex items-center justify-center rounded-xl border border-primary px-6 py-3 font-medium text-primary transition-colors hover:bg-primary hover:text-white">View Rooms</Link>
            <Link href="/booking" className="inline-flex items-center justify-center rounded-xl bg-primary px-6 py-3 font-medium text-white transition-colors hover:bg-primary/90">Book Your Stay</Link>
          </div>
        </Reveal>
      </div>

      <Footer />
    </div>
  );
}