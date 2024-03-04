'use client';

import { createTheme, responsiveFontSizes } from '@mui/material/styles';

let theme = createTheme({
  palette: {
    primary: {
      // main: '#24b5fc',
      main: '#0557f9',
      contrastText: '#fff',
    },
    secondary: {
      main: '#e8ff8c',
    },
    background: {
      default: '#eaeef2',
      // light:'#fff',
    },
  },
  typography: {
    fontFamily: ['Colfax', 'Open Sans', 'sans-serif', 'Roboto'].join(','),
  },
});

theme = responsiveFontSizes(theme);

export default theme;
