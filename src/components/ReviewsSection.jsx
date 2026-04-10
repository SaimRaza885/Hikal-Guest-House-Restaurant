import { useState, useEffect, useRef } from "react";
import { PageLoader } from "./PageLoader";
import SectionHeader from "./SectionHeader";
import ReviewCard from "./ReviewCard";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function ReviewsSection({
  reviews = [],
  isLoading = false,
  className = "",
}) {
  const [offset, setOffset] = useState(0);
  const [paused, setPaused] = useState(false);
  const rafRef = useRef(null);
  const offsetRef = useRef(0);
  const pausedRef = useRef(false);
  const speed = 0.4;

  const CARD_WIDTH = 380;
  const GAP = 32;
  const STEP = CARD_WIDTH + GAP;
  const total = reviews.length;
  const doubled = [...reviews, ...reviews];

  useEffect(() => {
    pausedRef.current = paused;
  }, [paused]);

  useEffect(() => {
    if (total === 0) return;
    const totalWidth = STEP * total;

    const tick = () => {
      if (!pausedRef.current) {
        offsetRef.current += speed;
        if (offsetRef.current >= totalWidth) {
          offsetRef.current -= totalWidth;
        }
        setOffset(offsetRef.current);
      }
      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [total]);

  const shiftLeft = () => {
    offsetRef.current = (offsetRef.current + STEP) % (STEP * total);
    setOffset(offsetRef.current);
  };

  const shiftRight = () => {
    offsetRef.current = (offsetRef.current - STEP + STEP * total) % (STEP * total);
    setOffset(offsetRef.current);
  };

  return (
    <section
      className={`bg-white py-28 ${className}`}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="container-custom">
        <SectionHeader eyebrow="Guest Reviews" title="Loved by Travelers" />

        {isLoading ? (
          <PageLoader label="Loading reviews" />
        ) : (
          <div className="relative">

            <div className="overflow-hidden w-full">
              <div
                className="flex"
                style={{
                  gap: `${GAP}px`,
                  transform: `translateX(-${offset}px)`,
                  willChange: "transform",
                  width: `${STEP * doubled.length}px`,
                }}
              >
                {doubled.map((review, idx) => (
                  <div
                    key={`${review.id}-${idx}`}
                    style={{ minWidth: `${CARD_WIDTH}px` }}
                  >
                    <ReviewCard
                      rating={review.rating}
                      comment={review.comment}
                      name={review.name}
                      location={review.location}
                      image={review.image ?? null}
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-center gap-4 mt-12">
              

              <div className="flex gap-2">
                {reviews.map((_, idx) => {
                  const active = Math.floor(offsetRef.current / STEP) % total === idx;
                  return (
                    <button
                      key={idx}
                      onClick={() => {
                        offsetRef.current = STEP * idx;
                        setOffset(STEP * idx);
                      }}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        active ? "w-4 bg-gray-800" : "w-2 bg-gray-300"
                      }`}
                    />
                  );
                })}
              </div>
 
            </div>

          </div>
        )}
      </div>
    </section>
  );
}