import { useEffect, useState } from "react";
import { images } from "../asserts/data";
import { Navigation } from "./Navigation";

const heroSlides = [
  images.hero_2,
  "https://img1.wsimg.com/isteam/ip/d458d651-014c-4559-94f5-d4cdd54c7a6f/DJI_0019.jpg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:1160,h:652",
  images.hero_3,
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

      <div
        className="relative w-full overflow-hidden bg-black   h-[450px] md:h-[500px] lg:h-screen"
      // style={{
      //   height: "100svh",
      //   minHeight: "56.25vw", // 16:9 ratio — forces landscape on portrait phones
      // }}
      >
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
              className="absolute inset-0 w-full h-full"
              style={{
                objectFit: "cover",
                objectPosition: "center center",
                animation: idx === activeSlide ? "subtleZoom 6s ease-in-out forwards" : "none",
              }}
            />
          </div>
        ))}
      </div>

      <style>{`
        @keyframes subtleZoom {
          from { transform: scale(1);   }
          to   { transform: scale(1.07); }
        }
      `}</style>
    </>
  );
}