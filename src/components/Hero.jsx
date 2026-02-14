import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { Reveal } from "./Reveal";
import { images } from "../asserts/data";
import { Navigation } from "./Navigation";

const heroSlides = [
  images.hero_2,
  images.gallary_5,
  images.hero_3,
];

export function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000); // changes every 5000ms = 5 seconds
    return () => clearInterval(timer);
  }, []);


  // const slideIndicators = useMemo(() => heroSlides.map((_, idx) => idx), []);

  return (
    <>
    <Navigation/>
     <div className="h-screen w-full overflow-hidden">
      {/* Background slides */}
      {heroSlides.map((slide, idx) => (
        <div
        key={slide}
          className={`absolute inset-0 bg-cover bg-center  bg-no-repeat transition-opacity duration-1000 ${idx === activeSlide ? "opacity-100" : "opacity-0"}`}
          style={{ backgroundImage: `url('${slide}')` }}
        >
        {/* <div className="absolute inset-0 bg-gradient-to-b from-black via-black/30 to-black/60" /> */}


        </div>
      ))}

   
      {/* Scroll indicator */}
      <div className="pointer-events-none absolute inset-x-0 bottom-10 flex justify-center">
        <div className="flex flex-col items-center text-white/80">
          <span className="mb-2 text-xs uppercase tracking-[0.3em]">Scroll</span>
          <div className="h-10 w-[2px] overflow-hidden rounded-full bg-white/25">
            <div className="h-10 w-full animate-[scrollIndicator_1.4s_ease-in-out_infinite] bg-white" />
          </div>
        </div>
      </div>
    </div>
      </>
  );
}