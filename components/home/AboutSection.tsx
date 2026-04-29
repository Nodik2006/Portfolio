import FadeIn from "@/components/ui/FadeIn";
import Image from "next/image";
import { MapPin, Mail, Github, Linkedin, Instagram, Youtube, Send } from "lucide-react";

const skills = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Vue.js",
  "Node.js",
  "Python",
  "PostgreSQL",
  "MongoDB",
  "REST API",
  "CSS-in-JS",
  "Tailwind CSS",
];

const socials = [
  { href: "https://github.com/n1dlee", icon: Github, label: "GitHub" },
  { href: "https://www.linkedin.com/in/n1dleee/", icon: Linkedin, label: "LinkedIn" },
  { href: "https://www.instagram.com/n1dleee.png/", icon: Instagram, label: "Instagram" },
  { href: "https://www.youtube.com/@n1dleee", icon: Youtube, label: "YouTube" },
  { href: "https://t.me/n1dleee", icon: Send, label: "Telegram" },
];

export default function AboutSection() {
  return (
    <section id="about" className="bg-[#1A1A1A] py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <span className="text-red-600 text-sm font-medium tracking-[0.2em] uppercase block mb-4">
            About
          </span>
          <h2 className="font-grotesk text-4xl md:text-5xl font-bold text-white mb-16">
            Who I am
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
          {/* Left: photo + info */}
          <FadeIn className="lg:col-span-2 flex flex-col items-start gap-6" delay={0.1}>
            <div className="relative w-48 h-56 rounded-2xl overflow-hidden border border-[#2A2A2A] flex-shrink-0">
              <Image
                src="/assets/img/nodirbek.jpg"
                alt="Nodirbek Zayniddinov"
                fill
                className="object-cover object-top"
                sizes="192px"
              />
            </div>

            <div className="flex flex-col gap-2 text-sm text-[#71717A]">
              <span className="flex items-center gap-2">
                <MapPin size={14} className="text-red-600" />
                Gettysburg, PA, United States
              </span>
              <a
                href="mailto:flash369636@gmail.com"
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Mail size={14} className="text-red-600" />
                flash369636@gmail.com
              </a>
            </div>

            <div className="flex items-center gap-4 pt-2">
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
          </FadeIn>

          {/* Right: bio + skills */}
          <FadeIn className="lg:col-span-3" delay={0.2}>
            <p className="text-[#71717A] text-lg leading-relaxed mb-6">
              I&apos;m a 20-year-old software engineer based in Gettysburg, PA,
              with a passion for building things that are fast, accessible, and
              genuinely useful. I thrive on turning complex problems into clean,
              well-engineered solutions.
            </p>
            <p className="text-[#71717A] text-lg leading-relaxed mb-10">
              Engineer valued for driving high-performance web experiences across
              the full stack. I design quality, user-friendly and scalable
              software regardless of stack — and I&apos;m always exploring new
              technologies and contributing to open-source projects.
            </p>

            <h3 className="font-grotesk text-sm font-semibold text-white uppercase tracking-widest mb-5">
              Technologies I work with
            </h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="border border-[#2A2A2A] hover:border-red-600/50 text-[#71717A] hover:text-white text-sm px-3 py-1.5 rounded-full transition-colors duration-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
