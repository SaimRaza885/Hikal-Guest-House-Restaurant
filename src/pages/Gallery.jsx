import { useState, useRef, useEffect, useCallback } from "react";
import { X, ChevronLeft, ChevronRight, Image as ImageIcon } from "lucide-react";
import { useSeo } from "../hooks/useSeo";
import Banner from "../components/Banner";
import { images } from "../asserts/data";

const ALL_IMAGES = [
  images.gallary_3,
  "https://cf.bstatic.com/xdata/images/hotel/max1024x768/556023879.jpg?k=71a4a353dbeeebb07303f1ce6108e861a3ef3296ff9f09eba829de14f12b53c1&o=",
  "https://cf.bstatic.com/xdata/images/hotel/max1024x768/462080151.jpg?k=fc463006c00d0b1c52e028cb6aaa92b288362a2ca4fa642ea42192ce05d8ab67&o=",
  images.gallary_2,
  "https://cf.bstatic.com/xdata/images/hotel/max1024x768/555903424.jpg?k=bf8ce5e75687c11a474ca2fa6f14efbd613277dd6014d4565e201a5d5632fe33&o=",
 "https://cf.bstatic.com/xdata/images/hotel/max1024x768/555955923.jpg?k=7d52be2305a48688850fbc79c4965eb62cbe2317c2d1d33b149e3d500d322e4c&o=",
  "https://cf.bstatic.com/xdata/images/hotel/max1024x768/814319360.jpg?k=c0ce21fe59b2e07d789d00ca913623cadb51816f7bb0bdce5d281bfb87d0029c&o=",
  "https://cf.bstatic.com/xdata/images/hotel/max1024x768/814322814.jpg?k=bf7c4af96e11b9c2560509c6c974ea485784a55ed6b49f51251d535a2b17c5a3&o=",
  "https://cf.bstatic.com/xdata/images/hotel/max1024x768/815213298.jpg?k=c1cf0b687d2c2dad1bfe8c13f769e6c1d06ea6cf283a1ff9a0a829779ca736d9&o=",
  "https://cf.bstatic.com/xdata/images/hotel/max1024x768/556023860.jpg?k=861191fea00e832812c5d7ac1cb01b17071f28452b282b5d61440175ff5d6383&o=",
  "https://cf.bstatic.com/xdata/images/hotel/max1024x768/556024348.jpg?k=f0f524419745d7074d078d5f999eb77b2c3ace4713e1631e4f730fd6d130927e&o=",
  images.gallary_4,
  images.gallary_5,
  images.gallary_7,
  images.hero_1,

];

const INITIAL_COUNT = 6;
const LOAD_MORE_COUNT = 6;

function LazyImage({ src, alt, onClick }) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef(null);

  useEffect(() => {
    const el = imgRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: "150px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={imgRef} className="relative w-full h-full" onClick={isLoaded ? onClick : undefined}>
      {!isLoaded && (
        <div className="absolute inset-0 bg-gray-100 animate-pulse rounded-2xl flex items-center justify-center">
          <ImageIcon className="w-10 h-10 text-gray-300" />
        </div>
      )}
      {isInView && (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          decoding="async"
          onLoad={() => setIsLoaded(true)}
          className={`w-full h-full object-cover rounded-2xl transition-opacity duration-500 ${isLoaded ? "opacity-100" : "opacity-0"
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
      "Scroll through real visual highlights from rooms, views, food, and experiences at Hikal Guest House.",
  });

  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);
  const [fullscreenIndex, setFullscreenIndex] = useState(null);
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  const visibleImages = ALL_IMAGES.slice(0, visibleCount);
  const hasMore = visibleCount < ALL_IMAGES.length;

  const loadMore = () => {
    setIsLoadingMore(true);
    setTimeout(() => {
      setVisibleCount((prev) => Math.min(prev + LOAD_MORE_COUNT, ALL_IMAGES.length));
      setIsLoadingMore(false);
    }, 400);
  };

  const openFullscreen = useCallback((index) => {
    setFullscreenIndex(index);
    document.body.style.overflow = "hidden";
  }, []);

  const closeFullscreen = useCallback(() => {
    setFullscreenIndex(null);
    document.body.style.overflow = "";
  }, []);

  const goToPrevious = useCallback(() =>
    setFullscreenIndex((prev) => (prev > 0 ? prev - 1 : ALL_IMAGES.length - 1)), []);

  const goToNext = useCallback(() =>
    setFullscreenIndex((prev) => (prev < ALL_IMAGES.length - 1 ? prev + 1 : 0)), []);

  useEffect(() => {
    if (fullscreenIndex === null) return;
    const handleKey = (e) => {
      if (e.key === "Escape") closeFullscreen();
      if (e.key === "ArrowLeft") goToPrevious();
      if (e.key === "ArrowRight") goToNext();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [fullscreenIndex, closeFullscreen, goToPrevious, goToNext]);

  return (
    <div id="gallery" className="min-h-screen bg-background">
      <Banner
        image={ALL_IMAGES[0]}
        title="Gallery"
        subtitle="Gallery of Hikal Guest House"
      />

      <div className="container mx-auto px-4 lg:px-8 py-12 md:py-16">
        <div className="mx-auto grid max-w-6xl grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {visibleImages.map((src, idx) => (
            <article
              key={src}
              className="group relative h-[300px] md:h-[400px] w-full overflow-hidden rounded-2xl bg-gray-100 shadow-md transition-shadow hover:shadow-xl cursor-pointer"
            >
              <LazyImage
                src={src}
                alt={`Hikal Guest House ${idx + 1}`}
                onClick={() => openFullscreen(idx)}
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 pointer-events-none rounded-2xl" />
            </article>
          ))}
        </div>

        {hasMore && (
          <div className="mt-10 flex justify-center">
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
                `Load More `
              )}
            </button>
          </div>
        )}
      </div>

      {fullscreenIndex !== null && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center"
          onClick={closeFullscreen}
        >
          <button
            onClick={closeFullscreen}
            className="absolute top-4 right-4 z-[110] p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-all backdrop-blur-sm"
            aria-label="Close"
          >
            <X className="w-6 h-6" />
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); goToPrevious(); }}
            className="absolute left-4 z-[110] p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-all backdrop-blur-sm hidden md:flex"
            aria-label="Previous"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); goToNext(); }}
            className="absolute right-4 z-[110] p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-all backdrop-blur-sm hidden md:flex"
            aria-label="Next"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div className="absolute bottom-20 left-0 right-0 flex justify-center gap-4 md:hidden z-[110]">
            <button onClick={(e) => { e.stopPropagation(); goToPrevious(); }} className="p-3 bg-white/10 rounded-full text-white" aria-label="Previous">
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button onClick={(e) => { e.stopPropagation(); goToNext(); }} className="p-3 bg-white/10 rounded-full text-white" aria-label="Next">
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-[110] px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm">
            {fullscreenIndex + 1} / {ALL_IMAGES.length}
          </div>

          <img
            src={ALL_IMAGES[fullscreenIndex]}
            alt={`Hikal Guest House ${fullscreenIndex + 1}`}
            className="max-w-[90vw] max-h-[90vh] object-contain"
            onClick={(e) => e.stopPropagation()}
            decoding="async"
          />
        </div>
      )}
    </div>
  );
}