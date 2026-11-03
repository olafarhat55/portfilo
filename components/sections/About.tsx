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
            <p className="font-body text-muted text-base leading-relaxed mb-8">{bio}</p>

            <div className="grid grid-cols-3 gap-4">
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
          </div>

          {/* ── Right: JSON Code Card ── */}
          <div className="relative">
            <div className="bg-[#0D1B2E] border border-white/10 rounded-t-xl px-4 py-3 flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500/80" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <span className="w-3 h-3 rounded-full bg-green-500/80" />
              <span className="ml-4 text-xs font-mono text-muted/60">portfolio.json</span>
            </div>

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

            <div className="absolute -inset-2 bg-primary/5 rounded-2xl blur-xl -z-10 pointer-events-none" />
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}