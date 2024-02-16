import { Metadata } from 'next';

import { Author, Post } from '@/_types';
import { openGraph } from '@/_shared';

export const metadata = (post: Post, authors: Author[]): Metadata => ({
  title: post.title,
  description: post.excerpt.substring(0, 160),
  abstract: post.excerpt.substring(0, 160),
  authors: [...authors.map(author => { return { name: author.name, url: author.instagram } })],
  openGraph: {
    ...openGraph,
    title: post.title,
    description: post.excerpt.substring(0, 160),
    images: [
      {
        url: post.coverImage,
        width: 1920,
        height: 1080,
        alt: post.title,
      },
    ],
    url: `${openGraph.url}/blog/${post.slug}`,
  },
});