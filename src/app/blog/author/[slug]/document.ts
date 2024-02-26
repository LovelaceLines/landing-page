import { Metadata } from 'next';

import { Author } from '@prisma/client';
import { openGraph } from '@/_shared';

export const metadata = (author: Author): Metadata => ({
  title: author.name,
  description: author.descriptionMeta,
  abstract: author.descriptionUI,
  authors: [{ name: author.name, url: author.instagram ?? '' }],
  openGraph: {
    ...openGraph,
    images: [
      {
        url: author.coverImagePath,
        width: 1920,
        height: 1080,
        alt: 'Foto de ' + author.name,
      },
    ],
  },
});