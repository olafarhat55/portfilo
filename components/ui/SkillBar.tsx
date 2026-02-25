"use client";

import { useEffect, useRef, useState } from "react";

type SkillBarProps = {
  name: string;
  level: number;
  delay?: number;
};

export default function SkillBar({ name, level, delay = 0 }: SkillBarProps) {
  const [animated, setAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Delay slightly so staggered bars look great
          setTimeout(() => setAnimated(true), delay);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [delay]);

  // Color based on level
  const getBarColor = (lvl: number) => {
    if (lvl >= 88) return "from-primary to-secondary";
    if (lvl >= 75) return "from-primary to-primary-light";
    return "from-primary-dark to-primary";
  };

  return (
    <div ref={ref} className="group">
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-body font-medium text-text group-hover:text-primary transition-colors duration-200">
          {name}
        </span>
        <span className="text-xs font-mono font-semibold text-primary">
          {animated ? `${level}%` : "0%"}
        </span>
      </div>
      <div className="h-2 bg-white/5 rounded-full overflow-hidden border border-white/5">
        <div
          className={`h-full rounded-full bg-gradient-to-r ${getBarColor(level)} transition-all duration-1000 ease-out relative overflow-hidden`}
          style={{ width: animated ? `${level}%` : "0%" }}
        >
          {/* Shimmer effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 animate-pulse" />
        </div>
      </div>
    </div>
  );
}
