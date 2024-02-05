'use client';

import { Box, Container, useMediaQuery } from "@mui/material"

export default function Template({ children }: Readonly<{ children: React.ReactNode }>) {
  const smDown = useMediaQuery('(max-width:600px)');

  return (
    <Container>
      <Box paddingY={2}>
        {children}
      </Box>
    </Container>
  );
}