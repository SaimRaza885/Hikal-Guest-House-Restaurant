import { Link } from "wouter";
import { PageLoader } from "./PageLoader";
import DetailBlock from "./DetailBlock";

/* =========================================================
   SimilarRooms.jsx
   Grid of 3 similar room cards linking to their detail pages
   Props:
     rooms     — array of room objects { id, slug, title, images, price }
     isLoading — boolean loading state
     className — extra wrapper classes (optional)
========================================================= */
export default function SimilarRooms({ rooms = [], isLoading = false, className = "" }) {
  return (
    <DetailBlock title="Similar Rooms Suggestion" className={className}>
      {isLoading ? (
        <PageLoader label="Loading similar rooms" />
      ) : (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {rooms.map((item) => (
            <Link
              key={item.id}
              href={`/rooms/${item.slug}`}
              className="rounded-xl border border-border/60 bg-muted/10 p-4 transition-colors hover:bg-muted/20 block"
            >
              <img
                src={item.images?.[0]}
                alt={item.title}
                loading="lazy"
                className="h-28 w-full rounded-lg object-cover"
              />
              <p className="mt-3 text-sm font-semibold line-clamp-2 text-foreground">
                {item.title}
              </p>
              <p className="text-xs text-muted-foreground">
                PKR {item.price?.toLocaleString()} / night
              </p>
            </Link>
          ))}
        </div>
      )}
    </DetailBlock>
  );
}
