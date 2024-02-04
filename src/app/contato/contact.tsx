'use client'

import { useState } from 'react';
import { Box, Container, IconButton, Modal, Theme, Typography, useMediaQuery } from '@mui/material';
import { WhatsApp, Instagram, Email, LinkedIn, GitHub, Pix } from '@mui/icons-material';
import { ModalBase } from '../../_templates/modalBase';
import Image from 'next/image';
import { PageContentBase } from '../../_templates/pageContentBase';

export const Contact = () => {
  const mdDown = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'));
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <PageContentBase>
      <Box display='flex' flexDirection='column' gap={1}>
        <Box>
          <Typography variant="h4">Contato</Typography>
          <br />
          <Typography>Deseja saber mais sobre nossos serviços ou tem alguma dúvida?</Typography>
          <br />
          <Typography>Na Lovelace Lines, trabalhamos em conjunto com você para criar soluções personalizadas e eficientes, visando sempre superar suas expectativas. Sua participação é fundamental em cada fase do projeto, pois acreditamos no poder da colaboração para alcançar o sucesso.</Typography>
          <br />
          <Typography>Ou talvez você esteja interessado em se juntar à nossa equipe?</Typography>
          <br />
          <Typography>Junte-se à nossa comunidade acolhedora de desenvolvedores, onde tanto novatos quanto veteranos são bem-vindos! Com expertise em tecnologias como React e .Net, oferecemos um ambiente amigável para aprender, crescer e contribuir. Na Lovelace Lines, acreditamos na democratização do conhecimento e no apoio mútuo. Venha se juntar a nós para aprimorar suas habilidades e enfrentar novos desafios - estamos ansiosos para recebê-lo!</Typography>
        </Box>
        <Box>
          <IconButton href='https://wa.me/558892465315' target='_blank' rel='noreferrer' size='large'>
            <WhatsApp color='primary' fontSize='large' />
          </IconButton>
          <IconButton href='https://instagram.com/lovelacelines' target='_blank' rel='noreferrer' size='large'>
            <Instagram color='primary' fontSize='large' />
          </IconButton>
          <IconButton href='mailto:lovelacelines@gmail.com' target='_blank' rel='noreferrer' size='large'>
            <Email color='primary' fontSize='large' />
          </IconButton>
          <IconButton href='https://www.linkedin.com/in/lovelacelines/' target='_blank' rel='noreferrer' size='large'>
            <LinkedIn color='primary' fontSize='large' />
          </IconButton>
          <IconButton href='https://github.com/LovelaceLines' target='_blank' rel='noreferrer' size='large'>
            <GitHub color='primary' fontSize='large' />
          </IconButton>
        </Box>
        <Box>
          <Typography>Se você também adora soluções modernas e quer dar uma forcinha na nossa missão, que tal considerar fazer uma doação? Saiba que cada contribuição, por menor que seja, faz uma grande diferença! Ela nos ajuda a manter nossos projetos e iniciativas em pleno vapor, garantindo que continuemos a oferecer acesso gratuito a soluções valiosas para todos.</Typography>
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
      </Box>
    </PageContentBase>
  );
};