import { useState } from "react";
import { MessageCircle, Facebook, Instagram, X } from "lucide-react";

const links = [
  {
    id: "whatsapp",
    href: "https://wa.me/923001234567",
    icon: MessageCircle,
    label: "WhatsApp",
    color: "bg-green-500 hover:bg-green-600"
  },
  {
    id: "instagram",
    href: "https://instagram.com",
    icon: Instagram,
    label: "Instagram",
    color: "bg-pink-500 hover:bg-pink-600"
  },
  {
    id: "facebook",
    href: "https://facebook.com",
    icon: Facebook,
    label: "Facebook",
    color: "bg-blue-600 hover:bg-blue-700"
  }
];

export function StickySocial() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">

      {/* SOCIAL LINKS */}
      {open && (
        <div className="flex flex-col gap-3 animate-in fade-in slide-in-from-bottom-3 duration-300">
          {links.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.id}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                aria-label={item.label}
                className={`flex h-12 w-12 items-center justify-center rounded-full text-white shadow-lg transition-transform hover:scale-110 ${item.color}`}
              >
                <Icon className="h-5 w-5" />
              </a>
            );
          })}
        </div>
      )}

      {/* MAIN CHAT BUTTON */}
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-white shadow-xl transition-all hover:scale-110"
        aria-label="Open chat"
      >
        {open ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
        <span className="text-sm font-medium">Let’s Chat</span>
      </button>
    </div>
  );
}
