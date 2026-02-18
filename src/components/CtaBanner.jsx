import { Link } from "wouter";


export default function CtaBanner({
  heading = "Experience Nagar With Us",
  subtext = "Wake up to mountain views, enjoy peaceful surroundings, and feel genuine hospitality.",
  primaryLabel = "Explore Rooms",
  primaryHref = "/rooms",
  secondaryLabel = "Book Your Stay",
  secondaryHref = "/booking",
  gradientClass = "from-primary to-primary/80",
  className = "",
}) {
  return (
    <section
      className={`rounded-3xl bg-gradient-to-r ${gradientClass} px-8 py-12 text-center text-white shadow-xl ${className}`}
    >
      {/* heading */}
      <h3 className="text-3xl font-semibold">{heading}</h3>

      {/* subtext */}
      <p className="mt-3 text-white/85 max-w-xl mx-auto leading-relaxed">
        {subtext}
      </p>

      {/* buttons */}
      <div className="mt-6 flex flex-wrap justify-center gap-4">
        <Link
          href={primaryHref}
          className="rounded-xl bg-white text-primary px-6 py-3 font-medium hover:bg-white/90 transition-colors duration-200"
        >
          {primaryLabel}
        </Link>
        <Link
          href={secondaryHref}
          className="rounded-xl border border-white px-6 py-3 font-medium hover:bg-white hover:text-primary transition-colors duration-200"
        >
          {secondaryLabel}
        </Link>
      </div>
    </section>
  );
}
