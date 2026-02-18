import { Reveal } from "./Reveal";
import MenuSection from "./MenuSection";

/* =========================================================
   DEFAULT DATA
========================================================= */
const DEFAULT_MENU_SECTIONS = [
  {
    id: "menu-breakfast", title: "Breakfast", items: [
      { id: "b-1", name: "Hunza Morning Plate", desc: "Fiti bread, apricot preserve, eggs, tea.",      price: "PKR 1,650", image: "https://images.unsplash.com/photo-1495214783159-3503fd1b572d?auto=format&fit=crop&q=80&w=900" },
      { id: "b-2", name: "Continental Set",     desc: "Toast, croissant, butter, seasonal fruits.",    price: "PKR 1,450", image: "https://images.unsplash.com/photo-1484723091739-30a097e8f929?auto=format&fit=crop&q=80&w=900" },
    ],
  },
  {
    id: "menu-lunch", title: "Lunch", items: [
      { id: "l-1", name: "Signature Chicken Karahi", desc: "Slow-cooked tomato masala and fresh coriander.", price: "PKR 2,950", image: "https://images.unsplash.com/photo-1604909052743-94e838986d24?auto=format&fit=crop&q=80&w=900" },
      { id: "l-2", name: "Korean Beef Bowl",         desc: "Grilled beef, rice, sesame, and house glaze.",  price: "PKR 3,150", image: "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&q=80&w=900" },
    ],
  },
  {
    id: "menu-dinner", title: "Dinner", items: [
      { id: "d-1", name: "Middle Eastern Mix Grill",  desc: "Kebabs, saffron rice, grilled vegetables.",         price: "PKR 4,250", image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=900" },
      { id: "d-2", name: "Japanese Teriyaki Plate",   desc: "Glazed protein, vegetables, and jasmine rice.",     price: "PKR 3,450", image: "https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56?auto=format&fit=crop&q=80&w=900" },
    ],
  },
  {
    id: "menu-drinks", title: "Drinks", items: [
      { id: "dr-1", name: "Apricot Cooler",        desc: "Refreshing local apricot blend with mint.",     price: "PKR 650", image: "https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&q=80&w=900" },
      { id: "dr-2", name: "Karak Chai & Desserts", desc: "Classic chai with chef dessert selection.",     price: "PKR 990", image: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&q=80&w=900" },
    ],
  },
];

/* =========================================================
   MenuGrid.jsx
   Renders all menu sections stacked vertically
   Props:
     menuSections — array of { id, title, items[] } (optional)
     className    — extra wrapper classes (optional)
========================================================= */
export default function MenuGrid({ menuSections = DEFAULT_MENU_SECTIONS, className = "" }) {
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
