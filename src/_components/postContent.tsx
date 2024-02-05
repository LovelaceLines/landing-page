'use client';

import { Box, Container, useMediaQuery } from "@mui/material";
import React from "react";

interface PostContentProps {
  content: string;
}

export const PostContent = ({ content }: PostContentProps) => {
  const smDown = useMediaQuery('(max-width:600px)');

  return (
    <Container maxWidth='md' disableGutters={smDown}>
      <Box
        sx={{
          'img': { width: '100%', height: 'auto' },
          'a': { color: 'primary.main' },
          'p': { textAlign: 'justify' },
          'code': {
            display: 'flex',
            flexWrap: 'nowrap',
            textWrap: 'nowrap',
            overflow: 'auto',
            bgcolor: 'background.paper',
            borderRadius: 1,
            p: 1,
            my: 1,
          },
        }}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </Container>
  );
};
