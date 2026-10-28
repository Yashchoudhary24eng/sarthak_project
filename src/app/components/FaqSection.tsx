import React from 'react';

export default function FaqSection() {
  const faqs = [
    {
      q: 'What is the Love Birds Program?',
      a: 'A 6‑week Vedic astrology‑based relationship coaching program that aligns planetary doshas and creates lasting love.'
    },
    {
      q: 'Do I need a prior astrology reading?',
      a: 'No, the program includes a full Kundali matching analysis as part of the onboarding.'
    },
    {
      q: 'How are the sessions delivered?',
      a: 'Live 1‑on‑1 video calls each week plus recorded meditations you can revisit.'
    },
    {
      q: 'What is the refund policy?',
      a: 'Full refund within the first 7 days if you feel the approach isn’t right for you.'
    },
  ];

  return (
    <section id="faq" className="py-20 bg-[#f5f9ff] text-slate-800">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
        Frequently Asked Questions
      </h2>
      <div className="max-w-4xl mx-auto space-y-4 px-4">
        {faqs.map((item, idx) => (
          <details key={idx} className="bg-white rounded-lg shadow-sm p-4 group open:shadow-md transition-shadow">
            <summary className="font-medium cursor-pointer text-lg group-open:font-semibold">
              {item.q}
            </summary>
            <p className="mt-2 text-base text-gray-700">{item.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
