export interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  language: string | null;
  updated_at: string;
  stargazers_count: number;
  forks_count: number;
  topics: string[];
}

export async function fetchGitHubRepos(): Promise<GitHubRepo[]> {
  const res = await fetch(
    "https://api.github.com/users/n1dlee/repos?sort=updated&per_page=30",
    {
      next: { revalidate: 3600 },
      headers: {
        Accept: "application/vnd.github+json",
      },
    }
  );

  if (!res.ok) return [];

  const repos: GitHubRepo[] = await res.json();
  return repos
    .filter((r) => !r.name.startsWith(".") && r.name !== "n1dlee")
    .slice(0, 12);
}
