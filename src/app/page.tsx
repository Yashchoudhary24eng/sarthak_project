import React from "react";
import Header from "../components/Header";
import HeroVsl from "../components/HeroVsl";
import TestimonialsSection from "../components/TestimonialsSection";
import JourneySection from "../components/JourneySection";
import ProgramDetails from "../components/ProgramDetails";
import ConversationCta from "../components/ConversationCta";
import FaqSection from "../components/FaqSection";
import RazorpayCtaCard from "../components/RazorpayCtaCard";
import Footer from "../components/Footer";
import StickyMobileCta from "../components/StickyMobileCta";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#fafaf8] text-slate-800 flex flex-col relative selection:bg-amber-200 selection:text-amber-900 pb-[5.5rem] md:pb-0">
      <Header />

      <main id="main-content">
        <HeroVsl />
        <TestimonialsSection />
        <JourneySection />
        <ProgramDetails />
        <ConversationCta />
        <FaqSection />
        <RazorpayCtaCard />
      </main>

      <Footer />
      <StickyMobileCta />
    </div>
  );
}
