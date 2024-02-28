import { Container, Typography } from '@mui/material';

import { Post } from '@prisma/client';
import { PostFlatData } from '@/_components';

export const PostsRecommended = ({ posts }: { posts: Post[] }) => {
  if (!posts.length) return null;

  return (
    <Container maxWidth='sm' disableGutters>
      <Typography variant='h6'>Recomendados:</Typography>

      {posts.map(post => (
        <PostFlatData key={post.slug} post={post} displayDate={false} />
      ))}
    </Container>
  );
};