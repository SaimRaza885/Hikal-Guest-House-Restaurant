import { Users, Heart, Leaf, Mountain } from "lucide-react";
import { Reveal } from "./Reveal";
import ExperienceFeatureCard from "./ExperienceFeatureCard";

/* =========================================================
   DEFAULT DATA
========================================================= */
const DEFAULT_FEATURES = [
  { id: "exp-1", icon: Users,    title: "Family-friendly",        desc: "Comfortable space for families, couples, and groups." },
  { id: "exp-2", icon: Heart,    title: "Traditional & Romantic", desc: "Warm indoor setup and cozy terrace dining."            },
  { id: "exp-3", icon: Leaf,     title: "Special Diets",          desc: "Halal, vegetarian, and dairy-free options available." },
  { id: "exp-4", icon: Mountain, title: "Outdoor Terrace",        desc: "Mountain-facing terrace with fresh valley air."       },
];

/* =========================================================
   RestaurantExperienceSection.jsx
   Two-column: large ambience image left + feature cards right
   Props:
     features  — array of { id, icon, title, desc } (optional)
     image     — ambience image src (optional)
     className — extra wrapper classes (optional)
========================================================= */
export default function RestaurantExperienceSection({
  features = DEFAULT_FEATURES,
  image = "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&q=80&w=1800",
  className = "",
}) {
  return (
    <section className={`bg-white py-20 ${className}`}>
      <div className="container-custom">
        <h2 className="mb-8 text-3xl font-bold md:text-4xl">Restaurant Experience</h2>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* ambience image */}
          <div className="overflow-hidden rounded-2xl bg-muted/20 lg:col-span-2">
            <img
              src={image}
              alt="Restaurant ambience"
              className="w-full object-cover"
              loading="lazy"
            />
          </div>

          {/* feature cards */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-1">
            {features.map((feature, idx) => (
              <Reveal key={feature.id} delay={80 + idx * 120}>
                <ExperienceFeatureCard
                  icon={feature.icon}
                  title={feature.title}
                  desc={feature.desc}
                />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
