import Image from 'next/image';
import Link from 'next/link';

export default function ProgramDetails() {
  return (
    <section id="program" className="py-20 bg-[#e8f5ff] text-slate-800">
      <div className="max-w-5xl mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
            The Love Birds Program
          </h2>
          <p className="text-lg mb-4">
            A 6‑week deep‑dive using Vedic astrology to diagnose relationship patterns, clear planetary doshas, and empower lasting love.
          </p>
          <ul className="list-disc list-inside space-y-2 mb-6 text-base">
            <li>Personal Kundali matching analysis</li>
            <li>Live 1‑on‑1 session each week</li>
            <li>Guided meditations & rituals</li>
            <li>Custom relationship roadmap</li>
            <li>Lifetime access to recordings</li>
          </ul>
          <Link href="#apply">
            <a className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-md hover:bg-indigo-700 transition-colors font-medium">
              Apply Now – Secure Your Spot
            </a>
          </Link>
        </div>
        <div className="flex justify-center">
          {/* Placeholder image – replace with program illustration */}
          <Image
            src="/placeholder-program.png"
            alt="Love Birds Program illustration"
            width={400}
            height={300}
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
