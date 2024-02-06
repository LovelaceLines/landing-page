import { Box } from "@mui/material";
import { notFound } from "next/navigation";
import { Pagination, PostFlatData } from "@/_components";
import { getAllPosts } from "@/_libs";

export default function Page({ params }: { params: { page: string } }) {
  const page = getPage(params.page);
  const posts = getAllPosts(page, 2);

  return (
    <Box>
      {posts.map((post) => (
        <PostFlatData key={post.slug} post={post} />
      ))}
      <Pagination slug="blog" />
    </Box>
  );
}

const getPage = (page: string): number => {
  if (page == "0") return 0;
  else if (!parseInt(String(page))) return notFound();
  return parseInt(String(page));
}
