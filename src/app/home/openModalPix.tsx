'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Box, IconButton, Typography } from '@mui/material';
import { Pix } from '@mui/icons-material';

import { ModalBase } from '@/_templates';

export const OpenModalPix = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box>
      <IconButton onClick={handleOpen} size='large'>
        <Pix color='primary' fontSize='large' />
      </IconButton>
      <ModalBase open={open} onClose={handleClose}>
        <Typography variant='h6'>Doações</Typography>
        <br />
        <Image src='/qr-code-pix.jpeg' alt='QR Code' width={200} height={200} />
        <br />
        <Typography>Chave Pix: +55 (88) 99246-5315</Typography>
      </ModalBase>
    </Box>
  );
};