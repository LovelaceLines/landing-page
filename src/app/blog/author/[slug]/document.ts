import { Metadata } from 'next';

import { Author } from '@/_types';
import { openGraph } from '@/_shared';

export const metadata = (author: Author): Metadata => ({
  title: author.name,
  description: author.content.substring(0, 160),
  abstract: author.content.substring(0, 160),
  authors: [{ name: author.name, url: author.instagram }],
  openGraph: {
    ...openGraph,
    images: [
      {
        url: author.coverImage,
        width: 1920,
        height: 1080,
        alt: 'Foto de ' + author.name,
      },
    ],
  },
});