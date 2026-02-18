import { Mountain, Flower2, Utensils } from "lucide-react";
import { Reveal } from "./Reveal";
import SectionHeader from "./SectionHeader";
import HighlightCard from "./HighlightCard";

/* =========================================================
   DEFAULT DATA
========================================================= */
const DEFAULT_HIGHLIGHTS = [
  {
    id: "high-1",
    icon: Mountain,
    title: "Panoramic Rakaposhi Views",
    text: "Floor-to-ceiling scenery that changes every hour — sunrise gold, midday clarity, and dramatic alpine sunsets.",
  },
  {
    id: "high-2",
    icon: Flower2,
    title: "Private Garden Retreat",
    text: "A peaceful courtyard with blossoms, warm lighting, and quiet corners designed for slow mornings and calm evenings.",
  },
  {
    id: "high-3",
    icon: Utensils,
    title: "Authentic Hunza Dining",
    text: "Fresh local ingredients, traditional flavors, and comforting meals served in an intimate mountain setting.",
  },
];


export default function HighlightsSection({
  highlights = DEFAULT_HIGHLIGHTS,
  className = "",
}) {
  return (
    <section className={`relative py-28 ${className}`}>
      <div className="container-custom">

        <SectionHeader
          eyebrow="The Experience"
          title="Where Nature Meets Comfort"
          subtitle="Designed for travelers who value silence, scenery and meaningful moments."
        />

        <div className="grid gap-10 md:grid-cols-3">
          {highlights.map((item, idx) => (
            <Reveal key={item.id} delay={120 + idx * 120}>
              <HighlightCard icon={item.icon} title={item.title} text={item.text} />
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}
