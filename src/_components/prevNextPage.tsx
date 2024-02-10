import Link from 'next/link';
import { Box, Typography } from '@mui/material';
import { ArrowBack, ArrowForward } from '@mui/icons-material';
import { getPostBySlug } from '../_libs/api';

interface PrevNextPageProps {
  prev: string | null;
  next: string | null;
}

export const PrevNextPage = ({ prev, next }: PrevNextPageProps) => {
  const prevPost = prev ? getPostBySlug(prev) : null;
  const nextPost = next ? getPostBySlug(next) : null;

  const LinkToPage = ({ href, title, startIcon, endIcon }: Readonly<{ href: string, title: string, startIcon?: JSX.Element, endIcon?: JSX.Element }>) => (
    <Link href={href} passHref style={{ color: 'inherit' }}>
      <Typography variant='button' color='primary' display='flex' textAlign='center'>
        {startIcon} {title.length > 35 ? title.substring(0, 35) + '...' : title} {endIcon}
      </Typography>
    </Link>
  );

  return (
    <Box display='flex' flexWrap='wrap' justifyContent='center' gap={2}>
      {prev && <LinkToPage href={prev} title={prevPost!.title} startIcon={<ArrowBack />} />}
      {next && <LinkToPage href={next} title={nextPost!.title} endIcon={<ArrowForward />} />}
    </Box>
  );
};