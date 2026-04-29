import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import FadeIn from "@/components/ui/FadeIn";
import { MapPin, Mail, Download, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "About | Nodirbek Zayniddinov",
  description:
    "Software Engineer based in Gettysburg, PA — building performant, accessible web experiences.",
};

const coreTech = [
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
];

const otherSkills = [
  "Design Systems",
  "Progressive Web Apps",
  "Performance Optimization",
  "Software Testing",
  "SEO Optimization",
  "Accessibility (WCAG)",
  "Build Automation",
  "Responsive Design",
  "UX Design / Strategy",
  "Tilda",
];

const experience = [
  {
    title: "Freelance Developer",
    period: "2023 — Present",
    bullets: [
      "Collaborate with clients to deliver custom web solutions",
      "Build and maintain e-commerce platforms and landing pages",
      "Implement responsive designs and modern UI/UX practices",
      "Provide technical consultation and support",
    ],
  },
  {
    title: "Personal Projects",
    period: "2022 — Present",
    bullets: [
      "Develop and maintain multiple full-stack web applications",
      "Create responsive and accessible user interfaces",
      "Implement modern web development practices and tools",
      "Optimize application performance and user experience",
    ],
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-bg pt-28 pb-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Left Column */}
          <FadeIn className="lg:col-span-1">
            <div className="sticky top-28 flex flex-col gap-8">
              <div className="relative w-36 h-44 rounded-2xl overflow-hidden border border-[#2A2A2A]">
                <Image
                  src="/assets/img/nodirbek.jpg"
                  alt="Nodirbek Zayniddinov"
                  fill
                  className="object-cover object-top"
                  sizes="144px"
                />
              </div>

              <div className="flex flex-col gap-2 text-sm text-[#71717A]">
                <span className="flex items-center gap-2">
                  <MapPin size={13} className="text-red-600 flex-shrink-0" />
                  Gettysburg, PA, United States
                </span>
                <a
                  href="mailto:flash369636@gmail.com"
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <Mail size={13} className="text-red-600 flex-shrink-0" />
                  flash369636@gmail.com
                </a>
              </div>

              <div>
                <h3 className="text-xs font-semibold text-white uppercase tracking-widest mb-4">
                  Core Technologies
                </h3>
                <ul className="flex flex-col gap-1.5">
                  {coreTech.map((t) => (
                    <li key={t} className="flex items-center gap-2 text-sm text-[#71717A]">
                      <span className="w-1 h-1 rounded-full bg-red-600 flex-shrink-0" aria-hidden="true" />
                      {t}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xs font-semibold text-white uppercase tracking-widest mb-4">
                  Other Skills
                </h3>
                <ul className="flex flex-col gap-1.5">
                  {otherSkills.map((s) => (
                    <li key={s} className="flex items-center gap-2 text-sm text-[#71717A]">
                      <span className="w-1 h-1 rounded-full bg-[#2A2A2A] flex-shrink-0" aria-hidden="true" />
                      {s}
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href="/assets/resume/resume.pdf"
                download
                className="inline-flex items-center gap-2 border border-[#2A2A2A] hover:border-red-600/50 text-[#71717A] hover:text-white text-sm font-medium px-4 py-2.5 rounded-full transition-colors cursor-pointer w-fit"
              >
                <Download size={14} />
                Download résumé
              </a>
            </div>
          </FadeIn>

          {/* Right Column */}
          <div className="lg:col-span-2 flex flex-col gap-16">
            <FadeIn delay={0.1}>
              <span className="text-red-600 text-sm font-medium tracking-[0.2em] uppercase block mb-4">
                About Me
              </span>
              <h1 className="font-grotesk text-5xl md:text-6xl font-bold text-white leading-tight mb-2">
                Nodirbek
              </h1>
              <h1 className="font-grotesk text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
                Zayniddinov
              </h1>
              <h2 className="font-grotesk text-xl text-red-500 mb-8">
                Software Engineer · 20 y/o · Gettysburg, PA
              </h2>
              <p className="text-[#71717A] text-lg leading-relaxed mb-4">
                I&apos;m a 20-year-old software engineer valued for driving
                high-performance, accessible web experiences. I design quality,
                user-friendly and scalable software regardless of stack.
              </p>
              <p className="text-[#71717A] text-lg leading-relaxed">
                I believe great software is built at the intersection of solid
                engineering and thoughtful design. Whether it&apos;s a
                performance-critical React app or a full-stack platform, I care
                deeply about the details that make the difference.
              </p>
            </FadeIn>

            <FadeIn delay={0.15}>
              <h2 className="font-grotesk text-3xl font-bold text-white mb-10">
                Experience
              </h2>
              <div className="flex flex-col gap-12">
                {experience.map((exp) => (
                  <div key={exp.title} className="border-l-2 border-[#2A2A2A] pl-6 relative">
                    <span className="absolute -left-[5px] top-0 w-2 h-2 rounded-full bg-red-600" />
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                      <h3 className="font-grotesk text-xl font-semibold text-white">
                        {exp.title}
                      </h3>
                      <span className="text-sm text-[#71717A] font-medium">
                        {exp.period}
                      </span>
                    </div>
                    <ul className="flex flex-col gap-2">
                      {exp.bullets.map((b) => (
                        <li key={b} className="flex items-start gap-2 text-[#71717A] text-sm leading-relaxed">
                          <ArrowRight size={14} className="text-red-600 mt-0.5 flex-shrink-0" />
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-2xl p-8">
                <h3 className="font-grotesk text-xl font-bold text-white mb-3">
                  Open to new opportunities
                </h3>
                <p className="text-[#71717A] text-sm leading-relaxed mb-6">
                  I&apos;m actively looking for full-time roles and freelance
                  projects. If you&apos;re building something interesting,
                  let&apos;s talk.
                </p>
                <Link
                  href="/#contact"
                  className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white text-sm font-semibold px-6 py-3 rounded-full transition-colors cursor-pointer"
                >
                  Get in touch
                  <ArrowRight size={14} />
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </div>
  );
}
