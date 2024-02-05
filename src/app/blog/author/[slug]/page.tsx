import { getAuthorBySlug, getPostBySlug, markdownToHtml } from "@/_libs"
import { AuthorContent, AuthorData, PostsRecommended } from "@/_components";
import { notFound } from "next/navigation"

const fetchAuthor = (slug: string) => {
  try { return getAuthorBySlug(slug) }
  catch (error: any) { return notFound() }
}

export default async function Page({ params }: any) {
  const author = fetchAuthor(params.slug);
  author.content = await markdownToHtml(author.content || "");
  const postsRecommended = author.slugRecommendedArticles ?
    author.slugRecommendedArticles.map(slug => getPostBySlug(slug)) :
    [];

  return (
    <>
      <AuthorData author={author} />
      <AuthorContent content={author.content} />
      <PostsRecommended posts={postsRecommended} />
    </>
  );
}