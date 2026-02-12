import { useEffect, useMemo } from "react";
import { useForm } from "react-hook-form";
import { Loader2 } from "lucide-react";
import { useCreateBooking } from "../hooks/useBookings";
import { useRooms } from "../hooks/useRooms";
import { useToast } from "../hooks/useToast.jsx";

export function BookingForm({ initialValues = {} }) {
  const { data: rooms } = useRooms();
  const { mutate, isPending } = useCreateBooking();
  const { toast } = useToast();

  const defaults = useMemo(
    () => ({
      name: "",
      email: "",
      phone: "",
      roomTypeId: initialValues.roomTypeId || "",
      checkIn: initialValues.checkIn || "",
      checkOut: initialValues.checkOut || "",
      adults: initialValues.adults || 2,
      children: initialValues.children || 0,
      message: "",
    }),
    [initialValues]
  );

  const { register, handleSubmit, reset, watch, formState: { errors } } = useForm({
    defaultValues: defaults,
  });

  const checkIn = watch("checkIn");

  useEffect(() => {
    reset(defaults);
  }, [defaults, reset]);

  function onSubmit(values) {
    mutate(values, {
      onSuccess: () => {
        toast({
          title: "Booking Request Sent",
          description: "We have received your booking request and will confirm shortly.",
        });
        reset(defaults);
      },
      onError: (error) => {
        toast({
          title: "Booking Failed",
          description: error?.message || "Something went wrong.",
          variant: "destructive",
        });
      },
    });
  }

  return (
    <div className="rounded-2xl border border-border/50 bg-white p-8 shadow-xl">
      <h2 className="mb-6 text-2xl font-bold text-primary">Reserve Your Stay</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div>
            <label className="mb-2 block text-sm font-medium">Full Name</label>
            <input className="h-12 w-full rounded-xl border border-border/50 bg-muted/30 px-4" placeholder="John Doe" {...register("name", { required: "Full name is required" })} />
            {errors.name ? <p className="mt-1 text-xs text-red-600">{errors.name.message}</p> : null}
          </div>
          <div>
            <label className="mb-2 block text-sm font-medium">Email Address</label>
            <input type="email" className="h-12 w-full rounded-xl border border-border/50 bg-muted/30 px-4" placeholder="john@example.com" {...register("email", { required: "Email is required" })} />
            {errors.email ? <p className="mt-1 text-xs text-red-600">{errors.email.message}</p> : null}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div>
            <label className="mb-2 block text-sm font-medium">Phone Number</label>
            <input className="h-12 w-full rounded-xl border border-border/50 bg-muted/30 px-4" placeholder="+92 300 1234567" {...register("phone", { required: "Phone number is required" })} />
            {errors.phone ? <p className="mt-1 text-xs text-red-600">{errors.phone.message}</p> : null}
          </div>
          <div>
            <label className="mb-2 block text-sm font-medium">Room Type</label>
            <select className="h-12 w-full rounded-xl border border-border/50 bg-muted/30 px-4" {...register("roomTypeId", { required: "Room type is required" })}>
              <option value="">Select a room</option>
              {rooms.map((room) => (
                <option key={room.id} value={room.slug}>{room.title}</option>
              ))}
            </select>
            {errors.roomTypeId ? <p className="mt-1 text-xs text-red-600">{errors.roomTypeId.message}</p> : null}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div>
            <label className="mb-2 block text-sm font-medium">Check-in Date</label>
            <input type="date" className="h-12 w-full rounded-xl border border-border/50 bg-muted/30 px-4" min={new Date().toISOString().split("T")[0]} {...register("checkIn", { required: "Check-in date is required" })} />
            {errors.checkIn ? <p className="mt-1 text-xs text-red-600">{errors.checkIn.message}</p> : null}
          </div>
          <div>
            <label className="mb-2 block text-sm font-medium">Check-out Date</label>
            <input type="date" className="h-12 w-full rounded-xl border border-border/50 bg-muted/30 px-4" min={checkIn || new Date().toISOString().split("T")[0]} {...register("checkOut", { required: "Check-out date is required" })} />
            {errors.checkOut ? <p className="mt-1 text-xs text-red-600">{errors.checkOut.message}</p> : null}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div>
            <label className="mb-2 block text-sm font-medium">Adults</label>
            <input type="number" min={1} className="h-12 w-full rounded-xl border border-border/50 bg-muted/30 px-4" {...register("adults", { required: true, min: 1 })} />
          </div>
          <div>
            <label className="mb-2 block text-sm font-medium">Children</label>
            <input type="number" min={0} className="h-12 w-full rounded-xl border border-border/50 bg-muted/30 px-4" {...register("children", { required: true, min: 0 })} />
          </div>
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium">Special Requests (Optional)</label>
          <textarea className="min-h-[100px] w-full rounded-xl border border-border/50 bg-muted/30 px-4 py-3" placeholder="Any specific requirements..." {...register("message")} />
        </div>

        <button type="submit" disabled={isPending} className="flex h-14 w-full items-center justify-center rounded-xl bg-primary text-lg text-white shadow-lg shadow-primary/20 transition-colors hover:bg-primary/90 disabled:opacity-60">
          {isPending ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Processing...
            </>
          ) : (
            "Confirm Booking Request"
          )}
        </button>
      </form>
    </div>
  );
}