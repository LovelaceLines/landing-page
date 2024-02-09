import { Box, Container, Typography } from '@mui/material';

import { Post } from '@/_types';
import { PostFlatData } from '@/_components';

export const PostsRecommended = ({ posts }: { posts: Post[] }) => {
  return (
    <Box>
      <Container maxWidth='md' disableGutters>
        {posts &&
          <Typography variant='h5'>Recomendados:</Typography>}

        <Box>
          {posts.map(post => (
            <PostFlatData key={post.slug} post={post} />
          ))}
        </Box>
      </Container>
    </Box>
  );
};