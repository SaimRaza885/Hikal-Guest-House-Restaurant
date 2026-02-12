import { Link, useLocation } from "wouter";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { href: "/#home", base: "/", label: "Home" },
    { href: "/rooms#rooms", base: "/rooms", label: "Rooms" },
    { href: "/gallery#gallery", base: "/gallery", label: "Gallery" },
    { href: "/facilities#facilities", base: "/facilities", label: "Facilities" },
    { href: "/restaurant#restaurant", base: "/restaurant", label: "Restaurant" },
    { href: "/contact#contact", base: "/contact", label: "Contact" },
  ];

  return (
    <nav className={`fixed z-50 w-full transition-all duration-300 ${scrolled || location !== "/" ? "bg-white/95 py-3 shadow-sm backdrop-blur-md" : "bg-transparent py-6"}`}>
      <div className="container-custom flex items-center justify-between">
        <Link href="/#home" className="group flex flex-col items-center">
          <span className={`text-2xl font-bold tracking-wider transition-colors ${scrolled || location !== "/" ? "text-primary" : "text-white"}`}>HIKAL</span>
          <span className={`text-[0.6rem] uppercase tracking-[0.2em] transition-colors ${scrolled || location !== "/" ? "text-muted-foreground" : "text-white/80"}`}>Guest House</span>
        </Link>

        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              <span className={`cursor-pointer text-sm font-medium uppercase tracking-wider transition-all hover:text-accent ${location === link.base ? "text-accent" : scrolled || location !== "/" ? "text-foreground" : "text-white/90"}`}>
                {link.label}
              </span>
            </Link>
          ))}
          <Link href="/booking" className={`rounded-full px-6 py-2 text-sm font-medium transition-transform hover:-translate-y-0.5 ${scrolled || location !== "/" ? "bg-primary text-white hover:bg-primary/90" : "bg-white text-primary hover:bg-white/90"}`}>
            Book Now
          </Link>
        </div>

        <button className="p-2 lg:hidden" onClick={() => setIsOpen((prev) => !prev)} type="button" aria-label="Toggle menu">
          {isOpen ? <X className={scrolled || location !== "/" ? "text-foreground" : "text-white"} /> : <Menu className={scrolled || location !== "/" ? "text-foreground" : "text-white"} />}
        </button>
      </div>

      {isOpen ? (
        <div className="absolute left-0 top-full flex w-full flex-col gap-4 border-t bg-background px-4 py-6 shadow-xl lg:hidden">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} onClick={() => setIsOpen(false)} className={`block border-b border-border/40 py-2 text-lg ${location === link.base ? "text-accent" : "text-foreground"}`}>
              {link.label}
            </Link>
          ))}
          <Link href="/booking" onClick={() => setIsOpen(false)} className="mt-4 block w-full rounded-xl bg-primary px-4 py-3 text-center text-white">
            Book Your Stay
          </Link>
        </div>
      ) : null}
    </nav>
  );
}