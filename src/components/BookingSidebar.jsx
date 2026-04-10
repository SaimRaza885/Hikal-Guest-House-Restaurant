import { useState, useMemo } from "react";
import { Link } from "wouter";
import { MessageCircle } from "lucide-react";

export default function BookingSidebar({
  room,
  maxGuests,
  whatsappNumber = "923001234567",
  className = "",
}) {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState("2");

  const nights = useMemo(() => {
    if (!checkIn || !checkOut) return 1;
    const diff = new Date(checkOut) - new Date(checkIn);
    const days = diff / (1000 * 60 * 60 * 24);
    return Number.isFinite(days) && days > 0 ? Math.round(days) : 1;
  }, [checkIn, checkOut]);

  if (!room) return null;

  /* ===============================
     DISCOUNT LOGIC
  =============================== */

  const hasDiscount =
    typeof room.originalPrice === "number" &&
    room.originalPrice > room.price;

  const discountPercentage = hasDiscount
    ? Math.round(
        ((room.originalPrice - room.price) / room.originalPrice) * 100
      )
    : 0;

  const savedPerNight = hasDiscount
    ? room.originalPrice - room.price
    : 0;

  const totalPrice = room.price * nights;

  const originalTotal = hasDiscount
    ? room.originalPrice * nights
    : totalPrice;

  const totalSaved = hasDiscount
    ? savedPerNight * nights
    : 0;

  const todayStr = new Date().toISOString().split("T")[0];
  const effectiveMax = maxGuests || room.capacity || 1;

  const whatsappMsg = `Hi, I want to book the ${room.title}. Check-in: ${
    checkIn || "N/A"
  }, Check-out: ${
    checkOut || "N/A"
  }, Nights: ${nights}, Guests: ${guests}. Total: PKR ${totalPrice.toLocaleString()}.`;

  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    whatsappMsg
  )}`;

  const bookingHref = `/booking?room=${room.slug}&checkIn=${encodeURIComponent(
    checkIn
  )}&checkOut=${encodeURIComponent(checkOut)}&guests=${guests}`;

  return (
    <aside className={`lg:sticky lg:top-28 lg:h-fit ${className}`}>
      <div className="rounded-2xl border border-border/60 bg-white p-6 shadow-sm space-y-6">

        {/* ===============================
            AMAZON STYLE DISCOUNT BAR
        =============================== */}
        {hasDiscount && (
          <div className="rounded-lg bg-red-600 px-4 py-3 text-white">
            <div className="flex justify-between items-center">
              <span className="text-lg font-bold">
                {discountPercentage}% OFF
              </span>
              <span className="text-sm font-extrabold">
                Special Offer    
              </span>
            </div>
          </div>
        )}

        {/* ===============================
            PRICE PER NIGHT
        =============================== */}
        <div className="space-y-1">
          <p className="text-sm text-muted-foreground">
            Price per night
          </p>

          {hasDiscount && (
            <p className="text-sm text-muted-foreground line-through">
              PKR {room.originalPrice.toLocaleString()}
            </p>
          )}

          <p className="text-3xl font-bold text-primary">
            PKR {room.price.toLocaleString()}
          </p>
        </div>

        {/* ===============================
            DATE & GUEST INPUTS
        =============================== */}
        <div className="space-y-4 border-t border-b border-border py-5">
          <div>
            <label className="block text-xs font-medium text-muted-foreground mb-1">
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
            <label className="block text-xs font-medium text-muted-foreground mb-1">
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
            <label className="block text-xs font-medium text-muted-foreground mb-1">
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
            <p className="mt-1 text-xs text-muted-foreground">
              Maximum {effectiveMax} guest{effectiveMax > 1 ? "s" : ""}.
            </p>
          </div>
        </div>

        {/* ===============================
            TOTAL SUMMARY (VERY CLEAR)
        =============================== */}
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span>
              {room.price.toLocaleString()} × {nights} night{nights > 1 ? "s" : ""}
            </span>
            <span>
              PKR {totalPrice.toLocaleString()}
            </span>
          </div>

          {hasDiscount && checkIn && checkOut && (
            <>
              <div className="flex justify-between text-sm text-muted-foreground line-through">
                <span>Original total</span>
                <span>PKR {originalTotal.toLocaleString()}</span>
              </div>

              <div className="flex justify-between text-sm text-green-700">
                <span>You save</span>
                <span>PKR {totalSaved.toLocaleString()}</span>
              </div>
            </>
          )}

          <div className="flex justify-between text-lg font-bold border-t pt-3">
            <span>Total</span>
            <span>PKR {totalPrice.toLocaleString()}</span>
          </div>
        </div>

        {/* ===============================
            CTA BUTTONS
        =============================== */}
        <div className="space-y-3">
          <Link
            href={bookingHref}
            className="block w-full rounded-xl bg-primary px-4 py-3 text-center font-medium text-white hover:bg-primary/90"
          >
            Book Now
          </Link>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="inline-flex w-full items-center justify-center rounded-xl bg-green-600 px-4 py-3 text-sm font-medium text-white hover:bg-green-700"
          >
            <MessageCircle className="mr-2 h-4 w-4" />
            WhatsApp Booking
          </a>
        </div>
      </div>
    </aside>
  );
}