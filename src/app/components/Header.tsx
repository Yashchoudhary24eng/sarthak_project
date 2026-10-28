import Link from 'next/link';

export default function Header() {
  return (
    <header className="w-full flex items-center justify-between py-4 px-6 bg-white bg-opacity-90 backdrop-blur-sm fixed top-0 left-0 z-50 shadow-sm">
      <div className="text-2xl font-semibold" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
        Astrologer Sarthak
      </div>
      <nav className="flex space-x-6 text-sm font-medium text-slate-800">
        <Link href="#program"><a>Program</a></Link>
        <Link href="#testimonials"><a>Testimonials</a></Link>
        <Link href="#about"><a>About</a></Link>
        <Link href="#faq"><a>FAQ</a></Link>
      </nav>
    </header>
  );
}
