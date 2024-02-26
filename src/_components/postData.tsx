import Image from 'next/image';
import Link from 'next/link';
import { Box, Chip, Container, Typography } from '@mui/material';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

import { Post, Tag } from '@prisma/client';

export const PostData = ({ post }: { post: Post & { tags: Tag[] } }) => {
  return (
    <Container disableGutters>
      <Box display='flex' alignItems='center' flexDirection='column' gap={1}>
        <Box display='flex' gap={1}>
          {post.tags && post.tags.map(tag =>
            <Link key={tag.slug} href={`/blog/tag/${tag.slug}`} passHref>
              <Chip label={tag.name} clickable color='primary' />
            </Link>)}
        </Box>

        <Typography variant='h5' align='center' >{post.title}</Typography>

        <Typography variant='subtitle2' align='center'>{
          format(new Date(post.dateCreated), "dd 'de' MMM, yyyy", { locale: ptBR })}
          {post.dateLastModified && ` • ${format(new Date(post.dateLastModified), "dd 'de' MMM, yyyy", { locale: ptBR })}`}
        </Typography>

        <Image src={post.coverImagePath ?? ''} alt={post.title} width={500} height={500} style={{ width: '100%', height: 'auto', borderRadius: 10 }} />
      </Box >
    </Container >
  );
};