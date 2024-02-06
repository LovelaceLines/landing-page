'use client';

import { Box, IconButton } from "@mui/material"
import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material';
import { useParams, useRouter } from "next/navigation";

export const Pagination = ({ slug }: { slug: string }) => {
  const router = useRouter();
  let { page } = useParams();

  if (!page) page = "0";

  const nextPage = () => {
    const nextPageNumber = parseInt(page as string, 10) + 1;
    router.push(`/${slug}/page/${nextPageNumber}`);
  };

  const prevPage = () => {
    const prevPageNumber = parseInt(page as string, 10) - 1;
    if (prevPageNumber >= 0) {
      router.push(`/${slug}/page/${prevPageNumber}`);
    }
  };

  return (
    <Box display='flex' flexDirection='row' justifyContent='center' gap={4}>
      <IconButton color="success" onClick={prevPage}>
        <KeyboardArrowLeft color="primary" />
      </IconButton>
      <IconButton color="error" onClick={nextPage}>
        <KeyboardArrowRight color="primary" />
      </IconButton>
    </Box>
  )
}