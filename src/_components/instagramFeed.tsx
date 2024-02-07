'use client'

// TODO - Refactor

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Axios from 'axios';
import { Box, Container, Grid, Link, Stack, Theme, Typography, useMediaQuery } from '@mui/material';
import { Feed } from '@/_types';

export const InstagramFeed = () => {
  const mdDown = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'));
  const [feed, setFeed] = useState<Feed[]>([]);

  const getFeed = async () => {
    try {
      const response = await Axios.get<Feed[]>('/api/instagram-feed');
      setFeed(response.data);
    } catch { }
  };

  useEffect(() => {
    getFeed();
    console.log(feed);
  }, [feed]);

  const Reels = (post: Feed) => (
    <Link href={post.permalink} target='_blank' rel='noreferrer'>
      <video src={post.media_url} controls autoPlay muted loop width='100%' />
    </Link>
  );

  const PublicationReels = (post: Feed[]) => (
    <Grid container spacing={2}>
      {post.filter(p => p.media_type === 'VIDEO' && p.is_shared_to_feed === true)
        .slice(0, 4)
        .map(p => (
          <Grid item xs={3} sx={{ aspectRatio: '9/16' }} key={p.id}>
            {Reels(p)}
          </Grid>
        ))
      }
    </Grid>
  );

  const FeedImage = (post: Feed) => (
    <Box height='100%'>
      <Link href={post.permalink} target='_blank' rel='noreferrer'>
        <Image src={post.media_url} width={1080} height={1080}
          style={{ width: '100%', height: '100%', aspectRatio: '1/1', objectFit: 'cover' }}
          alt={post.caption ?? ''} />
      </Link>
    </Box>
  );

  const PublicationFeedImage = (post: Feed[]) => (
    <Grid container spacing={0.5}>
      {post.filter(p => p.media_type === 'IMAGE' || p.media_type === 'CAROUSEL_ALBUM')
        .slice(0, 9)
        .map(p => (
          <Grid item xs={4} key={p.id}>
            {FeedImage(p)}
          </Grid>
        ))
      }
    </Grid>
  );

  return (
    <>
      {feed.length === 0 ? null : (
        <Container maxWidth='md' disableGutters={mdDown}>
          <Stack spacing={4}>
            <Typography variant="h4">Também estamos presente no <Link underline='hover' href='https://www.instagram.com/lovelacelines/' target='_blank' rel='noreferrer'>Instagram</Link></Typography>
            <Box>
              {!mdDown && PublicationReels(feed)}
              {PublicationFeedImage(feed)}
            </Box>
          </Stack>
        </Container>
      )}
    </>
  );
};