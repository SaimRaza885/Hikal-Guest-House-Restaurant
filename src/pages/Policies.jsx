
import { Clock, Baby, PawPrint, Ban } from "lucide-react";
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
          <div className="flex gap-6 rounded-2xl border border-border/50 bg-white p-8 shadow-sm"><div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary"><Clock className="h-6 w-6" /></div><div><h3 className="mb-2 text-xl font-bold">Check-in & Check-out</h3><p className="text-muted-foreground">Check-in time starts at 12:00 PM. <br />Check-out time is until 11:00 AM. <br />Early check-in and late check-out are subject to availability.</p></div></div>
          <div className="flex gap-6 rounded-2xl border border-border/50 bg-white p-8 shadow-sm"><div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary"><Baby className="h-6 w-6" /></div><div><h3 className="mb-2 text-xl font-bold">Children Policy</h3><p className="text-muted-foreground">Children of all ages are welcome. <br />Children under 6 years stay free of charge when using existing beds.</p></div></div>
          <div className="flex gap-6 rounded-2xl border border-border/50 bg-white p-8 shadow-sm"><div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary"><PawPrint className="h-6 w-6" /></div><div><h3 className="mb-2 text-xl font-bold">Pet Policy</h3><p className="text-muted-foreground">Pets are allowed on request. No extra charges.</p></div></div>
          <div className="flex gap-6 rounded-2xl border border-border/50 bg-white p-8 shadow-sm"><div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary"><Ban className="h-6 w-6" /></div><div><h3 className="mb-2 text-xl font-bold">Cancellation</h3><p className="text-muted-foreground">Free cancellation up to 48 hours before arrival. <br />Cancellations within 48 hours will be charged for the first night.</p></div></div>
        </div>
      </div>

    </div>
  );
}