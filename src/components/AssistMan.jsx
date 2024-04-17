import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import { Typography, useMediaQuery, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Grid } from '@mui/material';
import { useParams } from 'react-router-dom';

export default function AssistMan() {

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


    const bestAssistantData = playerStats.reduce((prev, current) => (prev.stats.assists > current.stats.assists) ? prev : current);
    const bestAssistant = players.find((player) => player.name === bestAssistantData.name);

    const bestAssistantTeam = teams.find((team) => team.name === bestAssistant.team.name);

    const logoStyle = isMobile ? { width: 120, marginRight: '5px' } : { width: 120, marginRight: 10 };

    playerStats.sort((a, b) => {
        // Ordina per punti decrescenti
        if (a.stats.assists !== b.stats.assists) {
            return b.stats.assists - a.stats.assists;
        }
    });

    const filteredPlayerStats = playerStats.filter(player => player.name !== bestAssistant.name);

    return (
        <>
            <Grid container spacing={2} justifyContent="flex-start" alignItems="center">
                <Grid item xs={12} alignItems="center">
                    <Typography variant="h4" component="h4" color={theme.palette.primary.main} sx={{ fontWeight: '600', paddingBottom: '10px' }}>
                        ASSIST
                    </Typography>
                    <Typography variant="p" component="p" color={theme.palette.text.primary}>
                        Di seguito, la classifica Assist... Finora!
                    </Typography>
                </Grid>
            </Grid>
            <Grid container spacing={2} justifyContent="flex-start" alignItems="center" className='matchGrid' sx={{ backgroundColor: '#fbfbfd', padding: '30px', border: '1px solid #eee', margin: '20px 0px' }}>
                <Grid xs={12} md={2} alignItems="center" sx={{ padding: '10px' }}>
                        <Link
                            to={`/team/${bestAssistantTeam.logo}`}
                            style={{
                                color: theme.palette.secondary.main,
                                textDecoration: 'none',
                                fontWeight: '600',
                            }}
                        >
                            <img src={bestAssistantTeam.logo} alt="Logo Team" style={logoStyle} />
                        </Link>
                </Grid>
                <Grid xs={12} md={6} alignItems="center" sx={{ padding: '10px' }}>
                <Link
                                                to={`/player/${bestAssistant.name}`}
                                                style={{
                                                    color: theme.palette.primary.main,
                                                    textDecoration: 'none',
                                                }}
                                            >
                    <Typography variant="h3" component="h3" color="secondary.main" className="textStats">
                        {bestAssistant.name}
                    </Typography>
                    </Link>
                </Grid>
                <Grid xs={12} md={4} alignItems="center" sx={{ padding: '10px' }}>
                    <Typography variant="h5" component="h5" color="primary.main" className="textStats">
                    👟 ASSIST MAN
                    </Typography>
                </Grid>
            </Grid>
            <Grid container spacing={2} justifyContent="flex-start" alignItems="center" sx={{ margin: '20px 0px' }}>
                <Grid xs={12} alignItems="center">
                    <TableContainer component={Paper}>
                        <Table aria-label="players table">
                            <TableHead sx={{ backgroundColor: theme.palette.third.main }}>
                                <TableRow>
                                    <TableCell>
                                        <Typography variant={isMobile ? "caption" : "p"} sx={{ fontWeight: 'bold' }}>
                                            PLAYER
                                        </Typography>
                                    </TableCell>
                                    {isMobile ? '' : (
                                        <TableCell>
                                            <Typography variant="p" sx={{ fontWeight: 'bold' }}>
                                                TEAM
                                            </Typography>
                                        </TableCell>
                                    )}
                                    <TableCell>
                                        <Typography variant={isMobile ? "caption" : "p"} sx={{ fontWeight: 'bold' }}>
                                            ASSIST
                                        </Typography>
                                    </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {filteredPlayerStats.map((player, index) => (
                                    <TableRow key={index}>
                                        <TableCell>
                                            <Link
                                                to={`/player/${player.name}`}
                                                style={{
                                                    color: theme.palette.primary.main,
                                                    textDecoration: 'none',
                                                }}
                                            >
                                                <Typography variant="h6" component="h6" color={theme.palette.primary.main} sx={{ fontWeight: '600' }}>
                                                    {isMobile ?
                                                        (
                                                            <div style={{ display: 'flex', alignItems: 'center', textTransform: 'uppercase' }}>
                                                                <img src={players.find(player => player.name === player.name)?.team?.logo} alt="Logo Team" style={{ width: 30, marginRight: 10 }} />
                                                                {player.name}
                                                            </div>
                                                        )
                                                        :
                                                        (
                                                            <Typography variant="h5" component="h5" color={theme.palette.primary.main} sx={{ fontWeight: '600'}}>
                                                                {player.name}
                                                            </Typography>
                                                        )
                                                    }
                                                </Typography>
                                            </Link>
                                        </TableCell>
                                        {isMobile ? '' : (
                                            <TableCell>
                                                <Link
                                                    to={`/team/${players.find(player => player.name === player.name).team.name}`}
                                                    style={{
                                                        color: theme.palette.primary.main,
                                                        textDecoration: 'none',
                                                    }}
                                                >
                                                    <Typography variant="h6" component="h6" color={theme.palette.primary.main} sx={{ fontWeight: '600' }}>
                                                        {players.find(player => player.name === player.name)?.team ? (
                                                            <div style={{ display: 'flex', alignItems: 'center', textTransform: 'uppercase' }}>
                                                                <img src={players.find(player => player.name === player.name).team.logo} alt="Logo Team" style={{ width: 30, marginRight: 10 }} /> {players.find(player => player.name === player.name).team.name}
                                                            </div>
                                                        ) : (
                                                            <Typography variant="h6" component="h6" color={theme.palette.primary.main} sx={{ fontWeight: '600' }}>
                                                                N/A
                                                            </Typography>
                                                        )}
                                                    </Typography>
                                                </Link>
                                            </TableCell>
                                        )}
                                        <TableCell>
                                            <Typography variant="h6" component="h6" color={theme.palette.primary.main} sx={{ fontWeight: '600', textTransform: 'uppercase' }}>
                                                {player.stats.assists}
                                            </Typography>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
            </Grid>
        </>
    );
}