// Copies every content/docs/**/*.mdx source file into public/llms/, and
// writes a manifest mapping each page's URL to its raw-markdown copy and its
// GitHub source path. Backs the "Copy Markdown" / "View as Markdown" / "Open
// in GitHub" page actions — plain static files, so it works with `output:
// "export"` (no server, no rewrites needed). Runs via predev/prebuild.
import { readdirSync, statSync, mkdirSync, copyFileSync, writeFileSync } from 'node:fs';
import { join, relative, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const contentDir = join(root, 'content', 'docs');
const outDir = join(root, 'public', 'llms');
const manifestPath = join(root, 'src', 'lib', 'page-actions-manifest.json');

function walk(dir) {
  const files = [];
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) files.push(...walk(full));
    else if (entry.endsWith('.mdx')) files.push(full);
  }
  return files;
}

function toUrlPath(relPath) {
  // "rlogin/installation.mdx" -> "/docs/rlogin/installation"
  // "rlogin/index.mdx"        -> "/docs/rlogin"  (index collapses to its folder)
  let slug = relPath.replace(/\.mdx$/, '').replace(/\\/g, '/');
  if (slug.endsWith('/index')) slug = slug.slice(0, -'/index'.length);
  return `/docs/${slug}`;
}

const manifest = {};
for (const file of walk(contentDir)) {
  const relPath = relative(contentDir, file).replace(/\\/g, '/');
  const mdPath = relPath.replace(/\.mdx$/, '.md');
  const dest = join(outDir, mdPath);
  mkdirSync(dirname(dest), { recursive: true });
  copyFileSync(file, dest);

  manifest[toUrlPath(relPath)] = {
    markdown: `/llms/${mdPath}`,
    github: `content/docs/${relPath}`,
  };
}

mkdirSync(dirname(manifestPath), { recursive: true });
writeFileSync(manifestPath, JSON.stringify(manifest, null, 2) + '\n');

console.log(`[copy-markdown] wrote ${Object.keys(manifest).length} pages to public/llms/`);
