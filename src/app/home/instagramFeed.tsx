import Image from 'next/image';
import Link from 'next/link';
import { Box, Grid, SxProps, Theme, Typography } from '@mui/material';

import { Feed, Publication } from '@/_types';
import { getFeed } from '@/_libs';
import { PageContentBase } from '@/_templates';
import { colors } from '@/_theme';
import env from '@/env';

export const InstagramFeed = async () => {
  const feed = await getFeed();
  const feedImages = feed.filter(publi => publi.media_type === 'IMAGE' || publi.media_type === 'CAROUSEL_ALBUM');
  const feedVideos = feed.filter(publi => publi.media_type === 'VIDEO' && publi.is_shared_to_feed === true);

  const Reels = ({ publi }: { publi: Publication }) => (
    <Link href={publi.permalink} target='_blank' rel='noreferrer'>
      <video src={publi.media_url} controls autoPlay muted loop width='100%' />
    </Link>
  );

  const PublicationReels = ({ feed, sx }: { feed: Feed, sx?: SxProps<Theme> }) => (
    <Grid container spacing={1} sx={sx}>
      {feed.slice(0, 4).map(publi => (
        <Grid item xs={3} sx={{ aspectRatio: '9/16' }} key={publi.id}>
          <Reels publi={publi} />
        </Grid>
      ))}
    </Grid>
  );

  const FeedImage = ({ publi }: { publi: Publication }) => (
    <Box height='100%'>
      <Link href={publi.permalink} target='_blank' rel='noreferrer'>
        <Image src={publi.media_url} width={1080} height={1080}
          style={{ width: '100%', height: '100%', aspectRatio: '1/1', objectFit: 'cover' }}
          alt={publi.caption ?? ''} />
      </Link>
    </Box>
  );

  const PublicationFeedImage = ({ feed }: { feed: Feed }) => (
    <Grid container spacing={0.5}>
      {feed.slice(0, 12).map(img => (
        <Grid item xs={4} key={img.id}>
          <FeedImage publi={img} />
        </Grid>
      ))}
    </Grid>
  );

  return (
    <>{!feed ? null : (
      <PageContentBase maxWidth='lg'>
        <Box display='flex' flexDirection='column' gap={4}>
          <Typography variant="h4">
            Também estamos presente no {' '}
            <Link href={env.INSTAGRAM_PROFILE} target='_blank' rel='noreferrer' style={{ color: `${colors.primary}` }}>
              Instagram
            </Link>
          </Typography>
          <Box>
            {/* <PublicationReels feed={feedVideos} sx={{ display: { xs: 'none', md: 'flex' } }} /> */}
            <PublicationFeedImage feed={feedImages} />
          </Box>
        </Box>
      </PageContentBase>
    )}</>
  );
};