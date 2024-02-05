import { Tag } from "@/_types";
import { Box, Typography } from "@mui/material";
import Link from "next/link";

export const TagData = ({ tag }: { tag: Tag }) => {
  return (
    <Box>
      <Link href={`/blog/tag/${tag.slug}`} style={{ color: 'inherit' }}>
        <Typography variant="h6" color='primary'>{tag.title}</Typography>
      </Link>
    </Box>
  );
}