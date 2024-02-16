import { DefaultTemplateString } from 'next/dist/lib/metadata/types/metadata-types';
import { OpenGraph } from 'next/dist/lib/metadata/types/opengraph-types';

import env from '@/env';

export const title: DefaultTemplateString = {
  default: 'Lovelace Lines',
  template: '%s | Lovelace Lines',
};

export const openGraph: OpenGraph = {
  type: 'website',
  locale: 'pt_BR',
  title: 'Lovelace Lines',
  description: 'Conheça a Lovelace Lines e descubra como podemos lhe ajudar a alcançar seus objetivos!',
  images: [
    {
      url: '/metadata/og-image.jpg',
      width: 1920,
      height: 1080,
      alt: 'Lovelace Lines',
    },
  ],
  url: env.APP_URL,
  phoneNumbers: [env.WHATSAPP_NUMBER],
  siteName: 'Lovelace Lines',
};