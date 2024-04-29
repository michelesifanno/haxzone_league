import { useState, useEffect } from 'react';
import { useTheme } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import useMediaQuery from '@mui/material/useMediaQuery';
import EastIcon from '@mui/icons-material/East';
import { Typography, Divider, Container, Grid, Box } from '@mui/material';

export default function Calciomercato() {

    const theme = useTheme();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const trasferimenti = [
        { player: 'Berlin', from: 'Wild Wolves', to: 'Inps Calcio', season: '2' },
        { player: 'Del Piero', from: 'Potatoes FC', to: 'Wild Wolves', season: '1' },
        { player: 'Cheneso', from: 'Wild Wolves', to: 'Potatoes FC', season: '2' }
    ];

    const teams = [
        { id: 1, logo: '/wolves.png', name: 'Wild Wolves', cap: 'Prox', colors: 'blue, grey', stadium: '/stadium.png', stadiumName: 'Hax Stadium', foundation: '2024' },
        { id: 2, logo: '/potatoes.png', name: 'Potatoes FC', cap: 'Bisseck', colors: 'yellow, red', stadium: '/stadium.png', stadiumName: 'Hax Stadium', foundation: '2024' },
        { id: 3, logo: '/inps.png', name: 'Inps Calcio', cap: 'AndreaPirla', colors: 'blue, black', stadium: '/stadium.png', stadiumName: 'Hax Stadium', foundation: '2024' },
        { id: 4, logo: '/sportitalia.png', name: 'Sportitalia FC', cap: 'Stempiator', colors: 'black, gold', stadium: '/stadium.png', stadiumName: 'Hax Stadium', foundation: '2024' },
        { id: 5, logo: '/sportitalia.png', name: 'Trmo1', cap: 'Stempiator', colors: 'black, gold', stadium: '/stadium.png', stadiumName: 'Hax Stadium', foundation: '2024' },
        { id: 6, logo: '/sportitalia.png', name: 'Trmo2', cap: 'Stempiator', colors: 'black, gold', stadium: '/stadium.png', stadiumName: 'Hax Stadium', foundation: '2024' },
        { id: 7, logo: '/sportitalia.png', name: 'Trmo3', cap: 'Stempiator', colors: 'black, gold', stadium: '/stadium.png', stadiumName: 'Hax Stadium', foundation: '2024' },
        { id: 8, logo: '/sportitalia.png', name: 'Trmo4', cap: 'Stempiator', colors: 'black, gold', stadium: '/stadium.png', stadiumName: 'Hax Stadium', foundation: '2024' },
        { id: 9, logo: '/sportitalia.png', name: 'Trmo5', cap: 'Stempiator', colors: 'black, gold', stadium: '/stadium.png', stadiumName: 'Hax Stadium', foundation: '2024' },
        { id: 9, logo: '/sportitalia.png', name: 'Trmo6', cap: 'Stempiator', colors: 'black, gold', stadium: '/stadium.png', stadiumName: 'Hax Stadium', foundation: '2024' },
    ];

    const players = [
        { id: 1, avatar: '🍌', name: 'Berlin', team: { name: 'Inps Calcio', logo: '/inps.png' }, role: 'GK' },
        { id: 2, avatar: '10', name: 'Del Piero', team: { name: 'Wild Wolves', logo: '/wolves.png' }, role: 'ST' },
        { id: 3, avatar: '🥔', name: 'Cheneso', team: { name: 'Potatoes FC', logo: '/potatoes.png' }, role: 'ST' },
    ];

    return (
        <>
            <Container maxWidth={false} sx={{
                backgroundImage: 'url(/texture.jpg)',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                minWidth: '100vw',
                marginTop: '-80px',
            }}>
                <Box sx={{ padding: { xs: '160px 20px 40px 20px', md: '160px 20px 80px 20px' } }}>
                    <Typography variant="h6" component="h6" color={theme.palette.text.secondary}>
                        HAXZONE LEAGUE
                    </Typography>
                    <Typography variant="h2" component="h2" color={theme.palette.text.secondary} sx={{ fontWeight: '600' }}>
                        CALCIO MERCATO
                    </Typography>
                </Box>
            </Container>
            <Container maxWidth={false} sx={{
                backgroundColor: '#fff',
                minHeight: '100vh'
            }}>
                <Box sx={{ padding: '80px 20px' }}>
                    <Typography variant="h3" component="h3" color={theme.palette.primary.main} sx={{ fontWeight: '600' }}>
                        MERCATO
                    </Typography>
                    <br />
                    <Typography variant="p" component="p" color={theme.palette.text.primary}>
                        Tutti i trasferimenti.
                    </Typography>
                    <br />
                    <Divider />
                    <br />
                    {trasferimenti.map((transfer, index) =>
                        <Grid container justifyContent="center" alignItems="center" key={index} className="matchGrid" sx={{ backgroundColor: '#fbfbfd', padding: '10px', border: '1px solid #eee', margin: '20px 0px' }}>
                            <Grid item xs={12} md={3} alignItems="center" sx={{ padding: '10px' }}>
                                <Link
                                    to={`/player/${transfer.player}`}
                                    style={{
                                        color: theme.palette.primary.main,
                                        textDecoration: 'none',
                                    }}
                                >
                                    <Typography variant="h6" component="h6" color={theme.palette.primary.main} sx={{ fontWeight: '600', display: 'flex', justifyContent: isMobile ? 'center' : 'flex-start', textTransform: 'uppercase' }}>
                                        {transfer.player}
                                    </Typography>
                                </Link>
                            </Grid>
                            <Grid item xs={12} md={6} alignItems="center" sx={{ padding: '10px' }}>
                                <Typography variant={isMobile ? "p" : "h6"} component={isMobile ? "p" : "h6"} color={theme.palette.primary.main} sx={{ fontWeight: '600', display: 'flex', justifyContent: 'center', textTransform: 'uppercase' }}>
                                <div style={{ display: 'flex', alignItems: 'center', textTransform: 'uppercase' }}>
                                    {isMobile ? '' : transfer.from} <img src={teams.find(team => team.name === transfer.from)?.logo} alt={transfer.from} style={{ width: isMobile ? '80px' : '50px', marginLeft: '10px' }} /> <EastIcon sx={{ color: theme.palette.secondary.main, margin: '0px 20px' }} /> <img src={teams.find(team => team.name === transfer.to)?.logo} alt={transfer.to} style={{ width: isMobile ? '80px' : '50px', marginRight: '10px' }} /> {isMobile ? '' : transfer.to}
                                </div>
                                </Typography>
                            </Grid>
                            <Grid item xs={12} md={3} alignItems="center" sx={{ padding: '10px' }}>
                                <Typography variant= "p" component="p" color={theme.palette.primary.main} sx={{ fontWeight: '600', display: 'flex', justifyContent: isMobile ? 'center' : 'flex-end', textTransform: 'uppercase' }}>
                                    {transfer.season} stagioni
                                </Typography>
                            </Grid>
                        </Grid>
                    )}
                </Box>
            </Container>
        </>
    )
}