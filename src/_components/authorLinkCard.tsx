import { Author } from '@/_types';
import { Avatar, Box, Link, Typography } from '@mui/material';

export const AuthorLinkCard = ({ author }: { author: Author }) => {
  return (
    <Box display='flex' alignItems='center' gap={1}>
      <Avatar src={author.avatar} />
      <Link href={`author/${author.slug}`} underline='hover' target='_blank' rel='noopener'>
        <Typography variant='subtitle1'>{author.name}</Typography>
      </Link>
    </Box>
  );
};