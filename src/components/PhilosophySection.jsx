import { Link } from "wouter";
import SectionHeader from "./SectionHeader";


export default function PhilosophySection({
  eyebrow = "Our Philosophy",
  title = "Designed Around the Landscape",
  paragraphs = [
    "We believe the true luxury of Hunza is its silence, scale and natural beauty. Our spaces are intentionally minimal so the mountains remain the main attraction.",
    "Local materials, warm hospitality and thoughtful details create a stay that feels calm, authentic and deeply personal.",
  ],
  ctaLabel = "Explore Facilities",
  ctaHref = "/facilities#facilities",
  image = "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?q=80&w=2070&auto=format&fit=crop",
  imageAlt = "Garden courtyard",
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
