"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Github, Linkedin } from "lucide-react";

const stagger = {
  animate: { transition: { staggerChildren: 0.12 } },
};

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] } },
};

export default function Hero() {
  const prefersReducedMotion = useReducedMotion();
  const variants = prefersReducedMotion
    ? { initial: { opacity: 0 }, animate: { opacity: 1 } }
    : fadeUp;

  return (
    <section className="min-h-screen bg-bg flex items-center pt-24 pb-16 px-6">
      <div className="max-w-6xl mx-auto w-full">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-16">
          {/* Left: Text */}
          <motion.div
            className="flex-1 max-w-2xl"
            variants={stagger}
            initial="initial"
            animate="animate"
          >
            <motion.span
              variants={variants}
              className="inline-block text-cream text-sm font-medium tracking-[0.2em] uppercase mb-6"
            >
              Nodirbek Zayniddinov — Gettysburg, PA, USA
            </motion.span>

            <motion.h1
              variants={variants}
              className="font-grotesk text-6xl md:text-7xl xl:text-8xl font-bold leading-[1.05] text-white mb-2"
            >
              Software
            </motion.h1>
            <motion.div variants={variants} className="relative mb-8">
              <h1 className="font-grotesk text-6xl md:text-7xl xl:text-8xl font-bold leading-[1.05] text-white">
                Engineer.
              </h1>
              <span
                className="absolute -bottom-1 left-0 h-[3px] w-full bg-red-600 origin-left scale-x-0 animate-underline-grow"
                aria-hidden="true"
              />
            </motion.div>

            <motion.p
              variants={variants}
              className="text-[#71717A] text-lg md:text-xl leading-relaxed max-w-lg mb-10"
            >
              I build solid, scalable software with great user experiences.
              20-year-old engineer specializing in full-stack development,
              design systems &amp; clean architecture.
            </motion.p>

            <motion.div
              variants={variants}
              className="flex flex-wrap items-center gap-4"
            >
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-semibold px-7 py-3.5 rounded-full transition-colors duration-200 cursor-pointer"
              >
                Get in touch
                <ArrowRight size={16} />
              </Link>
              <Link
                href="/work"
                className="inline-flex items-center gap-2 border border-[#2A2A2A] hover:border-[#71717A] text-[#71717A] hover:text-white font-semibold px-7 py-3.5 rounded-full transition-colors duration-200 cursor-pointer"
              >
                View my work
              </Link>
            </motion.div>

            <motion.div
              variants={variants}
              className="flex items-center gap-5 mt-10"
            >
              <a
                href="https://github.com/n1dlee"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-[#71717A] hover:text-white transition-colors cursor-pointer"
              >
                <Github size={20} strokeWidth={1.5} />
              </a>
              <a
                href="https://www.linkedin.com/in/n1dleee/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-[#71717A] hover:text-white transition-colors cursor-pointer"
              >
                <Linkedin size={20} strokeWidth={1.5} />
              </a>
              <span className="w-px h-5 bg-[#2A2A2A]" />
              <a
                href="/assets/resume/resume.pdf"
                download
                className="text-sm text-[#71717A] hover:text-cream transition-colors cursor-pointer"
              >
                Download résumé ↓
              </a>
            </motion.div>
          </motion.div>

          {/* Right: Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="flex-shrink-0"
          >
            <div className="relative w-64 h-80 md:w-80 md:h-96 lg:w-96 lg:h-[480px]">
              <div className="absolute inset-0 rounded-3xl bg-red-600/20 blur-2xl scale-95 translate-y-4" />
              <div className="relative w-full h-full rounded-3xl overflow-hidden border border-[#2A2A2A] bg-surface">
                <Image
                  src="/assets/img/handsome.jpg"
                  alt="Nodirbek Zayniddinov"
                  fill
                  priority
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 256px, (max-width: 1024px) 320px, 384px"
                />
              </div>
              <div className="absolute -bottom-3 -right-3 bg-red-600 text-white text-xs font-medium px-3 py-1.5 rounded-full shadow-lg">
                Available for work
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
