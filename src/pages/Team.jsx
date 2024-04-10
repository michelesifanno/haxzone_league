import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import { styled, useTheme } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import { Typography, Divider, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Grid, Container, Card, CardActions, CardContent, CardMedia, Button } from '@mui/material';
import { useParams } from 'react-router-dom';
import ArrowOutwardOutlinedIcon from '@mui/icons-material/ArrowOutwardOutlined';
import useMediaQuery from '@mui/material/useMediaQuery';

export default function Team() {

    const { name } = useParams();
    const theme = useTheme();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [name]);


    // Dati dei giocatori
    const teams = [
        { id: 1, logo: '/wolves.png', name: 'Wild Wolves', cap: 'Prox', colors: 'blue, grey', foundation: '2024' },
        { id: 2, logo: '/potatoes.png', name: 'Potatoes FC', cap: 'Bisseck', colors: 'yellow, red', foundation: '2024' },
        { id: 3, logo: '/inps.png', name: 'Inps Calcio', cap: 'AndreaPirla', colors: 'blue, black', foundation: '2024' },
        { id: 4, logo: '/sportitalia.png', name: 'Sportitalia FC', cap: 'Stempiator', colors: 'black, gold', foundation: '2024' },
    ];

    const players = [
        { id: 1, avatar: '🍌', name: 'Berlin', team: { name: 'Inps Calcio', logo: '/inps.png' }, role: 'GK' },
        { id: 2, avatar: '10', name: 'Del Piero', team: { name: 'Wild Wolves', logo: '/wolves.png' }, role: 'ST' },
        { id: 3, avatar: '🥔', name: 'Cheneso', team: { name: 'Potatoes FC', logo: '/potatoes.png' }, role: 'ST' },
    ];

    const leaderboard = [
        { id: 1, teamName: 'Wild Wolves', points: 0, gamesPlayed: 0, goals: 0, wins: 0, draws: 0, losses: 0, goalsFor: 0, goalsAgainst: 0 },
        { id: 2, teamName: 'Potatoes FC', points: 0, gamesPlayed: 0, goals: 0, wins: 0, draws: 0, losses: 0, goalsFor: 0, goalsAgainst: 0 },
        { id: 3, teamName: 'Inps Calcio', points: 0, gamesPlayed: 0, goals: 0, wins: 0, draws: 0, losses: 0, goalsFor: 0, goalsAgainst: 0 },
        { id: 4, teamName: 'Sportitalia FC', points: 0, gamesPlayed: 0, goals: 0, wins: 0, draws: 0, losses: 0, goalsFor: 0, goalsAgainst: 0 }
    ];

    leaderboard.sort((a, b) => {
        // Ordina per punti decrescenti
        if (a.points !== b.points) {
            return b.points - a.points;
        }
        // In caso di parità di punti, ordina per differenza reti decrescente
        return (b.goalsFor - b.goalsAgainst) - (a.goalsFor - a.goalsAgainst);
    });

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
                <Box sx={{ padding: '80px 20px' }}>
                    <Grid container spacing={4}>
                        <Grid xs={6}>
                            <Typography variant="h3" component="h3" color={theme.palette.primary.main} sx={{ fontWeight: '600' }}>
                                STATISTICHE GENERALI
                            </Typography>
                            <br />
                            <Divider />
                            <br />
                            <TableContainer component={Paper}>
                                <Table aria-label="leaderboard table">
                                    <TableHead sx={{ backgroundColor: theme.palette.third.main }}>
                                        <TableRow>
                                            <TableCell>
                                                <Typography variant="p" component="p" color={theme.palette.primary.main} sx={{ textTransform: 'uppercase', fontWeight: 'bold' }}>
                                                    Pos
                                                </Typography>
                                            </TableCell>
                                            <TableCell>
                                                <Typography variant="p" component="p" color={theme.palette.primary.main} sx={{ textTransform: 'uppercase', fontWeight: 'bold' }}>
                                                    Team
                                                </Typography>
                                            </TableCell>
                                            <TableCell>
                                                <Typography variant="p" component="p" color={theme.palette.primary.main} sx={{ textTransform: 'uppercase', fontWeight: 'bold' }}>
                                                    P
                                                </Typography>
                                            </TableCell>
                                            <TableCell>
                                                <Typography variant="p" component="p" color={theme.palette.primary.main} sx={{ textTransform: 'uppercase', fontWeight: 'bold' }}>
                                                    G
                                                </Typography>
                                            </TableCell>
                                            <TableCell>
                                                <Typography variant="p" component="p" color={theme.palette.primary.main} sx={{ textTransform: 'uppercase', fontWeight: 'bold' }}>
                                                    V
                                                </Typography>
                                            </TableCell>
                                            <TableCell>
                                                <Typography variant="p" component="p" color={theme.palette.primary.main} sx={{ textTransform: 'uppercase', fontWeight: 'bold' }}>
                                                    N
                                                </Typography>
                                            </TableCell>
                                            <TableCell>
                                                <Typography variant="p" component="p" color={theme.palette.primary.main} sx={{ textTransform: 'uppercase', fontWeight: 'bold' }}>
                                                    S
                                                </Typography>
                                            </TableCell>
                                            <TableCell>
                                                <Typography variant="p" component="p" color={theme.palette.primary.main} sx={{ textTransform: 'uppercase', fontWeight: 'bold' }}>
                                                    GF
                                                </Typography>
                                            </TableCell>
                                            <TableCell>
                                                <Typography variant="p" component="p" color={theme.palette.primary.main} sx={{ textTransform: 'uppercase', fontWeight: 'bold' }}>
                                                    GS
                                                </Typography>
                                            </TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {leaderboard.map((team, index) => (
                                            <TableRow key={team.id} className={team.teamName === name ? 'highlighted-row' : ''}>
                                                <TableCell>
                                                    <Typography variant="h6" component="h6" color={theme.palette.primary.main} sx={{ fontWeight: '600' }}>
                                                        {index + 1}
                                                    </Typography>
                                                </TableCell>
                                                <TableCell>
                                                    <Typography variant="h6" component="h6" color={theme.palette.primary.main} sx={{ fontWeight: '600' }}>
                                                        <div style={{ display: 'flex', alignItems: 'center' }}>
                                                            <img src={teams.find(t => t.name === team.teamName)?.logo} alt="Logo Team" style={{ width: 50, marginRight: 10 }} />
                                                            {team.teamName}
                                                        </div>
                                                    </Typography>
                                                </TableCell>
                                                <TableCell>
                                                    <Typography variant="h6" component="h6" color={theme.palette.primary.main} sx={{ fontWeight: '600' }}>
                                                        {team.points}
                                                    </Typography>
                                                </TableCell>
                                                <TableCell>
                                                    <Typography variant="h6" component="h6" color={theme.palette.primary.main} sx={{ fontWeight: '600' }}>
                                                        {team.gamesPlayed}
                                                    </Typography>
                                                </TableCell>
                                                <TableCell>
                                                    <Typography variant="h6" component="h6" color={theme.palette.primary.main} sx={{ fontWeight: '600' }}>
                                                        {team.wins}
                                                    </Typography>
                                                </TableCell>
                                                <TableCell>
                                                    <Typography variant="h6" component="h6" color={theme.palette.primary.main} sx={{ fontWeight: '600' }}>
                                                        {team.draws}
                                                    </Typography>
                                                </TableCell>
                                                <TableCell>
                                                    <Typography variant="h6" component="h6" color={theme.palette.primary.main} sx={{ fontWeight: '600' }}>
                                                        {team.losses}
                                                    </Typography>
                                                </TableCell>
                                                <TableCell>
                                                    <Typography variant="h6" component="h6" color={theme.palette.primary.main} sx={{ fontWeight: '600' }}>
                                                        {team.goalsFor}
                                                    </Typography>
                                                </TableCell>
                                                <TableCell>
                                                    <Typography variant="h6" component="h6" color={theme.palette.primary.main} sx={{ fontWeight: '600' }}>
                                                        {team.goalsAgainst}
                                                    </Typography>
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </Grid>
                        <Grid xs={6}>
                            <Typography variant="h3" component="h3" color={theme.palette.primary.main} sx={{ fontWeight: '600' }}>
                                STADIO
                            </Typography>
                            <br />
                            <Divider />
                            <br />
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