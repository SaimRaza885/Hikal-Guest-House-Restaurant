import { Star } from "lucide-react";

/* =========================================================
   RestaurantReviewCard.jsx (PRO VERSION)
========================================================= */

export default function RestaurantReviewCard({
  name,
  rating = 5,
  comment,
  image,
  className = "",
}) {
  return (
    <article
      className={`
        group
        md:min-w-0
        w-[270px] md:w-auto
        snap-center
        overflow-hidden
        rounded-2xl
        border border-border/50
        bg-white
        shadow-sm
        transition-all duration-300
        hover:-translate-y-1
        hover:shadow-xl
        ${className}
      `}
    >
      {/* IMAGE */}
      <div className="relative h-44 w-full overflow-hidden">
        <img
          src={image}
          alt={name}
          loading="lazy"
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />

        {/* gradient overlay */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
      </div>

      {/* CONTENT */}
      <div className="space-y-3 p-5">

        {/* HEADER */}
        <div className="flex items-center justify-between">
          <h3 className="font-semibold text-foreground">
            {name}
          </h3>

          {/* STARS */}
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-4 w-4 ${
                  i < rating
                    ? "fill-amber-400 text-amber-400"
                    : "text-muted-foreground/30"
                }`}
              />
            ))}
          </div>
        </div>

        {/* COMMENT */}
        <p className="text-sm leading-relaxed text-muted-foreground line-clamp-4">
          {comment}
        </p>
      </div>
    </article>
  );
}