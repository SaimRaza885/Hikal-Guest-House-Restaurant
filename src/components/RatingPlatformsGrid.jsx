import { Star, ExternalLink } from "lucide-react";
import { Reveal } from "./Reveal";

const DEFAULT_PLATFORMS = [
  {
    name: "Booking.com",
    score: "9.6",
    outOf: "10",
    label: "Exceptional",
    reviews: "22 verified reviews",
    href: "https://www.booking.com/hotel/pk/hikal-guest-house.en-gb.html?label=New_English_EN_PK_27027143185-gcX_3IAaLhci9HWi5tas8AS217289625109%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg%3Afi%3Atidsa-199489123465%3Alp9077144%3Ali%3Adec%3Adm&sid=846f711e0434e5310ce8b9f334555aa9&gclid=Cj0KCQjwkMjOBhC5ARIsADIdb3coK0fRuq9A7kDePH4MB9MLJuEuGbnFLsoutDKhZJBgP2sJR8Z2z4UaAgyHEALw_wcB&aid=318615&ucfs=1&arphpl=1&checkin=2026-04-09&checkout=2026-05-14&dest_id=-2762645&dest_type=city&group_adults=2&req_adults=2&no_rooms=1&group_children=0&req_children=0&hpos=1&hapos=1&sr_order=popularity&srpvid=b2805e099a890048&srepoch=1775395830&all_sr_blocks=380839001_244537151_2_42_0&highlighted_blocks=380839001_244537151_2_42_0&matching_block_id=380839001_244537151_2_42_0&sr_pri_blocks=380839001_244537151_2_42_0__10080000&from=searchresults",
    accent: "#FBBF24",
    bg: ["#003580", "#0057b8"],
    logo: "B.",
  },
  {
    name: "Google Reviews",
    score: "4.4",
    outOf: "5",
    label: "Excellent",
    reviews: "Guest verified",
    href: "https://www.google.com/travel/search?q=hikal%20guest%20house&g2lb=4965990%2C72471280%2C72560029%2C72573224%2C72647020%2C72686036%2C72803964%2C72882230%2C72958624%2C73059275%2C73064764%2C121529349&hl=en-PK&gl=pk&cs=1&ssta=1&ts=CAEaSAooEiYyJDB4MzhlNjI4NzIyMzg3ZTI2OToweGEwYjYxMWQ4Mzg0NTAzOBIcEhQKBwjqDxAEGAUSBwjqDxAEGAYYATIECAAQACoHCgU6A1BLUg&qs=CAEyJ0Noa0l1S0NSbk5pajJJVUtHZzB2Wnk4eE1XUmZPV2h1WTJaa0VBRTgCQgkJOFCEgx1hCwpCCQk4UISDHWELCg&ap=MAA&ictx=111&ved=0CAcQh-kJahcKEwiApcCbz9aTAxUAAAAAHQAAAAAQFg",
    accent: "#34D399",
    bg: ["#111827", "#1f2937"],
    logo: "G.",
  },
  {
    name: "TripAdvisor",
    score: "4.3",
    outOf: "5",
    label: "Highly Rated",
    reviews: "Traveler verified",
    href: "https://www.tripadvisor.com/Hotel_Review-g317116-d15586336-Reviews-Hikal_Guest_House_Restaurant-Gilgit_Gilgit_Baltistan.html",
    accent: "#34D399",
    bg: ["#064e3b", "#065f46"],
    logo: "T.",
  },
];

function PlatformCard({ name, score, outOf, label, reviews, href, accent, bg, logo }, idx) {
  const numScore = parseFloat(score);
  const numOut = parseFloat(outOf);
  const percent = (numScore / numOut) * 100;
  const filledStars = Math.round((numScore / numOut) * 5);

  return (
    <Reveal delay={idx * 150}>
      <div
        className="group relative overflow-hidden rounded-3xl cursor-pointer"
        style={{
          width: "260px",
          background: `linear-gradient(145deg, ${bg[0]}, ${bg[1]})`,
          boxShadow: `0 8px 32px rgba(0,0,0,0.25), 0 0 0 1px rgba(255,255,255,0.06)`,
          transition: "transform 0.4s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.4s ease",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "translateY(-10px) scale(1.02)";
          e.currentTarget.style.boxShadow = `0 24px 48px rgba(0,0,0,0.35), 0 0 0 1px rgba(255,255,255,0.1), 0 0 40px ${accent}22`;
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "translateY(0) scale(1)";
          e.currentTarget.style.boxShadow = `0 8px 32px rgba(0,0,0,0.25), 0 0 0 1px rgba(255,255,255,0.06)`;
        }}
      >
        {/* Subtle top glow */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-px"
          style={{ background: `linear-gradient(90deg, transparent, ${accent}88, transparent)` }}
        />

        {/* Inner content */}
        <div className="relative z-10 p-7 flex flex-col gap-5">

          {/* Header row */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div
                className="w-9 h-9 rounded-xl flex items-center justify-center text-sm font-black"
                style={{ background: `${accent}22`, color: accent, border: `1px solid ${accent}44` }}
              >
                {logo}
              </div>
              <span className="text-white/60 text-xs font-medium tracking-wide">{name}</span>
            </div>
            <a
              href={href}
              target="_blank"
              rel="noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
              <ExternalLink className="w-4 h-4 text-white/40 hover:text-white/80 transition-colors" />
            </a>
          </div>

          {/* Score */}
          <div className="flex items-end gap-2">
            <span
              className="text-7xl font-black leading-none tracking-tighter"
              style={{ color: accent }}
            >
              {score}
            </span>
            <div className="mb-2 flex flex-col">
              <span className="text-white/30 text-sm leading-none">/{outOf}</span>
              <span className="text-white/50 text-xs mt-1">{label}</span>
            </div>
          </div>

          {/* Stars */}
          <div className="flex gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className="w-3.5 h-3.5"
                style={{
                  fill: i < filledStars ? accent : "rgba(255,255,255,0.1)",
                  color: i < filledStars ? accent : "rgba(255,255,255,0.1)",
                  filter: i < filledStars ? `drop-shadow(0 0 4px ${accent}88)` : "none",
                }}
              />
            ))}
          </div>

          {/* Progress bar */}
          <div className="space-y-1.5">
            <div className="w-full rounded-full overflow-hidden" style={{ height: "3px", background: "rgba(255,255,255,0.08)" }}>
              <div
                className="h-full rounded-full"
                style={{
                  width: `${percent}%`,
                  background: `linear-gradient(90deg, ${accent}88, ${accent})`,
                  boxShadow: `0 0 8px ${accent}66`,
                  transition: "width 1.2s cubic-bezier(0.4,0,0.2,1)",
                }}
              />
            </div>
            <span className="text-white/30 text-xs">{reviews}</span>
          </div>

        </div>
      </div>
    </Reveal>
  );
}

export default function RatingPlatformsGrid({
  platforms = DEFAULT_PLATFORMS,
  className = "",
}) {
  return (
    <section className={`w-full py-20 ${className}`}>
      <div className="text-center mb-14">
        <p className="text-xs uppercase tracking-widest text-muted-foreground mb-3">
          Guest Ratings
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          Rated Exceptional Everywhere
        </h2>
        <p className="text-muted-foreground max-w-md mx-auto text-sm leading-relaxed">
          Consistently recognised across every major travel platform by guests from around the world.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-6">
        {platforms.map((p, i) => PlatformCard(p, i))}
      </div>
    </section>
  );
}