import { useLayoutEffect, useState } from 'react';

export const useTheme = () => {
  const isDarkTheme = window?.matchMedia('(prefers-color-scheme: dark)').matches;
  const defaultTheme = isDarkTheme ? 'dark' : 'light';
  const [theme, setTheme] = useState(localStorage.getItem('app-theme') || defaultTheme);

  useLayoutEffect(() => {
    localStorage.setItem('app-theme', theme);
  }, [theme])

  return { theme, setTheme };
};
