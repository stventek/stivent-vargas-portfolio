import { Montserrat } from 'next/font/google';
import { createTheme } from '@mui/material/styles';
import { amber, deepOrange, grey, red } from '@mui/material/colors';
import { PaletteMode, PaletteOptions } from '@mui/material';

export const roboto = Montserrat({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  fallback: ['Helvetica', 'Arial', 'sans-serif'],
})

const getDesignTokens = (mode: PaletteMode) => ({
  palette: {
    mode,
    ...(mode === 'light'
      ? {
          // palette values for light mode
          primary: amber,
          divider: amber[200],
          text: {
            primary: grey[900],
            secondary: grey[800],
          },
        }
      : {
          // palette values for dark mode
          primary: {
            main: '#64ffda',
            light: '#112240'
          },
          divider: '#8892b0',
          background: {
            default: '#0a192f',
            paper: '#112240',
          },
          text: {
            primary: '#e6f1ff',
            secondary: '#ccd6f6',
          },
        }),
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
})

const theme = createTheme(getDesignTokens('dark'))
// Create a theme instance.
/* const theme = createTheme({
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
});
 */
export default theme;
