import { ShieldCheck } from "lucide-react";
import DetailBlock from "./DetailBlock";

/* =========================================================
   RoomLocation.jsx
   List of location advantage bullet points
   Props:
     location  — array of location strings (required)
     className — extra wrapper classes (optional)
========================================================= */
export default function RoomLocation({ location = [], className = "" }) {
  return (
    <DetailBlock title="Location Advantage" className={className}>
      <ul className="space-y-2">
        {location.map((item) => (
          <li key={item} className="flex items-start text-sm text-muted-foreground">
            <ShieldCheck className="mr-2 mt-0.5 h-4 w-4 text-accent flex-shrink-0" />
            {item}
          </li>
        ))}
      </ul>
    </DetailBlock>
  );
}
