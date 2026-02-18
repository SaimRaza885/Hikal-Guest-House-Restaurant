import ContactInfoList from "./ContactInfoList";
import SocialLinks from "./SocialLinks";

export default function WhoWeAreSection({
  image = "https://images.unsplash.com/photo-1607631568010-a87245c0daf8?auto=format&fit=crop&q=80&w=1600",
  imageAlt = "Who we are",
  heading = "Who We Are",
  paragraphs = [
    "We are a team of passionate culinary artisans, dedicated to creating unforgettable dining experiences for every guest who walks through our doors. Rooted in both tradition and innovation, our chefs carefully select the freshest local ingredients and blend them with international techniques to craft dishes that are not only flavorful but also visually stunning.",
    "Every plate tells a story — from the textures and aromas to the intricate presentation — designed to delight the senses and evoke a sense of warmth and hospitality. Our mission is simple yet profound: to transform each meal into a memorable journey, leaving a lasting impression through flavor, creativity, and heartfelt care.",
  ],
  contact = {
    phone: "+1 (555) 123-4567",
    email: "contact@restaurant.com",
    address: "123 Culinary Street, City",
  },
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
