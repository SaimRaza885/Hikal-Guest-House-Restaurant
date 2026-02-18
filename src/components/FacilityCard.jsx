
export default function FacilityCard({ icon: Icon, name, desc, className = "" }) {
  return (
    <div
      className={`group relative overflow-hidden rounded-2xl border border-border/50 bg-white/80 backdrop-blur p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${className}`}
    >
      {/* hover gradient overlay */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl pointer-events-none" />

      <div className="relative">
        {/* icon bubble */}
        <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-110">
          <Icon className="h-5 w-5" />
        </div>

        {/* name */}
        <h3 className="font-semibold text-lg text-foreground">{name}</h3>

        {/* description */}
        <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}
