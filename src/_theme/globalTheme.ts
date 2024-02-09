import { ThemeOptions, createTheme } from '@mui/material';
import { grey } from '@mui/material/colors';

import { colors } from './colors';

export const GlobalTheme = createTheme({
  palette: {
    primary: {
      main: colors.primary,
      contrastText: grey[50],
    },
    secondary: {
      main: colors.secondary,
      contrastText: grey[800],
    },
  },
} as ThemeOptions);
