import Image from 'next/image';
import { Box, Grid, Typography } from '@mui/material';
import { FaTools } from 'react-icons/fa';
import { FaHandHoldingDollar } from 'react-icons/fa6';
import { GiFlexibleLamp } from 'react-icons/gi';
import { VscWorkspaceTrusted } from 'react-icons/vsc';

import { Card } from '@/_components';
import { PageContentBase } from '@/_templates';
import { colors } from '@/_theme';

export const AboutOpenSource = () => {
  const CardGrid = () => (
    <Grid container alignItems='stretch' spacing={2}>
      <Grid item xs={12} sm={6} md={3}>
        <Card
          title='Transparência e confiança'
          content='Acesso ao código-fonte do seu sistema proporciona total visibilidade sobre seu funcionamento. Isso resulta em maior transparência e confiança na segurança e desempenho do seu software.'
          icon={<VscWorkspaceTrusted color={colors.primary} />}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Card
          title='Customização e flexibilidade'
          content='O código aberto permite que o seu sistema seja adaptado às necessidades exclusivas da sua empresa. Se você precisar de ajustes específicos ou funcionalidades personalizadas, isso pode ser facilmente realizado.'
          icon={<GiFlexibleLamp color={colors.primary} />}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Card
          title='Qualidade e Suporte'
          content='A natureza colaborativa do desenvolvimento open source garante que o seu software seja continuamente aprimorado pela comunidade de desenvolvedores. Isso significa uma qualidade superior e suporte constante, com atualizações regulares e correções de bugs.'
          icon={<FaTools color={colors.primary} />}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Card
          title='Custos reduzidos'
          content='Ao utilizar software open source, você não apenas adquire o produto, mas também se beneficia de uma comunidade ativa e de um ecossistema compartilhado. Isso pode resultar em custos reduzidos a longo prazo, sem comprometer a qualidade ou a segurança.'
          icon={<FaHandHoldingDollar color={colors.primary} />}
        />
      </Grid>
    </Grid>
  );

  return (
    <PageContentBase sx={{ position: 'relative' }}>
      <Image src='memphis/horizontal-line.svg' alt='Linha horizontal' width={1} height={1} style={{ width: '-webkit-fill-available', height: 'auto', position: 'absolute', left: 0, zIndex: -1, opacity: 0.5 }} />
      <Box id='open-source' display='flex' flexDirection='column' gap={2}>
        <Typography variant='h4'>O que é software open source?</Typography>

        <Typography>O software open source é uma abordagem de desenvolvimento que promove a transparência, colaboração e inovação. Em poucas palavras, isso significa que o código-fonte de nossos produtos é disponibilizado publicamente para que todos possam ver, modificar e distribuir. Essa abertura oferece várias vantagens para você, para a comunidade de desenvolvedores e para nós como provedores de soluções tecnológicas.</Typography>
        <Typography>Benefícios para você, nosso cliente:</Typography>

        <CardGrid />
      </Box>
    </PageContentBase>
  );
};