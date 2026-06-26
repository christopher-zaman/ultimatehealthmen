import { useState } from "react";
import SectionHeading from "../ui/SectionHeading";

const faqs = [
  {
    question: "What is Direct Primary Care?",
    answer:
      "Direct Primary Care is a membership-based model that gives you more time, better access, and a stronger relationship with your care team.",
  },
  {
    question: "Is this only for hormone treatment?",
    answer:
      "No. Ultimate Health Men focuses on overall men’s wellness, including hormones, sexual wellness, weight management, prevention, and primary care.",
  },
  {
    question: "Do you take insurance?",
    answer:
      "Direct Primary Care is typically separate from insurance. This allows care to be more personal, direct, and less rushed.",
  },
  {
    question: "Is care confidential?",
    answer:
      "Yes. Visits are private, respectful, and designed for men to discuss sensitive health concerns comfortably.",
  },
  {
    question: "How do I get started?",
    answer:
      "Schedule a visit and the team will walk you through the next steps, including consultation, labs if needed, and a personalized care plan.",
  },
];

function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="bg-[#f5f5f7] px-6 py-28">
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          eyebrow="FAQ"
          title="Questions men ask before getting started."
        />

        <div className="mt-12 overflow-hidden rounded-[2rem] bg-white ring-1 ring-black/5">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className="border-b border-[#d2d2d7] last:border-b-0"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between gap-6 px-8 py-7 text-left"
                >
                  <span className="text-lg font-semibold tracking-tight">
                    {faq.question}
                  </span>

                  <span className="text-2xl text-[#667085]">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                <div
                  className={`grid transition-all duration-300 ease-out ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-8 pb-7 leading-7 text-[#667085]">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default FAQ;