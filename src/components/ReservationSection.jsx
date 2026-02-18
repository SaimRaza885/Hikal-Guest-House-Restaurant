import { Reveal } from "./Reveal";
import ReservationForm from "./ReservationForm";
import { useToast } from "../hooks/useToast";

/* =========================================================
   ReservationSection.jsx
   Full section wrapper around ReservationForm with toast feedback
   Props:
     whatsappNumber — phone number string (optional)
     className      — extra wrapper classes (optional)
========================================================= */
export default function ReservationSection({
  whatsappNumber = "923001234567",
  className = "",
}) {
  const { toast } = useToast();

  function handleSubmit() {
    toast({
      title: "Reservation Request Sent",
      description: "Your table reservation request has been noted. Our team will confirm shortly.",
    });
  }

  return (
    <Reveal delay={220}>
      <section id="reserve-table" className={`py-20 ${className}`}>
        <div className="container-custom">
          <ReservationForm
            whatsappNumber={whatsappNumber}
            onSubmit={handleSubmit}
          />
        </div>
      </section>
    </Reveal>
  );
}
