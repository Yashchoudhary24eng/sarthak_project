import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const sansFont = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  display: "swap",
});

const serifFont = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#fafaf8",
  viewportFit: "cover",
};

export const metadata: Metadata = {
  title: "Vedic Manifestation | From Wish to Reality",
  description: "Your desires deserve a path. Discover yours through personalized Vedic wisdom.",
  keywords: ["vedic manifestation", "vedic astrology", "personalized kundali", "birth chart remedies", "vedic mantras"],
  openGraph: {
    title: "Vedic Manifestation | From Wish to Reality",
    description: "Your desires deserve a path. Discover yours through personalized Vedic wisdom.",
    type: "website",
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${sansFont.variable} ${serifFont.variable} scroll-smooth`}
    >
      <body className="min-h-screen bg-[#fafaf8] text-slate-800 antialiased selection:bg-amber-200 selection:text-amber-900">
        {children}
      </body>
    </html>
  );
}
