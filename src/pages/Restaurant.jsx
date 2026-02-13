import { useState } from "react";
import {
  ChefHat,
  Heart,
  Leaf,
  MessageCircle,
  Mountain,
  Sparkles,
  Star,
  Sun,
  Users
} from "lucide-react";
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { Reveal } from "../components/Reveal";
import { useSeo } from "../hooks/useSeo";
import { useToast } from "../hooks/useToast.jsx";
import Banner from "../components/Banner.jsx";

const WHATSAPP_NUMBER = "923001234567";

const featuredDishes = [
  { id: "dish-001", title: "BBQ Grill Platter", desc: "Juicy mixed grill with house spices and smoky aroma.", price: "PKR 3,800", badge: "Chef Special", image: "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?auto=format&fit=crop&q=80&w=1200" },
  { id: "dish-002", title: "Traditional Hunza Breakfast", desc: "Local bread, apricot jam, eggs, tea, and fresh fruit.", price: "PKR 1,850", badge: "Guest Favorite", image: "https://images.unsplash.com/photo-1533089860892-a9c5f0ad5f45?auto=format&fit=crop&q=80&w=1200" },
  { id: "dish-003", title: "Asian Noodles", desc: "Wok-tossed noodles with vegetables and aromatic sauces.", price: "PKR 2,200", badge: "Popular", image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&q=80&w=1200" },
  { id: "dish-004", title: "Halal Vegetarian Special", desc: "Seasonal vegetables with herbs and rich flavor profile.", price: "PKR 2,100", badge: "Healthy", image: "https://images.unsplash.com/photo-1543339308-43e59d6b73a6?auto=format&fit=crop&q=80&w=1200" }
];

const experienceFeatures = [
  { id: "exp-1", icon: Users, title: "Family-friendly", desc: "Comfortable space for families, couples, and groups." },
  { id: "exp-2", icon: Heart, title: "Traditional & Romantic", desc: "Warm indoor setup and cozy terrace dining." },
  { id: "exp-3", icon: Leaf, title: "Special Diets", desc: "Halal, vegetarian, and dairy-free options available." },
  { id: "exp-4", icon: Mountain, title: "Outdoor Terrace", desc: "Mountain-facing terrace with fresh valley air." }
];

const menuSections = [
  {
    id: "menu-breakfast", title: "Breakfast", items: [
      { id: "b-1", name: "Hunza Morning Plate", desc: "Fiti bread, apricot preserve, eggs, tea.", price: "PKR 1,650", image: "https://images.unsplash.com/photo-1495214783159-3503fd1b572d?auto=format&fit=crop&q=80&w=900" },
      { id: "b-2", name: "Continental Set", desc: "Toast, croissant, butter, seasonal fruits.", price: "PKR 1,450", image: "https://images.unsplash.com/photo-1484723091739-30a097e8f929?auto=format&fit=crop&q=80&w=900" }
    ]
  },
  {
    id: "menu-lunch", title: "Lunch", items: [
      { id: "l-1", name: "Signature Chicken Karahi", desc: "Slow-cooked tomato masala and fresh coriander.", price: "PKR 2,950", image: "https://images.unsplash.com/photo-1604909052743-94e838986d24?auto=format&fit=crop&q=80&w=900" },
      { id: "l-2", name: "Korean Beef Bowl", desc: "Grilled beef, rice, sesame, and house glaze.", price: "PKR 3,150", image: "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&q=80&w=900" }
    ]
  },
  {
    id: "menu-dinner", title: "Dinner", items: [
      { id: "d-1", name: "Middle Eastern Mix Grill", desc: "Kebabs, saffron rice, grilled vegetables.", price: "PKR 4,250", image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=900" },
      { id: "d-2", name: "Japanese Teriyaki Plate", desc: "Glazed protein, vegetables, and jasmine rice.", price: "PKR 3,450", image: "https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56?auto=format&fit=crop&q=80&w=900" }
    ]
  },
  {
    id: "menu-drinks", title: "Drinks", items: [
      { id: "dr-1", name: "Apricot Cooler", desc: "Refreshing local apricot blend with mint.", price: "PKR 650", image: "https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&q=80&w=900" },
      { id: "dr-2", name: "Karak Chai & Desserts", desc: "Classic chai with chef dessert selection.", price: "PKR 990", image: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&q=80&w=900" }
    ]
  }
];

const restaurantReviews = [
  { id: "rest-review-1", name: "Sana A.", rating: 5, comment: "The terrace breakfast and mountain view ", image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=800" },
  { id: "rest-review-2", name: "Hamza K.", rating: 5, comment: "Excellent BBQ platter and very warm service.", image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=80&w=800" },
  { id: "rest-review-3", name: "Mariam R.", rating: 4, comment: "Loved the vegetarian options and cozy ambience.", image: "https://images.unsplash.com/photo-1559329007-40df8a9345d8?auto=format&fit=crop&q=80&w=800" }
];

export default function Restaurant() {
  useSeo({
    title: "Restaurant",
    description: "Family-friendly dining with Chinese, Indian, Japanese, Korean, Middle Eastern, and Asian cuisines at Hikal Guest House."
  });

  const { toast } = useToast();
  const [reservation, setReservation] = useState({ name: "", dateTime: "", guests: "2", request: "" });

  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Hi, I want to reserve a table at Hikal Restaurant. Name: ${reservation.name || "N/A"}, Date/Time: ${reservation.dateTime || "N/A"}, Guests: ${reservation.guests}, Request: ${reservation.request || "N/A"}`)}`;

  function handleReserve(event) {
    event.preventDefault();
    toast({ title: "Reservation Request Sent", description: "Your table reservation request has been noted. Our team will confirm shortly." });
    setReservation({ name: "", dateTime: "", guests: "2", request: "" });
  }

  return (
    <div id="restaurant" className="min-h-screen bg-background">
      <Navigation />

      <Banner
        image="https://images.unsplash.com/photo-1501554728187-ce583db33af7?auto=format&fit=crop&q=80&w=1600"
        title="Restaurant"
        subtitle="A peaceful family‑run retreat at Rakaposhi View Point offering breathtaking views, authentic Hunza warmth, and unforgettable stays."
        rating={5}
        ratingPlatform="Booking.com"
        ratingText="Rated Exceptional"
      />



      <a href="#reserve-table" className="font-ui fixed bottom-5 right-4 z-40 inline-flex items-center rounded-full bg-accent px-4 py-2 text-xs font-semibold uppercase tracking-wide text-white shadow-lg shadow-accent/35 md:bottom-8 md:right-8">Reserve Table</a>

      <Reveal delay={100}>
        <section className="py-20">
          <div className="container-custom">
            <div className="mb-8 flex items-center justify-between"><h2 className="text-3xl font-bold md:text-4xl">Featured Dishes</h2><span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Cuisine Highlights</span></div>
            <div className="-mx-4 flex gap-4 overflow-x-auto px-4 pb-2 md:mx-0 md:grid md:grid-cols-2 md:overflow-visible md:px-0 lg:grid-cols-4">
              {featuredDishes.map((dish, idx) => (
                <Reveal key={dish.id} delay={80 + idx * 120}>
                  <article className="group min-w-[82%] md:w-auto w-[300px] overflow-hidden rounded-2xl border border-border/50 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl md:min-w-0">
                    <div className="relative"><img src={dish.image} alt={dish.title} loading="lazy" className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-105" /><span className="absolute left-3 top-3 rounded-full bg-primary/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-white">{dish.badge}</span></div>
                    <div className="p-4"><h3 className="text-lg font-semibold">{dish.title}</h3><p className="mt-1 text-sm text-muted-foreground">{dish.desc}</p><p className="mt-3 text-sm font-semibold text-accent">{dish.price}</p></div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal delay={130}>
        <section className="bg-white py-20">
          <div className="container-custom">
            <h2 className="mb-8 text-3xl font-bold md:text-4xl">Restaurant Experience</h2>
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
              <div className="overflow-hidden rounded-2xl  bg-muted/20 lg:col-span-2"><img src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&q=80&w=1800" alt="Restaurant ambience" className=" w-full object-cover" loading="lazy" /></div>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-1">{experienceFeatures.map((feature, idx) => { const Icon = feature.icon; return <Reveal key={feature.id} delay={80 + idx * 120}><article className="rounded-xl border border-border/50 bg-[#FAF9F6] p-4 shadow-sm"><div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary"><Icon className="h-5 w-5" /></div><h3 className="text-base font-semibold">{feature.title}</h3><p className="mt-1 text-sm text-muted-foreground">{feature.desc}</p></article></Reveal>; })}</div>
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal delay={160}>
        <section className="py-20">
          <div className="container-custom">
            <div className="mb-8 flex items-center justify-between"><h2 className="text-3xl font-bold md:text-4xl">Menu</h2>
            {/* <button className="font-ui rounded-xl border border-primary px-4 py-2 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-white" type="button">View Full Menu</button> */}
            </div>
            <div className="space-y-12">
              {menuSections.map((section, sectionIdx) => (
                <div key={section.id}>
                  <h3 className="mb-4 text-2xl font-bold">{section.title}</h3>
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    {section.items.map((item, idx) => (
                      <Reveal key={item.id} delay={80 + sectionIdx * 40 + idx * 120}>
                        <article className="flex gap-4 rounded-2xl border border-border/50 bg-white p-4 shadow-sm transition-all duration-300 hover:shadow-md"><img src={item.image} alt={item.name} loading="lazy" className="h-24 w-24 rounded-lg object-cover" /><div className="flex-1"><h4 className="font-semibold">{item.name}</h4><p className="mt-1 text-sm text-muted-foreground">{item.desc}</p><p className="mt-2 text-sm font-semibold text-accent">{item.price}</p></div></article>
                      </Reveal>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal delay={190}>
        <section className="bg-white py-20">
          <div className="container-custom grid grid-cols-1 gap-8 lg:grid-cols-2">
            <img src="https://images.unsplash.com/photo-1607631568010-a87245c0daf8?auto=format&fit=crop&q=80&w=1600" alt="Chef story" loading="lazy" className="h-[360px] w-full rounded-2xl object-cover" />
            <div className="flex flex-col justify-center rounded-2xl border border-border/50 bg-muted/15 p-8"><span className="mb-3 inline-flex w-fit items-center rounded-full bg-accent/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-accent"><ChefHat className="mr-2 h-4 w-4" /> Our Story</span><h2 className="text-3xl font-bold md:text-4xl">Crafted by Passionate Chefs</h2><p className="mt-4 leading-relaxed text-muted-foreground">Our chefs bring authentic regional flavors and a warm family touch to every meal, balancing local ingredients with international technique for a premium but welcoming dining experience.</p></div>
          </div>
        </section>
      </Reveal>

      <Reveal delay={220}>
        <section id="reserve-table" className="py-20">
          <div className="container-custom grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div className="rounded-2xl border border-border/50 bg-primary p-8 text-primary-foreground lg:col-span-1"><h2 className="text-3xl font-bold text-white">Table Reservation</h2><p className="mt-3 text-sm leading-relaxed text-primary-foreground/90">Reserve in advance for terrace seating and peak dinner hours.</p><p className="mt-6 text-xs uppercase tracking-[0.2em] text-accent">Quick options</p><a href={whatsappLink} target="_blank" rel="noreferrer" className="font-ui mt-3 inline-flex items-center rounded-xl bg-accent px-4 py-2.5 text-sm font-semibold text-accent-foreground transition-colors hover:bg-accent/90"><MessageCircle className="mr-2 h-4 w-4" /> WhatsApp Booking</a></div>
            <form onSubmit={handleReserve} className="rounded-2xl border border-border/50 bg-white p-8 shadow-sm lg:col-span-2">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div><label className="mb-2 block text-sm font-medium">Name</label><input required value={reservation.name} onChange={(e) => setReservation((prev) => ({ ...prev, name: e.target.value }))} className="h-12 w-full rounded-xl border border-border px-3" placeholder="Your name" /></div>
                <div><label className="mb-2 block text-sm font-medium">Date & Time</label><input required type="datetime-local" value={reservation.dateTime} onChange={(e) => setReservation((prev) => ({ ...prev, dateTime: e.target.value }))} className="h-12 w-full rounded-xl border border-border px-3" /></div>
              </div>
              <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
                <div><label className="mb-2 block text-sm font-medium">Guests</label><select value={reservation.guests} onChange={(e) => setReservation((prev) => ({ ...prev, guests: e.target.value }))} className="h-12 w-full rounded-xl border border-border px-3">{[1, 2, 3, 4, 5, 6, 8, 10].map((count) => <option key={count} value={String(count)}>{count} Guest{count > 1 ? "s" : ""}</option>)}</select></div>
                <div><label className="mb-2 block text-sm font-medium">Special Request</label><input value={reservation.request} onChange={(e) => setReservation((prev) => ({ ...prev, request: e.target.value }))} className="h-12 w-full rounded-xl border border-border px-3" placeholder="Window seat, birthday setup..." /></div>
              </div>
              <button type="submit" className="font-ui mt-6 inline-flex items-center rounded-xl bg-accent px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-accent/90">Reserve Now</button>
            </form>
          </div>
        </section>
      </Reveal>

      <Reveal delay={250}>
        <section className="bg-white py-20">
          <div className="container-custom">
            <h2 className="mb-8 text-3xl font-bold md:text-4xl">Restaurant Reviews</h2>
            <div className="-mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-2 md:mx-0 md:grid md:grid-cols-3 md:overflow-visible md:px-0">
              {restaurantReviews.map((review, idx) => (
                <Reveal key={review.id} delay={80 + idx * 120}>
                  <article className=" md:min-w-[82%] sm:w-auto w-[250px] snap-center overflow-hidden rounded-2xl border border-border/50 bg-white shadow-sm md:min-w-0"><img src={review.image} alt={review.name} loading="lazy" className="h-40 w-full object-cover" /><div className="p-4"><div className="mb-2 flex items-center justify-between"><p className="font-semibold">{review.name}</p><div className="flex">{Array.from({ length: review.rating }).map((_, i) => <Star key={`${review.id}-${i}`} className="h-4 w-4 fill-accent text-accent" />)}</div></div><p className="text-sm text-muted-foreground">{review.comment}</p></div></article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      <Footer />
    </div>
  );
}