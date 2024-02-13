'use client';

import { useRouter } from 'next/navigation';
import { Button } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

export const RouterBack = ({ hasText = true, href }: { hasText?: boolean, href?: string }) => {
  const router = useRouter();

  return (
    <Button
      variant='text'
      onClick={() => href ? router.push(href) : router.back()}
      startIcon={<ArrowBackIosNewIcon />}
      sx={{ position: 'fixed', top: 80, left: 20 }}
    >
      {hasText && 'Voltar'}
    </Button >
  );
};