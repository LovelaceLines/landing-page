import { Box } from '@mui/material';
import { MenuAppBar } from '@/_components';

export default function Template({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <Box>
      <MenuAppBar />
      {children}
    </Box>
  );
}