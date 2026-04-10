import ContactInfoList from "./ContactInfoList";
import SocialLinks from "./SocialLinks";

export default function WhoWeAreSection({
  image = "https://lh3.googleusercontent.com/gps-cs/AOGcYQT-Y6CcaxdZYo9FIMQJpXL3G546h92VPKoK7ZtVyjVRnThkqYya_T71BBrtZ3y8i0ZFCQw3xj0kLIEV1KsCFHIJOuOHP5Qb3ZclL7XL5o-EdRzvhz9mORmZkjw0AaUX4sf9YCY=w600-h854-p-k-no",
  imageAlt = "Who we are",
  heading = "Who We Are",
  paragraphs,
  contact,
  socials = [],
  className = "",
}) {
  return (
    <section className={`bg-white py-20 ${className}`}>
      <div className="container-custom grid grid-cols-1 gap-8 lg:grid-cols-2 items-stretch">

        {/* Image */}
        <div className="h-full w-full">
          <img
            src={image}
            alt={imageAlt}
            loading="lazy"
            className="h-full w-full rounded-2xl object-cover"
          />
        </div>

        {/* Content */}
        <div className="flex flex-col rounded-2xl border border-border/50 bg-muted/15 p-8 h-full">
          <h3 className="mt-6 md:text-5xl text-3xl mb-4 font-semibold text-accent">
            {heading}
          </h3>

          {paragraphs.map((para, i) => (
            <p key={i} className="mt-2 text-muted-foreground leading-relaxed">
              {para}
            </p>
          ))}

          {/* Contact */}
          {contact && (
            <div className="mt-6">
              <ContactInfoList {...contact} />
            </div>
          )}

          {/* Socials */}
          {socials?.length > 0 && (
            <div className="mt-4">
              <SocialLinks links={socials} />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
