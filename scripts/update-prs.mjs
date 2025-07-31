import fetch from "node-fetch";
import fs from "node:fs";

const username = "NalinDalal";
const API_URL = `https://api.github.com/search/issues?q=is:pr+author:${username}&per_page=100`;

// Util: PR summary based on title
function summarize(title) {
  const t = title.trim();
  const lower = t.toLowerCase();
  if (lower.startsWith("fix")) return "Fixes a bug or issue.";
  if (lower.startsWith("add")) return "Adds a new feature.";
  if (lower.startsWith("update") || lower.startsWith("upgrade")) return "Updates existing functionality.";
  if (lower.startsWith("remove")) return "Removes deprecated or redundant code.";
  if (lower.startsWith("refactor")) return "Improves internal code structure.";
  return t.endsWith(".") ? t : `${t}.`;
}

// Format for README block
function formatLine(pr) {
  const repoParts = pr.repository_url.split("/");
  const owner = repoParts[repoParts.length - 2];
  if (owner.toLowerCase() === username.toLowerCase()) return null;

  const repo = repoParts.slice(-2).join("/");
  const date = (pr.pull_request?.merged_at || pr.created_at).split("T")[0];
  const title = pr.title.replace(/\|/g, "\\|");
  const summary = summarize(title);

  return `- **[${title}](${pr.html_url})**  
  _${repo}_ • \`${date}\`  
  > ${summary}`;
}

// Format for merged-prs.md table
function formatTableRow(pr) {
  const match = pr.repository_url.match(/repos\/([^\/]+)\/([^\/]+)/);
  if (!match) return null;
  const [ , org, repo ] = match;
  const context = pr.title.split(":").pop().trim();
  const short = context.length > 80 ? context.slice(0, 77) + "..." : context;
  return `| ${org} | ${repo} | [#${pr.number}](${pr.html_url}) | ${short} |`;
}

(async () => {
  const res = await fetch(API_URL, {
    headers: { "Accept": "application/vnd.github+json" }
  });

  if (!res.ok) {
    console.error("❌ Failed to fetch PRs:", await res.text());
    process.exit(1);
  }

  const data = await res.json();
  const merged = [];
  const open = [];
  const tableRows = [];

  data.items.forEach(pr => {
    const line = formatLine(pr);
    const tableRow = formatTableRow(pr);
    if (line && tableRow) tableRows.push(tableRow);

    const date = (pr.pull_request?.merged_at || pr.created_at).split("T")[0];
    if (pr.state === "closed" && pr.pull_request?.merged_at) {
      merged.push({ line, date });
    } else if (pr.state === "open") {
      open.push({ line, date });
    }
  });

  // Sort both by date (descending)
  merged.sort((a, b) => b.date.localeCompare(a.date));
  open.sort((a, b) => b.date.localeCompare(a.date));

  // 🔄 Update README.md
  const summaryLine = `📊 Total Merged PRs: ${merged.length} | Open PRs: ${open.length}`;
  const block = [
    `<!-- PRS-START -->`,
    ``,
    summaryLine,
    ``,
    `## ✅ Merged PRs`,
    merged.length ? merged.map(e => e.line).join("\n\n") : "_No merged PRs yet._",
    ``,
    `## 🟡 Open PRs`,
    open.length ? open.map(e => e.line).join("\n\n") : "_No open PRs._",
    ``,
    `<!-- PRS-END -->`
  ].join("\n");

  const readmePath = "README.md";
  let readme = fs.readFileSync(readmePath, "utf-8");
  if (readme.includes("<!-- PRS-START -->") && readme.includes("<!-- PRS-END -->")) {
    readme = readme.replace(/<!-- PRS-START -->([\s\S]*?)<!-- PRS-END -->/, block);
  } else {
    readme += `\n\n${block}\n`;
  }
  fs.writeFileSync(readmePath, readme, "utf-8");
  console.log("✅ README.md updated.");

  // 📄 Generate merged-prs.md
  const tableHeader = "| Org | Repo | PR | Context |\n|-----|------|----|---------|";
  const tableContent = [tableHeader, ...tableRows].join("\n");
  fs.writeFileSync("merged-prs.md", tableContent, "utf-8");
  console.log("✅ merged-prs.md written.");
})();

