import { Box, Paper, Typography } from '@mui/material';

export const Card = ({ title, content, icon }: { title: string, content: string, icon?: React.ReactNode }) => {
  return (
    <Box
      component={Paper}
      elevation={2}
      display='flex'
      flexDirection='column'
      gap={1}
      padding={2}
      borderRadius={2}
      height='100%'
    >
      <Box display='flex' alignItems='center' gap={1}>
        {icon}
        <Typography variant='subtitle1'>{title}</Typography>
      </Box>
      <Typography variant='body2'>{content}</Typography>
    </Box>
  );
};