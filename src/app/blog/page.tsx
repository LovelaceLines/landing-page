import { Pagination, PostFlatData, TagList } from "@/_components";
import { getAllPosts, getAllTags } from "@/_libs";

export default function Blog() {
  const allPosts = getAllPosts();
  // const heroPost = allPosts[0];
  // const morePosts = allPosts.slice(1);
  const tags = getAllTags();

  return (
    <>
      <TagList tags={tags} />
      {allPosts.map(post =>
        <PostFlatData key={post.slug} post={post} />
      )}
      <Pagination slug='blog' />
    </>
  );
}