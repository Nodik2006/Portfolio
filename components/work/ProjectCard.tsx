"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink, Star, GitFork } from "lucide-react";
import type { GitHubRepo } from "@/lib/github";

const languageColors: Record<string, string> = {
  TypeScript: "#3178C6",
  JavaScript: "#F7DF1E",
  Python: "#3776AB",
  HTML: "#E34F26",
  CSS: "#1572B6",
  Vue: "#42B883",
  React: "#61DAFB",
  Go: "#00ADD8",
  Rust: "#CE422B",
};

interface ProjectCardProps {
  repo: GitHubRepo;
  index: number;
}

export default function ProjectCard({ repo, index }: ProjectCardProps) {
  const langColor = repo.language
    ? languageColors[repo.language] ?? "#71717A"
    : "#71717A";

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: index * 0.07,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
      whileHover={{ scale: 1.02 }}
      className="group relative bg-[#1A1A1A] border border-[#2A2A2A] hover:border-red-600/40 rounded-2xl p-6 flex flex-col gap-4 transition-colors duration-200 cursor-default"
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-3">
        <h3 className="font-grotesk font-semibold text-white text-lg leading-tight group-hover:text-red-400 transition-colors">
          {repo.name.replace(/-/g, " ")}
        </h3>
        <div className="flex items-center gap-2 flex-shrink-0">
          <a
            href={repo.html_url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${repo.name} on GitHub`}
            className="text-[#71717A] hover:text-white transition-colors cursor-pointer p-1"
          >
            <Github size={16} strokeWidth={1.5} />
          </a>
          {repo.homepage && (
            <a
              href={repo.homepage}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${repo.name} live demo`}
              className="text-[#71717A] hover:text-white transition-colors cursor-pointer p-1"
            >
              <ExternalLink size={16} strokeWidth={1.5} />
            </a>
          )}
        </div>
      </div>

      {/* Description */}
      <p className="text-[#71717A] text-sm leading-relaxed flex-1 line-clamp-3">
        {repo.description ?? "No description provided."}
      </p>

      {/* Footer */}
      <div className="flex items-center justify-between pt-2 border-t border-[#2A2A2A]">
        <div className="flex items-center gap-1.5">
          {repo.language && (
            <>
              <span
                className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                style={{ backgroundColor: langColor }}
                aria-hidden="true"
              />
              <span className="text-xs text-[#71717A]">{repo.language}</span>
            </>
          )}
        </div>
        <div className="flex items-center gap-3 text-xs text-[#71717A]">
          {repo.stargazers_count > 0 && (
            <span className="flex items-center gap-1">
              <Star size={12} />
              {repo.stargazers_count}
            </span>
          )}
          {repo.forks_count > 0 && (
            <span className="flex items-center gap-1">
              <GitFork size={12} />
              {repo.forks_count}
            </span>
          )}
        </div>
      </div>
    </motion.article>
  );
}
