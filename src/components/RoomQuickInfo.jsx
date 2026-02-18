import { Bath, BedDouble, Mountain, Ruler, Users, Wifi } from "lucide-react";

/* =========================================================
   RoomQuickInfo.jsx
   Room title + 6-item quick-info grid
   Props:
     title     — room name string (required)
     quickInfo — array of 5 strings [guests, bed, size, view, bathroom]
     className — extra wrapper classes (optional)
========================================================= */
export default function RoomQuickInfo({ title, quickInfo = [], className = "" }) {
  const icons = [Users, BedDouble, Ruler, Mountain, Bath, Wifi];
  const defaults = [
    quickInfo[0] || "Sleeps 2 guests",
    quickInfo[1] || "Standard bed",
    quickInfo[2] || "Room size",
    quickInfo[3] || "Mountain view",
    quickInfo[4] || "Private bathroom",
    "Free WiFi",
  ];

  return (
    <section className={`rounded-2xl border border-border/50 bg-white p-6 md:p-8 ${className}`}>
      <h1 className="text-3xl font-bold md:text-4xl text-foreground">{title}</h1>

      <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
        {defaults.map((info, idx) => {
          const Icon = icons[idx];
          return (
            <p key={idx} className="inline-flex items-center text-sm text-muted-foreground">
              <Icon className="mr-2 h-4 w-4 text-accent flex-shrink-0" />
              {info}
            </p>
          );
        })}
      </div>
    </section>
  );
}
