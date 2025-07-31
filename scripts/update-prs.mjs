import fs from "node:fs";
const API_URL = "https://api.github.com/search/issues?q=is:pr+author:NalinDalal&per_page=100";

(async () => {
  const res = await fetch(API_URL);
  const data = await res.json();
  const merged = [];
  const open = [];

  const summarize = title => {
    title = title.trim();
    if (title.toLowerCase().startsWith("fix")) return "Fixes a bug or issue.";
    if (title.toLowerCase().startsWith("add")) return "Introduces a new feature or enhancement.";
    if (title.toLowerCase().startsWith("update") || title.toLowerCase().startsWith("upgrade")) return "Updates existing functionality or dependencies.";
    if (title.toLowerCase().startsWith("remove")) return "Removes deprecated or unnecessary code.";
    if (title.toLowerCase().startsWith("refactor")) return "Improves code structure without changing behavior.";
    return title.endsWith(".") ? title : title + ".";
  };

  data.items.forEach(pr => {
    const repoParts = pr.repository_url.split("/");
    const owner = repoParts[repoParts.length - 2];
    if (owner.toLowerCase() === "nalindalal") return;

    const repo = repoParts.slice(-2).join("/");
    const date = new Date(pr.created_at).toISOString().split("T")[0];
    const title = pr.title.replace(/\|/g, "\\|");
    const summary = summarize(pr.title);
    const line = `• [${title}](${pr.html_url}) — ${repo} (${date})\n  > ${summary}`;

    if (pr.state === "closed" && pr.pull_request && pr.pull_request.merged_at) {
      merged.push({ line, date });
    } else if (pr.state === "open") {
      open.push({ line, date });
    }
  });

  merged.sort((a, b) => b.date.localeCompare(a.date));
  open.sort((a, b) => b.date.localeCompare(a.date));

  const block = [
    `<!-- PRS-START -->`,
    ``,
    `### ✅ Merged PRs`,
    merged.length ? merged.map(e => e.line).join("\n\n") : "_No merged PRs yet._",
    ``,
    `### 🟡 Open PRs`,
    open.length ? open.map(e => e.line).join("\n\n") : "_No open PRs._",
    ``,
    `<!-- PRS-END -->`
  ].join("\n");

  const filePath = "./README.md";
  const readme = fs.readFileSync(filePath, "utf-8");

  const updated = readme.replace(
    /<!-- PRS-START -->([\s\S]*?)<!-- PRS-END -->/,
    block
  );

  fs.writeFileSync(filePath, updated);
})();

