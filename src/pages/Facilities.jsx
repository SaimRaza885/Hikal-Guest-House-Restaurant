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
  Sparkles,
  Star,
  MapPin,
  Users,
  HeartHandshake,
  Mail,
  Phone,
  Facebook,
  Instagram,
  Twitter,
  ChefHat
} from "lucide-react";

import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { Reveal } from "../components/Reveal";
import { useSeo } from "../hooks/useSeo";
import Banner from "../components/Banner";

/* =========================================================
   TRUST DATA
========================================================= */

const trustStats = [
  { icon: Star, value: "9.6", label: "Booking.com Rating" },
  { icon: MapPin, value: "9.5", label: "Location Score" },
  { icon: Users, value: "Global", label: "International Guests" },
  { icon: HeartHandshake, value: "Family", label: "Owned & Hosted" }
];

const ratingPlatforms = [
  {
    name: "Booking.com",
    score: "9.6 / 10",
    label: "Exceptional",
    color: "from-primary to-primary/80"
  },
  {
    name: "Google",
    score: "4.8 / 5",
    label: "Excellent",
    color: "from-accent to-accent/80"
  },
  {
    name: "TripAdvisor",
    score: "4.7 / 5",
    label: "Highly Rated",
    color: "from-secondary to-secondary/80"
  }
];

/* =========================================================
   FACILITY DATA
========================================================= */

const categories = [
  {
    title: "Room & Comfort",
    items: [
      { icon: BedDouble, name: "Premium Comfortable Beds", desc: "Soft bedding designed for deep restful sleep." },
      { icon: Building2, name: "Private Modern Bathrooms", desc: "Clean attached bathrooms with essential amenities." },
      { icon: Wind, name: "Heating & Cooling", desc: "Comfortable temperature in every season." },
      { icon: ConciergeBell, name: "Work Desk", desc: "Ideal for remote work or travel planning." }
    ]
  },
  {
    title: "Dining Experience",
    items: [
      { icon: Utensils, name: "On‑Site Restaurant", desc: "Authentic Hunza and international cuisine." },
      { icon: Coffee, name: "Fresh Breakfast Options", desc: "Continental, halal and Asian selections." },
      { icon: Sparkles, name: "Special Diet Support", desc: "Vegetarian and custom meal preparation." }
    ]
  },
  {
    title: "Nature & Views",
    items: [
      { icon: Mountain, name: "Rakaposhi Mountain Views", desc: "Breathtaking panoramic scenery from rooms." },
      { icon: Trees, name: "Peaceful Garden Areas", desc: "Relax and unwind surrounded by nature." },
      { icon: Flame, name: "Outdoor Fireplace", desc: "Warm evening gathering with mountain air." }
    ]
  },
  {
    title: "Guest Services",
    items: [
      { icon: Wifi, name: "High‑Speed WiFi", desc: "Reliable internet across the property." },
      { icon: Car, name: "Airport Shuttle", desc: "Convenient transport available on request." },
      { icon: Luggage, name: "Secure Luggage Storage", desc: "Safe baggage assistance for travelers." },
      { icon: ConciergeBell, name: "Tour Assistance", desc: "Guidance for exploring Hunza Valley." }
    ]
  },
  {
    title: "Family Friendly",
    items: [
      { icon: Baby, name: "Indoor Play Area", desc: "Safe and fun space for children." },
      { icon: Building2, name: "Family Rooms", desc: "Spacious accommodation for group stays." }
    ]
  },
  {
    title: "Safety & Security",
    items: [
      { icon: ShieldCheck, name: "CCTV Monitoring", desc: "Secure environment across common areas." },
      { icon: Flame, name: "Fire Safety Equipment", desc: "Protection systems installed on each floor." },
      { icon: KeyRound, name: "Controlled Access", desc: "Secure room entry for all guests." }
    ]
  }
];

/* =========================================================
   COMPONENTS
========================================================= */

function FacilityCard({ item }) {
  const Icon = item.icon;
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-border/50 bg-white/80 backdrop-blur p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-br from-primary/5 to-primary/10" />
      <div className="relative">
        <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
          <Icon className="h-5 w-5" />
        </div>
        <h3 className="font-semibold text-lg">{item.name}</h3>
        <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
      </div>
    </div>
  );
}

/* =========================================================
   PAGE
========================================================= */

