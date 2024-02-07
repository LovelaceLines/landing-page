import { Box } from "@mui/material";
import { Pagination, PostFlatData } from "@/_components";

import { getAllPosts } from "@/_libs";

export default function Page({ params: { page } }: { params: { page: number } }) {
  const posts = getAllPosts(page, 2);

  return (
    <Box>
      {posts.map((post) => (
        <PostFlatData key={post.slug} post={post} />
      ))}
      <Pagination params={{ slug: "blog", page: page }} />
    </Box>
  );
}
