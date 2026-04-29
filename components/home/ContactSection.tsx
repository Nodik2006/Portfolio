"use client";

import { useState } from "react";
import FadeIn from "@/components/ui/FadeIn";
import { ArrowRight, Github, Linkedin, Send, Instagram, Youtube } from "lucide-react";

const socials = [
  { href: "https://github.com/n1dlee", icon: Github, label: "GitHub" },
  { href: "https://www.linkedin.com/in/n1dleee/", icon: Linkedin, label: "LinkedIn" },
  { href: "https://www.instagram.com/n1dleee.png/", icon: Instagram, label: "Instagram" },
  { href: "https://www.youtube.com/@n1dleee", icon: Youtube, label: "YouTube" },
  { href: "https://t.me/n1dleee", icon: Send, label: "Telegram" },
];

type Status = "idle" | "loading" | "success" | "error";

export default function ContactSection() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("https://formspree.io/f/mpwzalvw", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  const inputClass =
    "w-full bg-transparent border-b border-[#2A2A2A] focus:border-red-600 outline-none py-3 text-white placeholder-[#71717A] transition-colors duration-200 text-base";

  return (
    <section id="contact" className="bg-bg py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <FadeIn>
            <span className="text-red-600 text-sm font-medium tracking-[0.2em] uppercase block mb-4">
              Contact
            </span>
            <h2 className="font-grotesk text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Let&apos;s build<br />something great.
            </h2>
            <p className="text-[#71717A] text-lg leading-relaxed mb-10 max-w-sm">
              Got a project in mind, a question, or just want to say hello? My
              inbox is always open.
            </p>

            <div className="flex flex-col gap-3 mb-10">
              <a
                href="mailto:flash369636@gmail.com"
                className="text-[#71717A] hover:text-cream transition-colors text-sm"
              >
                flash369636@gmail.com
              </a>
              <a
                href="https://t.me/n1dleee"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#71717A] hover:text-cream transition-colors text-sm"
              >
                t.me/n1dleee
              </a>
            </div>

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
                  <Icon size={20} strokeWidth={1.5} />
                </a>
              ))}
            </div>
          </FadeIn>

          {/* Right: form */}
          <FadeIn delay={0.15}>
            {status === "success" ? (
              <div className="flex flex-col items-start gap-4 py-12">
                <div className="w-12 h-12 rounded-full bg-red-600/10 flex items-center justify-center">
                  <ArrowRight size={20} className="text-red-600" />
                </div>
                <h3 className="font-grotesk text-2xl font-bold text-white">
                  Message sent!
                </h3>
                <p className="text-[#71717A]">
                  Thanks for reaching out. I&apos;ll get back to you soon.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="text-sm text-red-600 hover:text-red-500 transition-colors cursor-pointer mt-2"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <label htmlFor="name" className="text-xs text-[#71717A] uppercase tracking-widest block mb-2">
                      Your Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="Jane Smith"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="text-xs text-[#71717A] uppercase tracking-widest block mb-2">
                      Email Address
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="jane@company.com"
                      className={inputClass}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="text-xs text-[#71717A] uppercase tracking-widest block mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    placeholder="Hi! I'd love to discuss a project with you..."
                    className={`${inputClass} resize-none`}
                  />
                </div>

                {status === "error" && (
                  <p className="text-red-500 text-sm -mt-4">
                    Something went wrong. Please try again or email me directly.
                  </p>
                )}

                <div>
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold px-8 py-3.5 rounded-full transition-colors duration-200 cursor-pointer"
                  >
                    {status === "loading" ? "Sending…" : "Send message"}
                    <ArrowRight size={16} />
                  </button>
                </div>
              </form>
            )}
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
