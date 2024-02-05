'use client';

import React from "react";
import { Box, Chip, Container, Typography, useMediaQuery, useTheme } from "@mui/material";
import { format } from 'date-fns';
import { ptBR } from "date-fns/locale";
import { Author, Post } from "@/_types";
import Image from "next/image";
import { AuthorLinkCard } from "./authorLinkCard";

interface ArticleProps {
  post: Post;
  authors: Author[];
}

export const PostData = ({ post, authors }: ArticleProps) => {
  const smDown = useMediaQuery(useTheme().breakpoints.down('sm'));

  return (
    <Container disableGutters={smDown}>
      <Box display='flex' alignItems='center' flexDirection='column' gap={1}>
        <Box display='flex' gap={1}>
          {post.tags && post.tags.map(tag =>
            <Chip label={tag} component='a' clickable color='primary' key={tag} />)}
        </Box>

        <Typography variant={smDown ? 'h4' : 'h3'} align='center' >{post.title}</Typography>

        <Typography variant='subtitle2' align='center'>{
          format(new Date(post.date), "dd 'de' MMM, yyyy", { locale: ptBR })}
          {post.lastmod && ` • ${format(new Date(post.lastmod), "dd 'de' MMM, yyyy", { locale: ptBR })}`}
        </Typography>

        <Box display='flex' gap={2}>
          {authors.map(author =>
            <AuthorLinkCard key={author.slug} author={author} />)}
        </Box>

        <Image src={post.coverImage} alt={post.title} width={500} height={500} style={{ width: '100%', height: 'auto', borderRadius: 10 }} />
      </Box >
    </Container >
  );
};