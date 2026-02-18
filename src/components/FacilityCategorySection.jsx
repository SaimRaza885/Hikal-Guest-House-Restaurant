import FacilityCard from "./FacilityCard";

export default function FacilityCategorySection({ title, items = [], className = "" }) {
  if (!items.length) return null;

  return (
    <div className={`w-full ${className}`}>
      {/* category heading */}
      <h3 className="text-2xl font-semibold mb-6 text-foreground">{title}</h3>

      {/* cards grid */}
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item, idx) => (
          <FacilityCard key={idx} {...item} />
        ))}
      </div>
    </div>
  );
}
