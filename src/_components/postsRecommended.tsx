import { Container, Typography } from '@mui/material';

import { Post } from '@/_types';
import { PostFlatData } from '@/_components';

export const PostsRecommended = ({ posts }: { posts: Post[] }) => {
  return (
    <Container maxWidth='md' disableGutters>
      <Typography variant='h6'>Recomendados:</Typography>

      {posts.map(post => (
        <PostFlatData key={post.slug} post={post} displayDate={false} />
      ))}
    </Container>
  );
};