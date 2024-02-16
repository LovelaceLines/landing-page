import { notFound } from 'next/navigation';
import { Metadata } from 'next';

import { getAuthorBySlug, getPostBySlug, markdownToHtml } from '@/_libs';
import { AuthorContent, AuthorData, PostsRecommended } from '@/_components';
import { Params } from '@/_types';

export async function generateMetadata({ params: { slug } }: Params): Promise<Metadata> {
  const post = fetchAuthor(slug);

  return {
    title: post.name,
    description: post.content.substring(0, 160),
    abstract: post.content.substring(0, 160),
    openGraph: {
      images: [
        {
          url: post.coverImage,
          width: 500,
          height: 500,
          alt: 'Foto de ' + post.name,
        },
      ],
    },
  } as Metadata;
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