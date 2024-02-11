'use client';

import { useEffect, useState } from 'react';
import { Box, IconButton } from '@mui/material';
import { ArrowUpward } from '@mui/icons-material';

export const ScrollToUp = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const handleWindowScroll = () => setIsVisible(window.scrollY > 50);
    window.addEventListener('scroll', handleWindowScroll);
    return () => window.removeEventListener('scroll', handleWindowScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <Box sx={{ position: 'fixed', bottom: { xs: 5, md: 20 }, right: { xs: 5, md: 20 } }}>
      {isVisible &&
        <IconButton onClick={scrollToTop} size='large'>
          <ArrowUpward fontSize='large' color='primary' />
        </IconButton>
      }
    </Box >
  );
};