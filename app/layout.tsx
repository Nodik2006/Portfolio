import type { Metadata } from "next";
import { Space_Grotesk, DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nodirbek Zayniddinov | Software Engineer",
  description:
    "Software Engineer based in Gettysburg, PA, specializing in building solid, scalable software with great user experiences.",
  keywords: [
    "Nodirbek Zayniddinov",
    "software engineer",
    "React",
    "Next.js",
    "Node.js",
    "web developer",
    "Gettysburg",
    "Pennsylvania",
  ],
  authors: [{ name: "Nodirbek Zayniddinov" }],
  openGraph: {
    title: "Nodirbek Zayniddinov | Software Engineer",
    description:
      "Software Engineer building solid, scalable software with great user experiences.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${dmSans.variable}`}>
      <body className="font-sans bg-bg text-[#fafafa] antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
