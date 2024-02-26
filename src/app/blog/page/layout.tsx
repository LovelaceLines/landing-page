import { Container } from '@mui/material';

export default function PageLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <Container maxWidth='md'>
      {children}
    </Container>
  );
}
