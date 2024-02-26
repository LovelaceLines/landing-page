import Link from 'next/link';
import { redirect } from 'next/navigation';
import { Box, IconButton } from '@mui/material';
import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material';

import { getCountPosts } from '@/_libs';
import env from '@/env';

export const Pagination = async ({ params: { slug, page } }: { params: { slug: string, page: number } }) => {
  const countPosts = await getCountPosts();
  const totalPages = Math.ceil(countPosts / env.POSTS_PER_PAGE);

  if (+page === 1 || page > totalPages) redirect(`/${slug}`);

  const displayPrevPage = page >= 2;
  const prevPage = () => page <= 2 ? `/${slug}` : `/${slug}/page/${+page - 1}`;
  const displayNextPage = page < totalPages;
  const nextPage = () => page == 0 ? `/${slug}/page/${2}` : `/${slug}/page/${+page + 1}`;

  return (
    <Box display='flex' flexDirection='row' justifyContent='center' gap={4}>
      <Box display={displayPrevPage ? 'block' : 'none'}>
        <Link href={prevPage()}>
          <IconButton color='primary'>
            <KeyboardArrowLeft color='primary' />
          </IconButton>
        </Link>
      </Box>
      <Box display={displayNextPage ? 'block' : 'none'}>
        <Link href={nextPage()}>
          <IconButton color='primary'>
            <KeyboardArrowRight color='primary' />
          </IconButton>
        </Link>
      </Box>
    </Box>
  );
};