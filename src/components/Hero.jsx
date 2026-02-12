import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { Reveal } from "./Reveal";

const heroSlides = [
  "https://cf.bstatic.com/xdata/images/hotel/max1024x768/815214581.jpg?k=afbb06422b5b6047a8325ff7b50b0c17dc81ab0b230e26afb07c2cc1ceaa0214&o=",

  "https://cf.bstatic.com/xdata/images/hotel/max1024x768/452029626.jpg?k=66d32b16b1e467bee67a2d31cd2d16cf818bd54732fcc505ee7585494f1123b1&o="
  ,
  "https://cf.bstatic.com/xdata/images/hotel/max1024x768/814322816.jpg?k=f0602caf12c8663134ffc7f3cadb9c66ce42601100427a92cc03badd3516d89d&o=",
];

export function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000); // changes every 5000ms = 5 seconds
    return () => clearInterval(timer);
  }, []);


  const slideIndicators = useMemo(() => heroSlides.map((_, idx) => idx), []);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background slides */}
      {heroSlides.map((slide, idx) => (
        <div
          key={slide}
          className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${idx === activeSlide ? "opacity-100" : "opacity-0"}`}
          style={{ backgroundImage: `url('${slide}')` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/60" />
        </div>
      ))}

      {/* Hero content - LEFT aligned */}
      <div className="container-custom relative flex h-full flex-col items-start justify-center pt-20 pl-8 md:pl-16 text-left">
        <Reveal delay={100}>
          <span className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-accent md:text-base">
            Welcome to Hunza Valley
          </span>
        </Reveal>

        <Reveal delay={220}>
          <h1 className="mb-6 max-w-4xl text-4xl font-bold leading-tight text-white md:text-6xl lg:text-7xl">
            Experience Serenity <br />
            <span className="font-light italic text-white">Above the Clouds</span>
          </h1>
        </Reveal>

        <Reveal delay={320}>
          <p className="mb-10 max-w-2xl text-lg font-light text-white/90 md:text-xl">
            A luxury retreat nestled in Nagar Valley with breathtaking views of Rakaposhi. Your perfect escape begins here.
          </p>
        </Reveal>

        <Reveal delay={420}>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Link
              href="/booking"
              className="font-ui rounded-full bg-accent px-8 py-4 text-lg text-white transition-transform transition-colors hover:bg-accent/90 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
            >
              Check Availability
            </Link>
            <Link
              href="/rooms#rooms"
              className="font-ui inline-flex items-center rounded-full border border-white bg-transparent px-8 py-4 text-lg text-white backdrop-blur-sm transition-transform transition-colors hover:bg-white hover:text-primary hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
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
      <div className="pointer-events-none absolute inset-x-0 bottom-10 flex justify-center">
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
