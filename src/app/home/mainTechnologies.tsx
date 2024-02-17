import { Box, Grid, Typography } from '@mui/material';
import { FaReact } from 'react-icons/fa';
import { SiCsharp, SiDotnet, SiMui, SiNextdotjs, SiTypescript } from 'react-icons/si';
import { TbReport } from 'react-icons/tb';

import { Card } from '@/_components';
import { PageContentBase } from '@/_templates';
import { colors } from '@/_theme';

export const MainTechnologies = () => {
  const CardGrid = () => (
    <Grid container alignItems='stretch' spacing={2}>
      <Grid item xs={12} sm={6} md={3}>
        <Card
          title='React'
          content='Poderosa biblioteca JavaScript para a construção de interfaces de usuário interativas e dinâmicas. Ela permite a crição de componentes reutilizáveis que são facilmente combináveis para formar interfaces complexas.'
          icon={<FaReact color={colors.primary} />}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Card
          title='TypeScript'
          content='Superset de JavaScript que adiciona recursos de tipagem estática ao JavaScript tradicional. Ele oferece aos desenvolvedores a capacidade de detectar e corrigir erros de código durante a fase de desenvolvimento, melhorando a manutenibilidade e a robustez do código.'
          icon={<SiTypescript color={colors.primary} />}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Card
          title='Material-UI'
          content='Biblioteca de componentes React que segue as diretrizes de design do Material Design, criado pelo Google. Ele fornece uma ampla gama de componentes prontos para uso, estilizados e personalizáveis de forma rápida e consistente.'
          icon={<SiMui color={colors.primary} />}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Card
          title='Next.js'
          content='Framework React que permite a construção de aplicativos da web com renderização do lado do servidor (SSR) e geração de páginas estáticas. Ele oferece suporte para roteamento, pré-renderização, otimização de desempenho e muito mais.'
          icon={<SiNextdotjs color={colors.primary} />}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Card
          title='.NET'
          content='Framework de desenvolvimento de software da Microsoft que oferece uma plataforma robusta e abrangente para a construção de aplicativos da web, móveis, de desktop e em nuvem.'
          icon={<SiDotnet color={colors.primary} />}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Card
          title='C#'
          content='Linguagem de programação orientada a objetos desenvolvida pela Microsoft. É amplamente utilizada para o desenvolvimento de aplicativos da web, móveis e de desktop no ecossistema .NET.'
          icon={<SiCsharp color={colors.primary} />}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Card
          title='FastReport'
          content='Ferramenta de geração de relatórios para o framework .NET. Ele permite aos desenvolvedores criar relatórios detalhados e visualmente atraentes com facilidade, oferecendo suporte para uma variedade de formatos de saída, incluindo PDF, Excel, HTML e muito mais.'
          icon={<TbReport color={colors.primary} />}
        />
      </Grid>
    </Grid>
  );

  return (
    <PageContentBase>
      <Box id='main-technologies' display='flex' flexDirection='column' gap={2}>
        <Typography variant='h4'>Principais tecnologias</Typography>

        <Typography>
          Estamos comprometidos em oferecer soluções tecnológicas de ponta que atendam às necessidades de nossos clientes e equipe de desenvolvimento. Aqui estão algumas das tecnologias que usamos para criar aplicativos da web modernos e escaláveis:
        </Typography>

        <CardGrid />
      </Box>
    </PageContentBase>
  );
};