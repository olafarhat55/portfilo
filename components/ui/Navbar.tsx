"use client";

import { useState, useEffect, useCallback } from "react";
import { personalInfo } from "@/data/portfolio";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Highlight the current section based on scroll position
  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 20);

    const sections = navLinks.map((l) => l.href.replace("#", ""));
    let current = "";

    for (const id of sections) {
      const el = document.getElementById(id);
      if (el && window.scrollY >= el.offsetTop - 120) {
        current = id;
      }
    }
    setActiveSection(current);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#050D1A]/90 backdrop-blur-xl border-b border-white/5 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-[1100px] mx-auto px-6 flex items-center justify-between h-16">
        {/* Logo / Name */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="font-display font-bold text-lg text-white tracking-tight group"
        >
          <span className="text-primary group-hover:text-primary-light transition-colors">
            &lt;
          </span>
          Ola
          <span className="text-muted">.dev</span>
          <span className="text-primary group-hover:text-primary-light transition-colors">
            /&gt;
          </span>
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map(({ label, href }) => {
            const isActive = activeSection === href.replace("#", "");
            return (
              <li key={label}>
                <button
                  onClick={() => handleNavClick(href)}
                  className={`relative px-3 py-2 text-sm font-body font-medium rounded-lg transition-all duration-200 ${
                    isActive
                      ? "text-primary"
                      : "text-muted hover:text-text"
                  }`}
                >
                  {label}
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-primary rounded-full" />
                  )}
                </button>
              </li>
            );
          })}
          <li>
            <a
              href={personalInfo.cvPath}
              download="Ola_Farhat_CV.pdf"
              className="ml-3 px-4 py-2 text-sm font-body font-semibold text-white bg-primary hover:bg-primary-dark rounded-lg transition-all duration-200 shadow-glow-primary hover:shadow-none"
            >
              Download CV
            </a>
          </li>
        </ul>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-0.5 bg-text transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 bg-text transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 bg-text transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-[#0A1628]/95 backdrop-blur-xl border-t border-white/5 px-6 py-4 flex flex-col gap-2">
          {navLinks.map(({ label, href }) => (
            <button
              key={label}
              onClick={() => handleNavClick(href)}
              className={`text-left px-3 py-2.5 text-sm font-body font-medium rounded-lg transition-colors ${
                activeSection === href.replace("#", "")
                  ? "text-primary bg-primary/10"
                  : "text-muted hover:text-text hover:bg-white/5"
              }`}
            >
              {label}
            </button>
          ))}
          <a
            href={personalInfo.cvPath}
            download
            className="mt-2 px-3 py-2.5 text-sm font-body font-semibold text-center text-white bg-primary hover:bg-primary-dark rounded-lg transition-colors"
          >
            Download CV
          </a>
        </div>
      </div>
    </header>
  );
}