import { createTheme } from '@mui/material';
import { blueGrey, grey } from '@mui/material/colors';
import { GlobalTheme } from "./globalTheme"

export const DarkTheme = createTheme(GlobalTheme, {
  palette: {
    mode: 'dark',
    background: {
      paper: grey[900],
      default: blueGrey[900],
    },
    text: {
      primary: grey[50],
      secondary: grey[800],
      disabled: grey[400],
    }
  }
})
