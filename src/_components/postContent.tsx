import { Box } from "@mui/material";
import React from "react";

interface PostContentProps {
  content: string;
}

export const PostContent = ({ content }: PostContentProps) => {
  return <Box dangerouslySetInnerHTML={{ __html: content }} />
};
