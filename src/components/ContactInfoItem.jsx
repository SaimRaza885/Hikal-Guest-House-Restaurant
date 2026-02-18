/* =========================================================
   ContactInfoItem.jsx
   Single contact info row with icon bubble, title, lines
   Props:
     icon      — lucide-react icon component (required)
     title     — heading string e.g. "Phone" (required)
     lines     — array of strings to display (required)
     className — extra wrapper classes (optional)
========================================================= */
export default function ContactInfoItem({ icon: Icon, title, lines = [], className = "" }) {
  return (
    <div className={`flex items-start gap-4 ${className}`}>
      {/* icon bubble */}
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-accent/10">
        <Icon className="h-5 w-5 text-accent" />
      </div>

      {/* text */}
      <div>
        <h3 className="text-lg font-bold text-foreground">{title}</h3>
        {lines.map((line, i) => (
          <p key={i} className="text-muted-foreground text-sm leading-relaxed">
            {line}
          </p>
        ))}
      </div>
    </div>
  );
}
