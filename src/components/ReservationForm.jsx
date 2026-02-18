import { useState } from "react";
import { MessageCircle } from "lucide-react";

/* =========================================================
   ReservationForm.jsx
   Table reservation form with WhatsApp fallback link
   Props:
     whatsappNumber — phone number string e.g. "923001234567"
     onSubmit       — callback fn(reservationData) (optional)
     className      — extra wrapper classes (optional)
========================================================= */
export default function ReservationForm({
  whatsappNumber = "923001234567",
  onSubmit,
  className = "",
}) {
  const [reservation, setReservation] = useState({
    name: "",
    dateTime: "",
    guests: "2",
    request: "",
  });

  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    `Hi, I want to reserve a table at Hikal Restaurant. Name: ${reservation.name || "N/A"}, Date/Time: ${reservation.dateTime || "N/A"}, Guests: ${reservation.guests}, Request: ${reservation.request || "N/A"}`
  )}`;

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit?.(reservation);
    setReservation({ name: "", dateTime: "", guests: "2", request: "" });
  }

  const set = (field) => (e) =>
    setReservation((prev) => ({ ...prev, [field]: e.target.value }));

  return (
    <div className={`grid grid-cols-1 gap-8 lg:grid-cols-3 ${className}`}>

      {/* sidebar info */}
      <div className="rounded-2xl border border-border/50 bg-primary p-8 text-primary-foreground lg:col-span-1">
        <h2 className="text-3xl font-bold text-white">Table Reservation</h2>
        <p className="mt-3 text-sm leading-relaxed text-primary-foreground/90">
          Reserve in advance for terrace seating and peak dinner hours.
        </p>
        <p className="mt-6 text-xs uppercase tracking-[0.2em] text-accent">Quick options</p>
        <a
          href={whatsappLink}
          target="_blank"
          rel="noreferrer"
          className="font-ui mt-3 inline-flex items-center rounded-xl bg-accent px-4 py-2.5 text-sm font-semibold text-accent-foreground transition-colors hover:bg-accent/90"
        >
          <MessageCircle className="mr-2 h-4 w-4" />
          WhatsApp Booking
        </a>
      </div>

      {/* form */}
      <form
        onSubmit={handleSubmit}
        className="rounded-2xl border border-border/50 bg-white p-8 shadow-sm lg:col-span-2"
      >
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div>
            <label className="mb-2 block text-sm font-medium">Name</label>
            <input
              required
              value={reservation.name}
              onChange={set("name")}
              className="h-12 w-full rounded-xl border border-border px-3 focus:outline-none focus:ring-2 focus:ring-primary/30"
              placeholder="Your name"
            />
          </div>
          <div>
            <label className="mb-2 block text-sm font-medium">Date & Time</label>
            <input
              required
              type="datetime-local"
              value={reservation.dateTime}
              onChange={set("dateTime")}
              className="h-12 w-full rounded-xl border border-border px-3 focus:outline-none focus:ring-2 focus:ring-primary/30"
            />
          </div>
        </div>

        <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
          <div>
            <label className="mb-2 block text-sm font-medium">Guests</label>
            <select
              value={reservation.guests}
              onChange={set("guests")}
              className="h-12 w-full rounded-xl border border-border px-3 focus:outline-none focus:ring-2 focus:ring-primary/30"
            >
              {[1, 2, 3, 4, 5, 6, 8, 10].map((count) => (
                <option key={count} value={String(count)}>
                  {count} Guest{count > 1 ? "s" : ""}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="mb-2 block text-sm font-medium">Special Request</label>
            <input
              value={reservation.request}
              onChange={set("request")}
              className="h-12 w-full rounded-xl border border-border px-3 focus:outline-none focus:ring-2 focus:ring-primary/30"
              placeholder="Window seat, birthday setup..."
            />
          </div>
        </div>

        <button
          type="submit"
          className="font-ui mt-6 inline-flex items-center rounded-xl bg-accent px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-accent/90"
        >
          Reserve Now
        </button>
      </form>
    </div>
  );
}
