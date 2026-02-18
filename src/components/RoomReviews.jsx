import { Star } from "lucide-react";
import DetailBlock from "./DetailBlock";

/* =========================================================
   RoomReviews.jsx
   List of guest reviews for a specific room
   Props:
     reviews   — array of { id, name, rating, comment } (required)
     className — extra wrapper classes (optional)
========================================================= */
export default function RoomReviews({ reviews = [], className = "" }) {
  return (
    <DetailBlock title="Guest Reviews for This Room" className={className}>
      {reviews.length ? (
        <div className="space-y-4">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="rounded-xl border border-border/60 bg-muted/10 p-4"
            >
              <div className="mb-2 flex items-center justify-between">
                <p className="font-semibold text-foreground">{review.name}</p>
                <div className="flex">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <Star
                      key={`${review.id}-${i}`}
                      className="h-4 w-4 fill-accent text-accent"
                    />
                  ))}
                </div>
              </div>
              <p className="text-sm text-muted-foreground">{review.comment}</p>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-sm text-muted-foreground">No reviews yet for this room.</p>
      )}
    </DetailBlock>
  );
}
