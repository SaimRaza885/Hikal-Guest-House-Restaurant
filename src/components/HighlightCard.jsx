
export default function HighlightCard({ icon: Icon, title, text, className = "" }) {
  return (
    <div
      className={`group relative overflow-hidden rounded-3xl border border-border/60 bg-white p-8 shadow-lg transition hover:-translate-y-1 hover:shadow-2xl ${className}`}
    >
      {/* icon bubble */}
      <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary transition group-hover:bg-primary group-hover:text-white">
        <Icon className="h-6 w-6" />
      </div>

      {/* title */}
      <h3 className="mb-3 text-xl font-semibold text-foreground">{title}</h3>

      {/* text */}
      <p className="text-sm text-muted-foreground leading-relaxed">{text}</p>
    </div>
  );
}
