/* =========================================================
   ExperienceFeatureCard.jsx
   Small feature card with icon, title, description
   Props:
     icon      — lucide-react icon component (required)
     title     — feature name string (required)
     desc      — short description string (required)
     className — extra wrapper classes (optional)
========================================================= */
export default function ExperienceFeatureCard({ icon: Icon, title, desc, className = "" }) {
  return (
    <article
      className={`rounded-xl border border-border/50 bg-[#FAF9F6] p-4 shadow-sm ${className}`}
    >
      {/* icon */}
      <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
        <Icon className="h-5 w-5" />
      </div>

      {/* title */}
      <h3 className="text-base font-semibold text-foreground">{title}</h3>

      {/* desc */}
      <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{desc}</p>
    </article>
  );
}
