"use client";

import SectionWrapper from "@/components/ui/SectionWrapper";
import TimelineItem from "@/components/ui/TimelineItem";
import { experiences } from "@/data/portfolio";

export default function Experience() {
  return (
    <SectionWrapper id="experience">
      <div className="max-w-[1100px] mx-auto px-6">
        {/* Section heading */}
        <div className="text-center mb-16">
          <span className="text-xs font-mono text-primary uppercase tracking-widest mb-3 block">
            — My journey —
          </span>
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-text">
            Work <span className="text-primary">Experience</span>
          </h2>
        </div>

        {/* Timeline */}
        <div className="max-w-3xl mx-auto flex flex-col gap-8">
          {experiences.map((exp, index) => (
            <TimelineItem key={`${exp.company}-${index}`} experience={exp} index={index} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
