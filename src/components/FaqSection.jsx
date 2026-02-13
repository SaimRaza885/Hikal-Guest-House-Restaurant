import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    id: "faq-1",
    question: "How can I confirm my room booking quickly?",
    answer:
      "You can confirm directly through our booking form or choose the WhatsApp option on any room for a faster conversation with our team.",
  },
  {
    id: "faq-2",
    question: "Do all rooms have mountain views?",
    answer:
      "Most rooms have direct mountain or valley-facing windows. Garden rooms focus more on privacy and greenery.",
  },
  {
    id: "faq-3",
    question: "Is breakfast included in room pricing?",
    answer:
      "Yes, complimentary breakfast is included with most room categories unless stated otherwise during promotions.",
  },
  {
    id: "faq-4",
    question: "Can I arrange a custom trip or local guide?",
    answer:
      "Yes. Contact us in advance and we can help arrange transport, local guides, and personalized day plans.",
  },
];

export function FaqSection() {
  const [openId, setOpenId] = useState(faqs[0].id);

  return (
    <section className="bg-muted/20 py-24">
      <div className="container-custom">
        <div className="mb-12 text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-accent">FAQs</span>
          <h2 className="mt-3 text-3xl font-bold md:text-5xl">Frequently Asked Questions</h2>
        </div>

        <div className="mx-auto max-w-3xl space-y-4">
          {faqs.map((item) => {
            const isOpen = openId === item.id;
            return <FaqItem key={item.id} item={item} isOpen={isOpen} setOpenId={setOpenId} />;
          })}
        </div>
      </div>
    </section>
  );
}

function FaqItem({ item, isOpen, setOpenId }) {
  const contentRef = useRef(null);
  const [height, setHeight] = useState("0px");

  useEffect(() => {
    if (contentRef.current) {
      setHeight(isOpen ? `${contentRef.current.scrollHeight}px` : "0px");
    }
  }, [isOpen]);

  return (
    <div className="overflow-hidden rounded-2xl border border-border/50 bg-white transition-all">
      <button
        type="button"
        className="flex w-full items-center justify-between px-6 py-5 text-left"
        onClick={() => setOpenId(isOpen ? "" : item.id)}
      >
        <span className="text-base font-semibold text-primary md:text-lg">{item.question}</span>
        <ChevronDown
          className={`h-5 w-5 text-primary transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      <div
        ref={contentRef}
        style={{ maxHeight: height }}
        className="px-6 overflow-hidden transition-[max-height] duration-500 ease-in-out"
      >
        <p className="pb-6 text-sm leading-relaxed text-muted-foreground md:text-base">{item.answer}</p>
      </div>
    </div>
  );
}
