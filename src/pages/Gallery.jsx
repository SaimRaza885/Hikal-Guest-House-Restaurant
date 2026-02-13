import { useState } from "react";
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { useSeo } from "../hooks/useSeo";
import Banner from "../components/Banner";
import { images } from "../asserts/data";

// Example: replace with Instagram image links
const galleryImages = [
// images.gallary_1,
images.gallary_2,
images.gallary_3,
images.gallary_4,
images.gallary_5,
// images.gallary_6,
images.gallary_7,
images.hero_1,

];

export default function Gallery() {
  useSeo({
    title: "Gallery",
    description:
      "Scroll through real-style visual highlights from rooms, views, food, and experiences at Hikal Guest House.",
  });

  const [visibleCount, setVisibleCount] = useState(5); // show first 5 images

  const loadMore = () => {
    setVisibleCount((prev) => Math.min(prev + 5, galleryImages.length));
  };

  return (
    <div id="gallery" className="min-h-screen bg-background">
      <Navigation />

      <Banner
        image={galleryImages[0]}
        title="Gallery"
        subtitle="Gallery of Hikal Guest House"
        rating={5}
        ratingPlatform="Gallery"
        ratingText="Gallery"
      />

      <div className="container-custom py-12 md:py-16">
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 ">
          {galleryImages.slice(0, visibleCount).map((src, idx) => (
            <article
              key={idx}
              className=" h-[500px]  w-full overflow-hidden rounded-2xl relative bg-gray-100 shadow-sm transition-shadow hover:shadow-md cursor-pointer"
            >
              <div
                className="w-full"
                style={{ aspectRatio: "4/3" }} // keeps all cards same ratio
                onClick={() => openFullscreen(idx)}
              >
                <img
                  src={src}
                  alt={`Gallery ${idx + 1}`}
                  loading="lazy"
                  className=" object-cover rounded-2xl transition-transform duration-300 hover:scale-105"
                />
              </div>
            </article>
          ))}

        </div>

        {/* Load More Button */}
        {visibleCount < galleryImages.length && (
          <div className="mt-8 flex justify-center">
            <button
              onClick={loadMore}
              className="px-6 py-3 rounded-full bg-accent text-white font-semibold hover:bg-accent/80 transition"
            >
              Load More
            </button>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}
