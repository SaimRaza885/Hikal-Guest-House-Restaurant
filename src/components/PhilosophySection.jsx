import { Link } from "wouter";
import SectionHeader from "./SectionHeader";


export default function PhilosophySection({
  eyebrow = "Our Philosophy",
  title = "Where Rakaposhi Meets Warm Hospitality",
  paragraphs = [
    "At Hikal Guest House, we believe the finest luxury in Nagar Valley is waking up to an unobstructed view of Rakaposhi, stepping into a cherry blossom garden, and being welcomed by a family that genuinely cares. Our spaces are kept simple and comfortable so the mountain always remains the main attraction.",
     ,
  ],
  ctaLabel = "Explore Facilities",
  ctaHref = "/about#facilities",
  image =   "https://cf.bstatic.com/xdata/images/hotel/max1024x768/815213298.jpg?k=c1cf0b687d2c2dad1bfe8c13f769e6c1d06ea6cf283a1ff9a0a829779ca736d9&o=",

  imageAlt = "Hikal Guest House garden with Rakaposhi mountain view",
  className = "",
}) {
  return (
    <section className={`py-28 ${className}`}>
      <div className="container-custom grid items-center gap-14 lg:grid-cols-2">

        {/* Text */}
        <div>
          {eyebrow && (
            <span className="text-xs font-semibold uppercase tracking-[0.35em] text-accent">
              {eyebrow}
            </span>
          )}
          <h2 className="mt-4 text-4xl font-bold leading-tight md:text-5xl">{title}</h2>

          {paragraphs.map((para, i) => (
            <p key={i} className="mt-4 text-muted-foreground leading-relaxed">
              {para}
            </p>
          ))}

          <Link
            href={ctaHref}
            className="font-ui mt-8 inline-block rounded-full border border-primary px-8 py-3 font-medium text-primary transition hover:bg-primary hover:text-white"
          >
            {ctaLabel}
          </Link>
        </div>

        {/* Image */}
        <div className="relative h-[420px] overflow-hidden rounded-3xl">
          <img
            src={image}
            alt={imageAlt}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        </div>

      </div>
    </section>
  );
}
