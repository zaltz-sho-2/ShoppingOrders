import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#007BFF', // Custom primary color
    },
    background: {
      default: '#f5f5f5', // Light background for the app
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
    h5: {
      fontWeight: 700,
    },
  },
  shape: {
    borderRadius: 12,
  },
});

export default theme;
