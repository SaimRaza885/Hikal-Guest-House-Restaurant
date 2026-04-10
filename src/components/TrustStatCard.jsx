
export default function TrustStatCard({ icon: Icon, value, label, className = "" }) {
  return (
    <div
      className={`group relative overflow-hidden rounded-2xl border border-border/50 bg-white/70 backdrop-blur p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${className}`}
    >
      {/* hover glow overlay */}
      <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl" />

      <div className="relative flex flex-col items-center gap-3">
        {/* icon bubble */}
        <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-110">
          <Icon className="h-6 w-6" />
        </div>

        {/* value */}
        <p className="text-2xl font-bold tracking-tight text-foreground">{value}</p>

        {/* label */}
        <p className="text-sm text-muted-foreground leading-snug">{label}</p>
      </div>
    </div>
  );
}
