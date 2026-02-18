import { useState, useMemo } from "react";
import { Link } from "wouter";
import { MessageCircle } from "lucide-react";

/* =========================================================
   BookingSidebar.jsx
   Sticky aside with date picker, guest selector, price calc, CTAs
   Props:
     room           — room object { slug, title, price, capacity }
     maxGuests      — override max guests (falls back to room.capacity)
     whatsappNumber — phone string e.g. "923001234567"
     className      — extra wrapper classes (optional)
========================================================= */
export default function BookingSidebar({
  room,
  maxGuests,
  whatsappNumber = "923001234567",
  className = "",
}) {
  const [checkIn, setCheckIn]   = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests]     = useState("2");

  const nights = useMemo(() => {
    if (!checkIn || !checkOut) return 1;
    const diff = new Date(checkOut) - new Date(checkIn);
    const days = diff / (1000 * 60 * 60 * 24);
    return Number.isFinite(days) && days > 0 ? Math.round(days) : 1;
  }, [checkIn, checkOut]);

  if (!room) return null;

  const totalPrice   = room.price * nights;
  const todayStr     = new Date().toISOString().split("T")[0];
  const effectiveMax = maxGuests || room.capacity || 1;

  const whatsappMsg  = `Hi, I want to book the ${room.title}. Check-in: ${checkIn || "N/A"}, Check-out: ${checkOut || "N/A"}, Nights: ${nights}, Guests: ${guests}. Total (approx): PKR ${totalPrice.toLocaleString()}.`;
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMsg)}`;

  const bookingHref  = `/booking?room=${room.slug}&checkIn=${encodeURIComponent(checkIn)}&checkOut=${encodeURIComponent(checkOut)}&guests=${guests}`;

  return (
    <aside className={`lg:sticky lg:top-28 lg:h-fit ${className}`}>
      <div className="rounded-2xl border border-border/60 bg-white p-6 shadow-sm">

        {/* price */}
        <p className="text-sm text-muted-foreground">Price per night</p>
        <p className="mt-1 text-3xl font-bold text-primary">
          PKR {room.price?.toLocaleString()}
        </p>
        <p className="mt-2 text-xs text-muted-foreground">
          {checkIn && checkOut ? (
            <>
              Approx. stay:{" "}
              <span className="font-semibold text-foreground">{nights}</span>{" "}
              night{nights > 1 ? "s" : ""} —{" "}
              <span className="font-semibold text-primary">
                PKR {totalPrice.toLocaleString()}
              </span>{" "}
              total
            </>
          ) : (
            "Select check-in and check-out dates to see your total."
          )}
        </p>

        {/* date + guest fields */}
        <div className="mt-5 space-y-3">
          <div>
            <label className="mb-1 block text-xs font-medium text-muted-foreground">
              Check-in
            </label>
            <input
              type="date"
              min={todayStr}
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
              className="h-11 w-full rounded-lg border border-border px-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
            />
          </div>
          <div>
            <label className="mb-1 block text-xs font-medium text-muted-foreground">
              Check-out
            </label>
            <input
              type="date"
              min={checkIn || todayStr}
              value={checkOut}
              onChange={(e) => setCheckOut(e.target.value)}
              className="h-11 w-full rounded-lg border border-border px-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
            />
          </div>
          <div>
            <label className="mb-1 block text-xs font-medium text-muted-foreground">
              Guests
            </label>
            <select
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
              className="h-11 w-full rounded-lg border border-border px-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
            >
              {Array.from({ length: effectiveMax }).map((_, idx) => {
                const count = idx + 1;
                return (
                  <option key={count} value={String(count)}>
                    {count} Guest{count > 1 ? "s" : ""}
                  </option>
                );
              })}
            </select>
            <p className="mt-1 text-[11px] text-muted-foreground">
              Max {effectiveMax} guest{effectiveMax > 1 ? "s" : ""} for this room.
            </p>
          </div>
        </div>

        {/* CTAs */}
        <Link
          href={bookingHref}
          className="mt-5 block w-full rounded-xl bg-primary px-4 py-3 text-center font-medium text-white transition-colors hover:bg-primary/90"
        >
          Book Now
        </Link>

        <a
          href={whatsappLink}
          target="_blank"
          rel="noreferrer"
          className="mt-3 inline-flex w-full items-center justify-center rounded-xl bg-green-600 px-4 py-3 text-sm font-medium text-white transition-colors hover:bg-green-700"
        >
          <MessageCircle className="mr-2 h-4 w-4" />
          WhatsApp Booking
        </a>
      </div>
    </aside>
  );
}
