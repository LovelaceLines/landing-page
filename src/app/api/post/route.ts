import { FuseResult } from 'fuse.js';

import { Post } from '@/_types';
import { searchPosts } from './fuse';

// api/post?query=[query]
export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const query = searchParams.get('query');

  if (query) {
    const results: FuseResult<Post>[] = await searchPosts(query);
    const posts: Post[] = results.map(result => result.item);
    return Response.json(posts);
  }

  return new Response('No query provided', { status: 400 });
}