import { useEffect, useMemo, useRef } from "react";
import { useForm } from "react-hook-form";
import { Loader2 } from "lucide-react";
import emailjs from "@emailjs/browser";
import { useRooms } from "../hooks/useRooms";
import { useToast } from "../hooks/useToast.jsx";

/* =========================================================
   EmailJS Configuration — set in your .env file
   ========================================================= */
const EMAILJS_SERVICE_ID  = import.meta.env.VITE_EMAILJS_SERVICE_ID  || "YOUR_SERVICE_ID";
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "YOUR_TEMPLATE_ID";
const EMAILJS_PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY  || "YOUR_PUBLIC_KEY";

/* =========================================================
   ⚠️  YOUR WHATSAPP NUMBER — change this to your real number
   Format: country code + number, NO spaces, NO + sign
   Example: Pakistan +92 300 1234567 → "923001234567"
   ========================================================= */
const WHATSAPP_NUMBER = "923001234567";

/* =========================================================
   buildWhatsAppURL
   Collects all form values and builds a clean WhatsApp
   wa.me link with a pre-filled, neatly formatted message.
   ========================================================= */
function buildWhatsAppURL(data) {
  const msg = [
    "🏨 *New Booking Request*",
    "──────────────────────",
    `👤 *Name:* ${data.name}`,
    `📧 *Email:* ${data.email}`,
    `📞 *Phone:* ${data.phone}`,
    "──────────────────────",
    `🛏️ *Room:* ${data.roomTypeId}`,
    `📅 *Check-in:* ${data.checkIn}`,
    `📅 *Check-out:* ${data.checkOut}`,
    `👥 *Adults:* ${data.adults}`,
    `👦 *Children:* ${data.children}`,
    "──────────────────────",
    `📝 *Special Requests:*`,
    data.message ? data.message : "None",
  ].join("\n");

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
}

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
    getValues,
    formState: { errors, isSubmitting },
  } = useForm({ defaultValues: defaults });

  const checkIn = watch("checkIn");

  useEffect(() => {
    reset(defaults);
  }, [defaults, reset]);

  /* ── Email submit ── */
  async function onSubmit() {
    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY
      );
      toast({
        title: "✅ Booking Request Sent!",
        description: "We've received your request and will confirm by email shortly.",
      });
      reset(defaults);
    } catch (error) {
      console.error("EmailJS error:", error);
      toast({
        title: "❌ Booking Failed",
        description: error?.text || error?.message || "Something went wrong. Please try again.",
        variant: "destructive",
      });
    }
  }

  /* ── WhatsApp button handler ── */
  function handleWhatsApp() {
    // Validate required fields before opening WhatsApp
    const data = getValues();
    const missing = [];
    if (!data.name)       missing.push("Full Name");
    if (!data.phone)      missing.push("Phone Number");
    if (!data.roomTypeId) missing.push("Room Type");
    if (!data.checkIn)    missing.push("Check-in Date");
    if (!data.checkOut)   missing.push("Check-out Date");

    if (missing.length > 0) {
      toast({
        title: "Please fill in required fields",
        description: `Missing: ${missing.join(", ")}`,
        variant: "destructive",
      });
      return;
    }

    // Open WhatsApp with pre-filled message
    window.open(buildWhatsAppURL(data), "_blank");
  }

  /* ── Shared styles ── */
  const inputClass =
    "h-12 w-full rounded-xl border border-border/50 bg-muted/30 px-4 text-sm " +
    "focus:outline-none focus:ring-2 focus:ring-primary/30 transition";
  const errorClass = "mt-1 text-xs text-red-600";
  const todayStr = new Date().toISOString().split("T")[0];

  return (
    <div className="rounded-2xl border border-border/50 bg-white p-8 shadow-xl">
      <h2 className="mb-6 text-2xl font-bold text-primary">Reserve Your Stay</h2>

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
            {errors.name && <p className={errorClass}>{errors.name.message}</p>}
          </div>
          <div>
            <label className="mb-2 block text-sm font-medium">Email Address</label>
            <input
              type="email"
              className={inputClass}
              placeholder="john@example.com"
              {...register("email", {
                required: "Email is required",
                pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Enter a valid email" },
              })}
            />
            {errors.email && <p className={errorClass}>{errors.email.message}</p>}
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
            {errors.phone && <p className={errorClass}>{errors.phone.message}</p>}
          </div>
          <div>
            <label className="mb-2 block text-sm font-medium">Room Type</label>
            <select
              className={inputClass}
              {...register("roomTypeId", { required: "Please select a room type" })}
            >
              <option value="">Select a room</option>
              {rooms.map((room) => (
                <option key={room.id} value={room.slug}>{room.title}</option>
              ))}
            </select>
            {errors.roomTypeId && <p className={errorClass}>{errors.roomTypeId.message}</p>}
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
            {errors.checkIn && <p className={errorClass}>{errors.checkIn.message}</p>}
          </div>
          <div>
            <label className="mb-2 block text-sm font-medium">Check-out Date</label>
            <input
              type="date"
              className={inputClass}
              min={checkIn || todayStr}
              {...register("checkOut", {
                required: "Check-out date is required",
                validate: (val) => !checkIn || val > checkIn || "Check-out must be after check-in",
              })}
            />
            {errors.checkOut && <p className={errorClass}>{errors.checkOut.message}</p>}
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
              {...register("adults", { required: true, min: { value: 1, message: "At least 1 adult" } })}
            />
            {errors.adults && <p className={errorClass}>{errors.adults.message}</p>}
          </div>
          <div>
            <label className="mb-2 block text-sm font-medium">Children</label>
            <input
              type="number"
              min={0}
              className={inputClass}
              {...register("children", { required: true, min: { value: 0, message: "Cannot be negative" } })}
            />
            {errors.children && <p className={errorClass}>{errors.children.message}</p>}
          </div>
        </div>

        {/* Special Requests */}
        <div>
          <label className="mb-2 block text-sm font-medium">
            Special Requests <span className="text-muted-foreground">(Optional)</span>
          </label>
          <textarea
            className="min-h-[100px] w-full rounded-xl border border-border/50 bg-muted/30 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 transition resize-none"
            placeholder="Any specific requirements, dietary needs, early check-in requests..."
            {...register("message")}
          />
        </div>

        {/* ── Divider with OR ── */}
        <div className="flex items-center gap-3">
          <div className="h-px flex-1 bg-border/50" />
          <span className="text-xs text-muted-foreground font-medium">CHOOSE HOW TO SEND</span>
          <div className="h-px flex-1 bg-border/50" />
        </div>

        {/* ── Two buttons side by side ── */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">

          {/* Email submit button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="flex h-14 w-full items-center justify-center gap-2 rounded-xl bg-primary text-base font-semibold text-white shadow-lg shadow-primary/20 transition-colors hover:bg-primary/90 disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="h-5 w-5 animate-spin" />
                Sending...
              </>
            ) : (
              <>
                {/* Email icon */}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                </svg>
                Book via Email
              </>
            )}
          </button>

          {/* WhatsApp button */}
          <button
            type="button"
            onClick={handleWhatsApp}
            className="flex h-14 w-full items-center justify-center gap-2 rounded-xl bg-[#25D366] text-base font-semibold text-white shadow-lg shadow-[#25D366]/30 transition-colors hover:bg-[#20bb5a] active:scale-95"
          >
            {/* WhatsApp SVG icon */}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
            </svg>
            Book via WhatsApp
          </button>

        </div>

        <p className="text-center text-xs text-muted-foreground">
          Email sends a formal request • WhatsApp opens a chat with your details pre-filled
        </p>

      </form>
    </div>
  );
}