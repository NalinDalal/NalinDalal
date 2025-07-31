const fs = require("fs");
const https = require("https");

const token = process.env.GH_PAT;

const options = {
  hostname: "api.github.com",
  path: "/search/issues?q=is:pr+author:NalinDalal+is:open",
  method: "GET",
  headers: {
    "User-Agent": "update-readme-script",
    Authorization: `token ${token}`,
    Accept: "application/vnd.github+json"
  }
};

https.get(options, (res) => {
  let data = "";

  res.on("data", (chunk) => {
    data += chunk;
  });

  res.on("end", () => {
    try {
      const json = JSON.parse(data);

      // ✅ Debug in Actions log
      if (!json.items) {
        console.error("❌ No 'items' in response:", json);
        process.exit(1);
      }

      const md = json.items.map(pr => {
        return `- [${pr.title}](${pr.html_url}) — \`${pr.repository_url.split("/").slice(-2).join("/")}\``;
      }).join("\n");

      const readme = fs.readFileSync("README.md", "utf8");

      const updated = readme.replace(
        /<!-- START:prs -->[\s\S]*?<!-- END:prs -->/,
        `<!-- START:prs -->\n${md}\n<!-- END:prs -->`
      );

      fs.writeFileSync("README.md", updated, "utf8");
      console.log("✅ README updated successfully");
    } catch (err) {
      console.error("❌ Failed to parse response or update file:", err);
      process.exit(1);
    }
  });
}).on("error", (err) => {
  console.error("❌ HTTPS request failed:", err);
  process.exit(1);
});

