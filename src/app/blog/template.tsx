import { Box, Container } from "@mui/material"

export default function Template({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <Container>
      <Box paddingY={2}>
        {children}
      </Box>
    </Container>
  );
}