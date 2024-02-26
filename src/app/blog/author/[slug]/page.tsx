import { notFound } from 'next/navigation';
import { Metadata } from 'next';

import { getAuthorBySlug, getRecommendedPosts, markdownToHtmlBySlug } from '@/_libs';
import { AuthorContent, AuthorData, PostsRecommended } from '@/_components';
import { Params } from '@/_types';
import { metadata as baseMetadata } from './document';

export async function generateMetadata({ params: { slug } }: Params): Promise<Metadata> {
  const author = await fetchAuthor(slug);
  return baseMetadata(author);
}

const fetchAuthor = async (slug: string) => {
  try { return await getAuthorBySlug(slug); }
  catch (error: unknown) { return notFound(); }
};

export default async function Page({ params }: { params: { slug: string } }) {
  const author = await fetchAuthor(params.slug);
  author.content = await markdownToHtmlBySlug(author.slug, 'author');
  const postsRecommended = await getRecommendedPosts(author);

  return (
    <>
      <AuthorData author={author} />
      <AuthorContent content={author.content} />
      {postsRecommended && <PostsRecommended posts={postsRecommended} />}
    </>
  );
}