import { Clock3 } from "lucide-react";
import DetailBlock from "./DetailBlock";

/* =========================================================
   RoomRules.jsx
   List of room rules/conditions
   Props:
     rules     — array of rule strings (required)
     className — extra wrapper classes (optional)
========================================================= */
export default function RoomRules({ rules = [], className = "" }) {
  return (
    <DetailBlock title="Room Rules / Conditions" className={className}>
      <ul className="space-y-2">
        {rules.map((rule) => (
          <li key={rule} className="flex items-start text-sm text-muted-foreground">
            <Clock3 className="mr-2 mt-0.5 h-4 w-4 text-accent flex-shrink-0" />
            {rule}
          </li>
        ))}
      </ul>
    </DetailBlock>
  );
}
