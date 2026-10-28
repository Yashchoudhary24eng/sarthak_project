"use client";

import React, { useId, useState } from "react";
import { faqData } from "../data/testimonialsData";
import { ChevronDown, HelpCircle } from "lucide-react";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const baseId = useId();

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative py-12 sm:py-16 md:py-24 bg-[#fbf9f4] border-y border-amber-200/80 overflow-hidden">
      <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-5" aria-hidden="true">
            <span className="h-px w-10 bg-amber-300" />
            <HelpCircle className="w-4 h-4 text-amber-700" />
            <span className="h-px w-10 bg-amber-300" />
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight leading-tight">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-4">
          {faqData.map((faq, idx) => {
            const isOpen = openIndex === idx;
            const panelId = `${baseId}-faq-panel-${idx}`;
            const buttonId = `${baseId}-faq-button-${idx}`;

            return (
              <div
                key={faq.question}
                className="rounded-xl bg-white border border-amber-200/80 overflow-hidden transition-all duration-200 shadow-2xs"
              >
                <h3 className="m-0">
                  <button
                    type="button"
                    id={buttonId}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => toggleFaq(idx)}
                    className="w-full min-h-14 py-4 px-4 sm:px-6 flex items-center justify-between text-left gap-3 sm:gap-4 hover:bg-amber-50/50 transition-colors cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-amber-700"
                  >
                    <span className="font-serif text-base sm:text-lg font-bold text-slate-900">
                      {faq.question}
                    </span>
                    <span className={`p-1 rounded-full bg-amber-50 text-amber-700 border border-amber-200 transition-transform duration-200 ${isOpen ? "rotate-180 bg-amber-100" : ""}`}>
                      <ChevronDown className="w-4 h-4" aria-hidden="true" />
                    </span>
                  </button>
                </h3>

                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  hidden={!isOpen}
                  className="px-5 sm:px-6 pb-5 pt-2 text-sm text-slate-700 leading-relaxed border-t border-amber-200/60"
                >
                  {faq.answer}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
