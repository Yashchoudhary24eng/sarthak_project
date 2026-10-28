import React from "react";
import { programInclusions } from "../data/testimonialsData";
import { BookOpen, Compass, Flower2, Sparkles, UserRound, Watch, Waves } from "lucide-react";

const inclusionIcons = [BookOpen, Flower2, Watch, Compass, Waves, UserRound];

export default function ProgramDetails() {
  return (
    <section id="program-breakdown" className="relative py-12 sm:py-16 md:py-24 bg-[#fbf9f4] border-y border-amber-200/80 overflow-hidden">
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-amber-100/40 rounded-full blur-[140px] pointer-events-none" aria-hidden="true" />

      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-3 mb-5" aria-hidden="true">
            <span className="h-px w-10 bg-amber-300" />
            <Sparkles className="w-4 h-4 text-amber-700" />
            <span className="h-px w-10 bg-amber-300" />
          </div>

          <h2 className="font-serif text-[1.75rem] sm:text-4xl md:text-5xl font-bold text-slate-900 tracking-tight leading-tight mb-4">
            What&apos;s Inside the{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-700 via-yellow-600 to-amber-700">
              Vedic Manifestation Program?
            </span>
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Not a one-size-fits-all approach. A personalized program that brings together Vedic practices and manifestation techniques, tailored to your individual birth chart and goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
          {programInclusions.map((item, index) => {
            const Icon = inclusionIcons[index];
            return (
              <article
                key={item.title}
                className="rounded-2xl bg-white border border-amber-200/80 p-6 sm:p-8 shadow-xs hover:border-amber-300 hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-5">
                  <div className="w-11 h-11 rounded-full bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-700">
                    <Icon className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <span className="font-serif text-sm font-bold text-amber-800/70">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="font-serif text-xl font-bold text-slate-900 mb-3 leading-snug">
                  {item.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
