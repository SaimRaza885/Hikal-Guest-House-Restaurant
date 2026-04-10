import { Reveal } from "./Reveal";
import RestaurantReviewCard from "./RestaurantReviewCard";
import { DEFAULT_REVIEWS } from "../data/content";

/* =========================================================
   DEFAULT DATA
========================================================= */


/* =========================================================
   RestaurantReviewsSection.jsx
   Horizontal scroll on mobile, 3-col grid on desktop
   Props:
     reviews   — array of { id, name, rating, comment, image } (optional)
     className — extra wrapper classes (optional)
========================================================= */
export default function RestaurantReviewsSection({
  reviews = DEFAULT_REVIEWS,
  className = "",
}) {
  return (
    <section className={`bg-white py-20 ${className}`}>
      <div className="container-custom">
        <h2 className="mb-8 text-3xl font-bold md:text-4xl">Restaurant Reviews</h2>

        <div className="-mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-2 md:mx-0 md:grid md:grid-cols-3 md:overflow-visible md:px-0">
          {reviews.map((review, idx) => (
            <Reveal key={review.id} delay={80 + idx * 120}>
              <RestaurantReviewCard
                name={review.name}
                rating={review.rating}
                comment={review.comment}
                image={review.image}
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
