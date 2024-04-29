import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import { Typography, useMediaQuery, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Grid, Divider } from '@mui/material';
import { useParams } from 'react-router-dom';

export default function ScorerHome() {

    const { name } = useParams();

    const theme = useTheme();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [name]);

    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));


    // Dati dei giocatori
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

    const leaderboard = [
        { id: 1, teamName: 'Wild Wolves', points: 10, gamesPlayed: 0, goals: 0, wins: 0, draws: 0, losses: 0, goalsFor: 0, goalsAgainst: 40 },
        { id: 2, teamName: 'Potatoes FC', points: 0, gamesPlayed: 0, goals: 0, wins: 0, draws: 0, losses: 0, goalsFor: 0, goalsAgainst: 0 },
        { id: 3, teamName: 'Inps Calcio', points: 0, gamesPlayed: 0, goals: 0, wins: 0, draws: 0, losses: 0, goalsFor: 10, goalsAgainst: 60 },
        { id: 4, teamName: 'Sportitalia FC', points: 0, gamesPlayed: 0, goals: 0, wins: 0, draws: 0, losses: 0, goalsFor: 0, goalsAgainst: 50 },
        { id: 5, teamName: 'Trmo1', points: 0, gamesPlayed: 0, goals: 0, wins: 0, draws: 0, losses: 0, goalsFor: 0, goalsAgainst: 40 },
        { id: 6, teamName: 'Trmo2', points: 0, gamesPlayed: 0, goals: 0, wins: 0, draws: 0, losses: 0, goalsFor: 0, goalsAgainst: 30 },
        { id: 7, teamName: 'Trmo3', points: 0, gamesPlayed: 0, goals: 0, wins: 0, draws: 0, losses: 0, goalsFor: 0, goalsAgainst: 20 },
        { id: 8, teamName: 'Trmo4', points: 0, gamesPlayed: 0, goals: 0, wins: 0, draws: 0, losses: 0, goalsFor: 0, goalsAgainst: 10 },
        { id: 9, teamName: 'Trmo5', points: 0, gamesPlayed: 0, goals: 0, wins: 0, draws: 0, losses: 0, goalsFor: 0, goalsAgainst: 10 },
        { id: 10, teamName: 'Trmo6', points: 0, gamesPlayed: 0, goals: 0, wins: 0, draws: 0, losses: 0, goalsFor: 0, goalsAgainst: 10 }

    ];

    playerStats.sort((a, b) => {
        // Ordina per punti decrescenti
        if (a.stats.goals !== b.stats.goals) {
            return b.stats.goals - a.stats.goals;
        }
    });


    return (
        <>
            <Grid container justifyContent="flex-start" alignItems="center">
                <Grid item xs={12} alignItems="center" sx={{padding:'10px'}}>
                    <Typography variant="h4" component="h4" color={theme.palette.primary.main} sx={{ fontWeight: '600', paddingBottom: '10px' }}>
                        MARCATORI
                    </Typography>
                    <Typography variant="p" component="p" color={theme.palette.text.primary}>
                        Classifica marcatori di HaxZone League.
                    </Typography>
                </Grid>
            </Grid>
            <Divider sx={{ margin: '10px 0px' }} />
            <br />
            <TableContainer component={Paper}>
                <Table aria-label="players table">
                    <TableHead sx={{ backgroundColor: theme.palette.third.main }}>
                        <TableRow>
                            <TableCell sx={{ padding: isMobile ? '20px 10px' : '20px' }}>
                                        <Typography variant="p" color={theme.palette.primary.main} sx={{ fontWeight: '600' }}>
                                    PLAYER
                                </Typography>
                            </TableCell>
                            <TableCell sx={{ padding: isMobile ? '20px 10px' : '20px' }}>
                                        <Typography variant="p" color={theme.palette.primary.main} sx={{ fontWeight: '600' }}>
                                    GOL
                                </Typography>
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {playerStats.slice(0, 6).map((player, index) => (
                            <TableRow key={index}>
                                <TableCell sx={{ padding: isMobile ? '20px 10px' : '20px' }}>
                                    <Link
                                        to={`/player/${player.name}`}
                                        style={{
                                            color: theme.palette.primary.main,
                                            textDecoration: 'none',
                                        }}
                                    >
                                        <Typography variant="p" color={theme.palette.primary.main} sx={{ fontWeight: '600' }}>
                                                    <div style={{ display: 'flex', alignItems: 'center', textTransform: 'uppercase' }}>
                                                        <img src={players.find(p => p.name === player.name)?.team?.logo} alt="Logo Team" style={{ width: 40, marginRight: 10 }} />
                                                        {player.name}
                                                    </div>
                                        </Typography>
                                    </Link>
                                </TableCell>
                                <TableCell sx={{ padding: isMobile ? '20px 10px' : '20px' }}>
                                        <Typography variant="p" color={theme.palette.primary.main} sx={{ fontWeight: '600' }}>
                                        {player.stats.goals}
                                    </Typography>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
}