"use client";

import SectionWrapper from "@/components/ui/SectionWrapper";
import SkillBar from "@/components/ui/SkillBar";
import { skillCategories, tagSkills } from "@/data/portfolio";

export default function Skills() {
  return (
    <SectionWrapper id="skills" className="bg-surface/40">
      <div className="max-w-[1100px] mx-auto px-6">
        {/* Section heading */}
        <div className="text-center mb-16">
          <span className="text-xs font-mono text-primary uppercase tracking-widest mb-3 block">
            — What I work with —
          </span>
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-text">
            Technical <span className="text-primary">Skills</span>
          </h2>
        </div>

        {/* Skill categories grid */}
        <div className="grid sm:grid-cols-2 gap-8 mb-12">
          {skillCategories.map((cat, catIndex) => (
            <div
              key={cat.category}
              className="bg-card border border-white/5 rounded-2xl p-6 hover:border-primary/20 transition-all duration-300"
            >
              {/* Category header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                  <span className="text-primary text-xs font-mono font-bold">
                    {String(catIndex + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="font-display font-semibold text-sm uppercase tracking-wider text-text">
                  {cat.category}
                </h3>
              </div>

              {/* Skill bars */}
              <div className="flex flex-col gap-5">
                {cat.skills.map((skill, skillIndex) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    delay={catIndex * 100 + skillIndex * 80}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tag skills (no bar needed) */}
        <div className="bg-card border border-white/5 rounded-2xl p-6">
          <p className="text-xs font-mono text-muted uppercase tracking-widest mb-4">
            Also familiar with
          </p>
          <div className="flex flex-wrap gap-2">
            {tagSkills.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1.5 text-sm font-mono text-text/80 bg-white/5 border border-white/10 rounded-lg
                  hover:bg-primary/10 hover:border-primary/30 hover:text-primary transition-all duration-200 cursor-default"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
