import { useForm } from "react-hook-form";
import { Loader2, Mail, MapPin, Phone } from "lucide-react";
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { Reveal } from "../components/Reveal";
import { useSendMessage } from "../hooks/useContact";
import { useToast } from "../hooks/useToast.jsx";
import { useSeo } from "../hooks/useSeo";

export default function Contact() {
  useSeo({
    title: "Contact",
    description: "Contact Hikal Guest House for room inquiries, group plans, and travel support in Hunza Valley."
  });

  const { mutate, isPending } = useSendMessage();
  const { toast } = useToast();

  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    defaultValues: { name: "", email: "", subject: "", message: "" }
  });

  function onSubmit(values) {
    mutate(values, {
      onSuccess: () => {
        toast({ title: "Message Sent", description: "Thank you for contacting us. We will get back to you soon." });
        reset();
      },
      onError: (error) => {
        toast({ title: "Error", description: error?.message || "Failed to send message", variant: "destructive" });
      }
    });
  }

  return (
    <div id="contact" className="min-h-screen bg-background">
      <Navigation />

      <Reveal delay={60}>
        <div className="bg-primary px-4 pb-16 pt-32 text-center text-white md:pb-24 md:pt-48">
          <div className="container-custom">
            <h1 className="mb-6 text-4xl font-bold text-white md:text-6xl">Contact Us</h1>
            <p className="mx-auto max-w-2xl text-lg text-white/80">We are here to assist you. Reach out for inquiries, directions, or special arrangements.</p>
          </div>
        </div>
      </Reveal>

      <div className="container-custom py-24">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
          <Reveal delay={100}>
            <div className="space-y-12">
              <div><h2 className="mb-6 text-2xl font-bold">Get in Touch</h2><p className="leading-relaxed text-muted-foreground">Whether you have a question about room availability, need help planning your trip to Nagar Valley, or want to provide feedback, our team is ready to answer all your questions.</p></div>
              <div className="space-y-6">
                <div className="flex items-start gap-4"><div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-accent/10"><MapPin className="h-5 w-5 text-accent" /></div><div><h3 className="text-lg font-bold">Address</h3><p className="text-muted-foreground">Rakaposhi View Point, Jaffarabad,<br />Nagar Valley, Pakistan</p></div></div>
                <div className="flex items-start gap-4"><div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-accent/10"><Phone className="h-5 w-5 text-accent" /></div><div><h3 className="text-lg font-bold">Phone</h3><p className="text-muted-foreground">+92 300 123 4567</p><p className="text-sm text-muted-foreground">Mon - Sun, 24 Hours</p></div></div>
                <div className="flex items-start gap-4"><div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-accent/10"><Mail className="h-5 w-5 text-accent" /></div><div><h3 className="text-lg font-bold">Email</h3><p className="text-muted-foreground">reservations@hikal.com</p><p className="text-muted-foreground">info@hikal.com</p></div></div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={140}>
            <div id="contact-form" className="rounded-2xl border border-border/50 bg-white p-8 shadow-lg">
              <h3 className="mb-6 text-xl font-bold">Send a Message</h3>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div><label className="mb-2 block text-sm font-medium">Name</label><input className="h-12 w-full rounded-xl border border-border/60 px-4" placeholder="Your Name" {...register("name", { required: "Name is required" })} />{errors.name ? <p className="mt-1 text-xs text-red-600">{errors.name.message}</p> : null}</div>
                <div><label className="mb-2 block text-sm font-medium">Email</label><input type="email" className="h-12 w-full rounded-xl border border-border/60 px-4" placeholder="email@example.com" {...register("email", { required: "Email is required" })} />{errors.email ? <p className="mt-1 text-xs text-red-600">{errors.email.message}</p> : null}</div>
                <div><label className="mb-2 block text-sm font-medium">Subject</label><input className="h-12 w-full rounded-xl border border-border/60 px-4" placeholder="Inquiry about..." {...register("subject", { required: "Subject is required" })} />{errors.subject ? <p className="mt-1 text-xs text-red-600">{errors.subject.message}</p> : null}</div>
                <div><label className="mb-2 block text-sm font-medium">Message</label><textarea className="min-h-[150px] w-full rounded-xl border border-border/60 px-4 py-3" placeholder="How can we help you?" {...register("message", { required: "Message is required" })} />{errors.message ? <p className="mt-1 text-xs text-red-600">{errors.message.message}</p> : null}</div>
                <button type="submit" disabled={isPending} className="flex h-12 w-full items-center justify-center rounded-xl bg-primary text-lg text-white transition-colors hover:bg-primary/90 disabled:opacity-60">{isPending ? <Loader2 className="h-5 w-5 animate-spin" /> : "Send Message"}</button>
              </form>
            </div>
          </Reveal>
        </div>
      </div>

      <Footer />
    </div>
  );
}