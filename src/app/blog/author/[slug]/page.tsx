import { notFound } from 'next/navigation';
import { Metadata } from 'next';

import { getAuthorBySlug, getPostBySlug, markdownToHtml } from '@/_libs';
import { AuthorContent, AuthorData, PostsRecommended } from '@/_components';
import { Params } from '@/_types';
import { metadata as baseMetadata } from './document';

export async function generateMetadata({ params: { slug } }: Params): Promise<Metadata> {
  const author = fetchAuthor(slug);
  return baseMetadata(author);
}

const fetchAuthor = (slug: string) => {
  try { return getAuthorBySlug(slug); }
  catch (error: unknown) { return notFound(); }
};

export default async function Page({ params }: { params: { slug: string } }) {
  const author = fetchAuthor(params.slug);
  author.content = await markdownToHtml(author.content || '');
  const postsRecommended = author.slugRecommendedArticles ?
    author.slugRecommendedArticles.map(slug => getPostBySlug(slug)) :
    null;

  return (
    <>
      <AuthorData author={author} />
      <AuthorContent content={author.content} />
      {postsRecommended && <PostsRecommended posts={postsRecommended} />}
    </>
  );
}