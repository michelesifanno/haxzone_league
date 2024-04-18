import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ThemeProvider } from '@emotion/react';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#121212',
      contrastText: '#121212'
    },
    secondary: {
      main: '#ff4900',
    },
    third: {
      main: '#ffd400',
    },
    text: {
        primary: '#121212', 
        secondary: '#fff', 
        third: '#ffd400',
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
        <Footer />
      </div>
    </ThemeProvider>
    
    );
}

export default AppLayout;
