import { useState, useEffect, useCallback } from "react";
import { images } from "../asserts/data";

export function TrustBanner() {
  const trustImages = [
    images.book_main_img,
    images.book_1,
    images.book_2,
  ];

  const [current, setCurrent] = useState(0);

  // Move to previous slide
  const prevSlide = useCallback(() => {
    setCurrent((prev) => (prev === 0 ? trustImages.length - 1 : prev - 1));
  }, [trustImages.length]);

  // Move to next slide
  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev === trustImages.length - 1 ? 0 : prev + 1));
  }, [trustImages.length]);

  // Auto-play effect
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000); // change slide every 3 seconds

    return () => clearInterval(interval); // cleanup on unmount
  }, [nextSlide]);

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-8">
          Trusted by Guests on Major Travel Platform
        </h2>

        {/* Slider */}
        <div className="relative max-h-[400px] overflow-hidden rounded-2xl shadow-lg">
          <img
            src={trustImages[current]}
            alt={`Slide ${current + 1}`}
            className="w-full h-full object-cover transition-transform duration-500 ease-in-out"
          />

          {/* Controls */}
          <button
            onClick={prevSlide}
            className="absolute left-3 top-1/2 -translate-y-1/2 bg-white px-3 py-2 rounded-lg shadow hover:bg-gray-100 transition"
          >
            ‹
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-3 top-1/2 -translate-y-1/2 bg-white px-3 py-2 rounded-lg shadow hover:bg-gray-100 transition"
          >
            ›
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-4">
          {trustImages.map((_, i) => (
            <div
              key={i}
              className={`h-2 w-2 rounded-full transition-colors duration-300 ${
                i === current ? "bg-black" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}