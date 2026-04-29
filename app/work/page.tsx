import { Metadata } from "next";
import { fetchGitHubRepos } from "@/lib/github";
import ProjectCard from "@/components/work/ProjectCard";
import { Github } from "lucide-react";

export const metadata: Metadata = {
  title: "Work | Nodirbek Zayniddinov",
  description:
    "Open source projects, web apps, and experimentals built by Nodirbek Zayniddinov.",
};

export default async function WorkPage() {
  const repos = await fetchGitHubRepos();

  return (
    <div className="min-h-screen bg-bg pt-28 pb-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <span className="text-red-600 text-sm font-medium tracking-[0.2em] uppercase block mb-4">
              Portfolio
            </span>
            <h1 className="font-grotesk text-5xl md:text-6xl font-bold text-white leading-tight">
              My Work
            </h1>
          </div>
          <a
            href="https://github.com/n1dlee"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-[#2A2A2A] hover:border-[#71717A] text-[#71717A] hover:text-white text-sm font-medium px-5 py-2.5 rounded-full transition-colors cursor-pointer self-start md:self-auto"
          >
            <Github size={16} strokeWidth={1.5} />
            View all on GitHub
          </a>
        </div>

        {/* Grid */}
        {repos.length === 0 ? (
          <div className="text-center py-24">
            <p className="text-[#71717A] text-lg">
              Could not load projects. Check back later or{" "}
              <a
                href="https://github.com/n1dlee"
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-600 hover:text-red-500 transition-colors"
              >
                visit GitHub directly
              </a>
              .
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {repos.map((repo, i) => (
              <ProjectCard key={repo.id} repo={repo} index={i} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
