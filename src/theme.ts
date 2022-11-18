import { createTheme, Theme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

declare module '@mui/styles/defaultTheme' {
  interface DefaultTheme extends Theme {}
}

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#634CEE',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;
