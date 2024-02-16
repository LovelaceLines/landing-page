import { metadata as baseMetadata } from './document';

export const metadata = baseMetadata;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      {children}
    </>
  );
}
