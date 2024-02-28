import Link from 'next/link';
import { Box, Typography } from '@mui/material';
import { ArrowBack, ArrowForward } from '@mui/icons-material';

import { Post } from '@prisma/client';
import { colors } from '@/_theme';

interface PrevNextPageProps {
  prevPost?: Post,
  nextPost?: Post
}

export const PrevNextPage = ({ prevPost, nextPost }: PrevNextPageProps) => {

  const LinkToPage = ({ href, title, startIcon, endIcon }: Readonly<{ href: string, title: string, startIcon?: JSX.Element, endIcon?: JSX.Element }>) => (
    <Link href={href} passHref style={{ color: 'inherit', textDecorationColor: `${colors.primary}` }}>
      <Typography variant='button' color='primary' display='flex' textAlign='center'>
        {startIcon} {title.length > 35 ? title.substring(0, 35) + '...' : title} {endIcon}
      </Typography>
    </Link>
  );

  return (
    <Box display='flex' flexWrap='wrap' justifyContent='center' gap={2}>
      {prevPost && <LinkToPage href={prevPost.slug} title={prevPost!.title} startIcon={<ArrowBack />} />}
      {nextPost && <LinkToPage href={nextPost.slug} title={nextPost!.title} endIcon={<ArrowForward />} />}
    </Box>
  );
};