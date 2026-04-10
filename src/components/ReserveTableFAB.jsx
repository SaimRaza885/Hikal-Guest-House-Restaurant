/* =========================================================
   ReserveTableFAB.jsx
   Fixed floating action button — "Reserve Table" anchor link
   Props:
     href      — scroll target href (default "#reserve-table")
     label     — button label text (default "Reserve Table")
     className — extra wrapper classes (optional)
========================================================= */
export default function ReserveTableFAB({
  href = "#reserve-table",
  label = "Reserve Table",
  className = "",
}) {
  return (
    <a
      href={href}
      className={`font-ui fixed bottom-5 right-4 z-40 inline-flex items-center rounded-full bg-accent px-4 py-2 text-xs font-semibold uppercase tracking-wide text-white shadow-lg shadow-accent/35 md:bottom-8 md:right-8 transition-transform hover:scale-105 ${className}`}
    >
      {label}
    </a>
  );
}
