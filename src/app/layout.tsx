import type { Metadata } from "next";
import { Outfit, Work_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import StickyMobileBar from "@/components/StickyMobileBar";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://certifications.mentoria.com"),
  title: {
    default: "MANA | Mentoria AI Navigation Architect Certification",
    template: "%s | MANA by Mentoria",
  },
  description:
    "MANA trains counsellors, educators and career professionals to build a self-sufficient, AI-era career architecture practice. Apply to join the next cohort.",
  openGraph: {
    title: "MANA | Mentoria AI Navigation Architect Certification",
    description:
      "India's first AI-era career facilitator certification. A Mentoria Training & Certification vertical programme.",
    siteName: "MANA by Mentoria",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${workSans.variable} h-full scroll-smooth antialiased`}>
      <body className="min-h-full flex flex-col pb-16 sm:pb-0">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppFloat />
        <StickyMobileBar />
      </body>
    </html>
  );
}
