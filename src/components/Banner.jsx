import { Star, ChevronDown } from "lucide-react";

function Banner({ 
  image, 
  title, 
  subtitle, 
  rating = 5, 
  ratingPlatform = "Booking.com", 
  ratingText = "Rated Exceptional",
  showRating = false,
  showScrollIndicator = true,
}) {
  return (
    <section className={`relative h-[50vh] md:h-[80vh] min-h-[400px] w-full overflow-hidden`}>
      {/* Background Image with Parallax Effect */}
      <div className="absolute inset-0">
        <img
          src={image}
          className="h-full w-full object-cover scale-105 animate-subtle-zoom"
          alt={title}
        />
      </div>

      {/* Enhanced Multi-layer Overlay for better readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
      <div className="absolute inset-0 bg-black/30" />

      {/* Content */}
      <div className="relative z-10 flex h-full items-center justify-center px-6 text-center text-white">
        <div className="max-w-4xl space-y-6 animate-fade-in-up">
          
          {/* Rating Badge */}
          {showRating && (
            <div className="inline-flex items-center justify-center gap-2 rounded-full bg-white/30 backdrop-blur-md px-5 py-2.5 text-sm font-medium border border-white/40 shadow-2xl">
              <div className="flex gap-1">
                {Array.from({ length: rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-white font-semibold">{ratingText}</span>
              <span className="text-white/80">•</span>
              <span className="text-white font-semibold">{ratingPlatform}</span>
            </div>
          )}

          {/* Title with better text shadow for readability */}
          <h1 className="text-5xl font-bold md:text-7xl lg:text-8xl leading-tight tracking-tight">
            <span className="text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)] [text-shadow:_2px_2px_8px_rgb(0_0_0_/_80%)]">
              {title}
            </span>
          </h1>

          {/* Decorative Line - brighter for visibility */}
          <div className="flex items-center justify-center gap-4">
            <div className="h-px w-16 bg-gradient-to-r from-transparent via-amber-400 to-amber-500"></div>
            <div className="h-2 w-2 rotate-45 bg-amber-400 shadow-lg shadow-amber-500/50"></div>
            <div className="h-px w-16 bg-gradient-to-l from-transparent via-amber-400 to-amber-500"></div>
          </div>

          {/* Subtitle - enhanced contrast */}
          {/* <p className="mt-6 text-lg md:text-xl lg:text-2xl text-white max-w-2xl mx-auto font-normal leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
            {subtitle}
          </p> */}

          {/* CTA Button (Optional) */}
          {/* <button className="mt-8 bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-full text-base font-semibold transition-all hover:-translate-y-0.5 hover:shadow-2xl shadow-lg">
            Explore Now
          </button> */}
        </div>
      </div>

      {/* Scroll Indicator - enhanced visibility */}
      {showScrollIndicator && (
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce">
          <div className="flex flex-col items-center gap-2 text-white">
            <span className="text-xs uppercase tracking-widest font-semibold drop-shadow-lg">Scroll</span>
            <ChevronDown className="h-6 w-6 drop-shadow-lg" />
          </div>
        </div>
      )}

      {/* Bottom Fade - stronger for better contrast */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/60 to-transparent pointer-events-none"></div>
    </section>
  );
}

export default Banner;