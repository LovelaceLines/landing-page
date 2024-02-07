import Image from "next/image";
import { Box, Typography } from "@mui/material";
import { Instagram, GitHub, LinkedIn, Mail, X } from '@mui/icons-material';

import { Author } from "@/_types";
import Link from "next/link";

export const AuthorData = ({ author }: { author: Author }) => {
  return (
    <Box>
      <Image src={author.coverImage} alt={author.name} width={500} height={500} style={{ width: '100%', height: 'auto' }} />

      <br />

      <Typography variant="h5">{author.name}</Typography>
      <Typography variant="subtitle2">{author.company}, {author.occupation}</Typography>

      <Box display="flex" justifyContent="center" alignItems="center" gap={2}>
        <Link href={author.instagram ?? ''} passHref>
          <Instagram fontSize='medium' color='primary' />
        </Link>
        <Link href={author.github ?? ''} passHref>
          <GitHub fontSize='medium' color='primary' />
        </Link>
        <Link href={author.linkedin ?? ''} passHref>
          <LinkedIn fontSize='medium' color='primary' />
        </Link>
        <Link href={author.email ?? ''} passHref>
          <Mail fontSize='medium' color='primary' />
        </Link>
        <Link href={author.email ?? ''} passHref>
          <X fontSize='medium' color='primary' />
        </Link>
      </Box>
    </Box>
  );
}