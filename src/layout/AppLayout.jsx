import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { ThemeProvider } from '@emotion/react';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#171d8d',
      contrastText: '#121212'
    },
    secondary: {
      main: '#005bff',
    },
    third: {
      main: '#00e8da',
    },
    text: {
        primary: '#121212', 
        secondary: '#fff', 
        third: '#00e8da',
},
components: {
    MuiTypography: {
      defaultProps: {
        variantMapping: {
          h1: 'h2',
          h2: 'h2',
          h3: 'h2',
          h4: 'h2',
          h5: 'h2',
          h6: 'h2',
          subtitle1: 'h2',
          subtitle2: 'h2',
          body1: 'p',
          body2: 'p',
        },
      },
    },
  },
typography: {
    fontFamily: [
      'Barlow', 
      'Bai Jamjuree',
      'sans-serif',
    ].join(','),
  },  },
});


function AppLayout() {
  
  return (

    <ThemeProvider theme={theme}>
      <div>
        <Navbar />
        <Outlet />
      </div>
    </ThemeProvider>
    
    );
}

export default AppLayout;
