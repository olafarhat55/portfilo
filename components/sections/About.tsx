"use client";

import SectionWrapper from "@/components/ui/SectionWrapper";
import { personalInfo, bio, stats, education } from "@/data/portfolio";

export default function About() {
  return (
    <SectionWrapper id="about">
      <div className="max-w-[1100px] mx-auto px-6">
        {/* Section heading */}
        <div className="text-center mb-16">
          <span className="text-xs font-mono text-primary uppercase tracking-widest mb-3 block">
            — Get to know me —
          </span>
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-text">
            About <span className="text-primary">Me</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* ── Left: Bio + Stats ── */}
          <div>
            <p className="font-body text-muted text-base leading-relaxed mb-8">
              {bio}
            </p>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-4 mb-10">
              {stats.map(({ value, label }) => (
                <div
                  key={label}
                  className="group bg-card border border-white/5 rounded-xl p-4 text-center hover:border-primary/30 hover:shadow-glow-primary transition-all duration-300"
                >
                  <div className="font-display font-bold text-3xl text-primary mb-1 group-hover:scale-110 transition-transform duration-200">
                    {value}
                  </div>
                  <div className="text-xs font-mono text-muted uppercase tracking-wide">
                    {label}
                  </div>
                </div>
              ))}
            </div>

            {/* Education card */}
            <div className="flex items-start gap-4 bg-card border border-white/5 rounded-xl p-5 hover:border-secondary/30 transition-all duration-300">
              <div className="w-11 h-11 rounded-xl bg-secondary/10 border border-secondary/20 flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.8}
                    d="M12 14l9-5-9-5-9 5 9 5z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.8}
                    d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                  />
                </svg>
              </div>
              <div>
                <p className="font-display font-semibold text-text text-sm">
                  {education.degree}
                </p>
                <p className="text-xs font-body text-muted mt-0.5">
                  {education.institution}
                </p>
                <span className="mt-2 inline-block text-xs font-mono text-secondary bg-secondary/10 border border-secondary/20 px-2 py-0.5 rounded-full">
                  {education.status}
                </span>
              </div>
            </div>
          </div>

          {/* ── Right: JSON Code Card ── */}
          <div className="relative">
            {/* Editor chrome bar */}
            <div className="bg-[#0D1B2E] border border-white/10 rounded-t-xl px-4 py-3 flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500/80" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <span className="w-3 h-3 rounded-full bg-green-500/80" />
              <span className="ml-4 text-xs font-mono text-muted/60">portfolio.json</span>
            </div>

            {/* Code content */}
            <pre className="bg-[#070F1C] border border-t-0 border-white/10 rounded-b-xl p-6 overflow-x-auto font-mono text-sm leading-relaxed">
              <code>
                <span className="text-white/40">{"{"}</span>
                {"\n"}
                <span className="text-muted">{"  "}</span>
                <span className="text-secondary">&quot;name&quot;</span>
                <span className="text-white/40">: </span>
                <span className="text-green-400">&quot;{personalInfo.name}&quot;</span>
                <span className="text-white/40">,</span>
                {"\n"}
                <span className="text-muted">{"  "}</span>
                <span className="text-secondary">&quot;role&quot;</span>
                <span className="text-white/40">: </span>
                <span className="text-green-400">&quot;{personalInfo.title}&quot;</span>
                <span className="text-white/40">,</span>
                {"\n"}
                <span className="text-muted">{"  "}</span>
                <span className="text-secondary">&quot;location&quot;</span>
                <span className="text-white/40">: </span>
                <span className="text-green-400">&quot;{personalInfo.location}&quot;</span>
                <span className="text-white/40">,</span>
                {"\n"}
                <span className="text-muted">{"  "}</span>
                <span className="text-secondary">&quot;email&quot;</span>
                <span className="text-white/40">: </span>
                <span className="text-green-400">&quot;{personalInfo.email}&quot;</span>
                <span className="text-white/40">,</span>
                {"\n"}
                <span className="text-muted">{"  "}</span>
                <span className="text-secondary">&quot;education&quot;</span>
                <span className="text-white/40">: </span>
                <span className="text-green-400">&quot;{education.degree}&quot;</span>
                <span className="text-white/40">,</span>
                {"\n"}
                <span className="text-muted">{"  "}</span>
                <span className="text-secondary">&quot;status&quot;</span>
                <span className="text-white/40">: </span>
                <span className="text-green-400">&quot;{education.status}&quot;</span>
                <span className="text-white/40">,</span>
                {"\n"}
                <span className="text-muted">{"  "}</span>
                <span className="text-secondary">&quot;available&quot;</span>
                <span className="text-white/40">: </span>
                <span className="text-primary">true</span>
                {"\n"}
                <span className="text-white/40">{"}"}</span>
              </code>
            </pre>

            {/* Glow effect behind card */}
            <div className="absolute -inset-2 bg-primary/5 rounded-2xl blur-xl -z-10 pointer-events-none" />
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
