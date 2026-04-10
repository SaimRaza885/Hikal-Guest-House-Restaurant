
export default function RatingPlatformCard({ name, score, label, color = "from-primary to-primary/80", className = "" }) {
  return (
    <div
      className={`w-64 overflow-hidden rounded-2xl border border-border/50 shadow-sm bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${className}`}
    >
      {/* color top bar */}
      <div className={`h-2 bg-gradient-to-r ${color}`} />

      <div className="p-6 text-center">
        {/* platform name */}
        <p className="text-sm text-muted-foreground font-medium">{name}</p>

        {/* score */}
        <p className="text-3xl font-bold tracking-tight mt-2 text-foreground">{score}</p>

        {/* label badge */}
        <span className="mt-3 inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
          {label}
        </span>
      </div>
    </div>
  );
}
