import { Box } from "@mui/material";

import { Tag } from "@/_types";
import { TagData } from "@/_components";

export const TagList = ({ tags }: { tags: Tag[] }) => {
  return (
    <Box display="flex" flexDirection="column" gap={1}>
      {tags.map(tag =>
        <TagData key={tag.slug} tag={tag} />
      )}
    </Box>
  );
}