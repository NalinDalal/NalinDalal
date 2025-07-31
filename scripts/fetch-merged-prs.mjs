import fetch from 'node-fetch';
import fs from 'node:fs';

const username = 'NalinDalal'; // Change to your GitHub username if needed
const api = `https://api.github.com/search/issues?q=is:pr+author:${username}+is:merged&per_page=100`;

const getContext = (title) => {
  // Provides a one-line summary for the PR title
  if (!title) return '';
  let t = title.split(':').pop().trim();
  if (t.length > 80) t = t.slice(0, 77) + '...';
  return t;
};

(async () => {
  const res = await fetch(api, {
    headers: { 'Accept': 'application/vnd.github+json' }
  });
  const data = await res.json();

  let rows = data.items.map(pr => {
    const [ , org, repo ] = pr.repository_url.match(/repos\/([^\/]+)\/([^\/]+)/) || [];
    const context = getContext(pr.title);
    return `| ${org} | ${repo} | [#${pr.number}](${pr.html_url}) | ${context} |`;
  });

  const header = '| Org | Repo | PR | Context |\n|-----|------|----|---------|';
  const content = [header, ...rows].join('\n');
  fs.writeFileSync('merged-prs.md', content, 'utf-8');
})();
