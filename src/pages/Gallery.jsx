import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { galleryImages } from "../data/gallery";
import { useSeo } from "../hooks/useSeo";

const feedItems = [...galleryImages, ...galleryImages, ...galleryImages].map((item, idx) => ({
  ...item,
  id: `${item.id}-${idx + 1}`
}));

export default function Gallery() {
  useSeo({
    title: "Gallery",
    description: "Scroll through real-style visual highlights from rooms, views, food, and experiences at Hikal Guest House."
  });

  return (
    <div id="gallery" className="min-h-screen bg-background">
      <Navigation />

      <div className="bg-primary px-4 pb-16 pt-32 text-center text-white md:pb-24 md:pt-48">
        <div className="container-custom">
          <h1 className="mb-6 text-4xl font-bold text-white md:text-6xl">Visual Feed</h1>
          <p className="mx-auto max-w-2xl text-lg text-white/80">A mobile-first endless-style gallery inspired by social feed scrolling.</p>
        </div>
      </div>

      <div className="container-custom py-12 md:py-16">
        <div className="mx-auto grid max-w-3xl grid-cols-1 gap-6">
          {feedItems.map((item, idx) => (
            <article key={item.id} className="overflow-hidden rounded-2xl border border-border/60 bg-white shadow-sm transition-shadow hover:shadow-md">
              <div className="px-4 py-3 text-sm text-muted-foreground">Hikal Guest House | Post #{idx + 1}</div>
              <img
                src={item.src}
                alt={`Gallery ${idx + 1}`}
                loading="lazy"
                className={`w-full object-cover ${idx % 3 === 0 ? "h-[420px]" : idx % 3 === 1 ? "h-[360px]" : "h-[300px]"}`}
              />
              <div className="px-4 py-3">
                <p className="text-sm font-medium uppercase tracking-wide text-accent">{item.category}</p>
                <p className="mt-1 text-sm text-muted-foreground">Captured moments from our rooms, property, and valley life.</p>
              </div>
            </article>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}