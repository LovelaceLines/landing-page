'use client';

import { useRouter } from 'next/navigation';
import { Button, Typography } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

export const RouterBack = ({ hasText = true, href }: { hasText?: boolean, href?: string }) => {
  const router = useRouter();

  return (
    <Button
      variant='text'
      onClick={() => href ? router.push(href) : router.back()}
      startIcon={<ArrowBackIosNewIcon />}
      sx={{ position: 'absolute', top: 0, left: 0 }}
    >
      <Typography variant='subtitle2' display={{ xs: 'none', md: 'block' }}>
        {hasText && 'Voltar'}
      </Typography>
    </Button >
  );
};