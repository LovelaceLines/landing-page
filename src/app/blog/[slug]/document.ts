import { Metadata } from 'next';

import { openGraph } from '@/_shared';
import { Author, Post } from '@prisma/client';

export const metadata = (post: Post, authors: Author[]): Metadata => ({
  title: post.title,
  description: post.descriptionMeta,
  abstract: post.descriptionMeta,
  authors: [...authors.map(author => { return { name: author.name, url: author.instagram ?? '' } })],
  openGraph: {
    ...openGraph,
    title: post.title,
    description: post.descriptionMeta ?? post.descriptionUI ?? '',
    images: [
      {
        url: post.coverImagePath ?? '',
        width: 1920,
        height: 1080,
        alt: post.title,
      },
    ],
    url: `${openGraph.url}/blog/${post.slug}`,
  },
});