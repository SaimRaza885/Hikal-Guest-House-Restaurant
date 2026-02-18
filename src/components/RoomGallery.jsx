import { Expand } from "lucide-react";

/* =========================================================
   RoomGallery.jsx
   Main image viewer with thumbnail strip + fullscreen trigger
   Props:
     gallery          — array of { id, src, category }
     activeIndex      — currently selected index
     onSelect         — fn(index) called on thumbnail click
     onFullscreen     — fn() called on fullscreen button click
     roomTitle        — string used in alt text
     className        — extra wrapper classes (optional)
========================================================= */
export default function RoomGallery({
  gallery = [],
  activeIndex = 0,
  onSelect,
  onFullscreen,
  roomTitle = "Room",
  className = "",
}) {
  const activeImage = gallery[activeIndex] || null;

  return (
    <section className={`rounded-2xl border border-border/50 bg-white p-4 md:p-6 ${className}`}>
      {/* main image */}
      <div className="relative overflow-hidden rounded-xl">
        {activeImage && (
          <img
            src={activeImage.src}
            alt={`${roomTitle} - ${activeImage.category}`}
            className="h-[320px] w-full object-cover md:h-[520px]"
          />
        )}
        <button
          type="button"
          onClick={onFullscreen}
          className="absolute right-3 top-3 inline-flex items-center rounded-full bg-black/60 px-3 py-1.5 text-xs text-white backdrop-blur-sm transition-colors hover:bg-black/80"
        >
          <Expand className="mr-1.5 h-3.5 w-3.5" /> Fullscreen
        </button>
      </div>

      {/* thumbnail strip */}
      <div className="mt-4 flex gap-3 overflow-x-auto pb-2">
        {gallery.map((img, idx) => (
          <button
            key={img.id}
            type="button"
            onClick={() => onSelect?.(idx)}
            className={`min-w-[130px] overflow-hidden rounded-lg border transition-colors ${
              idx === activeIndex ? "border-primary" : "border-border"
            }`}
          >
            <img
              src={img.src}
              alt={img.category}
              className="h-20 w-full object-cover"
              loading="lazy"
            />
            <span className="block px-2 py-1 text-left text-xs text-muted-foreground">
              {img.category}
            </span>
          </button>
        ))}
      </div>
    </section>
  );
}
