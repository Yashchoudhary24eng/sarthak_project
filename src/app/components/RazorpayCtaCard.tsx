import Link from 'next/link';

export default function RazorpayCtaCard() {
  return (
    <section id="apply" className="py-16 bg-[#e0f2fe] text-slate-800 text-center">
      <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
        Ready to Transform Your Relationship?
      </h2>
      <p className="mb-6 max-w-2xl mx-auto">
        Secure your spot in the Love Birds Program with a simple, secure checkout.
      </p>
      <Link href="https://pages.razorpay.com/astrosarthak-lovebirds">
        <a className="inline-block bg-indigo-600 text-white px-8 py-3 rounded-md hover:bg-indigo-700 transition-colors text-lg font-medium">
          Pay &amp; Apply Now
        </a>
      </Link>
    </section>
  );
}
