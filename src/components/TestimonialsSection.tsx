"use client";

import React, { useState } from "react";
import { testimonialPlaceholders } from "../data/testimonialsData";
import TestimonialPlayer from "./TestimonialPlayer";
import { Sparkles } from "lucide-react";

export default function TestimonialsSection() {
  const [activeId, setActiveId] = useState<string | null>(null);

  return (
    <section id="client-testimonials" className="relative py-12 sm:py-16 md:py-24 bg-[#fbf9f4] border-y border-amber-200/80">
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-amber-200/30 rounded-full blur-[140px] pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-yellow-100/50 rounded-full blur-[140px] pointer-events-none" aria-hidden="true" />

      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-14">
          <div className="flex items-center justify-center gap-3 mb-5" aria-hidden="true">
            <span className="h-px w-10 bg-amber-300" />
            <Sparkles className="w-4 h-4 text-amber-700" />
            <span className="h-px w-10 bg-amber-300" />
          </div>

          <h2 className="font-serif text-[1.75rem] sm:text-4xl md:text-5xl font-bold text-slate-900 tracking-tight leading-tight mb-4">
            Real People.{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-700 via-yellow-600 to-amber-700">
              Real Experiences.
            </span>
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Discover the experiences of people who have explored our personalized approach to Vedic Manifestation.
          </p>
        </div>

        <div className="flex md:grid md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 overflow-x-auto md:overflow-visible snap-x snap-mandatory pb-2 -mx-4 px-4 sm:mx-0 sm:px-0 no-scrollbar overscroll-x-contain">
          {testimonialPlaceholders.map((item) => (
            <figure
              key={item.id}
              className="snap-center shrink-0 w-[min(78vw,300px)] md:w-auto md:shrink md:max-w-sm md:mx-auto rounded-2xl bg-white border border-amber-200/80 p-3 sm:p-5 flex flex-col items-center shadow-xs"
            >
              <TestimonialPlayer
                src={item.src}
                poster={item.poster}
                label={item.label}
                isActive={activeId === item.id}
                onPlay={() => setActiveId(item.id)}
              />
              <figcaption className="mt-3 sm:mt-4 font-serif text-base sm:text-lg font-bold text-slate-900 leading-snug text-center">
                {item.label}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
