import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { resolve, join } from 'node:path';
import { render } from '../dist-ssr/entry-server.js';

const dist = resolve('dist');
const template = await readFile(join(dist, 'index.html'), 'utf8');
await writeFile(join(dist, 'spa.html'), template);
const sitemap = await readFile(join(dist, 'sitemap.xml'), 'utf8');
const routes = [...new Set([...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map(m => new URL(m[1]).pathname))]
  .filter(path => path !== '/blog' && !path.startsWith('/blog/'));
routes.push('/privacy-policy');
for (const route of new Set(routes)) {
  let markup = await render(route);
  if (!/<h[12]\b/.test(markup) || !markup.includes('<title>') || markup.includes('Service Not Found') || markup.includes('Treatment Not Found')) {
    throw new Error(`Prerender failed content validation: ${route}`);
  }
  // React 19 hoists metadata into the rendered fragment. Move it into the document head.
  const tags = [];
  markup = markup.replace(/<title\b[^>]*>[\s\S]*?<\/title>|<meta\b[^>]*>|<link\b[^>]*>/g, tag => { tags.push(tag); return ''; });
  const html = template.replace('</head>', `${tags.join('')}\n</head>`)
    .replace('<div id="root"></div>', `<div id="root">${markup}</div>`);
  const target = route === '/' ? join(dist, 'index.html') : join(dist, route.slice(1) + '.html');
  await mkdir(resolve(target, '..'), { recursive: true });
  await writeFile(target, html);
  console.log(`Prerendered ${route}`);
}
