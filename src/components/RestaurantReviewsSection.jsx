import { Reveal } from "./Reveal";
import RestaurantReviewCard from "./RestaurantReviewCard";

/* =========================================================
   DEFAULT DATA
========================================================= */
const DEFAULT_REVIEWS = [
  { id: "rest-review-1", name: "Sana A.",   rating: 5, comment: "The terrace breakfast and mountain view were unforgettable.", image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=800" },
  { id: "rest-review-2", name: "Hamza K.",  rating: 5, comment: "Excellent BBQ platter and very warm service.",               image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=80&w=800" },
  { id: "rest-review-3", name: "Mariam R.", rating: 4, comment: "Loved the vegetarian options and cozy ambience.",            image: "https://images.unsplash.com/photo-1559329007-40df8a9345d8?auto=format&fit=crop&q=80&w=800" },
];

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
