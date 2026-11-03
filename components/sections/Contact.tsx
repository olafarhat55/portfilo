"use client";

import SectionWrapper from "@/components/ui/SectionWrapper";
import { personalInfo } from "@/data/portfolio";

const clean = (url: string) => url.replace(/^https?:\/\//, "").replace(/\/$/, "");

export default function Contact() {
  return (
    <SectionWrapper id="contact" className="bg-surface/40">
      <div className="max-w-[1100px] mx-auto px-6">
        {/* Section heading */}
        <div className="text-center mb-16">
          <span className="text-xs font-mono text-primary uppercase tracking-widest mb-3 block">
            — Say hello —
          </span>
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-text">
            Let&apos;s Work <span className="text-primary">Together</span>
          </h2>
          <p className="font-body text-muted mt-4 max-w-md mx-auto text-sm leading-relaxed">
            I&apos;m open to new opportunities, collaborations, and interesting projects. Feel free to reach out!
          </p>
        </div>

        <div className="flex flex-col gap-6 max-w-xl mx-auto">
          {/* Email */}
          <a
            href={`mailto:${personalInfo.email}`}
            className="group flex items-center gap-4 bg-card border border-white/5 rounded-xl p-5 hover:border-primary/40 hover:shadow-glow-primary transition-all duration-300"
          >
            <div className="w-11 h-11 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
              <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div className="min-w-0">
              <p className="text-xs font-mono text-muted uppercase tracking-wide mb-0.5">Email</p>
              <p className="text-sm font-body font-medium text-text group-hover:text-primary transition-colors truncate">
                {personalInfo.email}
              </p>
            </div>
            <svg className="w-4 h-4 text-muted ml-auto flex-shrink-0 group-hover:text-primary group-hover:translate-x-1 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>

          {/* LinkedIn */}
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 bg-card border border-white/5 rounded-xl p-5 hover:border-secondary/40 hover:shadow-glow-secondary transition-all duration-300"
          >
            <div className="w-11 h-11 rounded-xl bg-secondary/10 border border-secondary/20 flex items-center justify-center flex-shrink-0 group-hover:bg-secondary/20 transition-colors">
              <svg className="w-5 h-5 text-secondary" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </div>
            <div className="min-w-0">
              <p className="text-xs font-mono text-muted uppercase tracking-wide mb-0.5">LinkedIn</p>
              <p className="text-sm font-body font-medium text-text group-hover:text-secondary transition-colors truncate">
                {clean(personalInfo.linkedin)}
              </p>
            </div>
            <svg className="w-4 h-4 text-muted ml-auto flex-shrink-0 group-hover:text-secondary group-hover:translate-x-1 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>

          {/* GitHub */}
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 bg-card border border-white/5 rounded-xl p-5 hover:border-white/20 transition-all duration-300"
          >
            <div className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-white/10 transition-colors">
              <svg className="w-5 h-5 text-text" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </div>
            <div className="min-w-0">
              <p className="text-xs font-mono text-muted uppercase tracking-wide mb-0.5">GitHub</p>
              <p className="text-sm font-body font-medium text-text group-hover:text-white transition-colors truncate">
                {clean(personalInfo.github)}
              </p>
            </div>
            <svg className="w-4 h-4 text-muted ml-auto flex-shrink-0 group-hover:text-white group-hover:translate-x-1 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>

          {/* CV Download */}
          <a
            href="/Ola_Farhat_CV.pdf"
            download="Ola_Farhat_CV.pdf"
            className="group flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white font-body font-semibold px-5 py-3.5 rounded-xl transition-all duration-300 shadow-glow-primary hover:shadow-none"
          >
            <svg className="w-4 h-4 group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Download My CV
          </a>
        </div>
      </div>
    </SectionWrapper>
  );
}