import { Star, ShieldCheck, ThumbsUp, Globe, CheckCircle2 } from "lucide-react";

export function TrustBanner() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-primary to-primary/90 py-16 md:py-20 text-white">
      {/* Background image with better overlay control */}
      <img
        src="https://cdn.pixabay.com/photo/2014/09/21/17/56/mountaineering-455338_960_720.jpg"
        alt="Stunning Hunza Valley view"
        className="absolute inset-0 h-full w-full object-cover brightness-[0.65] contrast-[1.05]"
      />

      {/* Subtle animated glow blobs — optional, can remove if too much */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute -left-24 top-10 h-96 w-96 rounded-full bg-blue-300 blur-3xl animate-pulse-slow" />
        <div className="absolute -right-32 bottom-8 h-80 w-80 rounded-full bg-purple-300 blur-3xl animate-pulse-slow delay-1000" />
      </div>

      <div className="container-custom relative z-10 px-5 md:px-8">
        {/* Headline — more emotional & benefit-oriented */}
        <div className="text-center max-w-3xl mx-auto">
          <p className="inline-block rounded-full bg-white/15 px-4 py-1.5 text-xs md:text-sm font-semibold tracking-wider uppercase backdrop-blur-sm border border-white/20">
            Trusted by hundreds of travelers every year
          </p>

          <h2 className="mt-5 text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            Exceptional stays in Hunza Valley — loved by real guests
          </h2>

          <p className="mt-4 text-lg md:text-xl text-white/80 font-light">
            Where breathtaking views meet genuine hospitality
          </p>
        </div>

        {/* Main trust card — cleaner layout, better mobile stacking */}
        <div className="mt-12 md:mt-16 mx-auto max-w-5xl">
          <div className="rounded-3xl bg-white/12 backdrop-blur-xl border border-white/15 shadow-2xl shadow-black/20 p-7 md:p-10">
            <div className="grid gap-8 md:gap-10 md:grid-cols-[1.1fr_1px_1fr_1fr] items-center">
              {/* Left — big rating (most visual impact) */}
              <div className="text-center md:text-left">
                <div className="text-6xl md:text-7xl font-extrabold tracking-tight">9.6</div>
                <div className="mt-2 text-xl md:text-2xl font-semibold">Exceptional</div>

                <div className="mt-4 flex justify-center md:justify-start gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-6 w-6 fill-amber-400 text-amber-400 drop-shadow-sm"
                    />
                  ))}
                </div>

                <div className="mt-3 text-sm text-white/70 flex items-center justify-center md:justify-start gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-green-400" />
                  <span>Verified on major platforms</span>
                </div>
              </div>

              {/* Vertical divider — hidden on mobile */}
              <div className="hidden h-28 w-px bg-gradient-to-b from-transparent via-white/40 to-transparent md:block" />

              {/* Middle — key trust points (icons + short text) */}
              <div className="space-y-4 text-base md:text-lg">
                <div className="flex items-center gap-3">
                  <ThumbsUp className="h-5 w-5 flex-shrink-0 text-green-400" />
                  <span>Outstanding location & mountain views</span>
                </div>
                <div className="flex items-center gap-3">
                  <ShieldCheck className="h-5 w-5 flex-shrink-0 text-green-400" />
                  <span>100% verified guest reviews</span>
                </div>
                <div className="flex items-center gap-3">
                  <Globe className="h-5 w-5 flex-shrink-0 text-green-400" />
                  <span>Travelers from 25+ countries</span>
                </div>
              </div>

              {/* Right — third-party proof (most credible) */}
              <div className="text-center md:text-right space-y-3">
                <p className="text-sm md:text-base text-white/70 font-medium">Rated excellent on</p>

                <div className="space-y-2.5 text-base md:text-lg font-semibold">
                  <div className="flex items-center justify-center md:justify-end gap-2">
                    Booking.com <span className="text-green-400">9.6 / 10</span>
                  </div>
                  <div className="flex items-center justify-center md:justify-end gap-2">
                    Google <span className="text-green-400">4.8 ★</span>
                  </div>
                  <div className="flex items-center justify-center md:justify-end gap-2">
                    TripAdvisor <span className="text-green-400">Excellent</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Subtle social proof closing line */}
        <p className="mt-10 text-center text-base md:text-lg text-white/75 font-light italic max-w-3xl mx-auto">
          “The most memorable stay we’ve ever had in Pakistan.” — hundreds of happy guests
        </p>
      </div>
    </section>
  );
}