import Link from "next/link";
import { Github, Linkedin, Instagram, Youtube, Send } from "lucide-react";

const socials = [
  {
    href: "https://github.com/n1dlee",
    icon: Github,
    label: "GitHub",
  },
  {
    href: "https://www.linkedin.com/in/n1dleee/",
    icon: Linkedin,
    label: "LinkedIn",
  },
  {
    href: "https://www.instagram.com/n1dleee.png/",
    icon: Instagram,
    label: "Instagram",
  },
  {
    href: "https://www.youtube.com/@n1dleee",
    icon: Youtube,
    label: "YouTube",
  },
  {
    href: "https://t.me/n1dleee",
    icon: Send,
    label: "Telegram",
  },
];

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
];

export default function Footer() {
  return (
    <footer className="bg-[#1A1A1A] border-t border-[#2A2A2A]">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="flex flex-col md:flex-row justify-between gap-12 mb-12">
          <div>
            <span className="font-grotesk font-bold text-2xl text-red-600 block mb-4">
              n1dleee
            </span>
            <p className="text-[#71717A] text-sm max-w-xs leading-relaxed">
              Software Engineer building solid, scalable software with great
              user experiences. Based in Gettysburg, PA.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <span className="text-xs font-medium text-[#71717A] uppercase tracking-widest mb-1">
              Navigation
            </span>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-[#71717A] hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex flex-col gap-3">
            <span className="text-xs font-medium text-[#71717A] uppercase tracking-widest mb-1">
              Contact
            </span>
            <a
              href="mailto:flash369636@gmail.com"
              className="text-sm text-[#71717A] hover:text-white transition-colors"
            >
              flash369636@gmail.com
            </a>
            <a
              href="https://t.me/n1dleee"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-[#71717A] hover:text-white transition-colors"
            >
              t.me/n1dleee
            </a>
          </div>
        </div>

        <div className="border-t border-[#2A2A2A] pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[#71717A] text-sm">
            &copy; {new Date().getFullYear()} Nodirbek Zayniddinov. All rights
            reserved.
          </p>
          <div className="flex items-center gap-5">
            {socials.map(({ href, icon: Icon, label }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="text-[#71717A] hover:text-white transition-colors cursor-pointer"
              >
                <Icon size={18} strokeWidth={1.5} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
