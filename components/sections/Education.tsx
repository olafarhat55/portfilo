"use client";

import SectionWrapper from "@/components/ui/SectionWrapper";
import { education } from "@/data/portfolio";

export default function Education() {
  return (
    <SectionWrapper id="education">
      <div className="max-w-[1100px] mx-auto px-6">
        {/* Section heading */}
        <div className="text-center mb-16">
          <span className="text-xs font-mono text-primary uppercase tracking-widest mb-3 block">
            — My background —
          </span>
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-text">
            <span className="text-primary">Education</span>
          </h2>
        </div>

        {/* Education card */}
        <div className="max-w-2xl mx-auto">
          <div className="flex items-start gap-5 bg-card border border-white/5 rounded-2xl p-6 hover:border-secondary/30 transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-secondary/10 border border-secondary/20 flex items-center justify-center flex-shrink-0">
              <svg className="w-6 h-6 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 14l9-5-9-5-9 5 9 5z" />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.8}
                  d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                />
              </svg>
            </div>
            <div>
              <h3 className="font-display font-semibold text-text text-lg">{education.degree}</h3>
              <p className="text-sm font-body text-muted mt-1">{education.institution}</p>
              <span className="mt-3 inline-block text-xs font-mono text-secondary bg-secondary/10 border border-secondary/20 px-3 py-1 rounded-full">
                {education.status}
              </span>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}