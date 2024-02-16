import type { Metadata } from 'next';

import env from '@/env';
import { openGraph, title } from '@/_shared';

const blogURL = env.APP_URL + '/blog';

export const metadata: Metadata = {
  title: {
    ...title,
    absolute: 'Blog | Lovelace Lines',
  },
  description: 'Blog da Lovelace Lines. Artigos, tutoriais, dicas e truques sobre desenvolvimento de software, design e muito mais!',
  abstract: 'Blog da Lovelace Lines. Artigos, tutoriais, dicas e truques sobre desenvolvimento de software, design e muito mais!',
  category: 'Blog de Desenvolvimento de Software',
  openGraph: {
    ...openGraph,
    description: 'Blog da Lovelace Lines. Artigos, tutoriais, dicas e truques sobre desenvolvimento de software, design e muito mais!',
    url: blogURL,
  },
  appLinks: {
    ios: {
      app_name: 'Lovelace Lines',
      url: blogURL,
    },
    web: {
      should_fallback: true,
      url: blogURL,
    },
    windows: {
      app_name: 'Lovelace Lines',
      url: blogURL,
    },
  }
};