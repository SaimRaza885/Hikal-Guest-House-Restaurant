import { useMemo } from "react";
import { BookingForm } from "../components/BookingForm";
import { useSeo } from "../hooks/useSeo";

function normalizeDate(value) {
  if (!value) return "";
  return /^\d{4}-\d{2}-\d{2}$/.test(value) ? value : "";
}

export default function Booking() {
  useSeo({
    title: "Booking",
    description: "Submit a booking request for your preferred room and travel dates at Hikal Guest House."
  });

  const prefill = useMemo(() => {
    const params = new URLSearchParams(window.location.search);
    const guests = Number.parseInt(params.get("guests") || "2", 10);

    return {
      roomTypeId: params.get("room") || "",
      checkIn: normalizeDate(params.get("checkIn") || ""),
      checkOut: normalizeDate(params.get("checkOut") || ""),
      adults: Number.isFinite(guests) && guests > 0 ? guests : 2,
      children: 0,
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
     

      <div className="relative min-h-[300px] h-[40vh] overflow-hidden">
        <img src="https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop" alt="Booking Header" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 flex items-center justify-center bg-black/50">
          <div className="p-4 pt-20 text-center text-white">
            <h1 className="mb-4 text-4xl font-bold text-white md:text-5xl">Book Your Stay</h1>
            <p className="text-lg opacity-90">Secure your reservation instantly</p>
          </div>
        </div>
      </div>

      <div className="container-custom relative z-10 -mt-20 mb-20 py-12">
        <div className="mx-auto max-w-4xl"><BookingForm initialValues={prefill} /></div>
      </div>

    </div>
  );
}