import { Quote, Star } from "lucide-react";


export default function ReviewCard({ rating, comment, name, location, className = "" }) {
  return (
    <div className={`rounded-3xl border border-border p-8 shadow-lg bg-white ${className}`}>
      {/* quote icon */}
      <Quote className="mb-5 h-8 w-8 text-primary/20" />

      {/* stars */}
      <div className="mb-3 flex gap-1">
        {Array.from({ length: rating }).map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-accent text-accent" />
        ))}
      </div>

      {/* comment */}
      <p className="mb-6 text-sm text-muted-foreground leading-relaxed">"{comment}"</p>

      {/* reviewer */}
      <div className="font-semibold text-foreground">{name}</div>
      <div className="text-xs uppercase tracking-widest text-muted-foreground">
        {location || "Guest"}
      </div>
    </div>
  );
}
