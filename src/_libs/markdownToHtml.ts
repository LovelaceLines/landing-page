import { remark } from 'remark';
import html from 'remark-html';
import { rehype } from 'rehype';
import rehypeSlug from 'rehype-slug';
import fs from 'fs';
import matter from 'gray-matter';
import { join } from 'path';

export async function markdownToHtml(markdown: string) {
  const result = await remark().use(html).process(markdown);
  const htmlResult = await rehype().use(rehypeSlug).process(result.toString());

  return htmlResult.toString();
}

const authorsDirectory = join(process.cwd(), 'public/authors');
const postsDirectory = join(process.cwd(), 'public/posts');

export async function markdownToHtmlBySlug(slug: string, type: 'author' | 'post') {
  const directory = type === 'author' ? authorsDirectory : postsDirectory;
  const fullSlug = join(directory, slug, `${slug}.md`);
  const fileContents = fs.readFileSync(fullSlug, 'utf8');
  const { content } = matter(fileContents);

  return await markdownToHtml(content);
}