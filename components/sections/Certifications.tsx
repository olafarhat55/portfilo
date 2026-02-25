"use client";

import SectionWrapper from "@/components/ui/SectionWrapper";
import CertCard from "@/components/ui/CertCard";
import { certifications } from "@/data/portfolio";

export default function Certifications() {
  return (
    <SectionWrapper id="certifications">
      <div className="max-w-[1100px] mx-auto px-6">
        {/* Section heading */}
        <div className="text-center mb-16">
          <span className="text-xs font-mono text-primary uppercase tracking-widest mb-3 block">
            — Credentials —
          </span>
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-text">
            <span className="text-primary">Certifications</span>
          </h2>
          <p className="font-body text-muted mt-4 max-w-md mx-auto text-sm leading-relaxed">
            Formal recognition of skills and dedication to continuous learning.
          </p>
        </div>

        {/* Cert cards — centered for single cert */}
        <div className="flex justify-center">
          <div className="grid sm:grid-cols-2 gap-6 max-w-2xl w-full">
            {certifications.map((cert) => (
              <CertCard key={cert.title} cert={cert} />
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
