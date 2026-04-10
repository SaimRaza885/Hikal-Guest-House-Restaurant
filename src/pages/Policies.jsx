import { Clock, Baby, PawPrint, Ban, CreditCard, IdCard } from "lucide-react";
import { useSeo } from "../hooks/useSeo";

export default function Policies() {
  useSeo({
    title: "Policies",
    description: "Review guest policies for check-in, children, pets, and cancellations at Hikal Guest House."
  });

  return (
    <div className="min-h-screen bg-background">
      <div className="container-custom py-32 md:py-48">
        <h1 className="mb-12 text-center text-4xl font-bold text-primary">Guest Policies</h1>

        <div className="mx-auto max-w-3xl space-y-8">

          <div className="flex gap-6 rounded-2xl border border-border/50 bg-white p-8 shadow-sm">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary"><Clock className="h-6 w-6" /></div>
            <div>
              <h3 className="mb-2 text-xl font-bold">Check-in & Check-out</h3>
              <p className="text-muted-foreground">
                Check-in is from 12:00 PM to 12:00 AM.<br />
                Check-out is until 11:00 AM.<br />
                Please inform us of your expected arrival time in advance.<br />
                A valid photo ID is required at check-in.
              </p>
            </div>
          </div>

          <div className="flex gap-6 rounded-2xl border border-border/50 bg-white p-8 shadow-sm">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary"><Baby className="h-6 w-6" /></div>
            <div>
              <h3 className="mb-2 text-xl font-bold">Children Policy</h3>
              <p className="text-muted-foreground">
                Children of all ages are welcome. No age restriction for check-in.<br />
                Children 18 and above are charged as adults.<br />
                Cribs are available on request at no charge for children under 2 years.<br />
                Extra beds are available on request at no charge for children aged 3–12.<br />
                Extra bed availability depends on the room type selected.
              </p>
            </div>
          </div>

          <div className="flex gap-6 rounded-2xl border border-border/50 bg-white p-8 shadow-sm">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary"><PawPrint className="h-6 w-6" /></div>
            <div>
              <h3 className="mb-2 text-xl font-bold">Pet Policy</h3>
              <p className="text-muted-foreground">
                Pets are welcome at no extra charge.
              </p>
            </div>
          </div>

          <div className="flex gap-6 rounded-2xl border border-border/50 bg-white p-8 shadow-sm">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary"><Ban className="h-6 w-6" /></div>
            <div>
              <h3 className="mb-2 text-xl font-bold">Cancellation</h3>
              <p className="text-muted-foreground">
                Cancellation and prepayment policies vary by room type.<br />
                Most rooms offer free cancellation before April 7–8, 2026.<br />
                Check the conditions of your selected room at the time of booking.
              </p>
            </div>
          </div>

          <div className="flex gap-6 rounded-2xl border border-border/50 bg-white p-8 shadow-sm">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary"><CreditCard className="h-6 w-6" /></div>
            <div>
              <h3 className="mb-2 text-xl font-bold">Payment</h3>
              <p className="text-muted-foreground">
                This property accepts cash payments only. No credit cards accepted.<br />
                Payment before arrival by bank transfer is required for some room types.<br />
                The property will contact you after booking with transfer instructions.
              </p>
            </div>
          </div>

          <div className="flex gap-6 rounded-2xl border border-border/50 bg-white p-8 shadow-sm">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary"><IdCard className="h-6 w-6" /></div>
            <div>
              <h3 className="mb-2 text-xl font-bold">Groups</h3>
              <p className="text-muted-foreground">
                When booking more than 4 rooms, different policies and additional fees may apply.<br />
                Please contact us directly for group reservations.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}