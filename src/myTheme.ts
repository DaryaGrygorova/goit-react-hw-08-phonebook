import { createTheme } from '@mui/material';

export const myTheme = createTheme({
  palette: {
    primary: { main: '#b49ef5' },
    secondary: { main: '#9376ed' },
    common: { black: '#000', white: '#fff' },
    // text: '#30144D',
    text: {
      primary: '#4B2D83',
      secondary: '#a5afec',
      disabled: '#f6f6f6',
    },
    background: { default: 'rgb(255,255,255,0.6)', paper: '#d2c5f9' },
    // accent: '#b49ef5',
    // header: '#d2c5f9',
    // avatar: '#a5afec',
    // muted: '#f6f6f6',
  },

  spacing: [0, 2, 5, 10, 15, 25, 64, 128, 256],
  typography: {
    allVariants: {
      fontSize: 16,
      fontFamily: 'system-ui, sans-serif',
      fontWeight: 400,
      lineHeight: 1.5,
    },
  },
});
