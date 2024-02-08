import { remark } from "remark";
import html from "remark-html";
import { rehype } from 'rehype';
import rehypeSlug from 'rehype-slug';

export async function markdownToHtml(markdown: string) {
  const result = await remark().use(html).process(markdown);
  const htmlResult = await rehype().use(rehypeSlug).process(result.toString());

  return htmlResult.toString();
}