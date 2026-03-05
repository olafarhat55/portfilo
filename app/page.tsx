import Navbar from "@/components/ui/Navbar";
import ScrollToTop from "@/components/ui/ScrollToTop";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Certifications from "@/components/sections/Certifications";
import Contact from "@/components/sections/Contact";
import { personalInfo } from "@/data/portfolio";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Certifications />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="bg-background border-t border-white/5 py-8">
        <div className="max-w-[1100px] mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs font-mono text-muted/60">
            © {new Date().getFullYear()}{" "}
            <span className="text-primary">{personalInfo.name}</span> — All rights reserved.
          </p>
          <p className="text-xs font-mono text-muted/40">
            Designed &amp; built with Next.js + Tailwind CSS
          </p>
        </div>
      </footer>

      <ScrollToTop />
    </>
  );
}
