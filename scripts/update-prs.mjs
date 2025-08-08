import fs from "node:fs/promises";
import fetch from "node-fetch";

// 🌱 Load local env (for local use)
if (!process.env.GITHUB_TOKEN) {
  try {
    const dotenv = await import('dotenv');
    dotenv.config();
  } catch (e) {
    console.warn("⚠️ dotenv not available and GITHUB_TOKEN not set.");
  }
}

// ✅ CONFIG
const username = "NalinDalal";
const GITHUB_API_URL = "https://api.github.com/graphql";
const headers = {
  "Content-Type": "application/json",
  "Authorization": `Bearer ${process.env.GITHUB_TOKEN}`,
};

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

function formatLine(pr) {
  const [owner, repo] = pr.repository.nameWithOwner.split("/");
  if (owner.toLowerCase() === username.toLowerCase()) return null;

  const date = pr.mergedAt.split("T")[0];
  const title = pr.title.replace(/\|/g, "\\|");
  const summary = summarize(title);

  return `- **[${title}](${pr.url})**  
  _${owner}/${repo}_ • \`${date}\`  
  > ${summary}`;
}

function formatTableRow(pr) {
  const [org, repo] = pr.repository.nameWithOwner.split("/");
  const context = pr.title.split(":").pop().trim();
  const short = context.length > 80 ? context.slice(0, 77) + "..." : context;
  return `| ${org} | ${repo} | [#${pr.number}](${pr.url}) | ${short} |`;
}

async function fetchMergedPRs(cursor = null, collected = []) {
  const query = `
    query($login: String!, $cursor: String) {
      user(login: $login) {
        pullRequests(first: 100, after: $cursor, orderBy: {field: UPDATED_AT, direction: DESC}) {
          nodes {
            title
            url
            number
            merged
            mergedAt
            createdAt
            repository {
              nameWithOwner
            }
          }
          pageInfo {
            hasNextPage
            endCursor
          }
        }
      }
    }
  `;

  const res = await fetch(GITHUB_API_URL, {
    method: "POST",
    headers,
    body: JSON.stringify({
      query,
      variables: {
        login: username,
        cursor,
      },
    }),
  });

  const json = await res.json();

  if (!res.ok || json.errors) {
    console.error("❌ Failed to fetch PRs:", JSON.stringify(json.errors || json, null, 2));
    process.exit(1);
  }

  const prData = json.data.user.pullRequests;
  const mergedPRs = prData.nodes.filter(pr => pr.merged);
  collected.push(...mergedPRs);

  if (prData.pageInfo.hasNextPage && collected.length < 300) {
    return fetchMergedPRs(prData.pageInfo.endCursor, collected);
  }

  return collected;
}

(async () => {
  const mergedPRs = await fetchMergedPRs();
  const merged = mergedPRs
    .map(pr => ({ line: formatLine(pr), date: pr.mergedAt.split("T")[0], row: formatTableRow(pr) }))
    .filter(e => e.line && e.row)
    .sort((a, b) => b.date.localeCompare(a.date));

  const summaryLine = `📊 Total Merged PRs: ${merged.length}`;
  const block = [
    `<!-- PRS-START -->`,
    ``,
    summaryLine,
    ``,
    `## ✅ Merged PRs`,
    merged.length ? merged.map(e => e.line).join("\n\n") : "_No merged PRs yet._",
    ``,
    `<!-- PRS-END -->`
  ].join("\n");

  const readmePath = "README.md";
  let readme = await fs.readFile(readmePath, "utf-8");
  if (readme.includes("<!-- PRS-START -->") && readme.includes("<!-- PRS-END -->")) {
    readme = readme.replace(/<!-- PRS-START -->([\s\S]*?)<!-- PRS-END -->/, block);
  } else {
    readme += `\n\n${block}\n`;
  }
  await fs.writeFile(readmePath, readme, "utf-8");
  console.log("✅ README.md updated.");

  const tableHeader = "| Org | Repo | PR | Context |\n|-----|------|----|---------|";
  const tableRows = merged.map(e => e.row);
  const tableContent = [tableHeader, ...tableRows].join("\n");
  await fs.writeFile("merged-prs.md", tableContent, "utf-8");
  console.log("✅ merged-prs.md written.");
})();

