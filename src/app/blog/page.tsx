import { Box, Container, Typography } from '@mui/material';

import { Pagination, PostFlatData, TagList } from '@/_components';
import { getAllPosts, getAllTags } from '@/_libs';
import env from '@/env';

export default async function Blog() {
  const allPosts = await getAllPosts(1, env.POSTS_PER_PAGE);
  const tags = await getAllTags();

  return (
    <>
      <Typography variant='h5' align='center'>
        Blog da Lovelace Lines
      </Typography>

      <br />

      <Box display='flex' flexDirection={{ xs: 'column', md: 'row' }} gap={2}>
        <TagList tags={tags} />

        <Container maxWidth='md' disableGutters>
          <Box display='flex' flexDirection='column' gap={2}>
            {allPosts.map(post =>
              <PostFlatData key={post.slug} post={post} />
            )}
          </Box>
        </Container>
      </Box>

      <Pagination params={{ slug: 'blog', page: 0 }} />
    </>
  );
}