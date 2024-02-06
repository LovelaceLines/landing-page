import { ThemeOptions, createTheme } from '@mui/material';
import { pink, amber, grey } from '@mui/material/colors';

export const GlobalTheme = createTheme({
  palette: {
    primary: {
      main: pink.A400,
      contrastText: grey[50],
    },
    secondary: {
      main: amber[500],
      contrastText: grey[800],
    },
  },
} as ThemeOptions);
