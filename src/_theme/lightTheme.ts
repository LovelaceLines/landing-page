import { createTheme } from "@mui/material"
import { GlobalTheme } from "./globalTheme"
import { grey } from "@mui/material/colors"

export const LightTheme = createTheme(GlobalTheme, {
  palette: {
    mode: 'light',
    background: {
      paper: grey[50],
      default: grey[100],
    },
    text: {
      primary: grey[800],
      secondary: grey[50],
      disabled: grey[400],
    }
  }
})
