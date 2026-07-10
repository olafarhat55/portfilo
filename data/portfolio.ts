// ============================================================
// Portfolio Data — Ola Farhat Ibrahim
// All data is hardcoded here for easy future updates.
// ============================================================

export const personalInfo = {
  name: "Ola Farhat Ibrahim",
  title: "Frontend Developer",
  location: "Egypt",
  email: "olafarhat579@gmail.com",
  phone: "01050509022",
  linkedin: "https://www.linkedin.com/in/ola-farhat-473561268/",
  github: "https://github.com/olafarhat55",
  cvPath: "/Ola_Farhat_CV.pdf",
  available: true,
  typingTitles: [
    "Frontend Developer",
    "React Specialist",
    "Next.js Developer",
    "UI Enthusiast",
  ],
};

export const bio =
  "Front-End Developer specializing in React.js and Next.js, with hands-on experience building responsive, high-performance web applications and translating Figma designs into clean, accessible UI. Passionate about maintainable code, performance optimization, and great user experience.";

export const stats = [
  { value: "5+", label: "Projects" },
  { value: "1 Yr", label: "Experience" },
  { value: "2", label: "Languages" },
];

export const education = {
  degree: "B.Sc. Computer Science & AI",
  institution: "Faculty of Computers & AI",
  status: "Expected 2026",
};

// ─── SKILLS ───────────────────────────────────────────────

export type SkillCategory = {
  category: string;
  skills: { name: string; level: number }[];
};

export const skillCategories: SkillCategory[] = [
  {
    category: "Frontend Core",
    skills: [
      { name: "React.js", level: 90 },
      { name: "Next.js", level: 88 },
      { name: "JavaScript (ES6+)", level: 90 },
      { name: "TypeScript", level: 75 },
      { name: "HTML5", level: 95 },
      { name: "CSS3", level: 92 },
    ],
  },
  {
    category: "Styling",
    skills: [
      { name: "Tailwind CSS", level: 88 },
      { name: "Bootstrap", level: 95 },
      { name: "CSS Flexbox/Grid", level: 90 },
      { name: "Responsive Web Design", level: 90 },
    ],
  },
  {
    category: "Tools & APIs",
    skills: [
      { name: "REST API Integration", level: 85 },
      { name: "Axios / Fetch API", level: 85 },
      { name: "React Hooks", level: 88 },
      { name: "Context API", level: 78 },
      { name: "Redux (Basics)", level: 50 },
      { name: "Git & GitHub", level: 85 },
    ],
  },
  {
    category: "Performance & SEO",
    skills: [
      { name: "SSR / SSG (Next.js)", level: 78 },
      { name: "SEO Optimization", level: 75 },
      { name: "Performance Optimization", level: 75 },
      { name: "Lazy Loading / Code Splitting", level: 75 },
    ],
  },
];

export const tagSkills = [
  "Figma to UI",
  "npm",
  "Yarn",
  "VS Code",
  "Chrome DevTools",
  "Accessibility (ARIA)",
  "Node.js (70%)",
  "Vue.js (75%)",
];

// ─── EXPERIENCE ───────────────────────────────────────────

export type Experience = {
  role: string;
  company: string;
  period: string;
  bullets: string[];
};

export const experiences: Experience[] = [
  {
    role: "Frontend Developer",
    company: "Route Academy",
    period: "Jun 2025 – Dec 2025",
    bullets: [
      "Developed and maintained 5+ responsive web applications using React and Next.js",
      "Built 10+ reusable, modular UI components — reduced development time by ~30%",
      "Optimized page load performance using Next.js SSG/SSR and lazy loading — improved speed by ~40%",
      "Integrated 8+ REST APIs using Axios/Fetch with React Hooks and Context API",
      "Translated Figma designs into pixel-perfect, accessible UI using Tailwind/Bootstrap",
      "Collaborated with designers and backend developers for end-to-end feature delivery",
    ],
  },
];

// ─── PROJECTS ─────────────────────────────────────────────

export type Project = {
  title: string;
  description: string;
  techStack: string[];
  github?: string;
  live?: string;
  features?: string[];
  comingSoon?: boolean;
};

export const projects: Project[] = [
  {
    title: "MiniMaxi — AI Predictive Maintenance Platform",
    description:
      "A graduation-project SaaS platform for predictive equipment maintenance, featuring AI-powered insights, role-based dashboards for Admins, Engineers, and Technicians, and full Arabic/RTL localisation.",
    techStack: [
      "React.js",
      "TypeScript",
      "Vite",
      "MUI v7",
      "Java Spring Boot",
      "PostgreSQL",
    ],
    github: "https://github.com/olafarhat55/minimaxi",
    live: "https://minimaxi.vercel.app",
    features: [
      "AI-powered maintenance insights & alerts",
      "Role-based access control (Admin / Engineer / Technician)",
      "Real-time notifications with Socket.io",
      "Full Arabic / RTL support (i18n)",
    ],
  },
  {
    title: "E-Commerce UI Clone (ShopMart)",
    description:
      "A fully responsive e-commerce UI built from scratch with shopping cart, product filtering, and clean component architecture.",
    techStack: ["React.js", "Context API", "CSS Grid", "Flexbox", "Tailwind CSS"],
    github: "https://github.com/olafarhat55/shopmart",
    live: "https://shopmart-eight.vercel.app/",
    features: [
      "Cart functionality",
      "Product filtering",
      "Fully responsive layouts",
    ],
  },
  {
    title: "Dashboard UI Kit",
    description:
      "A modern, dark-themed admin dashboard with data visualisation components, responsive sidebar, and reusable widget cards.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/olafarhat55/dashboard-ui-kit",
    live: "https://dashboard-ui-kit-three.vercel.app/",
  },
  {
    title: "Blog Platform",
    description:
      "A full-featured blog with SSG, dynamic routing, Markdown support, and SEO-optimised pages built with Next.js App Router.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Markdown"],
    github: "https://github.com/olafarhat55/blog-platform",
    live: "https://blog-platform-virid-nu.vercel.app/",
  },
  {
    title: "Component Library",
    description:
      "A personal collection of accessible, animated React components following atomic design principles.",
    techStack: ["React.js", "TypeScript", "Storybook", "Tailwind CSS"],
    live: "https://component-library-tan-five.vercel.app/",
    github: "https://github.com/olafarhat55/component-library",
  },
];

// ─── CERTIFICATIONS ───────────────────────────────────────

export type Certification = {
  title: string;
  issuer: string;
  instructor: string;
  date: string;
};

export const certifications: Certification[] = [
  {
    title: "Frontend Development Diploma",
    issuer: "Route IT Training Center",
    instructor: "Ahmed Bahnasy",
    date: "January 16, 2026",
  },
];