import { Box } from "@mui/material"

export default function Template({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <Box>
      blog template content

      {children}

      blog template content
    </Box>
  );
}