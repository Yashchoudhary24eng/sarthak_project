import React from "react";
import { siteConfig } from "../config/siteConfig";
import BookingCta from "./BookingCta";

export default function RazorpayCtaCard() {
  return (
    <section className="relative py-12 sm:py-16 md:py-24 bg-gradient-to-b from-[#faf8f4] via-[#f6f0df] to-[#faf8f4] overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-amber-200/40 rounded-full blur-[160px] pointer-events-none" aria-hidden="true" />

      <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <p className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.28em] text-amber-800 mb-5">
          {siteConfig.brandName}
        </p>

        <h2 className="font-serif text-[1.85rem] sm:text-5xl md:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight mb-5">
          From Wish to{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-700 via-yellow-600 to-amber-700">
            Reality.
          </span>
        </h2>

        <p className="max-w-2xl mx-auto text-base sm:text-lg text-slate-700 leading-relaxed mb-10">
          Your journey begins with one conversation.
        </p>

        <BookingCta size="lg" />
      </div>
    </section>
  );
}
