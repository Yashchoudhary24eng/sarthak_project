import Image from 'next/image';
import Link from 'next/link';

export default function HeroVsl() {
  return (
    <section id="hero" className="pt-20 pb-12 bg-[#e8f0fe] text-slate-800 flex flex-col items-center text-center px-4">
      <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
        Unlock the Secrets of Love with the <span className="text-indigo-600">Love Birds Program</span>
      </h1>
      <p className="text-lg md:text-xl mb-6 max-w-2xl">
        Align your planetary energies, heal relationship friction, and create lasting love using ancient Vedic wisdom.
      </p>
      {/* Video placeholder – replace src with actual VSL link when ready */}
      <div className="w-full max-w-3xl aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg overflow-hidden shadow-lg mb-8">
        <iframe
          className="w-full h-full"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ"
          title="Love Birds Program VSL"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <Link href="#program">
        <a className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-md hover:bg-indigo-700 transition-colors text-lg font-medium">
          Apply Now
        </a>
      </Link>
    </section>
  );
}
