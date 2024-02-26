import Link from 'next/link';
import { Box, Typography } from '@mui/material';

import { Tag } from '@prisma/client';

export const TagData = ({ tag }: { tag: Tag }) => {
  return (
    <Box>
      <Link href={`/blog/tag/${tag.slug}`} style={{ color: 'inherit' }}>
        <Typography variant='subtitle2'>{tag.name}</Typography>
      </Link>
    </Box>
  );
};