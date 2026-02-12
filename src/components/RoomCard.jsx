import { Link } from "wouter";
import { Users, Ruler, BedDouble, MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "923001234567";

export function RoomCard({ room }) {
  const imageUrl = room.images?.[0] || "https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&q=80&w=800";
  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Hi, I want to book the ${room.title} at Hikal Guest House.`)}`;

  return (
    <div className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border/50 bg-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
      <div className="relative h-64 overflow-hidden">
        <img src={imageUrl} alt={room.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
        <div className="absolute inset-0 bg-black/20 transition-colors group-hover:bg-black/10" />
        <div className="absolute bottom-4 left-4 rounded-full bg-white/95 px-4 py-1.5 text-sm font-semibold text-primary backdrop-blur-sm">
          PKR {room.price.toLocaleString()} <span className="text-xs font-normal text-muted-foreground">/ night</span>
        </div>
      </div>

      <div className="flex flex-grow flex-col p-6">
        <h3 className="mb-2 text-xl font-bold text-foreground transition-colors group-hover:text-primary">{room.title}</h3>

        <div className="my-4 flex flex-wrap items-center gap-4 border-y border-border py-3 text-sm text-muted-foreground">
          <div className="flex items-center gap-1.5" title="Capacity"><Users className="h-4 w-4 text-accent" /><span>{room.capacity} Guests</span></div>
          {room.size ? <div className="flex items-center gap-1.5" title="Room Size"><Ruler className="h-4 w-4 text-accent" /><span>{room.size}</span></div> : null}
          <div className="flex items-center gap-1.5" title="Bed Type"><BedDouble className="h-4 w-4 text-accent" /><span className="max-w-[100px] truncate">{room.bedType}</span></div>
        </div>

        <p className="mb-6 flex-grow text-sm text-muted-foreground">{room.description}</p>

        <div className="mt-auto grid grid-cols-1 gap-3 sm:grid-cols-2">
          <Link href={`/rooms/${room.slug}`} className="rounded-xl bg-primary px-4 py-3 text-center text-sm font-medium text-white transition-colors hover:bg-primary/90">
            View Details
          </Link>
          <a href={whatsappLink} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-xl border border-primary px-4 py-3 text-center text-sm font-medium text-primary transition-colors hover:bg-primary hover:text-white">
            <MessageCircle className="mr-2 h-4 w-4" /> WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}