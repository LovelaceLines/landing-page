import Link from 'next/link';
import { Box, IconButton, Typography } from '@mui/material';
import { WhatsApp, Instagram, Email, LinkedIn, GitHub } from '@mui/icons-material';

import env from '@/env';
import { OpenModalPix } from './openModalPix';
import { PageContentBase } from '@/_templates';

export const Contact = () => {
  const LinkMidia = () => (
    <Box>
      <Link href={`https://wa.me/${env.WHATSAPP_NUMBER}`} target='_blank' rel='noreferrer' style={{ color: 'inherit' }}>
        <IconButton size='large'>
          <WhatsApp color='primary' fontSize='large' />
        </IconButton>
      </Link>
      <Link href={env.INSTAGRAM_PROFILE} target='_blank' rel='noreferrer' style={{ color: 'inherit' }}>
        <IconButton size='large'>
          <Instagram color='primary' fontSize='large' />
        </IconButton>
      </Link>
      <Link href={`mailto:${env.EMAIL}`} target='_blank' rel='noreferrer' style={{ color: 'inherit' }}>
        <IconButton size='large'>
          <Email color='primary' fontSize='large' />
        </IconButton>
      </Link>
      <Link href={env.LINKEDIN_PROFILE} target='_blank' rel='noreferrer' style={{ color: 'inherit' }}>
        <IconButton size='large'>
          <LinkedIn color='primary' fontSize='large' />
        </IconButton>
      </Link>
      <Link href={env.GITHUB_PROFILE} target='_blank' rel='noreferrer' style={{ color: 'inherit' }}>
        <IconButton size='large'>
          <GitHub color='primary' fontSize='large' />
        </IconButton>
      </Link>
    </Box>
  );

  return (
    <PageContentBase id='contato' sx={{ bgcolor: 'background.paper' }}>
      <Typography variant="h4">Contato</Typography>
      <br />
      <Box display='flex' flexDirection='row' gap={2}>
        <Box display='flex' flex={1} flexDirection='column' gap={1}>
          <Typography>Deseja saber mais sobre nossos serviços ou tem alguma dúvida? Ou talvez você esteja interessado em se juntar à nossa equipe? Independente do motivo, estamos sempre prontos para ouvir você! Entre em contato conosco através de nossas redes sociais ou envie um e-mail!</Typography>
          <LinkMidia />
        </Box>
        <Box display='flex' flex={1} flexDirection='column' gap={1}>
          <Typography>Se você também adora soluções modernas e quer dar uma forcinha na nossa missão, que tal considerar fazer uma doação? Saiba que cada contribuição, por menor que seja, faz uma grande diferença! Ela nos ajuda a manter nossos projetos e iniciativas em pleno vapor, garantindo que continuemos a oferecer acesso gratuito a soluções valiosas para todos.</Typography>
          <OpenModalPix />
        </Box>
      </Box>
    </PageContentBase >
  );
};