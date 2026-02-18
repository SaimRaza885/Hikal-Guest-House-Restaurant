import { Reveal } from "./Reveal";
import { PageLoader } from "./PageLoader";
import SectionHeader from "./SectionHeader";
import ReviewCard from "./ReviewCard";


export default function ReviewsSection({
  reviews = [],
  isLoading = false,
  maxReviews = 3,
  className = "",
}) {
  return (
    <section className={`bg-white py-28 ${className}`}>
      <div className="container-custom">

        <SectionHeader
          eyebrow="Guest Reviews"
          title="Loved by Travelers"
        />

        {isLoading ? (
          <PageLoader label="Loading reviews" />
        ) : (
          <div className="grid gap-10 md:grid-cols-3">
            {reviews.slice(0, maxReviews).map((review, idx) => (
              <Reveal key={review.id} delay={120 + idx * 120}>
                <ReviewCard
                  rating={review.rating}
                  comment={review.comment}
                  name={review.name}
                  location={review.location}
                />
              </Reveal>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}
