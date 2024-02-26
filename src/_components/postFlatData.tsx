import Link from 'next/link';
import { Box, Typography } from '@mui/material';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

import { Post } from '@prisma/client';

interface PostFlatDataProps {
  post: Post;
  displayDate?: boolean;
  displayExcerpt?: boolean;
}

export const PostFlatData = ({ post, displayDate = true, displayExcerpt = true }: PostFlatDataProps) => {
  return (
    <Box display='flex' flex={1} flexDirection='column' gap={1}>
      <Link href={`/blog/${post.slug}`} style={{ color: 'inherit' }}>
        <Typography variant='h6'>{post.title}</Typography>
      </Link>

      {displayDate &&
        <Typography variant='subtitle2'>
          {format(new Date(post.dateCreated), "dd 'de' MMM, yyyy", { locale: ptBR })}
        </Typography>}

      {displayExcerpt && <Typography variant='body2'>{post.descriptionUI}</Typography>}
    </Box>
  );
};