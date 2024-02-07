import { Box, Link, Typography } from '@mui/material';
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot } from '@mui/lab';

import { PageContentBase } from '@/_templates';

const BackgroundImage = 'https://images.unsplash.com/photo-1516541196182-6bdb0516ed27?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

const backgroundStyles = {
  backgroundImage: `url(${BackgroundImage})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundAttachment: 'fixed',
  minHeight: '100vh',
  flex: '1',
  display: 'flex',
  alignItems: 'center',
};

export const Process = () => {
  const AppTimeLine = () => (
    <Timeline position="alternate-reverse" sx={{ width: '100%', margin: 0, padding: 0 }}>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot variant="outlined" color='primary' />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent color='secondary.contrastText'>Reunião</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot variant="outlined" color='primary' />
          <TimelineConnector color='primary' />
        </TimelineSeparator>
        <TimelineContent color='secondary.contrastText'>Prototipação</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot variant="outlined" color='primary' />
          <TimelineConnector color='primary' />
        </TimelineSeparator>
        <TimelineContent color='secondary.contrastText'>Aprovação</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot variant="outlined" color='primary' />
          <TimelineConnector color='primary' />
        </TimelineSeparator>
        <TimelineContent color='secondary.contrastText'>Desenvolvimento</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot variant="outlined" color='primary' />
          <TimelineConnector color='primary' />
        </TimelineSeparator>
        <TimelineContent color='secondary.contrastText'>Testes</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot variant="outlined" color='primary' />
        </TimelineSeparator>
        <TimelineContent color='secondary.contrastText'>Entrega</TimelineContent>
      </TimelineItem>
    </Timeline>
  );

  const Texts = () => (
    <>
      <Typography variant='h4' color='secondary.contrastText'>Nosso processo de desenvolvimento</Typography>
      <Typography align='justify' color='secondary.contrastText'>Conosco, durante todo o processo de desenvolvimento, o <strong>cliente é um pilar essencial</strong> para o resultado correto do produto, participando das reuniões e aprovando os protótipos. Desse modo, garantimos a solução que ele <strong>necessita</strong>!</Typography>
      <Typography align='justify' color='secondary.contrastText'>Além disso, para evitar longos períodos de espera, entregamos o produto por partes (incrementos) capazes de <strong>resolver</strong> um problema enquanto desenvolvemos evoluções e novas funcionalidades para aprimorar a experiencia do usuário.</Typography>
      <Typography align='justify' color='secondary.contrastText'>Gostou do nosso processo? Que tal <Link href='/contato' color='primary' underline='hover'>entrar em contato conosco</Link> e conhecer mais sobre o que podemos fazer por você?</Typography>
    </>
  );

  return (
    <PageContentBase sx={backgroundStyles}>
      <Box display='flex' sx={{ flexDirection: { xs: 'column', md: 'row' } }} alignItems='center' justifyContent='space-between' gap={2}>
        <Box display='flex' flexDirection='column' gap={2}>
          <Texts />
        </Box>
        <AppTimeLine />
      </Box>
    </PageContentBase>
  );
};