import React from "react";
import { journeySteps } from "../data/testimonialsData";
import BookingCta from "./BookingCta";
import { Sparkles } from "lucide-react";

export default function JourneySection() {
  return (
    <section id="journey" className="relative py-12 sm:py-16 md:py-24 bg-white overflow-hidden">
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-amber-100/40 rounded-full blur-[140px] pointer-events-none" aria-hidden="true" />

      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-3 mb-5" aria-hidden="true">
            <span className="h-px w-10 bg-amber-300" />
            <Sparkles className="w-4 h-4 text-amber-700" />
            <span className="h-px w-10 bg-amber-300" />
          </div>

          <h2 className="font-serif text-[1.75rem] sm:text-4xl md:text-5xl font-bold text-slate-900 tracking-tight leading-tight mb-4">
            Your Journey From Wish to{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-700 via-yellow-600 to-amber-700">
              Reality
            </span>
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            A simple, personalized process designed around your concerns, birth chart, and goals.
          </p>
        </div>

        <ol className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {journeySteps.map((step) => (
            <li
              key={step.stepNumber}
              className="relative rounded-2xl bg-[#faf8f4] border border-amber-200/80 p-6 sm:p-8 overflow-hidden shadow-xs"
            >
              <div className="absolute top-4 right-6 font-serif text-5xl sm:text-6xl font-black text-amber-600/10 pointer-events-none select-none" aria-hidden="true">
                {step.stepNumber}
              </div>

              <div className="relative z-10">
                <span className="inline-block px-3 py-1 rounded-md bg-amber-100 text-amber-900 text-xs font-bold mb-4 border border-amber-200">
                  {step.stepNumber}
                </span>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-slate-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </li>
          ))}
        </ol>

        <div className="max-w-2xl mx-auto text-center">
          <p className="font-serif text-lg sm:text-xl text-slate-800 italic mb-8">
            No pressure. Understand the process first, then decide.
          </p>
          <BookingCta size="lg" />
        </div>
      </div>
    </section>
  );
}
