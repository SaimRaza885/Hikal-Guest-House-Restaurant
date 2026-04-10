import { Check } from "lucide-react";
import DetailBlock from "./DetailBlock";

/* =========================================================
   RoomAmenities.jsx
   Grid of amenity groups with checklist items
   Props:
     amenities — object { GroupName: [string, ...] } (required)
     className — extra wrapper classes (optional)
========================================================= */
export default function RoomAmenities({ amenities = {}, className = "" }) {
  return (
    <DetailBlock title="Room Amenities" className={className}>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {Object.entries(amenities).map(([group, items]) => (
          <div key={group} className="rounded-xl border border-border/60 bg-muted/20 p-4">
            <h3 className="text-lg font-semibold text-foreground">{group}</h3>
            <ul className="mt-3 space-y-2">
              {items.map((item) => (
                <li
                  key={`${group}-${item}`}
                  className="flex items-start text-sm text-muted-foreground"
                >
                  <Check className="mr-2 mt-0.5 h-4 w-4 text-accent flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </DetailBlock>
  );
}
