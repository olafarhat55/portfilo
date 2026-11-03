"use client";

import { useState } from "react";
import Image from "next/image";
import { Project } from "@/data/portfolio";

type ProjectCardProps = {
  project: Project;
  index: number;
};

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const [imgError, setImgError] = useState(false);
  const showImage = project.image && !imgError;

  return (
    <div
      className={`group relative flex flex-col bg-card border rounded-2xl overflow-hidden transition-all duration-500
        hover:-translate-y-2 hover:shadow-card-hover
        ${project.comingSoon
          ? "border-white/5 hover:border-white/10"
          : "border-white/5 hover:border-primary/40 hover:shadow-glow-primary"
        }`}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Project image */}
      <div className="relative w-full aspect-video overflow-hidden bg-surface">
        {showImage ? (
          <Image
            src={project.image as string}
            alt={`${project.title} screenshot`}
            fill
            sizes="(max-width: 640px) 100vw, 550px"
            onError={() => setImgError(true)}
            className={`object-cover object-top transition-transform duration-700 group-hover:scale-105 ${
              project.comingSoon ? "grayscale opacity-60" : ""
            }`}
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/10 to-secondary/5">
            <svg
              className="w-12 h-12 text-primary/40"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.2}
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-card/60 via-transparent to-transparent pointer-events-none" />
      </div>

      {/* Top gradient accent bar */}
      <div
        className={`h-1 w-full bg-gradient-to-r transition-all duration-500 ${
          project.comingSoon
            ? "from-white/10 to-white/5 group-hover:from-white/20 group-hover:to-white/10"
            : "from-primary to-secondary"
        }`}
      />

      <div className="flex flex-col flex-1 p-6">
        {/* Header */}
        <div className="flex items-start justify-between gap-3 mb-4">
          <div className="flex items-center gap-3">
            {/* Code icon */}
            <div
              className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                project.comingSoon
                  ? "bg-white/5 group-hover:bg-white/10"
                  : "bg-primary/10 group-hover:bg-primary/20"
              }`}
            >
              <svg
                className={`w-5 h-5 ${project.comingSoon ? "text-muted" : "text-primary"}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                />
              </svg>
            </div>

            <h3
              className={`font-display font-semibold text-base leading-tight transition-colors duration-200 ${
                project.comingSoon
                  ? "text-muted group-hover:text-text"
                  : "text-text group-hover:text-primary"
              }`}
            >
              {project.title}
            </h3>
          </div>

          {/* Coming soon badge */}
          {project.comingSoon && (
            <span className="flex-shrink-0 px-2.5 py-1 text-xs font-mono font-semibold text-muted bg-white/5 border border-white/10 rounded-full">
              Coming Soon
            </span>
          )}
        </div>

        {/* Description */}
        <p
          className={`text-sm font-body leading-relaxed mb-4 flex-1 ${
            project.comingSoon ? "text-muted/60" : "text-muted"
          }`}
        >
          {project.description}
        </p>

        {/* Features (only for non-coming-soon) */}
        {project.features && !project.comingSoon && (
          <ul className="flex flex-col gap-1 mb-4">
            {project.features.map((feat) => (
              <li key={feat} className="flex items-center gap-2 text-xs text-muted">
                <span className="w-1 h-1 rounded-full bg-secondary flex-shrink-0" />
                {feat}
              </li>
            ))}
          </ul>
        )}

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mt-auto pt-2 border-t border-white/5">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className={`px-2 py-1 text-xs font-mono rounded-md transition-colors duration-200 ${
                project.comingSoon
                  ? "text-muted/60 bg-white/3 border border-white/5"
                  : "text-primary bg-primary/10 border border-primary/20 group-hover:bg-primary/15"
              }`}
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action links */}
        {!project.comingSoon && (project.live || project.github) && (
          <div className="flex items-center gap-2 mt-4 pt-4 border-t border-white/5">
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono rounded-lg bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 transition-all duration-200"
              >
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                Live Demo
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono rounded-lg bg-white/5 text-muted border border-white/10 hover:text-primary hover:bg-primary/10 hover:border-primary/20 transition-all duration-200"
              >
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                </svg>
                GitHub
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
}