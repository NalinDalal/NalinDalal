import fetch from "node-fetch";
import fs from "node:fs";

const username = "NalinDalal";
const API_URL = `https://api.github.com/search/issues?q=is:pr+author:${username}&per_page=100`;

function formatLine(pr) {
  const repoParts = pr.repository_url.split("/");
  const owner = repoParts[repoParts.length - 2];
  if (owner.toLowerCase() === username.toLowerCase()) return null; // Skip personal repos
  const repo = repoParts.slice(-2).join("/");
  const date = (pr.pull_request && pr.pull_request.merged_at)
    ? pr.pull_request.merged_at.split("T")[0]
    : pr.created_at.split("T")[0];
  const title = pr.title.replace(/\|/g, "\\|");
  return `• [${title}](${pr.html_url}) — ${repo} (${date})`;
}

(async () => {
  const res = await fetch(API_URL, { headers: { "Accept": "application/vnd.github+json" } });
  if (!res.ok) {
    console.error("Failed to fetch PRs", await res.text());
    process.exit(1);
  }
  const data = await res.json();

  const merged = [];
  const open = [];
  data.items.forEach(pr => {
    const line = formatLine(pr);
    if (!line) return;
    if (pr.state === "closed" && pr.pull_request && pr.pull_request.merged_at) {
      merged.push({ line, date: pr.pull_request.merged_at.split("T")[0] });
    } else if (pr.state === "open") {
      open.push({ line, date: pr.created_at.split("T")[0] });
    }
  });

  merged.sort((a, b) => b.date.localeCompare(a.date));
  open.sort((a, b) => b.date.localeCompare(a.date));

  const block = [
    `<!-- PRS-START -->`,
    ``,
    `### ✅ Merged PRs`,
    merged.length ? merged.map(e => e.line).join("\n") : "_No merged PRs yet._",
    ``,
    `### 🟡 Open PRs`,
    open.length ? open.map(e => e.line).join("\n") : "_No open PRs._",
    ``,
    `<!-- PRS-END -->`
  ].join("\n");

  const readmePath = "README.md";
  let readme = fs.readFileSync(readmePath, "utf-8");

  // Replace block
  if (readme.includes("<!-- PRS-START -->") && readme.includes("<!-- PRS-END -->")) {
    readme = readme.replace(
      /<!-- PRS-START -->([\s\S]*?)<!-- PRS-END -->/,
      block
    );
  } else {
    // Add the block if missing
    readme += `\n\n${block}\n`;
  }

  fs.writeFileSync(readmePath, readme, "utf-8");
})();
