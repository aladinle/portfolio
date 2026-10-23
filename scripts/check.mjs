import assert from 'node:assert/strict';
import { readFile, access } from 'node:fs/promises';
const root = new URL('../dist/', import.meta.url);
const html = await readFile(new URL('index.html', root), 'utf8');
const css = await readFile(new URL('styles.css', root), 'utf8');
const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map(m => m[1]);
assert.equal(ids.length, new Set(ids).size, 'Duplicate element IDs');
for (const [, href] of html.matchAll(/\bhref="([^"]+)"/g)) {
  if (href.startsWith('#') && href.length > 1) assert(ids.includes(href.slice(1)), `Broken anchor: ${href}`);
  else if (href.startsWith('./')) await access(new URL(href, root));
  else if (!href.startsWith('#')) assert(/^(https:\/\/|mailto:)/.test(href), `Unexpected URL: ${href}`);
}
assert.equal((html.match(/<h1\b/g) || []).length, 1);
assert(html.includes('<html lang="en">') && html.includes('name="viewport"'));
assert(html.includes('class="skip-link"') && html.includes('<main id="main">'));
assert(css.includes('prefers-reduced-motion') && css.includes(':focus-visible'));
assert(!/408-679-4123|US Citizen|TODO|Lorem ipsum/.test(html), 'Private or placeholder content');
assert(!/@import|https?:\/\//.test(css), 'Unexpected external stylesheet request');
console.log('PASS: anchors, unique IDs, local assets, URLs, semantic landmarks, accessibility hooks, and content checks.');
