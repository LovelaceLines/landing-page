import { Box, Button, Stack, Typography } from '@mui/material';
import { KeyboardArrowDown, KeyboardArrowRight } from '@mui/icons-material';

import { PageContentBase } from '@/_templates';

const backgroundStyles = {
  backgroundImage: `url(https://images.unsplash.com/photo-1555099962-4199c345e5dd?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundAttachment: 'fixed',
  height: '100vh',
  flex: '1',
  display: 'flex',
  alignItems: 'center',
};

export const Welcome = () => {
  return (
    <PageContentBase sx={backgroundStyles}>
      <Stack alignItems='flex-start' spacing={4}>
        <Box sx={{ width: { xs: '100%', sm: '50%' } }}>
          <Typography color='primary.contrastText' variant='h4'>
            Conheça a Lovelace Lines e descubra como podemos lhe ajudar a alcançar seus objetivos.
          </Typography>
          <Typography color='primary.contrastText' variant='subtitle1'>
            Veja como uma comunidade de apaixonados por tecnologia cresceu para se tornar uma referência em desenvolvimento de software.
          </Typography>
        </Box>
        <Box display='flex' gap={2} sx={{ flexDirection: { xs: 'column-reverse', sm: 'row' } }}>
          <Button variant='contained' endIcon={<KeyboardArrowDown />} href='#sobre'>
            Veja mais
          </Button>
          <Button variant='contained' endIcon={<KeyboardArrowRight />} href='/blog'>
            Conteúdo em destaque
          </Button>
        </Box>
      </Stack>
    </PageContentBase>
  );
};