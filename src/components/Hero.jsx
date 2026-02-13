import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { Reveal } from "./Reveal";
import { images } from "../asserts/data";

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
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background slides */}
      {heroSlides.map((slide, idx) => (
        <div
          key={slide}
          className={`absolute inset-0 bg-cover bg-center  bg-no-repeat transition-opacity duration-1000 ${idx === activeSlide ? "opacity-100" : "opacity-0"}`}
          style={{ backgroundImage: `url('${slide}')` }}
        >
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/30 to-black/60" />


        </div>
      ))}

      {/* Hero content - LEFT aligned */}
      <div className="container-custom text-center items-center relative flex h-full flex-col  sm:items-start justify-center pt-20 pl-8 md:pl-16 sm:text-left">


        <Reveal delay={220}>
          <h1 className="mb-6 max-w-4xl text-5xl font-extrabold leading-tight text-white md:text-6xl lg:text-7xl">
            Experience Serenity <br />
            <span className="font-light  text-white">Above the <i>Clouds</i></span>
          </h1>
        </Reveal>

        <Reveal delay={320}>
          <p className="mb-10 max-w-2xl text-lg font-light text-white md:text-xl">
            A luxury retreat nestled in Nagar Valley with breathtaking views of Rakaposhi. Your perfect escape begins here.
          </p>
        </Reveal>

        <Reveal delay={420}>
          <div className="flex flex-col gap-4 sm:flex-row">
            {/* <Link
              href="/booking"
              className="font-ui rounded-full bg-accent px-8 py-4 text-lg text-white transition-transform transition-colors hover:bg-accent/90 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
            >
              Check Availability
            </Link> */}
            <Link
              href="/rooms"
              className="font-ui inline-flex items-center rounded-full border border-white  px-8 py-4 text-lg  backdrop-blur-sm transition-transform transition-colors bg-white text-primary hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
            >
              View Rooms <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </Reveal>

        {/* Slide indicators */}
        {/* <div className="absolute bottom-24 flex items-center gap-2">
          {slideIndicators.map((idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setActiveSlide(idx)}
              aria-label={`Show slide ${idx + 1}`}
              className={`h-2 rounded-full transition-all ${idx === activeSlide ? "w-8 bg-accent" : "w-2 bg-white/60"}`}
            />
          ))}
        </div> */}
      </div>

      {/* Scroll indicator */}
      <div className="md:block hidden pointer-events-none absolute inset-x-0 bottom-10 flex justify-center">
        <div className="flex flex-col items-center text-white/80">
          <span className="mb-2 text-xs uppercase tracking-[0.3em]">Scroll</span>
          <div className="h-10 w-[2px] overflow-hidden rounded-full bg-white/25">
            <div className="h-10 w-full animate-[scrollIndicator_1.4s_ease-in-out_infinite] bg-white" />
          </div>
        </div>
      </div>
    </div>
  );
}