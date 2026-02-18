
export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = "center",
  className = "",
}) {
  const alignClass = {
    center: "text-center mx-auto",
    left:   "text-left",
    right:  "text-right ml-auto",
  }[align] ?? "text-center mx-auto";

  return (
    <div className={`mb-16 ${alignClass} ${className}`}>
      {eyebrow && (
        <span className="text-xs font-semibold uppercase tracking-[0.35em] text-accent">
          {eyebrow}
        </span>
      )}
      {title && (
        <h2 className="mt-4 text-4xl font-bold md:text-5xl">{title}</h2>
      )}
      {subtitle && (
        <p className="mx-auto mt-5 max-w-2xl text-muted-foreground">{subtitle}</p>
      )}
    </div>
  );
}
