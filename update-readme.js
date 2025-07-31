// update-readme.js

const fs = require("fs");
const https = require("https");

const API_URL = "https://api.github.com/search/issues?q=is:pr+author:NalinDalal+is:open&per_page=100";
const TOKEN = process.env.GH_PAT;

const options = {
  headers: {
    "User-Agent": "NalinDalal",
    "Authorization": `Bearer ${TOKEN}`
  }
};

https.get(API_URL, options, (res) => {
  let data = "";

  res.on("data", chunk => data += chunk);
  res.on("end", () => {
    const json = JSON.parse(data);
    const md = json.items.map(pr => {
      const repo = pr.repository_url.split("/").slice(-2).join("/");
      const title = pr.title.replace(/\|/g, "\\|");
      const date = new Date(pr.created_at).toISOString().split("T")[0];
      return `- [${title}](${pr.html_url}) — \`${repo}\` (${date})`;
    }).join("\n");

    // Optional: Replace section in README.md
    let readme = fs.readFileSync("README.md", "utf-8");
    const start = "<!-- PRS-START -->";
    const end = "<!-- PRS-END -->";
    const pattern = new RegExp(`${start}[\\s\\S]*?${end}`, "g");
    const updated = readme.replace(pattern, `${start}\n${md}\n${end}`);
    fs.writeFileSync("README.md", updated);

    console.log("✅ Updated README.md");
  });
}).on("error", err => {
  console.error("❌ Failed to fetch PRs:", err);
});

