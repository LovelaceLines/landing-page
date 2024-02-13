import Fuse, { IFuseOptions } from 'fuse.js';

import { getAllPosts } from '@/_libs';
import { Post } from '@/_types';

let fuse: Fuse<Post> | null = null;

export const loadFuse = async () => {
  if (fuse) return fuse;

  const list = getAllPosts();

  const options: IFuseOptions<Post> = {
    minMatchCharLength: 3,
    keys: [
      'title',
      'excerpt',
      'tags',
      'slugAuthors',
      'content',
    ],
  };

  fuse = new Fuse(list, options);
  return fuse;
};

export const searchPosts = async (query: string) => {
  const fuse = await loadFuse();
  return fuse.search(query);
};