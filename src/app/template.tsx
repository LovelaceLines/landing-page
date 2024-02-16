import { MenuAppBar, ScrollToUp } from '@/_components';

export default function Template({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <MenuAppBar />
      {children}
      <ScrollToUp />
    </>
  );
}