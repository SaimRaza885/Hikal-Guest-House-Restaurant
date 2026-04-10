import { useEffect, useState } from "react";
import { images } from "../asserts/data";
import { Navigation } from "./Navigation";
import { ChevronDown } from "lucide-react";

const heroSlides = [
  images.hero_2,
  images.gallary_7,
  images.gallary_5,
];

export function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <Navigation />

      <div className="relative w-full overflow-hidden bg-black h-[400px] md:h-[500px] lg:min-h-screen">
        {heroSlides.map((slide, idx) => (
          <div
            key={idx}
            className="absolute inset-0 transition-opacity duration-1000"
            style={{
              opacity: idx === activeSlide ? 1 : 0,
              zIndex: idx === activeSlide ? 2 : 1,
            }}
          >
            <img
              src={slide}
              alt={`Hikal Guest House ${idx + 1}`}
              className="absolute inset-0 w-full h-full object-cover object-center"
            />
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/25" />
          </div>
        ))}
 
      </div>
    </>
  );
}