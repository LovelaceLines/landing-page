import { Metadata } from "next";
import { notFound } from "next/navigation";

import { PostData, PostContent, PostsRecommended } from "@/_components";
import { getAuthorBySlug, getPostBySlug, markdownToHtml } from "@/_libs";
import { Params } from "@/_types";

export async function generateMetadata({ params: { slug } }: Params): Promise<Metadata> {
  const post = fetchPost(slug);

  return {
    title: post.title,
    description: post.excerpt.substring(0, 160),
    abstract: post.excerpt.substring(0, 160),
    authors: [...post.slugAuthors.map(author => { return { name: getAuthorBySlug(author).name, url: getAuthorBySlug(author).instagram } })],
    category: "Blog de Desenvolvimento de Software" + (post.tags ? ` - ${post.tags.join(", ")}` : ""),
    openGraph: {
      images: [
        {
          url: post.coverImage,
          width: 500,
          height: 500,
          alt: post.title,
        },
      ],
    },
  } as Metadata;
}

const fetchPost = (slug: string) => {
  try { return getPostBySlug(slug) }
  catch (error: unknown) { return notFound() }
}

export default async function Page({ params }: Params) {
  const post = fetchPost(params.slug);
  post.content = await markdownToHtml(post.content || "");
  const authors = post.slugAuthors.map(author => getAuthorBySlug(author));
  const postsRecommended = post.slugRecommendedArticles ?
    post.slugRecommendedArticles.map(slug => getPostBySlug(slug)) :
    [];

  return (
    <>
      <PostData post={post} authors={authors} />
      <PostContent content={post.content} />
      <PostsRecommended posts={postsRecommended} />
    </>
  );
}