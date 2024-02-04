import { PostContent } from "@/_components";
import { getPostBySlug, markdownToHtml } from "@/_libs";
import { Params, Post } from "@/_types";
import { notFound } from "next/navigation";

const fetchPost = (slug: string) => {
  try { return getPostBySlug(slug) }
  catch (error: any) { return notFound() }
}

export default async function Page({ params }: Params) {
  const post = fetchPost(params.slug);
  post.content = await markdownToHtml(post.content || "");

  return <PostContent content={post.content} />;
}