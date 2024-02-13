'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Box, IconButton, Menu, MenuItem } from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';

import { navLinks } from '@/_data';

export const MenuHamburger = () => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) =>
    setAnchorElNav(event.currentTarget);

  const handleCloseNavMenu = () => setAnchorElNav(null);

  const NavigationLinks = () => (
    <Box display='flex' flexDirection='column' >
      {navLinks.filter(link => link.visible === 'always' || link.visible === 'mobile').map(link =>
        <Link key={link.href} href={link.href} style={{ textDecoration: 'none', color: 'inherit' }}>
          <MenuItem onClick={handleCloseNavMenu}>{link.text}</MenuItem>
        </Link>
      )}
    </Box>
  );

  return (
    <>
      <IconButton onClick={handleOpenNavMenu} size='large' color='inherit' >
        <MenuIcon />
      </IconButton>
      <Menu
        anchorEl={anchorElNav}
        open={Boolean(anchorElNav)}
        onClose={handleCloseNavMenu}>
        <NavigationLinks />
      </Menu>
    </>
  );
};