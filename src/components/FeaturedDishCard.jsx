/* =========================================================
   FeaturedDishCard.jsx
   Single featured dish card with image, badge, title, desc, price
   Props:
     title     — dish name string (required)
     desc      — short description string (required)
     price     — price string e.g. "PKR 3,800" (required)
     badge     — label on image e.g. "Chef Special" (optional)
     image     — image src string (required)
     className — extra wrapper classes (optional)
========================================================= */
export default function FeaturedDishCard({ title, desc, price, badge, image, className = "" }) {
  return (
    <article
      className={`group min-w-[82%] md:w-auto w-[300px] overflow-hidden rounded-2xl border border-border/50 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl md:min-w-0 ${className}`}
    >
      {/* image */}
      <div className="relative">
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {badge && (
          <span className="absolute left-3 top-3 rounded-full bg-primary/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-white">
            {badge}
          </span>
        )}
      </div>

      {/* content */}
      <div className="p-4">
        <h3 className="text-lg font-semibold text-foreground">{title}</h3>
        <p className="mt-1 text-sm text-muted-foreground">{desc}</p>
        <p className="mt-3 text-sm font-semibold text-accent">{price}</p>
      </div>
    </article>
  );
}
