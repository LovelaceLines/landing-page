'use client'

import { Box, Card, CardActions, CardContent, CardMedia, IconButton, Link, MobileStepper, Paper, Stack, Typography } from '@mui/material';
import { KeyboardArrowRight, KeyboardArrowLeft } from '@mui/icons-material';
import { useState } from 'react';
import Image from 'next/image';

export interface IProjectCardProps {
  imagesPath: string[];
  startDate: string;
  endDate: string;
  title: string;
  description: string;
  buttons: { name: string; link: string }[];
}

const ImageStyle = {
  width: '100%',
  height: '100%',
  aspectRatio: '16/9'
};

export const ProjectCard = (props: IProjectCardProps) => {
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = props.imagesPath.length;

  const handleNext = () => {
    setActiveStep((step) => step === maxSteps - 1 ? step = 0 : step + 1);
  };

  const handleBack = () => {
    setActiveStep((step) => step === 0 ? step = maxSteps - 1 : step - 1);
  };

  const Carousel = () => (
    <CardMedia sx={{ position: 'relative' }}>
      <Image src={props.imagesPath[activeStep]} alt={`Step ${activeStep}`} width={1024} height={768} style={ImageStyle} />
      <MobileStepper variant='dots' steps={maxSteps} position="static" activeStep={activeStep} sx={{ background: 'transparent' }}
        nextButton={
          <IconButton size="small" onClick={handleNext}>
            <KeyboardArrowRight />
          </IconButton>
        }
        backButton={
          <IconButton size="small" onClick={handleBack}>
            <KeyboardArrowLeft />
          </IconButton>
        }
      />
    </CardMedia>
  );

  const Details = () => (
    <Box>
      <Typography variant='caption'>{props.startDate} • {props.endDate}</Typography>
      <Typography variant="h6">{props.title}</Typography>
      <Typography variant='body2'>{props.description}</Typography>
    </Box>
  );

  const Buttons = () => (
    <Stack direction='row' spacing={2} flexWrap='wrap' useFlexGap>
      {props.buttons.map((button, index) => (
        <Link key={index} href={button.link} target='_blank' rel="noopener">{button.name}</Link>
      ))}
    </Stack>
  );

  return (
    <Card>
      <Paper>
        <Carousel />
        <CardContent>
          <Stack spacing={2}>
            <Details />
            <Buttons />
          </Stack>
        </CardContent>
        <CardActions></CardActions>
      </Paper>
    </Card>
  );
};