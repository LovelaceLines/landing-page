import { notFound } from "next/navigation";
import { PostData, PostContent, PostsRecommended } from "@/_components";
import { getAuthorBySlug, getPostBySlug, markdownToHtml } from "@/_libs";
import { Params } from "@/_types";

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