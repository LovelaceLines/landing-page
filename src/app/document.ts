import type { Metadata } from 'next';

import env from '@/env';
import { openGraph, title } from '@/_shared';

export const metadata: Metadata = {
  metadataBase: new URL(env.APP_URL),
  title: {
    ...title,
    absolute: 'Bem vindo | Lovelace Lines'
  },
  description: 'Conheça a Lovelace Lines e descubra como podemos lhe ajudar a alcançar seus objetivos!',
  applicationName: 'Lovelace Lines',
  authors: [{ name: 'Lovelace Lines', url: env.INSTAGRAM_PROFILE }],
  keywords: ['Lovelace Lines', 'Desenvolvimento de Software', 'Contratação', 'DotNet', 'React', 'NextJS', 'NodeJS', 'C#', 'CSharp',
    'JavaScript', 'TypeScript', 'HTML', 'CSS', 'Sass', 'SCSS', 'MaterialUI', 'MUI', 'Figma', 'UI/UX', 'User Interface', 'User Experience',
    'Design', 'Frontend', 'Backend', 'Fullstack', 'Fullstack Developer', 'Blog', 'Artigos', 'Tutoriais', 'Dicas', 'Truques', 'Código'],
  creator: 'Lovelace Lines',
  publisher: 'Lovelace Lines',
  robots: 'index, follow',
  alternates: {
    canonical: env.APP_URL,
  },
  manifest: '/metadata/manifest.json',
  openGraph: {
    ...openGraph
  },
  twitter: {
    site: '@lovelacelines',
    creator: '@lovelacelines',
    card: 'summary_large_image',
  },
  appleWebApp: {
    statusBarStyle: 'black-translucent',
    capable: true,
    title: 'Lovelace Lines',
  },
  abstract: 'Conheça a Lovelace Lines e descubra como podemos lhe ajudar a alcançar seus objetivos!',
  category: 'Desenvolvimento de Software',
};