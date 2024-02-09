import { Box, Container } from '@mui/material';

export interface PageContentBaseProps {
  children: React.ReactNode;
  sx?: React.CSSProperties;
  maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | false;
}

export const PageContentBase = ({ children, sx, maxWidth = 'lg' }: PageContentBaseProps) => {
  return (
    <Box paddingY={5} sx={sx}>
      <Container maxWidth={maxWidth}>
        {children}
      </Container>
    </Box>
  );
};