import { Mail, MapPin, Phone } from "lucide-react";
import ContactInfoItem from "./ContactInfoItem";

/* =========================================================
   DEFAULT CONTACT DATA
========================================================= */
const DEFAULT_ITEMS = [
  {
    id: "address",
    icon: MapPin,
    title: "Address",
    lines: ["Rakaposhi View Point, Jaffarabad,", "Nagar Valley, Pakistan"],
  },
  {
    id: "phone",
    icon: Phone,
    title: "Phone",
    lines: ["+92 300 123 4567", "Mon - Sun, 24 Hours"],
  },
  {
    id: "email",
    icon: Mail,
    title: "Email",
    lines: ["reservations@hikal.com", "info@hikal.com"],
  },
];

/* =========================================================
   ContactInfoPanel.jsx
   Left column: intro text + contact info items
   Props:
     heading   — section heading (optional)
     body      — intro paragraph (optional)
     items     — array of { id, icon, title, lines } (optional)
     className — extra wrapper classes (optional)
========================================================= */
export default function ContactInfoPanel({
  heading = "Get in Touch",
  body = "Whether you have a question about room availability, need help planning your trip to Nagar Valley, or want to provide feedback, our team is ready to answer all your questions.",
  items = DEFAULT_ITEMS,
  className = "",
}) {
  return (
    <div className={`space-y-12 ${className}`}>
      {/* intro */}
      <div>
        <h2 className="mb-6 text-2xl font-bold text-foreground">{heading}</h2>
        <p className="leading-relaxed text-muted-foreground">{body}</p>
      </div>

      {/* contact items */}
      <div className="space-y-6">
        {items.map((item) => (
          <ContactInfoItem
            key={item.id}
            icon={item.icon}
            title={item.title}
            lines={item.lines}
          />
        ))}
      </div>
    </div>
  );
}
