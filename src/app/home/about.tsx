import Image from 'next/image';
import { Box, Typography } from '@mui/material';

import { InstagramFeed } from '@/_components';
import { PageContentBase } from '@/_templates';

export const About = () => {
  const Texts = () => (
    <Box display='flex' flexDirection='column' gap={4}>
      <Typography variant="h4">Quem somos?</Typography>
      <Box display='flex' flexDirection='column' gap={1}>
        <Typography align='justify'>
          Tudo começou com um desafio simples na jornada do Lovelace Lines: reunir jovens desenvolvedores para recriar um aplicativo existente, tornando-o numa experiência de aprendizado e crescimento. Esse pequeno desafio logo se transformou em algo mais significativo: a chance de resolver problemas reais e causar um impacto.
        </Typography>
        <Typography align='justify'>
          Passamos meses não apenas escrevendo códigos, mas realmente aprendendo a arte da engenharia de software. Não estávamos apenas tentando criar um programa que funcionasse, mas sim, desenvolver um software genuíno, honrando a parte &quot;soft&quot;.
        </Typography>
        <Typography align='justify'>
          Hoje, somos um grupo de desenvolvedores de software, com foco principalmente em projetos sem fins lucrativos e open source. Nosso paixão está em tecnologias como React e .Net, e diversas bibliotecas que fazem parte desse ecossistema. No momento, estamos todos de mãos dadas no desenvolvimento do LNSF.
        </Typography>
        <Typography align='justify'>
          Em relação ao futuro, nós do Lovelace Lines temos o objetivo de alcançar e envolver outros desenvolvedores através de plataformas como Instagram, LinkedIn e Youtube. Queremos compartilhar o que sabemos, aprender com a comunidade de desenvolvimento e, ao mesmo tempo, expandir nossa equipe, atraindo mais talentos para fortalecer nosso projeto e aumentar o impacto positivo do nosso trabalho. Estamos determinados a construir algo duradouro e valioso.
        </Typography>
      </Box>
    </Box>
  );

  return (
    <PageContentBase sx={{ paddingBottom: 0 }}>
      <Box id="sobre" display='flex' justifyContent='space-between' alignItems='center' gap={2}>
        <Texts />
        <Box sx={{ display: { xs: 'none', md: 'block' } }}>
          <Image src='https://images.unsplash.com/photo-1618477247222-acbdb0e159b3?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt="Imagem ilustrativa" width={768} height={1024} style={{ width: '500px', height: 'auto', objectFit: 'cover' }} />
        </Box>
      </Box>
      <InstagramFeed />
    </PageContentBase>
  );
};