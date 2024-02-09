import Link from 'next/link';
import { Box, Container, Typography } from '@mui/material';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

import { Post } from '@/_types';

export const PostFlatData = ({ post }: { post: Post }) => {
  return (
    <Container maxWidth='md' disableGutters>
      <Box display='flex' flexDirection='column' gap={1}>
        <Link href={`/blog/${post.slug}`} passHref style={{ color: 'inherit' }}>
          <Typography variant='h6'>{post.title}</Typography>
        </Link>
        <Typography variant='subtitle2'>
          {format(new Date(post.date), "dd 'de' MMM, yyyy", { locale: ptBR })}
        </Typography>
        <Typography variant='body2'>{post.excerpt}</Typography>
      </Box>
    </Container>
  );
};