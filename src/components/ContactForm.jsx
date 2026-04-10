import { useRef } from "react";
import { useForm } from "react-hook-form";
import { Loader2 } from "lucide-react";
import emailjs from "@emailjs/browser";


const EMAILJS_SERVICE_ID  = import.meta.env.VITE_EMAILJS_SERVICE_ID  || "YOUR_SERVICE_ID";
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "YOUR_TEMPLATE_ID";
const EMAILJS_PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY  || "YOUR_PUBLIC_KEY";


export default function ContactForm({ onSuccess, onError, className = "" }) {
  const formRef = useRef(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: { name: "", email: "", subject: "", message: "" },
  });

  async function onSubmit() {
    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY
      );
      reset();
      onSuccess?.();
    } catch (error) {
      onError?.(error);
    }
  }

  /* ── shared input style ── */
  const inputClass =
    "h-12 w-full rounded-xl border border-border/60 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 transition";

  return (
    <div className={`rounded-2xl border border-border/50 bg-white p-8 shadow-lg ${className}`}>
      <h3 className="mb-6 text-xl font-bold text-foreground">Send a Message</h3>

      {/*
        IMPORTANT: input names MUST match your EmailJS template variables
        e.g. {{name}}, {{email}}, {{subject}}, {{message}}
      */}
      <form
        ref={formRef}
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-6"
      >
        {/* Name */}
        <div>
          <label className="mb-2 block text-sm font-medium">Name</label>
          <input
            className={inputClass}
            placeholder="Your Name"
            {...register("name", { required: "Name is required" })}
          />
          {errors.name && (
            <p className="mt-1 text-xs text-red-600">{errors.name.message}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label className="mb-2 block text-sm font-medium">Email</label>
          <input
            type="email"
            className={inputClass}
            placeholder="email@example.com"
            {...register("email", { required: "Email is required" })}
          />
          {errors.email && (
            <p className="mt-1 text-xs text-red-600">{errors.email.message}</p>
          )}
        </div>

        {/* Subject */}
        <div>
          <label className="mb-2 block text-sm font-medium">Subject</label>
          <input
            className={inputClass}
            placeholder="Inquiry about..."
            {...register("subject", { required: "Subject is required" })}
          />
          {errors.subject && (
            <p className="mt-1 text-xs text-red-600">{errors.subject.message}</p>
          )}
        </div>

        {/* Message */}
        <div>
          <label className="mb-2 block text-sm font-medium">Message</label>
          <textarea
            className="min-h-[150px] w-full rounded-xl border border-border/60 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 transition resize-none"
            placeholder="How can we help you?"
            {...register("message", { required: "Message is required" })}
          />
          {errors.message && (
            <p className="mt-1 text-xs text-red-600">{errors.message.message}</p>
          )}
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="font-ui flex h-12 w-full items-center justify-center rounded-xl bg-primary text-lg text-white transition-colors hover:bg-primary/90 disabled:opacity-60"
        >
          {isSubmitting ? (
            <Loader2 className="h-5 w-5 animate-spin" />
          ) : (
            "Send Message"
          )}
        </button>
      </form>
    </div>
  );
}
