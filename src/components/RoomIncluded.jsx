import DetailBlock from "./DetailBlock";

/* =========================================================
   RoomIncluded.jsx
   Grid of included/optional service badges
   Props:
     included  — array of { id, text, extra: boolean } (required)
     className — extra wrapper classes (optional)
========================================================= */
export default function RoomIncluded({ included = [], className = "" }) {
  return (
    <DetailBlock title="Included / Optional Services" className={className}>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {included.map((item) => (
          <div
            key={item.id}
            className="rounded-lg border border-border/60 bg-muted/10 px-4 py-3 text-sm"
          >
            <span className="font-medium text-foreground">{item.text}</span>
            <span className="ml-2 text-xs text-muted-foreground">
              {item.extra ? "(extra charge)" : "(included)"}
            </span>
          </div>
        ))}
      </div>
    </DetailBlock>
  );
}
