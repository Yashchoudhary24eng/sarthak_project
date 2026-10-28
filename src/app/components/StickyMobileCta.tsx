import Link from 'next/link';

export default function StickyMobileCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 md:hidden bg-white bg-opacity-95 backdrop-blur-sm border-t border-gray-200 py-3 flex justify-center items-center">
      <Link href="#apply">
        <a className="inline-block bg-indigo-600 text-white px-6 py-2 rounded-full shadow-md hover:bg-indigo-700 transition-colors text-sm font-medium">
          Apply Now
        </a>
      </Link>
    </div>
  );
}
