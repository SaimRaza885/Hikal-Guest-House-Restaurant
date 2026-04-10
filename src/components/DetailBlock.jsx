/* =========================================================
   DetailBlock.jsx
   Reusable white card wrapper with heading + content slot
   Props:
     title     — section heading string (required)
     children  — content (required)
     className — extra wrapper classes (optional)
========================================================= */
export default function DetailBlock({ title, children, className = "" }) {
  return (
    <section className={`rounded-2xl border border-border/50 bg-white p-6 md:p-8 ${className}`}>
      <h2 className="text-2xl font-bold md:text-3xl text-foreground">{title}</h2>
      <div className="mt-5">{children}</div>
    </section>
  );
}
