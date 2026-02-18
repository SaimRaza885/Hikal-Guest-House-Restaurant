import { Star } from "lucide-react";

/* =========================================================
   RestaurantReviewCard.jsx
   Review card with image, name, stars, comment
   Props:
     name      — reviewer name string (required)
     rating    — number 1–5 (required)
     comment   — review text string (required)
     image     — food/ambience image src (required)
     className — extra wrapper classes (optional)
========================================================= */
export default function RestaurantReviewCard({ name, rating, comment, image, className = "" }) {
  return (
    <article
      className={`md:min-w-[82%] sm:w-auto w-[250px] snap-center overflow-hidden rounded-2xl border border-border/50 bg-white shadow-sm md:min-w-0 ${className}`}
    >
      {/* image */}
      <img
        src={image}
        alt={name}
        loading="lazy"
        className="h-40 w-full object-cover"
      />

      {/* content */}
      <div className="p-4">
        <div className="mb-2 flex items-center justify-between">
          <p className="font-semibold text-foreground">{name}</p>
          <div className="flex">
            {Array.from({ length: rating }).map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-accent text-accent" />
            ))}
          </div>
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed">{comment}</p>
      </div>
    </article>
  );
}
