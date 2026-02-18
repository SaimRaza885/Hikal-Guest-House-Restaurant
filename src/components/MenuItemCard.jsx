/* =========================================================
   MenuItemCard.jsx
   Horizontal menu item with thumbnail, name, desc, price
   Props:
     name      — item name string (required)
     desc      — short description string (required)
     price     — price string (required)
     image     — image src string (required)
     className — extra wrapper classes (optional)
========================================================= */
export default function MenuItemCard({ name, desc, price, image, className = "" }) {
  return (
    <article
      className={`flex gap-4 rounded-2xl border border-border/50 bg-white p-4 shadow-sm transition-all duration-300 hover:shadow-md ${className}`}
    >
      {/* thumbnail */}
      <img
        src={image}
        alt={name}
        loading="lazy"
        className="h-24 w-24 rounded-lg object-cover flex-shrink-0"
      />

      {/* content */}
      <div className="flex-1 min-w-0">
        <h4 className="font-semibold text-foreground">{name}</h4>
        <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{desc}</p>
        <p className="mt-2 text-sm font-semibold text-accent">{price}</p>
      </div>
    </article>
  );
}
