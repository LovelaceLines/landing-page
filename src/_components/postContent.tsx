import { Box, Breakpoint, Container, SxProps, Theme } from '@mui/material';

import { ContentStyles } from '@/_styles';

interface PostContentProps {
  content: string;
  maxWidth?: false | Breakpoint | undefined
  sx?: SxProps<Theme> | undefined
}

export const PostContent = ({ content, maxWidth = 'sm', sx = undefined }: PostContentProps) => {
  return (
    <Container maxWidth={maxWidth} disableGutters sx={sx}>
      <Box
        sx={ContentStyles}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </Container>
  );
};
