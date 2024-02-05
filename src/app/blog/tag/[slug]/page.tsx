import { PostFlatData, TagData } from "@/_components";
import { Params } from "@/_types";
import { getPostBySlug, getTagBySlug } from "@/_libs";

export default function Page({ params }: Params) {
  const tag = getTagBySlug(params.slug);
  const posts = tag.slugPosts.map(slug => getPostBySlug(slug));

  return (
    <>
      <TagData tag={tag} />
      {posts.map(post =>
        <PostFlatData key={post.slug} post={post} />
      )}
    </>
  );
}