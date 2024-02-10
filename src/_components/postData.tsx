import Image from 'next/image';
import Link from 'next/link';
import { Box, Chip, Container, Typography } from '@mui/material';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

import { Post } from '@/_types';

export const PostData = ({ post }: { post: Post }) => {
  return (
    <Container disableGutters>
      <Box display='flex' alignItems='center' flexDirection='column' gap={1}>
        <Box display='flex' gap={1}>
          {post.tags && post.tags.map(tag =>
            <Link key={tag} href={`/blog/tag/${tag}`} passHref>
              <Chip label={tag} clickable color='primary' key={tag} />
            </Link>)}
        </Box>

        <Typography variant='h4' align='center' >{post.title}</Typography>

        <Typography variant='subtitle2' align='center'>{
          format(new Date(post.date), "dd 'de' MMM, yyyy", { locale: ptBR })}
          {post.lastmod && ` • ${format(new Date(post.lastmod), "dd 'de' MMM, yyyy", { locale: ptBR })}`}
        </Typography>

        <Image src={post.coverImage} alt={post.title} width={500} height={500} style={{ width: '100%', height: 'auto', borderRadius: 10 }} />
      </Box >
    </Container >
  );
};