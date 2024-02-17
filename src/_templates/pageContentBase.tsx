import { Box, Container, SxProps, Theme } from '@mui/material';

export interface PageContentBaseProps {
  id?: string;
  children: React.ReactNode;
  sx?: SxProps<Theme>;
  maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | false;
}

export const PageContentBase = ({ id, children, sx, maxWidth = 'lg' }: PageContentBaseProps) => {
  return (
    <Box id={id} paddingY={5} sx={sx}>
      <Container maxWidth={maxWidth}>
        {children}
      </Container>
    </Box>
  );
};