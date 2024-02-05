'use client';

import { Box, Container, useMediaQuery } from "@mui/material";
import React from "react";

interface AuthorContentProps {
  content: string;
}

export const AuthorContent = ({ content }: AuthorContentProps) => {
  const smDown = useMediaQuery('(max-width:600px)');

  return (
    <Container disableGutters={smDown}>
      <Box
        sx={{
          'a': { color: 'primary.main' }
        }}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </Container>
  );
};
