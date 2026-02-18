import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactInfoList({
  phone,
  email,
  address,
  iconClass = "h-5 w-5 text-accent",
  className = "",
}) {
  const items = [
    { icon: Phone,  value: phone   },
    { icon: Mail,   value: email   },
    { icon: MapPin, value: address },
  ].filter((item) => Boolean(item.value));

  if (items.length === 0) return null;

  return (
    <div className={`flex flex-col gap-3 ${className}`}>
      {items.map(({ icon: Icon, value }, i) => (
        <div key={i} className="flex items-center gap-3 text-muted-foreground">
          <Icon className={iconClass} />
          <span>{value}</span>
        </div>
      ))}
    </div>
  );
}
