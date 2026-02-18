import { Reveal } from "./Reveal";
import MenuItemCard from "./MenuItemCard";

/* =========================================================
   MenuSection.jsx
   Single menu category with heading + 2-col item grid
   Props:
     title       — category heading string (required)
     items       — array of { id, name, desc, price, image } (required)
     sectionIdx  — index used for staggered animation delay (default 0)
     className   — extra wrapper classes (optional)
========================================================= */
export default function MenuSection({ title, items = [], sectionIdx = 0, className = "" }) {
  if (!items.length) return null;

  return (
    <div className={`w-full ${className}`}>
      {/* category heading */}
      <h3 className="mb-4 text-2xl font-bold text-foreground">{title}</h3>

      {/* items grid */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {items.map((item, idx) => (
          <Reveal key={item.id} delay={80 + sectionIdx * 40 + idx * 120}>
            <MenuItemCard
              name={item.name}
              desc={item.desc}
              price={item.price}
              image={item.image}
            />
          </Reveal>
        ))}
      </div>
    </div>
  );
}
