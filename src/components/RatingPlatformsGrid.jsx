import RatingPlatformCard from "./RatingPlatformCard";

/* =========================================================
   DATA — override via props if needed
========================================================= */
const DEFAULT_PLATFORMS = [
  {
    name: "Booking.com",
    score: "9.6 / 10",
    label: "Exceptional",
    color: "from-primary to-primary/80",
  },
  {
    name: "Google",
    score: "4.8 / 5",
    label: "Excellent",
    color: "from-accent to-accent/80",
  },
  {
    name: "TripAdvisor",
    score: "4.7 / 5",
    label: "Highly Rated",
    color: "from-secondary to-secondary/80",
  },
];

export default function RatingPlatformsGrid({
  platforms = DEFAULT_PLATFORMS,
  title = "Guest Ratings",
  className = "",
}) {
  return (
    <section className={`w-full ${className}`}>
      {title && (
        <h2 className="text-3xl font-bold text-center mb-10 text-foreground">
          {title}
        </h2>
      )}

      <div className="flex flex-wrap justify-center gap-8">
        {platforms.map((platform, i) => (
          <RatingPlatformCard key={i} {...platform} />
        ))}
      </div>
    </section>
  );
}
