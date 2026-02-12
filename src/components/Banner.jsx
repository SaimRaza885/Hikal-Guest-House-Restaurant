import { Star } from "lucide-react";

function Banner({ 
  image, 
  title, 
  subtitle, 
  rating = 5, 
  ratingPlatform = "Booking.com", 
  ratingText = "Rated Exceptional" 
}) {
  return (
    <section className="relative h-[75vh] min-h-[520px] w-full overflow-hidden">
      {/* Background Image */}
      <img
        src={image}
        className="absolute inset-0 h-full w-full object-cover brightness-50"
        alt={title}
      />

      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />

      {/* Content */}
      <div className="relative z-10 flex h-full items-center justify-center px-6 text-center text-white">
        <div className="max-w-3xl space-y-4">
          
          {/* Rating Badge */}
          <p className="inline-flex items-center justify-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm">
            {Array.from({ length: rating }).map((_, i) => (
              <Star key={i} className="h-4 w-4 text-yellow-400" />
            ))}
            {ratingText} on {ratingPlatform}
          </p>

          {/* Title */}
          <h1 className="text-4xl font-bold md:text-6xl leading-tight">
            {title}
          </h1>

          {/* Subtitle */}
          <p className="mt-4 text-lg text-white/85">
            {subtitle}
          </p>
        </div>
      </div>
    </section>
  );
}

export default Banner;
