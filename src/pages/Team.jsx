import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import { Typography, Divider, Grid, Container } from '@mui/material';
import { useParams } from 'react-router-dom';
import useMediaQuery from '@mui/material/useMediaQuery';
import Leaderboard from '../components/Leaderboard';

export default function Team() {

    const { name } = useParams();
    const theme = useTheme();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [name]);


    // Dati delle squadre
    const teams = [
        { id: 1, logo: '/wolves.png', name: 'Wild Wolves', cap: 'Prox', colors: 'blue, grey', foundation: '2024' },
        { id: 2, logo: '/potatoes.png', name: 'Potatoes FC', cap: 'Bisseck', colors: 'yellow, red', foundation: '2024' },
        { id: 3, logo: '/inps.png', name: 'Inps Calcio', cap: 'AndreaPirla', colors: 'blue, black', foundation: '2024' },
        { id: 4, logo: '/sportitalia.png', name: 'Sportitalia FC', cap: 'Stempiator', colors: 'black, gold', foundation: '2024' },
        { id: 5, logo: '/sportitalia.png', name: 'Trmo1', cap: 'Stempiator', colors: 'black, gold', foundation: '2024' },
        { id: 6, logo: '/sportitalia.png', name: 'Trmo2', cap: 'Stempiator', colors: 'black, gold', foundation: '2024' },
        { id: 7, logo: '/sportitalia.png', name: 'Trmo3', cap: 'Stempiator', colors: 'black, gold', foundation: '2024' },
        { id: 8, logo: '/sportitalia.png', name: 'Trmo4', cap: 'Stempiator', colors: 'black, gold', foundation: '2024' },
        { id: 9, logo: '/sportitalia.png', name: 'Trmo5', cap: 'Stempiator', colors: 'black, gold', foundation: '2024' },
        { id: 9, logo: '/sportitalia.png', name: 'Trmo6', cap: 'Stempiator', colors: 'black, gold', foundation: '2024' },

    ];

    const players = [
        { id: 1, avatar: '🍌', name: 'Berlin', team: { name: 'Inps Calcio', logo: '/inps.png' }, role: 'GK' },
        { id: 2, avatar: '10', name: 'Del Piero', team: { name: 'Wild Wolves', logo: '/wolves.png' }, role: 'ST' },
        { id: 3, avatar: '🥔', name: 'Cheneso', team: { name: 'Potatoes FC', logo: '/potatoes.png' }, role: 'ST' },
    ];

    // Statistiche dei giocatori
    const playerStats = [
        {
            name: 'Berlin',
            stats: {
                games: 610,
                wins: 308,
                winrate: '50.49%',
                goals: 39,
                ownGoals: 88,
                assists: 84,
                cleanSheets: 148,
                hatTricks: 1,
                playtime: '1d 3h 45m',
                value: 32.68
            }
        },
        {
            name: 'Del Piero',
            stats: {
                games: 550,
                wins: 275,
                winrate: '50%',
                goals: 240,
                ownGoals: 10,
                assists: 150,
                cleanSheets: 0,
                hatTricks: 5,
                playtime: '2d 6h 20m',
                value: 42.68
            }
        },
        {
            name: 'Cheneso',
            stats: {
                games: 720,
                wins: 360,
                winrate: '50%',
                goals: 180,
                ownGoals: 5,
                assists: 100,
                cleanSheets: 0,
                hatTricks: 2,
                playtime: '1d 15h 30m',
                value: 22.68
            }
        }
    ];

    // Cerco il team
    const team = teams.find((team) => team.name === name);

    if (!team) {
        console.log('Giocatore non trovato');
        return null;
    }


    const { logo, cap, colors, foundation } = team;

    const [teamPlayers, setTeamPlayers] = useState([]);


    useEffect(() => {
        // Filtro i giocatori escludendo quello corrispondente al parametro name
        const filtered = players.filter(player => player.team.name == name);
        setTeamPlayers(filtered);
    }, [name]);

    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));


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
                    <Grid container spacing={2} alignItems="center">
                        <Grid xs={2}>
                            <img src={team.logo} alt="Logo Team" style={{ width: 200 }} />
                        </Grid>
                        <Grid item xs={10}>
                            <Typography variant="h2" component="h2" color={theme.palette.text.third} sx={{ fontWeight: '600', textTransform: 'uppercase' }}>
                                {team.name}
                            </Typography>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
            <Container maxWidth={false} sx={{
                backgroundColor: '#fff',
            }}>
                <Box sx={{ padding: '60px 0px' }}>
                    <Grid container>
                        <Grid xs={6} sx={{padding:'20px'}}>
                            <Typography variant="h4" component="h4" color={theme.palette.primary.main} sx={{ fontWeight: '600' }}>
                                CLASSIFICA
                            </Typography>
                            <br />
                            <Leaderboard teams={teams} name={name} />
                            </Grid>
                            <Grid xs={6} sx={{padding:'20px'}}>
                            <Typography variant="h4" component="h4" color={theme.palette.primary.main} sx={{ fontWeight: '600' }}>
                                PLAYERS
                            </Typography>
                            <br />
                            <Leaderboard teams={teams} name={name} />
                            </Grid>
                    </Grid>
                </Box>
            </Container>
            <Container maxWidth={false} sx={{
                backgroundColor: '#fff',
            }}>
                <Box sx={{ padding: '80px 20px' }}>
                    <Typography variant="h3" component="h3" color={theme.palette.primary.main} sx={{ fontWeight: '600' }}>
                        STADIO
                    </Typography>
                    <br />
                    <Divider />
                    <br />
                </Box>
            </Container>
            <Container maxWidth={false} sx={{
                backgroundColor: '#fff',
            }}>
                <Box sx={{ padding: '80px 20px' }}>
                    <Typography variant="h3" component="h3" color={theme.palette.primary.main} sx={{ fontWeight: '600' }}>
                        PLAYERS
                    </Typography>
                    <br />
                    <Divider />
                    <br />
                </Box>
            </Container>

        </>
    );
}