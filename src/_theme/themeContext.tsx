'use client'

import { createContext, useContext, useEffect, useState } from 'react';
import { CssBaseline } from '@mui/material';
import { DarkTheme } from '@/_theme/darkTheme';
import { LightTheme } from '@/_theme/lightTheme';

interface IThemeContextProps {
  themeName: 'light' | 'dark';
  toggleTheme: () => void;
}

const ThemeContext = createContext({} as IThemeContextProps);

export const useTheme = () => useContext(ThemeContext);

export const AppThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [themeName, setThemeName] = useState<'light' | 'dark'>('light');

  const toggleTheme = () => {
    setThemeName(themeName === 'light' ? 'dark' : 'light');
    localStorage.setItem('theme', themeName === 'light' ? 'dark' : 'light');
  };

  const theme = themeName === 'light' ? LightTheme : DarkTheme;

  useEffect(() => {
    const localTheme = localStorage.getItem('theme') as 'light' | 'dark';
    if (localTheme) setThemeName(localTheme);
  }, []);

  return (
    <ThemeContext.Provider value={{ themeName, toggleTheme }}>
      <CssBaseline enableColorScheme />
      {children}
    </ThemeContext.Provider>
  );
};