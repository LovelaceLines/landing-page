import { Box } from "@mui/material"

export default function Template({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <Box>
      template content
      <br />
      {children}
      <br />
      template content
    </Box>
  );
}