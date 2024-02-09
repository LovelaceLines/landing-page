import Image from 'next/image';
import Link from 'next/link';
import { Box, Grid, Typography } from '@mui/material';

import { Feed } from '@/_types';
import { getFeed } from '@/_libs';
import { PageContentBase } from '@/_templates';
import { colors } from '@/_theme';

export const InstagramFeed = async () => {
  const feed = await getFeed() ?? [];

  const Reels = ({ post }: { post: Feed }) => (
    <Link href={post.permalink} target='_blank' rel='noreferrer'>
      <video src={post.media_url} controls autoPlay muted loop width='100%' />
    </Link>
  );

  const PublicationReels = ({ posts }: { posts: Feed[] }) => (
    <Grid container spacing={1}>
      {posts.filter(p => p.media_type === 'VIDEO' && p.is_shared_to_feed === true)
        .slice(0, 4)
        .map(p => (
          <Grid item xs={3} sx={{ aspectRatio: '9/16' }} key={p.id}>
            <Reels post={p} />
          </Grid>
        ))
      }
    </Grid>
  );

  const FeedImage = ({ post }: { post: Feed }) => (
    <Box height='100%'>
      <Link href={post.permalink} target='_blank' rel='noreferrer'>
        <Image src={post.media_url} width={1080} height={1080}
          style={{ width: '100%', height: '100%', aspectRatio: '1/1', objectFit: 'cover' }}
          alt={post.caption ?? ''} />
      </Link>
    </Box>
  );

  const PublicationFeedImage = ({ posts }: { posts: Feed[] }) => (
    <Grid container spacing={0.5}>
      {posts.filter(p => p.media_type === 'IMAGE' || p.media_type === 'CAROUSEL_ALBUM')
        .slice(0, 9)
        .map(p => (
          <Grid item xs={4} key={p.id}>
            <FeedImage post={p} />
          </Grid>
        ))
      }
    </Grid>
  );

  return (
    <PageContentBase maxWidth='md'>
      {feed.length === 0 ? null : (
        <Box display='flex' flexDirection='column' gap={4}>
          <Typography variant="h4">
            Também estamos presente no {' '}
            <Link href='https://www.instagram.com/lovelacelines/' target='_blank' rel='noreferrer' style={{ color: `${colors.primary}` }}>
              Instagram
            </Link>
          </Typography>
          <Box>
            <Box sx={{ display: { xs: 'none', md: 'block' } }}>
              <PublicationReels posts={feed} />
            </Box>
            <PublicationFeedImage posts={feed} />
          </Box>
        </Box>
      )}
    </PageContentBase>
  );
};