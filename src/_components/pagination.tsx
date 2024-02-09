import Link from 'next/link';
import { Box, IconButton } from '@mui/material';
import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material';

export const Pagination = ({ params: { slug, page } }: { params: { slug: string, page: number } }) => {
  const nextPage = () => `/${slug}/page/${+page + 1}`;
  const prevPage = () => page - 1 <= 0 ? `/${slug}` : `/${slug}/page/${+page - 1}`;

  return (
    <Box display='flex' flexDirection='row' justifyContent='center' gap={4}>
      <Link href={prevPage()}>
        <IconButton color='success'>
          <KeyboardArrowLeft color='primary' />
        </IconButton>
      </Link>
      <Link href={nextPage()}>
        <IconButton color='error'>
          <KeyboardArrowRight color='primary' />
        </IconButton>
      </Link>
    </Box>
  );
};