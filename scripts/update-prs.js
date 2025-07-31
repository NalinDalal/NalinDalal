const fs = require("fs");
const fetch = require("node-fetch");

const API_URL = "https://api.github.com/search/issues?q=is:pr+author:NalinDalal&per_page=100";

(async () => {
  const res = await fetch(API_URL);
  const data = await res.json();
  const merged = [];
  const open = [];

  data.items.forEach(pr => {
    const repoParts = pr.repository_url.split("/");
    const owner = repoParts[repoParts.length - 2];
    if (owner.toLowerCase() === "nalindalal") return;

    const repo = repoParts.slice(-2).join("/");
    const date = new Date(pr.created_at).toISOString().split("T")[0];
    const title = pr.title.replace(/\|/g, "\\|");
    const line = `• [${title}](${pr.html_url}) — ${repo} (${date})`;

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
    merged.length ? merged.map(e => e.line).join("\n") : "_No merged PRs yet._",
    ``,
    `### 🟡 Open PRs`,
    open.length ? open.map(e => e.line).join("\n") : "_No open PRs._",
    ``,
    `<!-- PRS-END -->`
  ].join("\n");

  const filePath = "README.md";
  const readme = fs.readFileSync(filePath, "utf-8");

  const updated = readme.replace(
    /<!-- PRS-START -->([\s\S]*?)<!-- PRS-END -->/,
    block
  );

  fs.writeFileSync(filePath, updated);
})();

