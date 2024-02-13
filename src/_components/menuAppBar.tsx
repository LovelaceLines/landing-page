import Link from 'next/link';
import Image from 'next/image';
import { AppBar, Box, Button, Container, IconButton, Toolbar } from '@mui/material';
import { GitHub, LinkedIn, Instagram, Search } from '@mui/icons-material';

import { MenuHamburger, ToggleThemeIcon } from '@/_components';
import { navLinks } from '@/_data';
import env from '@/env';

const socialLinks = [
  { href: env.LINKEDIN_PROFILE, icon: <LinkedIn /> },
  { href: env.INSTAGRAM_PROFILE, icon: <Instagram /> },
  { href: env.GITHUB_PROFILE, icon: <GitHub /> },
];

export const MenuAppBar = () => {
  const Logo = () => (
    <Link href='/home' style={{ display: 'flex', alignItems: 'center' }}>
      <Image src='/lovelace-lines-white.svg' alt='Logo' width={30} height={30} />
    </Link>
  );

  const NavigationLinks = () => (
    <>
      {navLinks.filter(link => link.visible === 'always' || link.visible === 'desktop').map(link =>
        <Link key={link.href} href={link.href} style={{ textDecoration: 'none', color: 'inherit' }}>
          <Button color='inherit'>{link.text}</Button>
        </Link>
      )}
    </>
  );

  const SearchPost = () => (
    <Link href='/blog/search' style={{ textDecoration: 'none', color: 'inherit' }}>
      <IconButton color='inherit'><Search /></IconButton>
    </Link>
  );

  const LinkSocialMedia = () => (
    <>
      {socialLinks.map(link => (
        <Link key={link.href} href={link.href} target='_blank' rel='noreferrer' style={{ textDecoration: 'none', color: 'inherit' }}>
          <IconButton color='inherit'>{link.icon}</IconButton>
        </Link>
      ))}
    </>
  );

  return (
    <AppBar position='static'>
      <Container>
        <Toolbar disableGutters>
          <Box display='flex' flex={1} alignItems='center' flexDirection='row' justifyContent='space-between'>
            <Box sx={{ display: { xs: 'block', sm: 'none' } }}>
              <MenuHamburger />
            </Box>

            <Box display='flex' gap={2}>
              <Logo />
              <Box sx={{ display: { xs: 'none', sm: 'flex' } }}>
                <NavigationLinks />
              </Box>
            </Box>

            <Box display='flex' flexDirection='row'>
              <ToggleThemeIcon />
              <Box sx={{ display: { xs: 'none', sm: 'flex' } }}>
                <SearchPost />
                <LinkSocialMedia />
              </Box>
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};