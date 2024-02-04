import { Box, Container } from "@mui/material"

export default function Template({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <Box>
      {children}
    </Box>
  );
}