'use client';

import Link from 'next/link';
import React, { Suspense, useCallback, useState } from 'react';
import { Box, Button, Grid, TextField, Typography } from '@mui/material';

import { Post } from '@/_types';

const queryResults = async (query: string) => {
  try {
    const res = await fetch(`/api/post?query=${query}`, { method: 'GET' });
    return await res.json() as Post[];
  } catch { return [] as Post[]; }
};

export default function Page() {
  const [query, setQuery] = useState('');
  const [posts, setPosts] = useState<Post[]>([]);

  const handleSubmit = useCallback(async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!query) return;
    setPosts(await queryResults(query));
  }, [query]);

  return (
    <Suspense>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} sm={10}>
            <TextField
              fullWidth
              label='Buscar postagens'
              variant='outlined'
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={2}>
            <Button type="submit" variant="contained" color="primary" fullWidth>
              Buscar
            </Button>
          </Grid>
        </Grid>
      </form>
      <br />
      <Box display='flex' flexDirection='column' gap={1}>
        {posts && posts.map(post => (
          <>
            <Link href={`/blog/${post.slug}`} passHref style={{ color: 'inherit' }}>
              <Typography variant='h6'>{post.title}</Typography>
            </Link>
            <Typography variant='body2'>{post.excerpt}</Typography>
          </>
        ))}
      </Box>
    </Suspense>
  );
}