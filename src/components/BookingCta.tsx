import React from "react";
import { ArrowRight } from "lucide-react";
import { siteConfig } from "../config/siteConfig";

type BookingCtaSize = "sm" | "md" | "lg";

interface BookingCtaProps {
  label?: React.ReactNode;
  ariaLabel?: string;
  size?: BookingCtaSize;
  className?: string;
}

const sizeClasses: Record<BookingCtaSize, string> = {
  sm: "min-h-11 px-4 sm:px-5 py-2.5 text-xs sm:text-sm",
  md: "min-h-12 px-8 py-3.5 text-sm sm:text-base",
  lg: "w-full sm:w-auto min-h-12 sm:min-h-14 px-8 sm:px-12 py-3.5 sm:py-5 text-sm sm:text-lg",
};

export default function BookingCta({
  label = siteConfig.bookingCtaText,
  ariaLabel,
  size = "md",
  className = "",
}: BookingCtaProps) {
  const accessibleName =
    ariaLabel || (typeof label === "string" ? label : siteConfig.bookingCtaText);

  return (
    <a
      href={siteConfig.bookingCtaLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={accessibleName}
      className={`group relative inline-flex items-center justify-center gap-2 rounded-full font-bold text-slate-950 bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-400 hover:from-amber-300 hover:to-yellow-200 shadow-lg shadow-amber-400/25 hover:shadow-amber-400/40 transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 overflow-hidden focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-700 ${sizeClasses[size]} ${className}`}
    >
      {size === "lg" && (
        <span className="absolute top-0 left-0 w-1/3 h-full bg-white/40 skew-x-12 animate-shimmer pointer-events-none motion-reduce:hidden" aria-hidden="true" />
      )}
      <span>{label}</span>
      <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
    </a>
  );
}
