import { Box, Container, Theme, useMediaQuery } from "@mui/material";

export interface PageContentBaseProps {
  children: React.ReactNode;
  sx?: React.CSSProperties;
}

export const PageContentBase = ({ children, sx }: PageContentBaseProps) => {
  const mdDown = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'));

  return (
    <Box p={mdDown ? '20% 0' : '3% 0'} sx={sx}>
      <Container>
        {children}
      </Container>
    </Box>
  );
}