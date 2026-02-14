import { useState, useRef, useEffect } from "react";
import { X, ChevronLeft, ChevronRight, Image as ImageIcon } from "lucide-react";
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { useSeo } from "../hooks/useSeo";
import Banner from "../components/Banner";
import { images } from "../asserts/data";

const galleryImages = [
  images.gallary_2,
  images.gallary_3,
  images.gallary_4,
  images.gallary_5,
  images.gallary_7,
  images.hero_1,
];

// Lazy Image Component with Skeleton
function LazyImage({ src, alt, onClick, className }) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: '100px',
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={imgRef} className="relative w-full h-full" onClick={isLoaded ? onClick : undefined}>
      {/* Skeleton Loader */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-gradient-to-br from-gray-200 via-gray-100 to-gray-200 animate-pulse rounded-2xl overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <ImageIcon className="w-12 h-12 text-gray-400 mx-auto mb-2 animate-pulse" />
              <div className="w-20 h-2 bg-gray-300 rounded-full mx-auto animate-pulse"></div>
            </div>
          </div>
          {/* Shimmer effect */}
          <div className="absolute inset-0 -translate-x-full animate-shimmer bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
        </div>
      )}
      
      {/* Actual Image */}
      {isInView && (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          onLoad={() => setIsLoaded(true)}
          className={`w-full h-full object-cover transition-all duration-700 rounded-2xl ${
            isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
        />
      )}
    </div>
  );
}

export default function Gallery() {
  useSeo({
    title: "Gallery",
    description:
      "Scroll through real-style visual highlights from rooms, views, food, and experiences at Hikal Guest House.",
  });

  const [visibleCount, setVisibleCount] = useState(6);
  const [fullscreenIndex, setFullscreenIndex] = useState(null);
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  const loadMore = () => {
    setIsLoadingMore(true);
    setTimeout(() => {
      setVisibleCount((prev) => Math.min(prev + 6, galleryImages.length));
      setIsLoadingMore(false);
    }, 500);
  };

  const openFullscreen = (index) => {
    setFullscreenIndex(index);
    document.body.style.overflow = 'hidden';
  };

  const closeFullscreen = () => {
    setFullscreenIndex(null);
    document.body.style.overflow = 'unset';
  };

  const goToPrevious = () => {
    setFullscreenIndex((prev) => (prev > 0 ? prev - 1 : galleryImages.length - 1));
  };

  const goToNext = () => {
    setFullscreenIndex((prev) => (prev < galleryImages.length - 1 ? prev + 1 : 0));
  };

  const handleKeyDown = (e) => {
    if (fullscreenIndex === null) return;
    if (e.key === 'Escape') closeFullscreen();
    if (e.key === 'ArrowLeft') goToPrevious();
    if (e.key === 'ArrowRight') goToNext();
  };

  useEffect(() => {
    if (fullscreenIndex !== null) {
      window.addEventListener('keydown', handleKeyDown);
      return () => window.removeEventListener('keydown', handleKeyDown);
    }
  }, [fullscreenIndex]);

  return (
    <div id="gallery" className="min-h-screen bg-background">
      <Navigation />

      <Banner
        image={galleryImages[0]}
        title="Gallery"
        subtitle="Gallery of Hikal Guest House"
      />

      <div className="container mx-auto px-4 lg:px-8 py-12 md:py-16">
        <div className="mx-auto grid max-w-6xl grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {galleryImages.slice(0, visibleCount).map((src, idx) => (
            <article
              key={idx}
              className="group relative h-[300px] md:h-[400px] w-full overflow-hidden rounded-2xl bg-gray-100 shadow-md transition-all hover:shadow-xl cursor-pointer"
            >
              <LazyImage
                src={src}
                alt={`Gallery ${idx + 1}`}
                onClick={() => openFullscreen(idx)}
                className="w-full h-full"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 pointer-events-none" />
            </article>
          ))}
        </div>

        {/* Load More Button */}
        {visibleCount < galleryImages.length && (
          <div className="mt-8 flex justify-center">
            <button
              onClick={loadMore}
              disabled={isLoadingMore}
              className="px-8 py-3 rounded-full bg-accent text-white font-semibold hover:bg-accent/90 transition-all hover:-translate-y-0.5 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
            >
              {isLoadingMore ? (
                <>
                  <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  Loading...
                </>
              ) : (
                'Load More'
              )}
            </button>
          </div>
        )}
      </div>

      {/* Fullscreen Modal */}
      {fullscreenIndex !== null && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center"
          onClick={closeFullscreen}
        >
          {/* Close Button */}
          <button
            onClick={closeFullscreen}
            className="absolute top-4 right-4 z-[110] p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-all backdrop-blur-sm"
            aria-label="Close"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Previous Button - Desktop */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              goToPrevious();
            }}
            className="absolute left-4 z-[110] p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-all backdrop-blur-sm hidden md:flex"
            aria-label="Previous"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next Button - Desktop */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              goToNext();
            }}
            className="absolute right-4 z-[110] p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-all backdrop-blur-sm hidden md:flex"
            aria-label="Next"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Mobile Navigation */}
          <div className="absolute bottom-20 left-0 right-0 flex justify-center gap-4 md:hidden z-[110]">
            <button
              onClick={(e) => {
                e.stopPropagation();
                goToPrevious();
              }}
              className="p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-all backdrop-blur-sm"
              aria-label="Previous"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                goToNext();
              }}
              className="p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-all backdrop-blur-sm"
              aria-label="Next"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Image Counter */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-[110] px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm">
            {fullscreenIndex + 1} / {galleryImages.length}
          </div>

          {/* Image */}
          <img
            src={galleryImages[fullscreenIndex]}
            alt={`Gallery ${fullscreenIndex + 1}`}
            className="max-w-[90vw] max-h-[90vh] object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      <Footer />
    </div>
  );
}