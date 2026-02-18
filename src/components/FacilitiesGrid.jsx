import {
  Baby, BedDouble, Car, Coffee, Flame, KeyRound,
  Luggage, Mountain, ShieldCheck, Utensils, Wifi,
  Wind, Building2, Trees, ConciergeBell, Sparkles,
} from "lucide-react";
import FacilityCategorySection from "./FacilityCategorySection";

/* =========================================================
   DEFAULT CATEGORIES DATA
========================================================= */
const DEFAULT_CATEGORIES = [
  {
    title: "Room & Comfort",
    items: [
      { icon: BedDouble,     name: "Premium Comfortable Beds",   desc: "Soft bedding designed for deep restful sleep."       },
      { icon: Building2,     name: "Private Modern Bathrooms",   desc: "Clean attached bathrooms with essential amenities."  },
      { icon: Wind,          name: "Heating & Cooling",          desc: "Comfortable temperature in every season."            },
      { icon: ConciergeBell, name: "Work Desk",                  desc: "Ideal for remote work or travel planning."          },
    ],
  },
  {
    title: "Dining Experience",
    items: [
      { icon: Utensils, name: "On-Site Restaurant",     desc: "Authentic Hunza and international cuisine."       },
      { icon: Coffee,   name: "Fresh Breakfast Options", desc: "Continental, halal and Asian selections."         },
      { icon: Sparkles, name: "Special Diet Support",   desc: "Vegetarian and custom meal preparation."          },
    ],
  },
  {
    title: "Nature & Views",
    items: [
      { icon: Mountain, name: "Rakaposhi Mountain Views", desc: "Breathtaking panoramic scenery from rooms."        },
      { icon: Trees,    name: "Peaceful Garden Areas",    desc: "Relax and unwind surrounded by nature."            },
      { icon: Flame,    name: "Outdoor Fireplace",        desc: "Warm evening gathering with mountain air."         },
    ],
  },
  {
    title: "Guest Services",
    items: [
      { icon: Wifi,          name: "High-Speed WiFi",         desc: "Reliable internet across the property."             },
      { icon: Car,           name: "Airport Shuttle",         desc: "Convenient transport available on request."         },
      { icon: Luggage,       name: "Secure Luggage Storage",  desc: "Safe baggage assistance for travelers."             },
      { icon: ConciergeBell, name: "Tour Assistance",         desc: "Guidance for exploring Hunza Valley."              },
    ],
  },
  {
    title: "Family Friendly",
    items: [
      { icon: Baby,     name: "Indoor Play Area", desc: "Safe and fun space for children."              },
      { icon: Building2,name: "Family Rooms",     desc: "Spacious accommodation for group stays."       },
    ],
  },
  {
    title: "Safety & Security",
    items: [
      { icon: ShieldCheck, name: "CCTV Monitoring",       desc: "Secure environment across common areas."         },
      { icon: Flame,       name: "Fire Safety Equipment", desc: "Protection systems installed on each floor."     },
      { icon: KeyRound,    name: "Controlled Access",     desc: "Secure room entry for all guests."               },
    ],
  },
];


export default function FacilitiesGrid({
  categories = DEFAULT_CATEGORIES,
  title = "Our Facilities",
  className = "",
}) {
  return (
    <section className={`w-full ${className}`}>
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
