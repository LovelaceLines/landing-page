'use client';

import { createContext } from 'react';
import { Box, CssBaseline, ThemeProvider } from '@mui/material';
import { DarkTheme } from './darkTheme';
import { LightTheme } from './lightTheme';
import { useLocalStorage } from '@/_hooks';

interface IThemeContextProps {
  themeName: 'light' | 'dark';
  toggleTheme: () => void;
}

export const ThemeContext = createContext({} as IThemeContextProps);

export const AppThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [themeName, setThemeName] = useLocalStorage('theme', 'light');
  const toggleTheme = () => setThemeName(themeName === 'light' ? 'dark' : 'light');

  const theme = themeName === 'light' ? LightTheme : DarkTheme;

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline enableColorScheme />
      <ThemeContext.Provider value={{ themeName, toggleTheme }}>
        <Box sx={{ maxHeight: '100vh', overflowY: 'auto', '::-webkit-scrollbar': { display: 'none' } }}>
          {children}
        </Box>
      </ThemeContext.Provider>
    </ThemeProvider>
  );
};