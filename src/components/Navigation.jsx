import { Link, useLocation } from "wouter";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { images } from "../asserts/data";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const leftLinks = [
    { href: "/#home", base: "/", label: "HOME" },
    { href: "/about", base: "/about", label: "ABOUT US" },
    { href: "/rooms", base: "/rooms", label: "ROOMS" },
  ];

  const rightLinks = [
    { href: "/restaurant", base: "/restaurant", label: "DINING" },
    { href: "/contact", base: "/contact", label: "CONTACT US" },
    { href: "/gallery", base: "/gallery", label: "GALLERY" },
  ];

  const allLinks = [...leftLinks, ...rightLinks];

  return (
    <>
      {/* Top Banner */}
      <div className={`fixed top-0 left-0 right-0 z-50 bg-white text-center py-2 text-sm transition-all duration-300 ${scrolled ? "opacity-0 -translate-y-full" : "opacity-100"}`}>
        Get 10% OFF when you book directly!
      </div>

      {/* Main Navigation */}
      <nav className={`fixed left-0 right-0 z-50 w-full transition-all duration-300 bg-white border-b border-gray-200 ${scrolled ? "top-0 shadow-md" : "top-8"}`}>
        <div className="container mx-auto px-4 lg:px-8 py-4">
          <div className="flex items-center justify-between lg:justify-center">
            
            {/* Left Links - Desktop Only */}
            <div className="hidden lg:flex items-center gap-8 xl:gap-12">
              {leftLinks.map((link) => (
                <Link key={link.href} href={link.href}>
                  <span className={`cursor-pointer text-sm font-medium tracking-wider transition-all hover:text-accent ${location === link.base ? "text-accent" : "text-gray-800"}`}>
                    {link.label}
                  </span>
                </Link>
              ))}
            </div>

            {/* Logo - Centered */}
            <Link href="/#home" className="flex-shrink-0 lg:mx-12 xl:mx-16">
              <div className="flex  gap-4 items-center">
                <img
                  src={images.logo}
                  alt="HIKAL Logo"
                  className="w-16 h-16 object-cover rounded-full mb-1"
                />
                <div className="text-center">
                  <h1 className="text-xl md:text-2xl font-bold tracking-wide text-amber-700">
                    HIKAL NAGAR
                  </h1>
                  <p className="text-xs tracking-widest text-amber-600">
                    HOTEL & RESORT
                  </p>
                </div>
              </div>
            </Link>

            {/* Right Links - Desktop Only */}
            <div className="hidden lg:flex items-center gap-8 xl:gap-12">
              {rightLinks.map((link) => (
                <Link key={link.href} href={link.href}>
                  <span className={`cursor-pointer text-sm font-medium tracking-wider transition-all hover:text-accent ${location === link.base ? "text-accent" : "text-gray-800"}`}>
                    {link.label}
                  </span>
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="p-2 lg:hidden focus:outline-none" 
              onClick={() => setIsOpen((prev) => !prev)} 
              type="button" 
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              {isOpen ? (
                <X className="w-6 h-6 text-gray-800" />
              ) : (
                <Menu className="w-6 h-6 text-gray-800" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden border-t bg-white shadow-xl">
            <div className="container mx-auto px-4 py-6">
              <div className="flex flex-col gap-1">
                {allLinks.map((link) => (
                  <Link 
                    key={link.href} 
                    href={link.href} 
                    onClick={() => setIsOpen(false)}
                  >
                    <span className={`block py-3 px-2 text-base font-medium border-b border-gray-200 transition-colors ${location === link.base ? "text-accent" : "text-gray-800 hover:text-accent"}`}>
                      {link.label}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}
      </nav>
      {/* REMOVED THE SPACER DIV HERE */}
    </>
  );
}