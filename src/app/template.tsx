import { Box } from '@mui/material';
import { MenuAppBar, ScrollToUp } from '@/_components';

export default function Template({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <Box>
      <MenuAppBar />
      {children}
      <ScrollToUp />
    </Box>
  );
}