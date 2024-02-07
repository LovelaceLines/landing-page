'use client';

import { useContext, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { AppBar, Box, Container, IconButton, Menu, MenuItem, Theme, Toolbar, useMediaQuery } from '@mui/material';
import { Brightness4, Brightness5, GitHub, LinkedIn, Instagram, Menu as MenuIcon } from '@mui/icons-material';
import { ThemeContext } from '@/_theme';

const navLinks = [
  { to: '/home', text: 'Início' },
  { to: '/home#sobre', text: 'Sobre' },
  { to: '/contato', text: 'Contato' },
  { to: '/blog', text: 'Blog' },
];

const socialLinks = [
  { url: 'https://www.linkedin.com/in/lovelacelines/', icon: <LinkedIn /> },
  { url: 'https://www.instagram.com/lovelacelines/', icon: <Instagram /> },
  { url: 'https://github.com/LovelaceLines', icon: <GitHub /> },
];

export const MenuAppBar = () => {
  const smDown = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));
  const { themeName, toggleTheme } = useContext(ThemeContext);

  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) =>
    setAnchorElNav(event.currentTarget);

  const handleCloseNavMenu = () => setAnchorElNav(null);

  const Logo = () => (
    <Link href='/home'>
      <Box display='flex' alignItems='center'>
        <Image src='/lovelace-lines-white.svg' alt='Logo' width={30} height={30} />
      </Box>
    </Link>
  );

  const NavigationLinks = () => (
    <Box display='flex' flexDirection={smDown ? 'column' : 'row'} color='inherit'>
      {navLinks.map(link =>
        <Link key={link.to} href={link.to} style={{ textDecoration: 'none', color: 'inherit' }}>
          <MenuItem onClick={handleCloseNavMenu}>{link.text}</MenuItem>
        </Link>
      )}
    </Box>
  );

  const SideIcons = () => (
    <Box>
      <IconButton onClick={toggleTheme} color='inherit'>
        {themeName === 'light' ? <Brightness4 /> : <Brightness5 />}
      </IconButton>
      {smDown ? null : socialLinks.map((link) => (
        <IconButton key={link.url} color='inherit' href={link.url} target='_blank' rel='noreferrer'>
          {link.icon}
        </IconButton>
      ))}
    </Box>
  );

  const HamburgerMenu = () => (
    <>
      <IconButton onClick={handleOpenNavMenu} size='large' color='inherit' >
        <MenuIcon />
      </IconButton>
      <Menu
        anchorEl={anchorElNav}
        open={Boolean(anchorElNav)}
        onClose={handleCloseNavMenu}
        keepMounted
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}>
        <NavigationLinks />
      </Menu>
    </>
  );

  return (
    <AppBar position='static'>
      <Container>
        <Toolbar disableGutters>
          <Box display='flex' flex={1} alignItems='center' flexDirection='row' justifyContent='space-between'>
            {smDown && <HamburgerMenu />}
            <Box display='flex' gap={2}>
              <Logo />
              {!smDown && <NavigationLinks />}
            </Box>
            <SideIcons />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};