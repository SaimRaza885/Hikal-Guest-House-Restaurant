import {
  Baby, BedDouble, Car, Coffee, Flame, KeyRound,
  Luggage, Mountain, ShieldCheck, Utensils, Wifi,
  Wind, Building2, Trees, ConciergeBell, Sparkles,
} from "lucide-react";
import FacilityCategorySection from "./FacilityCategorySection";
import { DEFAULT_CATEGORIES } from "../data/content";
 


export default function FacilitiesGrid({
  categories = DEFAULT_CATEGORIES,
  title = "Our Facilities",
  className = "",
}) {
  return (
    <section className={`w-full ${className}`} id="facilities">
      {title && (
        <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
          {title}
        </h2>
      )}

      <div className="space-y-16">
        {categories.map((cat, i) => (
          <FacilityCategorySection key={i} title={cat.title} items={cat.items} />
        ))}
      </div>
    </section>
  );
}
