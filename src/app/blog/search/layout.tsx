import { Box } from '@mui/material';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Buscar',
  description: 'Busque por artigos e tutoriais sobre desenvolvimento de software e tecnologia!',
};

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <Box>
      {children}
    </Box>
  );
}
