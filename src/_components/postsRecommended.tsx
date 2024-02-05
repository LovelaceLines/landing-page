'use client';

import { Post } from "@/_types"
import { Box, Container, Typography, useMediaQuery, useTheme } from "@mui/material";
import { PostFlatData } from ".";

export const PostsRecommended = ({ posts }: { posts: Post[] }) => {
  const smDown = useMediaQuery(useTheme().breakpoints.down('sm'));

  return (
    <Box>
      <Container maxWidth="md" disableGutters={smDown}>
        {posts &&
          <Typography variant="h5">Recomendados:</Typography>}

        <Box>
          {posts.map(post => (
            <PostFlatData key={post.slug} post={post} />
          ))}
        </Box>
      </Container>
    </Box>
  )
}