import React from "react";
import { siteConfig } from "../config/siteConfig";
import BookingCta from "./BookingCta";

export default function ConversationCta() {
  return (
    <section id="conversation" className="relative py-12 sm:py-16 md:py-24 bg-white overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[360px] bg-amber-200/35 rounded-full blur-[160px] pointer-events-none" aria-hidden="true" />

      <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="rounded-3xl bg-gradient-to-b from-[#fbf8f0] to-[#f6f1e3] border border-amber-300/80 p-6 sm:p-14 text-center shadow-md">
          <p className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.22em] text-amber-800 mb-4">
            {siteConfig.brandName}
          </p>

          <h2 className="font-serif text-[1.75rem] sm:text-4xl md:text-5xl font-bold text-slate-900 tracking-tight leading-tight mb-5">
            Your Journey Begins With a Conversation
          </h2>

          <p className="max-w-2xl mx-auto text-slate-700 text-sm sm:text-base leading-relaxed mb-3">
            You don&apos;t need to make a decision before understanding the process.
          </p>
          <p className="max-w-2xl mx-auto text-slate-700 text-sm sm:text-base leading-relaxed mb-8">
            Book a one-on-one call, discuss your concerns, and discover whether the Vedic Manifestation program is the right fit for you.
          </p>

          <BookingCta size="lg" label={siteConfig.bookingCtaShortText} />

          <p className="mt-8 font-serif text-base sm:text-lg text-slate-800 italic">
            Understand your path. Make an informed decision. Begin with intention.
          </p>
        </div>
      </div>
    </section>
  );
}
