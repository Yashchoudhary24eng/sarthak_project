import Image from 'next/image';

export default function AboutAstrologer() {
  return (
    <section id="about" className="py-20 bg-[#fafaf8] text-slate-800">
      <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row items-center gap-8">
        <div className="flex-1 flex justify-center">
          <Image
            src="/placeholder-astro.jpg"
            alt="Astrologer Sarthak"
            width={300}
            height={300}
            className="rounded-full border-4 border-indigo-200 shadow-lg"
          />
        </div>
        <div className="flex-1">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
            Meet Astrologer Sarthak
          </h2>
          <p className="text-lg mb-4">
            With over 15 years of experience decoding the celestial blueprint, Sarthak blends traditional Vedic wisdom with modern relationship coaching. His clients have seen transformative results in love, marriage, and personal growth.
          </p>
          <ul className="list-disc list-inside space-y-2 text-base">
            <li>Certified Vedic Astrologer (B. V. Siddhanta)</li>
            <li>Published author of *Celestial Love* and *Kundali Harmony*</li>
            <li>Featured in leading astrology magazines and podcasts</li>
            <li>Guides over 200 couples each year to lasting harmony</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
