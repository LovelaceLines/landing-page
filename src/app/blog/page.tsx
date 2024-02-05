import { PostData } from "@/_components";
import { getAllPosts } from "@/_libs";

export default function Blog() {
  const allPosts = getAllPosts();
  const heroPost = allPosts[0];
  const morePosts = allPosts.slice(1);

  return (
    <>
      <PostData post={heroPost} />
      {morePosts.map((post) => (<PostData key={post.slug} post={post} />))}
    </>
  );
}