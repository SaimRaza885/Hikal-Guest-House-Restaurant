import { useEffect, useMemo, useRef } from "react";
import { useForm } from "react-hook-form";
import { Loader2 } from "lucide-react";
import emailjs from "@emailjs/browser";
import { useRooms } from "../hooks/useRooms";
import { useToast } from "../hooks/useToast.jsx";

/* =========================================================
   EmailJS config — replace with your real IDs
   or put them in .env as:
     VITE_EMAILJS_SERVICE_ID
     VITE_EMAILJS_TEMPLATE_ID
     VITE_EMAILJS_PUBLIC_KEY
========================================================= */
const EMAILJS_SERVICE_ID  = import.meta.env.VITE_EMAILJS_SERVICE_ID  || "YOUR_SERVICE_ID";
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "YOUR_TEMPLATE_ID";
const EMAILJS_PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY  || "YOUR_PUBLIC_KEY";

/* =========================================================
   BookingForm.jsx
   Full booking form — sends reservation details to Gmail
   via EmailJS. No backend required.

   EmailJS Template should contain these variables:
     {{name}}        — guest full name
     {{email}}       — guest email
     {{phone}}       — guest phone
     {{roomTypeId}}  — selected room slug/title
     {{checkIn}}     — check-in date
     {{checkOut}}    — check-out date
     {{adults}}      — number of adults
     {{children}}    — number of children
     {{message}}     — special requests

   Props:
     initialValues — optional prefill object from URL params
========================================================= */
export function BookingForm({ initialValues = {} }) {
  const formRef = useRef(null);
  const { data: rooms = [] } = useRooms();
  const { toast } = useToast();

  const defaults = useMemo(
    () => ({
      name:       "",
      email:      "",
      phone:      "",
      roomTypeId: initialValues.roomTypeId || "",
      checkIn:    initialValues.checkIn    || "",
      checkOut:   initialValues.checkOut   || "",
      adults:     initialValues.adults     || 2,
      children:   initialValues.children   || 0,
      message:    "",
    }),
    [initialValues]
  );

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors, isSubmitting },
  } = useForm({ defaultValues: defaults });

  const checkIn = watch("checkIn");

  /* sync defaults when URL params change */
  useEffect(() => {
    reset(defaults);
  }, [defaults, reset]);

  async function onSubmit() {
    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY
      );
      toast({
        title: "Booking Request Sent",
        description: "We have received your booking request and will confirm shortly.",
      });
      reset(defaults);
    } catch (error) {
      toast({
        title: "Booking Failed",
        description: error?.message || "Something went wrong. Please try again.",
        variant: "destructive",
      });
    }
  }

  /* ── shared styles ── */
  const inputClass =
    "h-12 w-full rounded-xl border border-border/50 bg-muted/30 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 transition";

  const todayStr = new Date().toISOString().split("T")[0];

  return (
    <div className="rounded-2xl border border-border/50 bg-white p-8 shadow-xl">
      <h2 className="mb-6 text-2xl font-bold text-primary">Reserve Your Stay</h2>

      {/*
        ref={formRef} is required for emailjs.sendForm()
        It reads input name attributes directly from the DOM
      */}
      <form ref={formRef} onSubmit={handleSubmit(onSubmit)} className="space-y-6">

        {/* Row 1 — Name + Email */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div>
            <label className="mb-2 block text-sm font-medium">Full Name</label>
            <input
              className={inputClass}
              placeholder="John Doe"
              {...register("name", { required: "Full name is required" })}
            />
            {errors.name && <p className="mt-1 text-xs text-red-600">{errors.name.message}</p>}
          </div>
          <div>
            <label className="mb-2 block text-sm font-medium">Email Address</label>
            <input
              type="email"
              className={inputClass}
              placeholder="john@example.com"
              {...register("email", { required: "Email is required" })}
            />
            {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email.message}</p>}
          </div>
        </div>

        {/* Row 2 — Phone + Room Type */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div>
            <label className="mb-2 block text-sm font-medium">Phone Number</label>
            <input
              className={inputClass}
              placeholder="+92 300 1234567"
              {...register("phone", { required: "Phone number is required" })}
            />
            {errors.phone && <p className="mt-1 text-xs text-red-600">{errors.phone.message}</p>}
          </div>
          <div>
            <label className="mb-2 block text-sm font-medium">Room Type</label>
            <select
              className={inputClass}
              {...register("roomTypeId", { required: "Room type is required" })}
            >
              <option value="">Select a room</option>
              {rooms.map((room) => (
                <option key={room.id} value={room.slug}>
                  {room.title}
                </option>
              ))}
            </select>
            {errors.roomTypeId && <p className="mt-1 text-xs text-red-600">{errors.roomTypeId.message}</p>}
          </div>
        </div>

        {/* Row 3 — Check-in + Check-out */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div>
            <label className="mb-2 block text-sm font-medium">Check-in Date</label>
            <input
              type="date"
              className={inputClass}
              min={todayStr}
              {...register("checkIn", { required: "Check-in date is required" })}
            />
            {errors.checkIn && <p className="mt-1 text-xs text-red-600">{errors.checkIn.message}</p>}
          </div>
          <div>
            <label className="mb-2 block text-sm font-medium">Check-out Date</label>
            <input
              type="date"
              className={inputClass}
              min={checkIn || todayStr}
              {...register("checkOut", { required: "Check-out date is required" })}
            />
            {errors.checkOut && <p className="mt-1 text-xs text-red-600">{errors.checkOut.message}</p>}
          </div>
        </div>

        {/* Row 4 — Adults + Children */}
        <div className="grid grid-cols-2 gap-6">
          <div>
            <label className="mb-2 block text-sm font-medium">Adults</label>
            <input
              type="number"
              min={1}
              className={inputClass}
              {...register("adults", { required: true, min: 1 })}
            />
          </div>
          <div>
            <label className="mb-2 block text-sm font-medium">Children</label>
            <input
              type="number"
              min={0}
              className={inputClass}
              {...register("children", { required: true, min: 0 })}
            />
          </div>
        </div>

        {/* Special Requests */}
        <div>
          <label className="mb-2 block text-sm font-medium">
            Special Requests <span className="text-muted-foreground">(Optional)</span>
          </label>
          <textarea
            className="min-h-[100px] w-full rounded-xl border border-border/50 bg-muted/30 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 transition resize-none"
            placeholder="Any specific requirements..."
            {...register("message")}
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="flex h-14 w-full items-center justify-center rounded-xl bg-primary text-lg text-white shadow-lg shadow-primary/20 transition-colors hover:bg-primary/90 disabled:opacity-60"
        >
          {isSubmitting ? (
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