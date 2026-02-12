import { Facebook, Instagram, MessageCircle } from "lucide-react";

const links = [
  { id: "social-whatsapp", href: "https://wa.me/923001234567", icon: MessageCircle, label: "WhatsApp" },
  { id: "social-instagram", href: "https://instagram.com", icon: Instagram, label: "Instagram" },
  { id: "social-facebook", href: "https://facebook.com", icon: Facebook, label: "Facebook" }
];

export function StickySocial() {
  return (
    <div className="fixed bottom-6 right-4 z-40 flex flex-col gap-3 md:bottom-8 md:right-8">
      {links.map((item) => {
        const Icon = item.icon;
        return (
          <a
            key={item.id}
            href={item.href}
            target="_blank"
            rel="noreferrer"
            aria-label={item.label}
            className="group flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white shadow-lg shadow-primary/25 transition-all hover:-translate-y-1 hover:bg-accent"
          >
            <Icon className="h-5 w-5 transition-transform group-hover:scale-110" />
          </a>
        );
      })}
    </div>
  );
}