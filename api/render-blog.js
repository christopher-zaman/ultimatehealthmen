import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import clientPromise from './mongodb.js';
import { getPublishedPosts, getPublishedPost } from './blogs.js';
import { render } from '../dist-ssr/entry-server.js';

const templatePromise = readFile(join(process.cwd(), 'dist/spa.html'), 'utf8');
export default async function handler(request, response) {
  response.setHeader('Cache-Control', 'no-store');
  try {
    const rawSlug = request.query.slug;
    if (rawSlug !== undefined && (typeof rawSlug !== 'string' || !/^[a-z0-9-]+$/.test(rawSlug))) {
      return response.status(404).send('Article not found');
    }
    const slug = rawSlug || null;
    const client = await clientPromise;
    const collection = client.db(process.env.MONGODB_DB || 'ultimateHealthMen').collection('blogPosts');
    const [posts, post] = await Promise.all([
      getPublishedPosts(collection), slug ? getPublishedPost(collection, slug) : null,
    ]);
    const data = { slug, posts, post };
    let markup = await render(slug ? `/blog/${slug}` : '/blog', data);
    const head = [];
    markup = markup.replace(/<title\b[^>]*>[\s\S]*?<\/title>|<meta\b[^>]*>|<link\b[^>]*>/g, tag => { head.push(tag); return ''; });
    const serialized = JSON.stringify(data).replace(/</g, '\\u003c');
    const html = (await templatePromise)
      .replace('</head>', `${head.join('')}\n</head>`)
      .replace('<div id="root"></div>', `<div id="root">${markup}</div>`)
      .replace('</body>', `<script type="application/json" id="blog-initial-data">${serialized}</script></body>`);
    if (slug && !post) response.setHeader('X-Robots-Tag', 'noindex');
    response.setHeader('Content-Type', 'text/html; charset=utf-8');
    return response.status(slug && !post ? 404 : 200).send(html);
  } catch (error) {
    console.error('Blog rendering failed:', error.message);
    response.setHeader('Retry-After', '60');
    response.setHeader('X-Robots-Tag', 'noindex');
    return response.status(503).send('Articles are temporarily unavailable. Please try again shortly.');
  }
}
