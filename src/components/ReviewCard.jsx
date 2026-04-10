import { Quote, Star, User } from "lucide-react";

export default function ReviewCard({ rating, comment, name, location, image, className = "" }) {
  return (
    <div className={`rounded-3xl border border-border p-8 shadow-lg bg-white ${className}`}>
      <Quote className="mb-5 h-8 w-8 text-primary/20" />

      <div className="mb-3 flex gap-1">
        {Array.from({ length: rating }).map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-accent text-accent" />
        ))}
      </div>

      <p className="mb-6 text-sm text-muted-foreground leading-relaxed">"{comment}"</p>

      <div className="flex items-center gap-3">
        {image ? (
          <img
            src={image}
            alt={name}
            className="h-10 w-10 rounded-full object-cover border border-border"
          />
        ) : (
          <div className="h-10 w-10 rounded-full border border-border bg-muted flex items-center justify-center shrink-0">
            <User className="h-5 w-5 text-muted-foreground" />
          </div>
        )}

        <div>
          <div className="font-semibold text-foreground">{name}</div>
          <div className="text-xs uppercase tracking-widest text-muted-foreground">
            {location || "Guest"}
          </div>
        </div>
      </div>
    </div>
  );
}