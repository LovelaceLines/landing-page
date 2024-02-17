import { Box, Grid, Typography } from '@mui/material';

import { IProjectCardProps, ProjectCard } from '@/_components';
import { PageContentBase } from '@/_templates';
import Image from 'next/image';

const projectCardProps: IProjectCardProps[] = [
  {
    imagesPath: [
      'https://github.com/LovelaceLines/LNSF/blob/development/docs/screenshots/UI%20-%20Login.png?raw=true',
      'https://github.com/LovelaceLines/LNSF/blob/development/docs/screenshots/UI%20-%20Page.png?raw=true',
      'https://github.com/LovelaceLines/LNSF/blob/development/docs/screenshots/UI%20-%20Table.png?raw=true',
      'https://github.com/LovelaceLines/LNSF/blob/development/docs/screenshots/UI%20-%20Form.png?raw=true',
      'https://github.com/LovelaceLines/LNSF/blob/development/docs/screenshots/UI%20-%20Home.png?raw=true',
      'https://github.com/LovelaceLines/LNSF/blob/development/docs/screenshots/UI%20-%20About.png?raw=true',
      'https://github.com/LovelaceLines/LNSF/blob/development/docs/screenshots/Api%20-%20Swagger.png?raw=true',
    ],
    startDate: 'Ago 2023',
    endDate: 'Presente',
    title: 'LNSF',
    description: 'O sistema LNSF foi desenvolvido com um propósito fundamental: aprimorar a eficiência das operações realizadas pelos servidores dedicados ao Lar Nossa Senhora de Fátima. Este sistema visa a melhoria do processo de gestão dos pacientes e quartos, além de automatizar tarefas complexas, anteriormente realizadas de forma manual, como a emissão de relatórios',
    buttons: [
      { name: 'Versão Prod', link: 'https://github.com/LovelaceLines/LNSF/tree/development' },
      { name: 'Versão Dev', link: 'https://github.com/LovelaceLines/LNSF' },
    ]
  },
];

export const Projects = () => {
  return (
    <PageContentBase sx={{ position: 'relative' }}>
      <Image src='/memphis/bubble-1.svg' alt='Bubble' width={1} height={1} style={{ width: '-webkit-fill-available', height: 'auto', position: 'absolute', top: 300, left: 0, zIndex: -1 }} />
      <Box display='flex' flexDirection='column' rowGap={4}>
        <Typography variant='h4'>Nossas últimas <strong>soluções</strong></Typography>
        <Grid container spacing={6}>
          {projectCardProps.map((props, index) => (
            <Grid item xs={12} sm={6} md={6} key={index}>
              <ProjectCard key={index} {...props} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </PageContentBase>
  );
};