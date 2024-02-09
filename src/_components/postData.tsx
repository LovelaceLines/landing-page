import Image from 'next/image';
import { Box, Chip, Container, Typography } from '@mui/material';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { Author, Post } from '@/_types';
import { AuthorLinkCard } from '@/_components';
import Link from 'next/link';

export const PostData = ({ post, authors }: { post: Post, authors: Author[] }) => {
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

        <Box display='flex' gap={2}>
          {authors.map(author =>
            <AuthorLinkCard key={author.slug} author={author} />)}
        </Box>

        <Image src={post.coverImage} alt={post.title} width={500} height={500} style={{ width: '100%', height: 'auto', borderRadius: 10 }} />
      </Box >
    </Container >
  );
};