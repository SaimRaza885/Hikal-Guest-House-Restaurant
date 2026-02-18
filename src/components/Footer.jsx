import { Link } from "wouter";
import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-black pb-8 pt-16 text-primary-foreground">
      <div className="container-custom mb-12 grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-4">
          <div>
            <h3 className="text-2xl font-bold tracking-wider text-white">HIKAL</h3>
            <p className="text-xs uppercase tracking-[0.2em] text-white/60">Guest House</p>
          </div>
          <p className="text-sm leading-relaxed text-primary-foreground/80">
            Experience serenity in the heart of Hunza Valley. Luxury accommodation with breathtaking views of Rakaposhi.
          </p>
        </div>

        <div className="space-y-4">
          <h4 className="text-lg font-semibold text-white">Explore</h4>
          <div className="flex flex-col gap-2">
            <Link href="/rooms" className="w-fit text-sm text-primary-foreground/80 transition-colors hover:text-accent">Rooms & Suites</Link>
            <Link href="/restaurant" className="w-fit text-sm text-primary-foreground/80 transition-colors hover:text-accent">Dining</Link>
            <Link href="/facilities" className="w-fit text-sm text-primary-foreground/80 transition-colors hover:text-accent">Facilities</Link>
            <Link href="/gallery" className="w-fit text-sm text-primary-foreground/80 transition-colors hover:text-accent">Gallery</Link>
          
          </div>
        </div>

        <div className="space-y-4">
          <h4 className="text-lg font-semibold text-white">Contact</h4>
          <div className="space-y-3">
            <div className="flex items-start gap-3 text-sm text-primary-foreground/80">
              <MapPin className="mt-1 h-4 w-4 shrink-0 text-accent" />
              <p>Rakaposhi View Point, Jaffarabad,<br />Nagar Valley, Pakistan</p>
            </div>
            <div className="flex items-center gap-3 text-sm text-primary-foreground/80">
              <Phone className="h-4 w-4 shrink-0 text-accent" />
              <a href="tel:+923000000000" className="transition-colors hover:text-accent">+92 300 000 0000</a>
            </div>
            <div className="flex items-center gap-3 text-sm text-primary-foreground/80">
              <Mail className="h-4 w-4 shrink-0 text-accent" />
              <a href="mailto:info@hikal.com" className="transition-colors hover:text-accent">info@hikal.com</a>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h4 className="text-lg font-semibold text-white">Follow Us</h4>
          <div className="flex gap-4">
            <a href="#" className="rounded-full bg-white/10 p-2 transition-all hover:bg-accent hover:text-white"><Facebook className="h-5 w-5" /></a>
            <a href="#" className="rounded-full bg-white/10 p-2 transition-all hover:bg-accent hover:text-white"><Instagram className="h-5 w-5" /></a>
          </div>
          <div className="pt-4">
            <Link href="/booking" className="font-ui block w-full rounded-xl bg-accent px-6 py-3 text-center font-medium text-white transition-colors hover:bg-accent/90">
              Book Your Stay
            </Link>
          </div>
        </div>
      </div>

      <div className="container-custom flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-primary-foreground/50 md:flex-row">
        <p>&copy; {new Date().getFullYear()} Hikal Guest House. All rights reserved.</p>
        <div className="flex gap-6">
          <Link href="/policies" className="transition-colors hover:text-white">Privacy Policy</Link>
          <Link href="/policies" className="transition-colors hover:text-white">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
