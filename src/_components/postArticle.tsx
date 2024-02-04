import { Post } from "@/_types";
import { Box } from "@mui/material";
import React from "react";

interface ArticleProps {
  post: Post;
  direction?: "row" | "column";
}

export const PostArticle = ({ post, direction }: ArticleProps) => {
  return (
    <Box>
      <p>{post.slug}</p>
      <h1>{post.title}</h1>
      <p>{post.date}</p>
      <p>{post.tags.join(", ")}</p>
      <p>{post.coverImage}</p>
      <p>{post.author.name}</p>
      <p>{post.author.picture}</p>
      <p>{post.excerpt}</p>
      <p>{post.ogImage.url}</p>
      <p>{post.content}</p>
      <p>{post.preview}</p>
    </Box>
  );
};