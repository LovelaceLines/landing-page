import Image from 'next/image';
import Link from 'next/link';
import { Box, Typography } from '@mui/material';
import { Instagram, GitHub, LinkedIn, Mail, X } from '@mui/icons-material';

import { Author } from '@prisma/client';

export const AuthorData = ({ author }: { author: Author }) => {
  const SocialMidia = () => (
    <Box display='flex' justifyContent='center' alignItems='center' gap={2}>
      <Link href={author.instagram ?? ''} rel='noopener noreferrer' target='_blank' style={{ color: 'inherit' }}>
        <Instagram fontSize='medium' />
      </Link>
      <Link href={author.github ?? ''} rel='noopener noreferrer' target='_blank' style={{ color: 'inherit' }}>
        <GitHub fontSize='medium' />
      </Link>
      <Link href={author.linkedin ?? ''} rel='noopener noreferrer' target='_blank' style={{ color: 'inherit' }}>
        <LinkedIn fontSize='medium' />
      </Link>
      <Link href={author.twitter ?? ''} rel='noopener noreferrer' target='_blank' style={{ color: 'inherit' }}>
        <X fontSize='medium' />
      </Link>
      {/* TODO: add a mailto link */}
      <Link href={`mailto:${author.email}`} rel='noopener noreferrer' target='_blank' style={{ color: 'inherit' }}>
        <Mail fontSize='medium' />
      </Link>
    </Box>
  );

  return (
    <Box display='flex' flexDirection='column' gap={1}>
      <Image src={author.coverImagePath} alt={author.name} width={500} height={500} style={{ width: '100%', height: 'auto', borderRadius: 10 }} />

      <Typography variant='h5' align='center'>{author.name}</Typography>
      <Typography variant='subtitle2' align='center'>{author.company}, {author.occupation}</Typography>

      <SocialMidia />
    </Box>
  );
};