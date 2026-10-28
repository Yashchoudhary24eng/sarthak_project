import React from "react";
import { siteConfig } from "../config/siteConfig";
import BookingCta from "./BookingCta";
import HeroPlayer from "./HeroPlayer";
import { Sparkles } from "lucide-react";

export default function HeroVsl() {
  return (
    <section id="vsl-overview" className="relative pt-7 pb-12 sm:pt-10 sm:pb-16 md:pt-16 md:pb-24 overflow-hidden">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-amber-200/40 rounded-full blur-[140px] pointer-events-none -z-10" aria-hidden="true" />
      <div className="absolute top-1/3 left-1/4 w-[350px] h-[350px] bg-amber-100/60 rounded-full blur-[120px] pointer-events-none -z-10" aria-hidden="true" />

      <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-50 border border-amber-200/80 text-amber-900 text-xs sm:text-sm font-semibold mb-6 shadow-xs">
          <Sparkles className="w-3.5 h-3.5 text-amber-600" aria-hidden="true" />
          <span>{siteConfig.brandName}</span>
        </div>

        <h1 className="font-serif text-[2.1rem] sm:text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tight leading-[1.12] mb-4 sm:mb-6">
          From Wish to{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-700 via-yellow-600 to-amber-700">
            Reality.
          </span>
        </h1>

        <p className="max-w-2xl mx-auto text-[15px] sm:text-lg md:text-xl text-slate-600 leading-relaxed font-normal mb-6 sm:mb-8">
          {siteConfig.heroDescription}
        </p>

        <p className="mb-4 text-[11px] sm:text-xs font-bold uppercase tracking-[0.22em] text-amber-800">
          Watch the video below
        </p>

        <div className="relative mx-auto max-w-4xl rounded-2xl p-1.5 bg-gradient-to-b from-amber-300/40 via-amber-200/20 to-amber-100/10 shadow-2xl shadow-amber-950/10 mb-10">
          <HeroPlayer
            src={siteConfig.mainVsl.src}
            poster={siteConfig.mainVsl.poster}
            title={siteConfig.mainVsl.title}
          />
        </div>

        <div className="max-w-xl mx-auto flex flex-col items-center">
          <BookingCta size="lg" />
        </div>
      </div>
    </section>
  );
}
