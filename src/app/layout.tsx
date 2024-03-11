import Providers from './providers';

import { metadata as baseMetadata } from './document';
import { MenuAppBar, ScrollToUp } from '@/_components';

export const metadata = baseMetadata;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang='pt-br'>
      <body>
        <Providers>
          <MenuAppBar />
          {children}
          <ScrollToUp />
        </Providers>
      </body>
    </html>
  );
}
