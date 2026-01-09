import { writeFileSync } from 'node:fs';
import { resolve } from 'node:path';

const origin = 'https://mathlox.pl';

const routes = ['/', '/sofizmaty', '/paradoksy'];

function urlFor(pathname) {
  return new URL(pathname, origin).toString();
}

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map((r) => {
    const loc = urlFor(r);
    const priority = r === '/' ? '1.0' : '0.8';
    return `  <url><loc>${loc}</loc><changefreq>weekly</changefreq><priority>${priority}</priority></url>`;
  })
  .join('\n')}
</urlset>
`;

const outPath = resolve(process.cwd(), 'public', 'sitemap.xml');
writeFileSync(outPath, xml, 'utf8');
