import { useState } from "react";
import { MessageCircle, Facebook, Instagram, X } from "lucide-react";

const links = [
  {
    id: "whatsapp",
    href: "https://wa.me/923001234567",
    icon: MessageCircle,
    label: "WhatsApp",
    color: "bg-green-500 hover:bg-green-600",
  },
  {
    id: "instagram",
    href: "https://instagram.com",
    icon: Instagram,
    label: "Instagram",
    color: "bg-pink-500 hover:bg-pink-600",
  },
  {
    id: "facebook",
    href: "https://facebook.com",
    icon: Facebook,
    label: "Facebook",
    color: "bg-blue-600 hover:bg-blue-700",
  },
];

export function StickySocial() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">

      {/* Social Links */}
      <div className="flex flex-col items-end gap-3">
        {links.map((item, idx) => {
          const Icon = item.icon;

          return (
            <a
              key={item.id}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              aria-label={item.label}
              className={`group relative flex h-12 w-12 items-center justify-center rounded-full text-white shadow-lg transition-all duration-300 ${item.color}`}
              style={{
                opacity: open ? 1 : 0,
                transform: open
                  ? "translateY(0px) scale(1)"
                  : "translateY(20px) scale(0.7)",
                transition:
                  `transform 350ms cubic-bezier(0.34,1.56,0.64,1) ${idx * 80}ms,
                   opacity 300ms ease ${idx * 80}ms`,
                pointerEvents: open ? "auto" : "none",
              }}
            >
              <Icon className="h-5 w-5" />

              {/* Tooltip */}
              <span className="absolute right-14 whitespace-nowrap rounded-lg bg-gray-900 px-3 py-1.5 text-xs text-white opacity-0 group-hover:opacity-100 transition">
                {item.label}
              </span>
            </a>
          );
        })}
      </div>

      {/* Main Button */}
      <button
        onClick={() => setOpen((p) => !p)}
        className="flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-white shadow-xl transition-all duration-300 hover:scale-110"
      >
        <span
          style={{
            transform: open ? "rotate(90deg)" : "rotate(0deg)",
            transition: "transform 0.35s cubic-bezier(0.34,1.56,0.64,1)",
            display: "flex",
          }}
        >
          {open ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
        </span>

        <span className="hidden sm:block text-sm font-medium">
          {open ? "Close" : "Let's Chat"}
        </span>
      </button>

    </div>
  );
}