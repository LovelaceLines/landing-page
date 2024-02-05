import { Box, Container } from "@mui/material";

export interface PageContentBaseProps {
  children: React.ReactNode;
  sx?: React.CSSProperties;
}

export const PageContentBase = ({ children, sx }: PageContentBaseProps) => {
  // const smDown = useMediaQuery('(max-width:600px)');
  // const mdDown = useMediaQuery('(max-width:900px)');
  return (
    <Box paddingY={5} sx={sx}>
      <Container>
        {children}
      </Container>
    </Box>
  );
}