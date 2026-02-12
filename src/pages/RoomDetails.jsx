import { useMemo, useState } from "react";
import { Link } from "wouter";
import {
  ArrowLeft,
  Bath,
  BedDouble,
  Check,
  Clock3,
  Expand,
  MessageCircle,
  Mountain,
  Ruler,
  ShieldCheck,
  Star,
  Users,
  Wifi,
  X
} from "lucide-react";
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { useRoom, useRooms } from "../hooks/useRooms";
import { useSeo } from "../hooks/useSeo";
import { PageLoader } from "../components/PageLoader";

const WHATSAPP_NUMBER = "923001234567";

const ROOM_DETAILS = {
  "deluxe-valley-view": {
    gallery: [
      { id: "img-1", category: "Bedroom", src: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&q=80&w=1800" },
      { id: "img-2", category: "Bathroom", src: "https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&q=80&w=1800" },
      { id: "img-3", category: "View", src: "https://images.unsplash.com/photo-1501554728187-ce583db33af7?auto=format&fit=crop&q=80&w=1800" },
      { id: "img-4", category: "Seating Area", src: "https://images.unsplash.com/photo-1616594039964-3d7fd0f6d84f?auto=format&fit=crop&q=80&w=1800" },
      { id: "img-5", category: "Balcony", src: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&q=80&w=1800" }
    ],
    quick: ["Sleeps 2-3 guests", "1 Queen Bed + Futon", "Mountain view", "Private bathroom", "Free WiFi"],
    description:
      "A spacious and peaceful room with breathtaking Rakaposhi mountain views, designed for couples and mindful travelers who want comfort, warmth, and calm valley mornings.",
    amenities: {
      Comfort: ["Extra long beds", "Heating / fan", "Seating area", "Work desk"],
      Bathroom: ["Private bathroom", "Free toiletries", "Towels", "Shower / bathtub", "Slippers"],
      Views: ["Mountain view", "Garden view"],
      Services: ["Room service", "Wake up service", "Free WiFi"]
    },
    capacity: { maxGuests: 3, beds: ["1 Queen bed", "1 Futon"] },
    included: [
      { id: "inc-1", text: "Breakfast available", extra: false },
      { id: "inc-2", text: "Free parking", extra: false },
      { id: "inc-3", text: "Free WiFi", extra: false },
      { id: "inc-4", text: "Airport shuttle", extra: true }
    ],
    rules: [
      "Check-in: From 12:00 PM",
      "Check-out: Until 11:00 AM",
      "Non-smoking room",
      "Pets allowed on request",
      "Extra bed available on request"
    ],
    reviews: [
      { id: "rv-1", name: "Hassan", rating: 5, comment: "Very comfortable bed and amazing mountain view." },
      { id: "rv-2", name: "Areeba", rating: 5, comment: "Quiet room, clean bathroom, and fast service." },
      { id: "rv-3", name: "Bilal", rating: 4, comment: "Excellent balcony and peaceful nights." }
    ],
    location: [
      "Direct view of Rakaposhi",
      "Quiet garden-side wing",
      "Close to breakfast terrace and lounge"
    ],
    faq: [
      { id: "fq-1", q: "Does this room have a balcony?", a: "Yes, this room has a private balcony with partial mountain-facing seating." },
      { id: "fq-2", q: "Can an extra bed be added?", a: "Yes, an extra bed/futon can be arranged based on availability." },
      { id: "fq-3", q: "Is breakfast included?", a: "Breakfast is available and included in most standard bookings." }
    ]
  }
};

function DetailBlock({ title, children }) {
  return (
    <section className="rounded-2xl border border-border/50 bg-white p-6 md:p-8">
      <h2 className="text-2xl font-bold md:text-3xl">{title}</h2>
      <div className="mt-5">{children}</div>
    </section>
  );
}

export default function RoomDetails({ params }) {
  const slug = params?.slug || "";
  const { data: room, isLoading } = useRoom(slug);
  const { data: allRooms, isLoading: roomsLoading } = useRooms();
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [fullscreenOpen, setFullscreenOpen] = useState(false);
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState("2");

  const nights = useMemo(() => {
    if (!checkIn || !checkOut) return 1;
    const inDate = new Date(checkIn);
    const outDate = new Date(checkOut);
    const diffMs = outDate.getTime() - inDate.getTime();
    const diffDays = diffMs / (1000 * 60 * 60 * 24);
    if (!Number.isFinite(diffDays) || diffDays <= 0) return 1;
    return Math.round(diffDays);
  }, [checkIn, checkOut]);

  const roomMeta = ROOM_DETAILS[slug];

  const gallery = useMemo(() => {
    if (roomMeta?.gallery?.length) return roomMeta.gallery;
    return (room?.images || []).map((src, idx) => ({
      id: `${room?.id || "room"}-img-${idx + 1}`,
      src,
      category: idx === 0 ? "Bedroom" : idx === 1 ? "View" : "Seating Area"
    }));
  }, [room, roomMeta]);

  const activeImage = gallery[activeImageIndex] || null;

  const similarRooms = useMemo(() => {
    if (!allRooms?.length || !room?.id) return [];
    return allRooms.filter((item) => item.id !== room.id).slice(0, 3);
  }, [allRooms, room]);

  useSeo({
    title: room ? room.title : "Room Details",
    description: room ? room.description : "Explore room details and booking options at Hikal Guest House."
  });

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="container-custom pt-36">
          <PageLoader label="Loading room details" />
        </div>
      </div>
    );
  }

  if (!room) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="container-custom pt-36 pb-20 text-center">
          <h1 className="text-3xl font-bold">Room not found</h1>
          <p className="mt-3 text-muted-foreground">This room does not exist or may have been removed.</p>
          <Link href="/rooms" className="mt-6 inline-flex items-center rounded-xl bg-primary px-5 py-3 text-white">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Rooms
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const totalPrice = room.price * nights;

  const todayStr = new Date().toISOString().split("T")[0];
  const minCheckIn = todayStr;
  const minCheckOut = checkIn || todayStr;

  const whatsappMessage = `Hi, I want to book the ${room.title}. Check-in: ${checkIn || "N/A"}, Check-out: ${checkOut || "N/A"}, Nights: ${nights}, Guests: ${guests}. Total (approx): PKR ${totalPrice.toLocaleString()}.`;
  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappMessage)}`;

  const quickInfo = roomMeta?.quick || [
    `Sleeps up to ${room.capacity} guests`,
    room.bedType,
    room.size,
    "Private bathroom",
    "Free WiFi"
  ];

  const description = roomMeta?.description || room.description;
  const amenities = roomMeta?.amenities || {
    Comfort: room.features?.slice(0, 3) || [],
    Bathroom: ["Private bathroom", "Towels", "Shower"],
    Views: ["Mountain view"],
    Services: ["Room service", "Free WiFi"]
  };

  const capacity = roomMeta?.capacity || { maxGuests: room.capacity, beds: [room.bedType] };
  const included = roomMeta?.included || [
    { id: "inc-a", text: "Breakfast available", extra: false },
    { id: "inc-b", text: "Free parking", extra: false },
    { id: "inc-c", text: "Free WiFi", extra: false }
  ];

  const rules = roomMeta?.rules || [
    "Check-in: From 12:00 PM",
    "Check-out: Until 11:00 AM",
    "Non-smoking room"
  ];

  const reviews = roomMeta?.reviews || [];
  const location = roomMeta?.location || ["Quiet room zone", "Close to terrace"];
  const faq = roomMeta?.faq || [];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="container-custom pt-32 pb-12 md:pt-36">
        <Link href="/rooms" className="mb-6 inline-flex items-center text-sm font-medium text-primary hover:text-accent">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to all rooms
        </Link>

        <div className="space-y-8">
          <section className="rounded-2xl border border-border/50 bg-white p-4 md:p-6">
            <div className="relative overflow-hidden rounded-xl">
              {activeImage ? (
                <img src={activeImage.src} alt={`${room.title} - ${activeImage.category}`} className="h-[320px] w-full object-cover md:h-[520px]" />
              ) : null}
              <button
                type="button"
                onClick={() => setFullscreenOpen(true)}
                className="absolute right-3 top-3 inline-flex items-center rounded-full bg-black/60 px-3 py-1.5 text-xs text-white backdrop-blur-sm transition-colors hover:bg-black/80"
              >
                <Expand className="mr-1.5 h-3.5 w-3.5" /> Fullscreen
              </button>
            </div>

            <div className="mt-4 flex gap-3 overflow-x-auto pb-2">
              {gallery.map((img, idx) => (
                <button
                  key={img.id}
                  type="button"
                  onClick={() => setActiveImageIndex(idx)}
                  className={`min-w-[130px] overflow-hidden rounded-lg border ${idx === activeImageIndex ? "border-primary" : "border-border"}`}
                >
                  <img src={img.src} alt={img.category} className="h-20 w-full object-cover" loading="lazy" />
                  <span className="block px-2 py-1 text-left text-xs text-muted-foreground">{img.category}</span>
                </button>
              ))}
            </div>
          </section>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div className="space-y-8 lg:col-span-2">
              <section className="rounded-2xl border border-border/50 bg-white p-6 md:p-8">
                <h1 className="text-3xl font-bold md:text-4xl">{room.title}</h1>
                <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
                  <p className="inline-flex items-center text-sm"><Users className="mr-2 h-4 w-4 text-accent" /> {quickInfo[0]}</p>
                  <p className="inline-flex items-center text-sm"><BedDouble className="mr-2 h-4 w-4 text-accent" /> {quickInfo[1]}</p>
                  <p className="inline-flex items-center text-sm"><Ruler className="mr-2 h-4 w-4 text-accent" /> {quickInfo[2] || room.size}</p>
                  <p className="inline-flex items-center text-sm"><Mountain className="mr-2 h-4 w-4 text-accent" /> {quickInfo[3] || "Mountain view"}</p>
                  <p className="inline-flex items-center text-sm"><Bath className="mr-2 h-4 w-4 text-accent" /> {quickInfo[4] || "Private bathroom"}</p>
                  <p className="inline-flex items-center text-sm"><Wifi className="mr-2 h-4 w-4 text-accent" /> Free WiFi</p>
                </div>
              </section>

              <DetailBlock title="Room Description">
                <p className="leading-relaxed text-muted-foreground">{description}</p>
              </DetailBlock>

              <DetailBlock title="Room Amenities">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  {Object.entries(amenities).map(([group, items]) => (
                    <div key={group} className="rounded-xl border border-border/60 bg-muted/20 p-4">
                      <h3 className="text-lg font-semibold">{group}</h3>
                      <ul className="mt-3 space-y-2">
                        {items.map((item) => (
                          <li key={`${group}-${item}`} className="flex items-start text-sm text-muted-foreground">
                            <Check className="mr-2 mt-0.5 h-4 w-4 text-accent" /> {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </DetailBlock>

              <DetailBlock title="Room Capacity & Bed Configuration">
                <p className="text-sm text-muted-foreground">Max guests: <span className="font-semibold text-foreground">{capacity.maxGuests}</span></p>
                <ul className="mt-3 space-y-2">
                  {capacity.beds.map((bed) => (
                    <li key={bed} className="flex items-center text-sm text-muted-foreground">
                      <BedDouble className="mr-2 h-4 w-4 text-accent" /> {bed}
                    </li>
                  ))}
                </ul>
              </DetailBlock>

              <DetailBlock title="Included / Optional Services">
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {included.map((item) => (
                    <div key={item.id} className="rounded-lg border border-border/60 bg-muted/10 px-4 py-3 text-sm">
                      <span className="font-medium text-foreground">{item.text}</span>
                      <span className="ml-2 text-xs text-muted-foreground">{item.extra ? "(extra charge)" : "(included)"}</span>
                    </div>
                  ))}
                </div>
              </DetailBlock>

              <DetailBlock title="Room Rules / Conditions">
                <ul className="space-y-2">
                  {rules.map((rule) => (
                    <li key={rule} className="flex items-start text-sm text-muted-foreground">
                      <Clock3 className="mr-2 mt-0.5 h-4 w-4 text-accent" /> {rule}
                    </li>
                  ))}
                </ul>
              </DetailBlock>

              <DetailBlock title="Guest Reviews for This Room">
                {reviews.length ? (
                  <div className="space-y-4">
                    {reviews.map((review) => (
                      <div key={review.id} className="rounded-xl border border-border/60 bg-muted/10 p-4">
                        <div className="mb-2 flex items-center justify-between">
                          <p className="font-semibold">{review.name}</p>
                          <div className="flex">
                            {Array.from({ length: review.rating }).map((_, i) => (
                              <Star key={`${review.id}-${i}`} className="h-4 w-4 fill-accent text-accent" />
                            ))}
                          </div>
                        </div>
                        <p className="text-sm text-muted-foreground">{review.comment}</p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-sm text-muted-foreground">No reviews yet for this room.</p>
                )}
              </DetailBlock>

              <DetailBlock title="Location Advantage">
                <ul className="space-y-2">
                  {location.map((item) => (
                    <li key={item} className="flex items-start text-sm text-muted-foreground">
                      <ShieldCheck className="mr-2 mt-0.5 h-4 w-4 text-accent" /> {item}
                    </li>
                  ))}
                </ul>
              </DetailBlock>

              <DetailBlock title="Similar Rooms Suggestion">
                {roomsLoading ? (
                  <PageLoader label="Loading similar rooms" />
                ) : (
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                    {similarRooms.map((item) => (
                      <Link key={item.id} href={`/rooms/${item.slug}`} className="rounded-xl border border-border/60 bg-muted/10 p-4 transition-colors hover:bg-muted/20">
                        <img src={item.images?.[0]} alt={item.title} loading="lazy" className="h-28 w-full rounded-lg object-cover" />
                        <p className="mt-3 text-sm font-semibold line-clamp-2">{item.title}</p>
                        <p className="text-xs text-muted-foreground">PKR {item.price.toLocaleString()} / night</p>
                      </Link>
                    ))}
                  </div>
                )}
              </DetailBlock>

              {faq.length ? (
                <DetailBlock title="Room Specific FAQ">
                  <div className="space-y-3">
                    {faq.map((item) => (
                      <div key={item.id} className="rounded-lg border border-border/60 bg-muted/10 p-4">
                        <h4 className="font-semibold">{item.q}</h4>
                        <p className="mt-1 text-sm text-muted-foreground">{item.a}</p>
                      </div>
                    ))}
                  </div>
                </DetailBlock>
              ) : null}
            </div>

            <aside className="lg:sticky lg:top-28 lg:h-fit">
              <div className="rounded-2xl border border-border/60 bg-white p-6 shadow-sm">
                <p className="text-sm text-muted-foreground">Price per night</p>
                <p className="mt-1 text-3xl font-bold text-primary">PKR {room.price.toLocaleString()}</p>
                <p className="mt-2 text-xs text-muted-foreground">
                  {checkIn && checkOut ? (
                    <>
                      Approx. stay: <span className="font-semibold text-foreground">{nights}</span> night{nights > 1 ? "s" : ""} —{" "}
                      <span className="font-semibold text-primary">PKR {totalPrice.toLocaleString()}</span> total
                    </>
                  ) : (
                    "Select check-in and check-out dates to see your total."
                  )}
                </p>

                <div className="mt-5 space-y-3">
                  <div>
                    <label className="mb-1 block text-xs font-medium text-muted-foreground">Check-in</label>
                    <input
                      type="date"
                      min={minCheckIn}
                      value={checkIn}
                      onChange={(e) => setCheckIn(e.target.value)}
                      className="h-11 w-full rounded-lg border border-border px-3 text-sm"
                    />
                  </div>
                  <div>
                    <label className="mb-1 block text-xs font-medium text-muted-foreground">Check-out</label>
                    <input
                      type="date"
                      min={minCheckOut}
                      value={checkOut}
                      onChange={(e) => setCheckOut(e.target.value)}
                      className="h-11 w-full rounded-lg border border-border px-3 text-sm"
                    />
                  </div>
                  <div>
                    <label className="mb-1 block text-xs font-medium text-muted-foreground">Guests</label>
                    <select
                      value={guests}
                      onChange={(e) => setGuests(e.target.value)}
                      className="h-11 w-full rounded-lg border border-border px-3 text-sm"
                    >
                      {Array.from({ length: capacity.maxGuests || room.capacity || 1 }).map((_, idx) => {
                        const count = idx + 1;
                        return (
                          <option key={count} value={String(count)}>
                            {count} Guest{count > 1 ? "s" : ""}
                          </option>
                        );
                      })}
                    </select>
                    <p className="mt-1 text-[11px] text-muted-foreground">
                      Max {capacity.maxGuests || room.capacity} guest{(capacity.maxGuests || room.capacity) > 1 ? "s" : ""} for this room.
                    </p>
                  </div>
                </div>

                <Link
                  href={`/booking?room=${room.slug}&checkIn=${encodeURIComponent(checkIn)}&checkOut=${encodeURIComponent(checkOut)}&guests=${guests}`}
                  className="mt-5 block w-full rounded-xl bg-primary px-4 py-3 text-center font-medium text-white transition-colors hover:bg-primary/90"
                >
                  Book Now
                </Link>

                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3 inline-flex w-full items-center justify-center rounded-xl border border-accent px-4 py-3 text-sm font-medium text-accent transition-colors hover:bg-accent hover:text-accent-foreground"
                >
                  <MessageCircle className="mr-2 h-4 w-4" /> WhatsApp Booking
                </a>
              </div>
            </aside>
          </div>
        </div>
      </div>

      {fullscreenOpen && activeImage ? (
        <div className="fixed inset-0 z-[90] flex items-center justify-center bg-black/90 p-4">
          <button
            type="button"
            onClick={() => setFullscreenOpen(false)}
            className="absolute right-4 top-4 rounded-full bg-white/20 p-2 text-white"
          >
            <X className="h-5 w-5" />
          </button>
          <img src={activeImage.src} alt={activeImage.category} className="max-h-[90vh] max-w-[95vw] rounded-xl object-contain" />
        </div>
      ) : null}

      <Footer />
    </div>
  );
}