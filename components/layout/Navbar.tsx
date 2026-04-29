"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const links = [
  { href: "/", label: "Home" },
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={`fixed top-4 left-4 right-4 z-50 transition-all duration-300 rounded-2xl border border-[#2A2A2A] px-5 py-3 flex items-center justify-between ${
          scrolled
            ? "bg-[#1A1A1A]/90 backdrop-blur-md shadow-lg shadow-black/30"
            : "bg-[#1A1A1A]/70 backdrop-blur-sm"
        }`}
      >
        <Link
          href="/"
          className="font-grotesk font-bold text-xl text-red-600 tracking-tight hover:text-red-500 transition-colors"
        >
          n1dleee
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors duration-200 ${
                pathname === link.href
                  ? "text-white"
                  : "text-[#71717A] hover:text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/#contact"
            className="hidden md:inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white text-sm font-medium px-4 py-2 rounded-full transition-colors duration-200 cursor-pointer"
          >
            Get in touch
          </Link>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            className="md:hidden p-2 text-[#71717A] hover:text-white transition-colors cursor-pointer"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-[#0D0D0D] flex flex-col justify-center items-center gap-8 md:hidden">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-grotesk text-4xl font-bold text-white hover:text-red-600 transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/#contact"
            className="mt-4 bg-red-600 hover:bg-red-700 text-white font-medium px-8 py-3 rounded-full transition-colors text-lg cursor-pointer"
          >
            Get in touch
          </Link>
        </div>
      )}
    </>
  );
}
