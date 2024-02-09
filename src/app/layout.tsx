import type { Metadata } from 'next';
import Providers from './providers';
import env from '@/env';

export const metadata: Metadata = {
  metadataBase: new URL('https://loveacelines.com'),
  title: {
    default: 'Lovelace Lines',
    template: '%s | Lovelace Lines',
    absolute: 'Bem vindo | Lovelace Lines'
  },
  description: 'Conheça a Lovelace Lines e descubra como podemos lhe ajudar a alcançar seus objetivos!',
  applicationName: 'Lovelace Lines',
  authors: [{ name: 'Lovelace Lines', url: env.INSTAGRAM_PROFILE }],
  keywords: ['Lovelace Lines', 'Desenvolvimento de Software', 'Contratação', 'DotNet', 'React', 'NextJS', 'NodeJS', 'C#', 'CSharp',
    'JavaScript', 'TypeScript', 'HTML', 'CSS', 'Sass', 'SCSS', 'MaterialUI', 'MUI', 'Figma', 'UI/UX', 'User Interface', 'User Experience',
    'Design', 'Frontend', 'Backend', 'Fullstack', 'Fullstack Developer', 'Blog', 'Artigos', 'Tutoriais', 'Dicas', 'Truques', 'Código'],
  creator: 'George Maia',
  publisher: 'George Maia',
  robots: 'index, follow',
  alternates: {
    canonical: 'https://lovelacelines.com',
  },
  manifest: '/metadata/manifest.json',
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    title: 'Lovelace Lines',
    description: 'Conheça a Lovelace Lines e descubra como podemos lhe ajudar a alcançar seus objetivos!',
    images: [
      {
        url: '/metadata/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Lovelace Lines',
      },
    ],
  },
  twitter: {
    site: '@lovelacelines',
    creator: '@srma.ia',
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

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang='pt-br'>
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
