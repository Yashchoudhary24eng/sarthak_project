import Image from 'next/image';

export default function TestimonialsSection() {
  // Placeholder data – replace with real testimonial video URLs & thumbnails
  const testimonials = Array.from({ length: 24 }, (_, i) => ({
    id: i + 1,
    title: `Testimonial ${i + 1}`,
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // placeholder
    thumbnail: '/placeholder-thumb.jpg',
  }));

  return (
    <section id="testimonials" className="py-16 bg-[#f5f9ff] text-slate-800">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-8" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
        What Our Happy Couples Say
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
        {testimonials.map((t) => (
          <div key={t.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow cosmic-glow">
            <div className="relative pt-[56.25%]">
              <iframe
                className="absolute inset-0 w-full h-full"
                src={t.videoUrl}
                title={t.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <div className="p-4">
              <p className="text-sm text-gray-600">{t.title}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-12">
        <a
          href="#apply"
          className="inline-block bg-indigo-600 text-white px-8 py-3 rounded-md hover:bg-indigo-700 transition-colors text-lg font-medium animate-shimmer"
        >
          Apply Now
        </a>
      </div>
    </section>
  );
}
