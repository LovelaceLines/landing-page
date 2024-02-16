import { Metadata } from 'next';

import { Pagination, PostFlatData, TagList } from '@/_components';
import { getAllPosts, getAllTags } from '@/_libs';
import { Box, Container, Typography } from '@mui/material';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Blog da Lovelace Lines. Artigos, tutoriais, dicas e truques sobre desenvolvimento de software, design e muito mais!',
  abstract: 'Blog da Lovelace Lines. Artigos, tutoriais, dicas e truques sobre desenvolvimento de software, design e muito mais!',
  category: 'Blog de Desenvolvimento de Software',
  appLinks: {
    ios: {
      app_name: 'Lovelace Lines',
      url: 'https://loveacelines.com/blog'
    },
    web: {
      should_fallback: true,
      url: 'https://loveacelines.com/blog'
    },
    windows: {
      app_name: 'Lovelace Lines',
      url: 'https://loveacelines.com/blog'
    },
  }
};

export default function Blog() {
  const allPosts = getAllPosts();
  const tags = getAllTags();

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