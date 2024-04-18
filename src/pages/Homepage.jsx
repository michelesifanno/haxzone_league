import { useState, useEffect } from 'react';
import { useTheme } from '@mui/material/styles';
import { Container, Typography, Grid, Box, Button } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import ArrowOutwardOutlinedIcon from '@mui/icons-material/ArrowOutwardOutlined';
import { Link } from 'react-router-dom';
import NextMatch from '../components/NextMatch';
import LeaderboardHome from '../components/LeaderboardHome';
import ScorerHome from '../components/ScorerHome';
import TransferHome from '../components/TransferHome';


export default function Homepage() {
  const theme = useTheme();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [activeComponent, setActiveComponent] = useState('calendar');

  const handleMenuItemClick = (menuItem) => {
    setActiveMenuItem(menuItem);
  };

  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <>
      <Container maxWidth={false} sx={{
        backgroundImage: 'url(/home-gif.gif)',
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        minWidth: '100vw',
        marginTop: '-80px',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <Box sx={{ padding: '20px', textAlign: 'center' }}>
          <Grid container alignItems="center">
            <Grid item xs={12}>
              <Typography variant={isMobile ? "h2" : "h1"} color={theme.palette.text.secondary} sx={{ justifyContent: 'center' }}>
                HAXZONE LEAGUE
              </Typography>
              <Typography variant={isMobile ? "h5" : "h4"} color={theme.palette.text.secondary} sx={{ justifyContent: 'center', letterSpacing: '-1px' }}>
                La lega manageriale più grande d'Italia 🏆🇮🇹
              </Typography>
              <br />
            </Grid>
            <Grid item xs={12} md={6} sx={{ padding: '20px 0px', display: 'flex', justifyContent: isMobile ? 'center' : 'flex-end' }}>
              <Button
                component={Link}
                size="large"
                to='/league'
                variant="contained"
                endIcon={<ArrowOutwardOutlinedIcon />}
                sx={{ bgcolor: theme.palette.secondary.main, color: theme.palette.text.secondary }}
              >
                Calendario e Risultati
              </Button>
            </Grid>
            <Grid item xs={12} md={6} sx={{ padding: '20px 0px', display: 'flex', justifyContent: isMobile ? 'center' : 'flex-start' }}>
              <Button
                component={Link}
                size="large"
                to='/stats'
                variant="contained"
                endIcon={<ArrowOutwardOutlinedIcon />}
                sx={{ bgcolor: theme.palette.third.main, color: theme.palette.text.main }}
              >
                Statistiche della Lega
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Container>
      <Container maxWidth={false} sx={{
        backgroundColor: '#fff',
      }}>
        <Box sx={{ padding: '80px 20px' }}>
          <NextMatch />
        </Box>
      </Container>
      <Container maxWidth={false} sx={{
        backgroundColor: '#fff',
      }}>
        <Box sx={{ padding: '0px 20px 80px 20px' }}>
          <Grid container spacing={2} justifyContent="flex-start">
            <Grid item xs={12} md={6} alignItems="center">
              <LeaderboardHome />
              {isMobile ?
              <Button
                component={Link}
                size="large"
                to='/league'
                variant="contained"
                endIcon={<ArrowOutwardOutlinedIcon />}
                sx={{ bgcolor: theme.palette.secondary.main, color: theme.palette.text.secondary, marginTop:'20px' }}
              >
                Classifica completa
              </Button> : ''}
            </Grid>
            <Grid item xs={12} md={6}> 
            {isMobile ? (<br />) : ('')}
            {isMobile ? (<br />) : ('')}
              <ScorerHome />
              {isMobile ?
              <Button
                component={Link}
                size="large"
                to='/stats'
                variant="contained"
                endIcon={<ArrowOutwardOutlinedIcon />}
                sx={{ bgcolor: theme.palette.secondary.main, color: theme.palette.text.secondary, marginTop:'20px' }}
              >
                Tutte le Stats
              </Button> : ''}
            </Grid>
          </Grid>
        </Box>
      </Container>
      <Container maxWidth={false} sx={{
        backgroundColor: theme.palette.secondary.main,
      }}>
        <Box sx={{ padding: '80px 20px' }}>
          <TransferHome />
        </Box>
      </Container>
      {isMobile ? (
        <Container maxWidth={false} disableGutters>
        <Box sx={{padding:'0px'}}>
        <Grid container spacing={2} alignItems="center">
                <Grid item xs={6} alignItems="center" sx={{padding: isMobile ? '40px!important' : '80px!important', backgroundColor:'#251351'}}>
                <Typography variant= "h5" color={theme.palette.text.secondary} sx={{ fontWeight: '600', paddingBottom: '10px'}}>
                        Accedi a Discord
                    </Typography>
                    <Button
                component={Link}
                size="large"
                href='https://discord.gg/b4QM4K3t'
                variant="contained"
                endIcon={<ArrowOutwardOutlinedIcon />}
                sx={{ bgcolor: theme.palette.secondary.main, color: theme.palette.text.secondary, marginTop:'20px' }}
              >
                Accedi
              </Button>
                </Grid>
            <Grid item xs={6} alignItems="center" sx={{padding: isMobile ? '40px!important' : '80px!important', backgroundColor:'#266DD3'}}>
                    <Typography variant= "h5" color={theme.palette.text.secondary} sx={{ fontWeight: '600', paddingBottom: '10px'}}>
                        Entra in Haxball
                    </Typography>
                    <Button
                component={Link}
                size="large"
                href='https://discord.gg/b4QM4K3t'
                variant="contained"
                endIcon={<ArrowOutwardOutlinedIcon />}
                sx={{ bgcolor: theme.palette.secondary.main, color: theme.palette.text.secondary, marginTop:'20px' }}
              >
                Entra
              </Button>
                </Grid>
            </Grid>
        </Box>
      </Container>
      ) : (
        <Container maxWidth={false} disableGutters>
        <Box sx={{padding:'0px'}}>
        <Grid container spacing={2} alignItems="center">
                <Grid item xs={12} md={6} alignItems="center" sx={{padding: isMobile ? '40px!important' : '80px!important', backgroundColor:'#251351'}}>
                    <Typography variant= "h3" color={theme.palette.text.secondary} sx={{ fontWeight: '600', paddingBottom: '10px'}}>
                        Accedi al nostro canale Discord
                    </Typography>
                    <Button
                size="large"
                href='https://discord.gg/b4QM4K3t'
                variant="contained"
                endIcon={<ArrowOutwardOutlinedIcon />}
                sx={{ bgcolor: theme.palette.secondary.main, color: theme.palette.text.secondary, marginTop:'20px' }}
              >
                Accedi a Discord
              </Button>
                </Grid>
            <Grid item xs={12} md={6} alignItems="center" sx={{padding: isMobile ? '40px!important' : '80px!important', backgroundColor:'#266DD3'}}>
                    <Typography variant= "h3" color={theme.palette.text.secondary} sx={{ fontWeight: '600', paddingBottom: '10px'}}>
                        Entra nella nostra room Haxball
                    </Typography>
                    <Button
                size="large"
                href='https://www.haxball.com/play?c=i4JUGg4CZD0'
                variant="contained"
                endIcon={<ArrowOutwardOutlinedIcon />}
                sx={{ bgcolor: theme.palette.secondary.main, color: theme.palette.text.secondary, marginTop:'20px' }}
              >
                Entra in Haxball
              </Button>
                </Grid>
            </Grid>
        </Box>
      </Container>
      )}
    </>
  );
}