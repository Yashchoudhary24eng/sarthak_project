import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="py-8 bg-[#fafaf8] text-slate-800 text-center border-t border-gray-200">
      <div className="max-w-4xl mx-auto px-4">
        <p className="text-sm mb-4">© 2026 Astrologer Sarthak. All rights reserved.</p>
        <nav className="flex justify-center space-x-6 text-sm">
          <Link href="#program"><a>Program</a></Link>
          <Link href="#testimonials"><a>Testimonials</a></Link>
          <Link href="#about"><a>About</a></Link>
          <Link href="#faq"><a>FAQ</a></Link>
        </nav>
      </div>
    </footer>
  );
}
