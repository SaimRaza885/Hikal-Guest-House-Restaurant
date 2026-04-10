import DetailBlock from "./DetailBlock";

/* =========================================================
   RoomFaq.jsx
   Room-specific FAQ accordion-style list
   Props:
     faq       — array of { id, q, a } (required)
     className — extra wrapper classes (optional)
========================================================= */
export default function RoomFaq({ faq = [], className = "" }) {
  if (!faq.length) return null;

  return (
    <DetailBlock title="Room Specific FAQ" className={className}>
      <div className="space-y-3">
        {faq.map((item) => (
          <div
            key={item.id}
            className="rounded-lg border border-border/60 bg-muted/10 p-4"
          >
            <h4 className="font-semibold text-foreground">{item.q}</h4>
            <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{item.a}</p>
          </div>
        ))}
      </div>
    </DetailBlock>
  );
}
