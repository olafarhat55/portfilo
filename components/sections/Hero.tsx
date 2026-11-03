"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { personalInfo } from "@/data/portfolio";

/** Typing animation that cycles through an array of strings. */
function useTypingEffect(words: string[], typingSpeed = 80, deletingSpeed = 50, pauseMs = 1800) {
  const [displayed, setDisplayed] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex];

    const timeout = setTimeout(() => {
      if (!deleting) {
        setDisplayed(current.slice(0, charIndex + 1));
        if (charIndex + 1 === current.length) {
          setTimeout(() => setDeleting(true), pauseMs);
        } else {
          setCharIndex((c) => c + 1);
        }
      } else {
        setDisplayed(current.slice(0, charIndex - 1));
        if (charIndex - 1 === 0) {
          setDeleting(false);
          setWordIndex((w) => (w + 1) % words.length);
          setCharIndex(0);
        } else {
          setCharIndex((c) => c - 1);
        }
      }
    }, deleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, deleting, wordIndex, words, typingSpeed, deletingSpeed, pauseMs]);

  return displayed;
}

export default function Hero() {
  const typedText = useTypingEffect(personalInfo.typingTitles);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 100);
    return () => clearTimeout(t);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const fade = (delay: string) =>
    `transition-all duration-700 ${delay} ${
      mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
    }`;

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-background">
      {/* Grid background */}
      <div
        className="absolute inset-0 bg-grid-pattern bg-grid opacity-100 pointer-events-none"
        aria-hidden="true"
      />
      {/* Gradient blobs */}
      <div className="absolute inset-0 bg-hero-gradient pointer-events-none" aria-hidden="true" />
      {/* Grain */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "200px 200px",
        }}
        aria-hidden="true"
      />
      {/* Floating circles */}
      <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-primary/5 blur-3xl animate-float pointer-events-none" />
      <div
        className="absolute bottom-1/3 left-1/5 w-48 h-48 rounded-full bg-secondary/5 blur-3xl animate-float pointer-events-none"
        style={{ animationDelay: "1.5s" }}
      />

      {/* Main content */}
      <div className="relative max-w-[1100px] mx-auto px-6 py-32 pt-40 w-full">
        <div className="max-w-3xl mx-auto flex flex-col items-center text-center">
          {/* 1) Image */}
          <div className={`relative mb-8 ${fade("")}`}>
            <div className="absolute -inset-1.5 rounded-full bg-gradient-to-r from-primary to-secondary opacity-80 blur-sm" />
            <div className="relative w-40 h-40 sm:w-48 sm:h-48 rounded-full overflow-hidden">
              <Image
                src="/profile.jpg"
                alt={personalInfo.name}
                width={192}
                height={192}
                priority
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Available badge */}
          <div
            className={`inline-flex items-center gap-2 bg-green-500/10 border border-green-500/20 text-green-400 text-sm font-mono px-3 py-1.5 rounded-full mb-6 ${fade("delay-100")}`}
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
            </span>
            Available for opportunities
          </div>

          {/* 2) Name */}
          <h1
            className={`font-display font-bold text-5xl sm:text-6xl lg:text-7xl text-text leading-[1.05] mb-4 ${fade("delay-200")}`}
          >
            Hi, I&apos;m{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Ola Farhat
            </span>
          </h1>

          {/* 3) Title (typing) */}
          <div className={`h-12 sm:h-14 flex items-center justify-center mb-10 ${fade("delay-300")}`}>
            <span className="font-display font-semibold text-2xl sm:text-3xl text-primary">
              {typedText}
            </span>
            <span className="ml-1 inline-block w-0.5 h-7 sm:h-8 bg-primary animate-typing-blink" />
          </div>

          {/* CTA Buttons */}
          <div className={`flex flex-col sm:flex-row gap-4 justify-center ${fade("delay-[400ms]")}`}>
            <button
              onClick={() => scrollTo("projects")}
              className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-primary hover:bg-primary-dark text-white font-body font-semibold rounded-xl transition-all duration-300 shadow-glow-primary hover:shadow-none hover:-translate-y-0.5"
            >
              View My Work
              <svg
                className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>

            <a
              href="/Ola_Farhat_CV.pdf"
              download="Ola_Farhat_CV.pdf"
              className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white/5 hover:bg-white/10 text-text font-body font-semibold rounded-xl border border-white/10 hover:border-primary/40 transition-all duration-300 hover:-translate-y-0.5"
            >
              <svg
                className="w-4 h-4 text-primary group-hover:scale-110 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download CV
            </a>
          </div>

          {/* Quick contact links */}
          <div className={`flex items-center justify-center gap-5 mt-10 ${fade("delay-500")}`}>
            <span className="text-xs font-mono text-muted/60 uppercase tracking-widest">Find me on</span>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-text transition-colors duration-200"
              aria-label="GitHub"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-text transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="text-muted hover:text-text transition-colors duration-200"
              aria-label="Email"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce opacity-40">
        <span className="text-xs font-mono text-muted tracking-widest uppercase">Scroll</span>
        <svg className="w-4 h-4 text-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}