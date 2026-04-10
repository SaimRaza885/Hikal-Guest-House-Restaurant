import { ChefHat } from "lucide-react";

/* =========================================================
   ChefStorySection.jsx
   Two-column: image left, story content right
   Props:
     image       — image src string (optional)
     imageAlt    — alt text for image (optional)
     badge       — small label above heading (optional)
     title       — section heading (optional)
     description — paragraph text (optional)
     className   — extra wrapper classes (optional)
========================================================= */
export default function ChefStorySection({
  image = "https://images.unsplash.com/photo-1607631568010-a87245c0daf8?auto=format&fit=crop&q=80&w=1600",
  imageAlt = "Chef story",
  badge = "Our Story",
  title = "Crafted by Passionate Chefs",
  description = "Our chefs bring authentic regional flavors and a warm family touch to every meal, balancing local ingredients with international technique for a premium but welcoming dining experience.",
  className = "",
}) {
  return (
    <section className={`bg-white py-20 ${className}`}>
      <div className="container-custom grid grid-cols-1 gap-8 lg:grid-cols-2">

        {/* image */}
        <img
          src={image}
          alt={imageAlt}
          loading="lazy"
          className="h-[360px] w-full rounded-2xl object-cover"
        />

        {/* content */}
        <div className="flex flex-col justify-center rounded-2xl border border-border/50 bg-muted/15 p-8">
          {badge && (
            <span className="mb-3 inline-flex w-fit items-center rounded-full bg-accent/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              <ChefHat className="mr-2 h-4 w-4" />
              {badge}
            </span>
          )}
          <h2 className="text-3xl font-bold md:text-4xl text-foreground">{title}</h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">{description}</p>
        </div>

      </div>
    </section>
  );
}
