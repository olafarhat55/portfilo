"use client";

import { useEffect, useRef, useState } from "react";
import { Experience } from "@/data/portfolio";

type TimelineItemProps = {
  experience: Experience;
  index: number;
};

export default function TimelineItem({ experience, index }: TimelineItemProps) {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setVisible(true), index * 150);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [index]);

  return (
    <div
      ref={ref}
      className={`relative pl-10 transition-all duration-700 ${
        visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-6"
      }`}
    >
      {/* Timeline vertical line */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary/50 to-transparent" />

      {/* Dot */}
      <div className="absolute left-[-5px] top-5 w-2.5 h-2.5 rounded-full bg-primary ring-4 ring-primary/20 ring-offset-0 animate-glow-pulse" />

      {/* Card */}
      <div className="group bg-card border border-white/5 rounded-2xl p-6 hover:border-primary/30 hover:shadow-glow-primary transition-all duration-400">
        {/* Period badge */}
        <div className="flex items-center gap-2 mb-3">
          <span className="flex items-center gap-1.5 text-xs font-mono text-secondary bg-secondary/10 border border-secondary/20 px-2.5 py-1 rounded-full">
            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            {experience.period}
          </span>
        </div>

        {/* Role & Company */}
        <h3 className="font-display font-bold text-xl text-text mb-1 group-hover:text-primary transition-colors duration-200">
          {experience.role}
        </h3>
        <p className="text-sm font-body font-semibold text-primary mb-4">
          @ {experience.company}
        </p>

        {/* Bullet points */}
        <ul className="flex flex-col gap-2.5">
          {experience.bullets.map((bullet, i) => (
            <li key={i} className="flex gap-3 text-sm font-body text-muted leading-relaxed">
              <svg
                className="w-4 h-4 text-primary flex-shrink-0 mt-0.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              {bullet}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
