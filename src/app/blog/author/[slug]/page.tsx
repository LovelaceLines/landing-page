import { getAuthorBySlug, markdownToHtml } from "@/_libs"
import { AuthorContent, AuthorData } from "@/_components";
import { notFound } from "next/navigation"

const fetchAuthor = (slug: string) => {
  try { return getAuthorBySlug(slug) }
  catch (error: any) { return notFound() }
}

export default async function Page({ params }: any) {
  const author = fetchAuthor(params.slug);
  author.content = await markdownToHtml(author.content || "");

  return (
    <>
      <AuthorData author={author} />
      <AuthorContent content={author.content} />
    </>
  );
}