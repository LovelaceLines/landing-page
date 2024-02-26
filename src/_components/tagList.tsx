import { Box, Typography } from '@mui/material';

import { Tag } from '@prisma/client';
import { TagData } from '@/_components';

export const TagList = ({ tags }: { tags: Tag[] }) => {
  return (
    <Box display='flex' flexDirection='column' gap={1}>
      <Typography variant='subtitle1'>Tags</Typography>

      {tags.map(tag =>
        <TagData key={tag.slug} tag={tag} />
      )}
    </Box>
  );
};