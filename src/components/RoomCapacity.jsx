import { BedDouble } from "lucide-react";
import DetailBlock from "./DetailBlock";

/* =========================================================
   RoomCapacity.jsx
   Max guests + bed configuration list
   Props:
     maxGuests — number (required)
     beds      — array of bed type strings (required)
     className — extra wrapper classes (optional)
========================================================= */
export default function RoomCapacity({ maxGuests, beds = [], className = "" }) {
  return (
    <DetailBlock title="Room Capacity & Bed Configuration" className={className}>
      <p className="text-sm text-muted-foreground">
        Max guests:{" "}
        <span className="font-semibold text-foreground">{maxGuests}</span>
      </p>
      <ul className="mt-3 space-y-2">
        {beds.map((bed) => (
          <li key={bed} className="flex items-center text-sm text-muted-foreground">
            <BedDouble className="mr-2 h-4 w-4 text-accent flex-shrink-0" />
            {bed}
          </li>
        ))}
      </ul>
    </DetailBlock>
  );
}
