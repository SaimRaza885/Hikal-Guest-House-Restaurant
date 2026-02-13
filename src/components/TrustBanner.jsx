import { useState } from "react";

export function TrustBanner() {
  const images = [
    "https://www.vrmintel.com/wp-content/uploads/2019/10/Booking.com-star-rating-roll-out.png",
    "https://cdn.prod.website-files.com/62b1b17308b0d74291186304/63e062df260986496831f843_tailored-listing-booking-com-user.png",
    "https://www.vrmintel.com/wp-content/uploads/2019/10/Booking.com-star-rating-roll-out.png",
  
  ];

  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 text-center">
        
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-8">
          Trusted by Guests on Major Travel Platforms
        </h2>

        {/* Slider */}
        <div className="relative max-h-[400px] overflow-hidden">
          <img
            src={images[current]}
            alt="Guest reviews"
            className="w-full rounded-2xl shadow-lg"
          />

          {/* Controls */}
          <button
            onClick={prevSlide}
            className="absolute left-3 top-1/2 -translate-y-1/2 bg-white px-3 py-2 rounded-lg shadow"
          >
            ‹
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-3 top-1/2 -translate-y-1/2 bg-white px-3 py-2 rounded-lg shadow"
          >
            ›
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-4">
          {images.map((_, i) => (
            <div
              key={i}
              className={`h-2 w-2 rounded-full ${
                i === current ? "bg-black" : "bg-gray-300"
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
