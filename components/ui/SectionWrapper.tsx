"use client";

import { useEffect, useRef, useState } from "react";

type SectionWrapperProps = {
  id: string;
  children: React.ReactNode;
  className?: string;
};

/**
 * Wraps a section with fade-up scroll animation via IntersectionObserver.
 */
export default function SectionWrapper({
  id,
  children,
  className = "",
}: SectionWrapperProps) {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.07 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id={id}
      ref={ref}
      className={`py-24 transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      } ${className}`}
    >
      {children}
    </section>
  );
}
