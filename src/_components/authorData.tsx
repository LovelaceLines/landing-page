import Image from "next/image";
import { Box, IconButton, Typography } from "@mui/material";
import { Instagram, GitHub, LinkedIn, AlternateEmail, X } from '@mui/icons-material';

import { Author } from "@/_types";

export const AuthorData = ({ author }: { author: Author }) => {
  return (
    <Box>
      <Image src={author.coverImage} alt={author.name} width={500} height={500} style={{ width: '100%', height: 'auto' }} />

      <br />

      <Typography variant="h5">{author.name}</Typography>
      <Typography variant="subtitle2">{author.company}, {author.occupation}</Typography>

      <Box display="flex" justifyContent="center" alignItems="center">
        <IconButton disabled={false} size='large' color='primary'>
          <Instagram fontSize='large' color='secondary' component='a' href={author.instagram} target="_blank" />
        </IconButton>
        <IconButton disabled={false} size='large' color='primary'>
          <GitHub fontSize='large' color='secondary' component='a' href={author.github} target="_blank" />
        </IconButton>
        <IconButton disabled={false} size='large' color='primary'>
          <LinkedIn fontSize='large' color='secondary' component='a' href={author.linkedin} target="_blank" />
        </IconButton>
        <IconButton disabled={false} size='large' color='primary'>
          <AlternateEmail fontSize='large' color='secondary' component='a' href={author.email} target="_blank" />
        </IconButton>
        <IconButton disabled={false} size='large' color='primary'>
          <X fontSize='large' color='secondary' component='a' href={author.email} target="_blank" />
        </IconButton>
      </Box>
    </Box>
  );
}