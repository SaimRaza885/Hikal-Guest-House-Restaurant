import { Facebook, Instagram, Twitter } from "lucide-react";

 

const DEFAULT_LINKS = [
  { href: "#", icon: Facebook, label: "Facebook"  },
  { href: "#", icon: Instagram,label: "Instagram" },
  { href: "#", icon: Twitter,  label: "Twitter"   },
];

export default function SocialLinks({
  links = DEFAULT_LINKS,
  iconClass = "h-5 w-5",
  className = "",
}) {
  return (
    <div className={`flex gap-4 ${className}`}>
      {links.map(({ href, icon: Icon, label }, i) => (
        <a
          key={i}
          href={href}
          aria-label={label}
          className="text-accent hover:text-accent/70 transition-colors duration-200"
        >
          {Icon && <Icon className={iconClass} />}
        </a>
      ))}
    </div>
  );
}