export default function Facilities() {
  useSeo({
    title: "About & Facilities | Hikal Guest House",
    description: "Discover our story, guest trust ratings, and premium facilities at Hikal Guest House — a peaceful mountain retreat in Hunza Valley."
  });

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* HERO WITH IMAGE + OVERLAY */}
      <Banner
        image="https://images.unsplash.com/photo-1501554728187-ce583db33af7?auto=format&fit=crop&q=80&w=1600"
        title=" Facilities"
        subtitle="Facilities of Hikal Guest House"
        rating={5}
        ratingPlatform="Booking.com"
        ratingText="About & Facilities"
      />


      <div className="container-custom py-20">

        {/* TRUST STATS */}
        <Reveal>
          <section className="mb-20">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {trustStats.map((stat, i) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={i}
                    className="rounded-2xl border bg-white/70 backdrop-blur p-6 text-center shadow-sm hover:shadow-md transition"
                  >
                    <Icon className="mx-auto mb-3 h-8 w-8 text-primary" />
                    <p className="text-2xl font-bold">{stat.value}</p>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </div>
                );
              })}
            </div>
          </section>
        </Reveal>

        {/* WHO WE ARE */}
        <Reveal>
          <section className="bg-white py-20">
            <div className="container-custom grid grid-cols-1 gap-8 lg:grid-cols-2 items-stretch">

              {/* Image */}
              <div className="h-full w-full">
                <img
                  src="https://images.unsplash.com/photo-1607631568010-a87245c0daf8?auto=format&fit=crop&q=80&w=1600"
                  alt="Chef story"
                  loading="lazy"
                  className="h-full w-full rounded-2xl object-cover"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col  rounded-2xl border border-border/50 bg-muted/15 p-8 h-full">
                {/* Who We Are */}
                <h3 className="mt-6 md:text-5xl  text-3xl mb-4 font-semibold text-accent">Who We Are</h3>
                <p className="mt-2 text-muted-foreground leading-relaxed">
                  We are a team of passionate culinary artisans, dedicated to creating unforgettable dining experiences for every guest who walks through our doors. Rooted in both tradition and innovation, our chefs carefully select the freshest local ingredients and blend them with international techniques to craft dishes that are not only flavorful but also visually stunning.
                </p>
                <p className="mt-2 text-muted-foreground leading-relaxed">
                  Every plate tells a story — from the textures and aromas to the intricate presentation — designed to delight the senses and evoke a sense of warmth and hospitality. Beyond the food, we strive to create an atmosphere where guests feel valued, inspired, and truly at home. Our mission is simple yet profound: to transform each meal into a memorable journey, leaving a lasting impression through flavor, creativity, and heartfelt care.
                </p>

                {/* Contact Info */}
                <div className="mt-6 flex flex-col gap-3">
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <Phone className="h-5 w-5 text-accent" /> <span>+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <Mail className="h-5 w-5 text-accent" /> <span>contact@restaurant.com</span>
                  </div>
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <MapPin className="h-5 w-5 text-accent" /> <span>123 Culinary Street, City</span>
                  </div>
              </div>

                {/* Optional social icons */}
                <div className="mt-4 flex gap-4">
                  <a href="#" className="text-accent hover:text-accent/80"><Facebook className="h-5 w-5" /></a>
                  <a href="#" className="text-accent hover:text-accent/80"><Instagram className="h-5 w-5" /></a>
                  <a href="#" className="text-accent hover:text-accent/80"><Twitter className="h-5 w-5" /></a>
                </div>
              </div>
            </div>

          </section>
        </Reveal>


        {/* RATINGS */}
        <Reveal>
          <section className="mb-24">
            <h2 className="text-3xl font-bold text-center mb-10">Guest Ratings</h2>
            <div className="flex flex-wrap justify-center gap-8">
              {ratingPlatforms.map((p, i) => (
                <div
                  key={i}
                  className="w-64 overflow-hidden rounded-2xl border shadow-sm bg-white"
                >
                  <div className={`h-2 bg-gradient-to-r ${p.color}`} />
                  <div className="p-6 text-center">
                    <p className="text-sm text-muted-foreground">{p.name}</p>
                    <p className="text-3xl font-bold mt-1">{p.score}</p>
                    <p className="text-primary font-medium">{p.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </Reveal>

        {/* FACILITIES */}

        <section>
          <h2 className="text-3xl font-bold text-center mb-12">Our Facilities</h2>
          <div className="space-y-16">
            {categories.map((cat, i) => (
              <div key={i}>
                <h3 className="text-2xl font-semibold mb-6">{cat.title}</h3>
                <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                  {cat.items.map((item, idx) => (
                    <FacilityCard key={idx} item={item} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>


        {/* CTA */}
        <Reveal>
          <section className="mt-24 rounded-3xl bg-gradient-to-r from-primary to-primary/80 px-8 py-12 text-center text-white shadow-xl">
            <h3 className="text-3xl font-semibold">Experience Nagar  With Us</h3>
            <p className="mt-3 text-white/85">
              Wake up to mountain views, enjoy peaceful surroundings, and feel genuine hospitality.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <Link
                href="/rooms"
                className="rounded-xl bg-white text-primary px-6 py-3 font-medium hover:bg-white/90 transition"
              >
                Explore Rooms
              </Link>
              <Link
                href="/booking"
                className="rounded-xl border border-white px-6 py-3 font-medium hover:bg-white hover:text-primary transition"
              >
                Book Your Stay
              </Link>
            </div>
          </section>
        </Reveal>
      </div>

      <Footer />
    </div>
  );
}