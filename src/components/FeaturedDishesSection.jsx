import { Reveal } from "./Reveal";
import FeaturedDishCard from "./FeaturedDishCard";

/* =========================================================
   DEFAULT DATA
========================================================= */
const DEFAULT_DISHES = [
  { id: "dish-001", title: "BBQ Grill Platter",           desc: "Juicy mixed grill with house spices and smoky aroma.",       price: "PKR 3,800", badge: "Chef Special",   image: "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?auto=format&fit=crop&q=80&w=1200" },
  { id: "dish-002", title: "Traditional Hunza Breakfast", desc: "Local bread, apricot jam, eggs, tea, and fresh fruit.",       price: "PKR 1,850", badge: "Guest Favorite", image: "https://images.unsplash.com/photo-1533089860892-a9c5f0ad5f45?auto=format&fit=crop&q=80&w=1200" },
  { id: "dish-003", title: "Asian Noodles",               desc: "Wok-tossed noodles with vegetables and aromatic sauces.",    price: "PKR 2,200", badge: "Popular",        image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&q=80&w=1200" },
  { id: "dish-004", title: "Halal Vegetarian Special",    desc: "Seasonal vegetables with herbs and rich flavor profile.",    price: "PKR 2,100", badge: "Healthy",        image: "https://images.unsplash.com/photo-1543339308-43e59d6b73a6?auto=format&fit=crop&q=80&w=1200" },
];

/* =========================================================
   FeaturedDishesSection.jsx
   Horizontal scroll on mobile, 4-col grid on desktop
   Props:
     dishes    — array of dish objects (optional, uses defaults)
     className — extra wrapper classes (optional)
========================================================= */
export default function FeaturedDishesSection({ dishes = DEFAULT_DISHES, className = "" }) {
  return (
    <section className={`py-20 ${className}`}>
      <div className="container-custom">
        {/* header */}
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-3xl font-bold md:text-4xl">Featured Dishes</h2>
          <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Cuisine Highlights
          </span>
        </div>

        {/* cards */}
        <div className="-mx-4 flex gap-4 overflow-x-auto px-4 pb-2 md:mx-0 md:grid md:grid-cols-2 md:overflow-visible md:px-0 lg:grid-cols-4">
          {dishes.map((dish, idx) => (
            <Reveal key={dish.id} delay={80 + idx * 120}>
              <FeaturedDishCard {...dish} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
