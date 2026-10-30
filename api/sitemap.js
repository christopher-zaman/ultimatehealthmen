import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import clientPromise from './mongodb.js';
import { getPublishedPosts } from './blogs.js';
const escapeXml = value => String(value).replace(/[<>&"']/g, c => ({'<':'&lt;','>':'&gt;','&':'&amp;','"':'&quot;',"'":'&apos;'}[c]));
export default async function handler(request, response) {
  try {
    const client = await clientPromise;
    const posts = await getPublishedPosts(client.db(process.env.MONGODB_DB || 'ultimateHealthMen').collection('blogPosts'));
    const source = await readFile(join(process.cwd(), 'dist/sitemap-base.xml'), 'utf8');
    const fixed = source.replace(/<url>[\s\S]*?<\/url>/g, block => /<loc>[^<]*\/blog(?:\/|<)/.test(block) ? '' : block);
    const entries = ['https://www.ultimatehealthmen.com/blog', ...posts.map(p => `https://www.ultimatehealthmen.com/blog/${encodeURIComponent(p.slug)}`)]
      .map(url => `<url><loc>${escapeXml(url)}</loc></url>`).join('\n');
    response.setHeader('Content-Type', 'application/xml; charset=utf-8');
    response.setHeader('Cache-Control', 'no-store');
    return response.status(200).send(fixed.replace('</urlset>', `${entries}\n</urlset>`));
  } catch (error) {
    console.error('Sitemap failed:', error.message);
    return response.status(503).send('Sitemap temporarily unavailable');
  }
}
