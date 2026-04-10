import { Reveal } from "./Reveal";
import MenuSection from "./MenuSection";
import { DEFAULT_MENU_SECTIONS } from "../data/content";


const DEFAULT_MENU_SECTIONS_DATA = DEFAULT_MENU_SECTIONS

export default function MenuGrid({ menuSections = DEFAULT_MENU_SECTIONS_DATA, className = "" }) {
  return (
    <section className={`py-20 ${className}`}>
      <div className="container-custom">
        {/* header */}
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-3xl font-bold md:text-4xl">Menu</h2>
        </div>

        {/* sections */}
        <div className="space-y-12">
          {menuSections.map((section, sectionIdx) => (
            <Reveal key={section.id} delay={80 + sectionIdx * 40}>
              <MenuSection
                title={section.title}
                items={section.items}
                sectionIdx={sectionIdx}
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
