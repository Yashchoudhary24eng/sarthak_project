import React from "react";
import { siteConfig } from "../config/siteConfig";
import BookingCta from "./BookingCta";
import { Sparkles } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-amber-200/80 bg-white/90 backdrop-blur-md shadow-xs">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-amber-900 focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-amber-700"
      >
        Skip to main content
      </a>

      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between gap-3">
        <a href="#vsl-overview" className="flex items-center gap-2.5 sm:gap-3 group min-w-0">
          <div className="w-9 h-9 sm:w-10 sm:h-10 shrink-0 rounded-full bg-gradient-to-tr from-amber-500 via-yellow-400 to-amber-200 p-[1.5px] shadow-md shadow-amber-500/10">
            <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-amber-600 group-hover:rotate-12 transition-transform duration-300" aria-hidden="true" />
            </div>
          </div>
          <div className="min-w-0">
            <div className="font-serif text-base sm:text-2xl font-bold tracking-tight text-slate-900 group-hover:text-amber-800 transition-colors leading-tight truncate">
              {siteConfig.brandName}
            </div>
            <div className="hidden sm:block text-[11px] font-sans tracking-widest uppercase text-amber-700 font-semibold truncate">
              {siteConfig.tagline}
            </div>
          </div>
        </a>

        <nav aria-label="Primary" className="hidden lg:flex items-center gap-8 text-sm font-medium text-slate-600">
          <a href="#vsl-overview" className="hover:text-amber-700 transition-colors">
            Overview
          </a>
          <a href="#client-testimonials" className="hover:text-amber-700 transition-colors">
            Experiences
          </a>
          <a href="#journey" className="hover:text-amber-700 transition-colors">
            Journey
          </a>
          <a href="#program-breakdown" className="hover:text-amber-700 transition-colors">
            Program
          </a>
          <a href="#faq" className="hover:text-amber-700 transition-colors">
            FAQs
          </a>
        </nav>

        <BookingCta
          size="sm"
          ariaLabel={siteConfig.bookingCtaText}
          label={
            <>
              <span className="sm:hidden">Book Your Call</span>
              <span className="hidden sm:inline">{siteConfig.bookingCtaText}</span>
            </>
          }
        />
      </div>
    </header>
  );
}
