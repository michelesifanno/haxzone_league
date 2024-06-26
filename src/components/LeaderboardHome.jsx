import { useState, useEffect } from 'react';
import { styled, useTheme } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Typography, Divider, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Grid, Container, Card, CardActions, CardContent, CardMedia, Button } from '@mui/material';


export default function LeaderboardHome() {

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));


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
        { id: 1, teamName: 'Wild Wolves', points: 0, gamesPlayed: 0, goals: 0, wins: 0, draws: 0, losses: 0, goalsFor: 0, goalsAgainst: 0 },
        { id: 2, teamName: 'Potatoes FC', points: 0, gamesPlayed: 0, goals: 0, wins: 0, draws: 0, losses: 0, goalsFor: 0, goalsAgainst: 0 },
        { id: 3, teamName: 'Inps Calcio', points: 0, gamesPlayed: 0, goals: 0, wins: 0, draws: 0, losses: 0, goalsFor: 0, goalsAgainst: 0 },
        { id: 4, teamName: 'Sportitalia FC', points: 0, gamesPlayed: 0, goals: 0, wins: 0, draws: 0, losses: 0, goalsFor: 0, goalsAgainst: 0 },
        { id: 5, teamName: 'Trmo1', points: 0, gamesPlayed: 0, goals: 0, wins: 0, draws: 0, losses: 0, goalsFor: 0, goalsAgainst: 0 },
        { id: 6, teamName: 'Trmo2', points: 0, gamesPlayed: 0, goals: 0, wins: 0, draws: 0, losses: 0, goalsFor: 0, goalsAgainst: 0 },
        { id: 7, teamName: 'Trmo3', points: 0, gamesPlayed: 0, goals: 0, wins: 0, draws: 0, losses: 0, goalsFor: 0, goalsAgainst: 0 },
        { id: 8, teamName: 'Trmo4', points: 0, gamesPlayed: 0, goals: 0, wins: 0, draws: 0, losses: 0, goalsFor: 0, goalsAgainst: 0 },
        { id: 9, teamName: 'Trmo5', points: 0, gamesPlayed: 0, goals: 0, wins: 0, draws: 0, losses: 0, goalsFor: 0, goalsAgainst: 0 },
        { id: 10, teamName: 'Trmo6', points: 0, gamesPlayed: 0, goals: 0, wins: 0, draws: 0, losses: 0, goalsFor: 0, goalsAgainst: 0 }

    ];

    leaderboard.sort((a, b) => {
        // Ordina per punti decrescenti
        if (a.points !== b.points) {
            return b.points - a.points;
        }
        // In caso di parità di punti, ordina per differenza reti decrescente
        return (b.goalsFor - b.goalsAgainst) - (a.goalsFor - a.goalsAgainst);
    });



    return (
        <>
            <Grid container justifyContent="flex-start" alignItems="center">
                <Grid item xs={12} alignItems="center" sx={{padding:'10px'}}>
                    <Typography variant="h4" component="h4" color={theme.palette.primary.main} sx={{ fontWeight: '600', paddingBottom: '10px' }}>
                        CLASSIFICA
                    </Typography>
                    <Typography variant="p" component="p" color={theme.palette.text.primary}>
                        Consulta qui la classifica di HaxZone League.
                    </Typography>
                </Grid>
            </Grid>
            <Divider sx={{ margin: '10px 0px' }} />
            <br />
            <TableContainer component={Paper}>
                <Table aria-label="leaderboard table">
                    <TableHead sx={{ backgroundColor: theme.palette.third.main }}>
                        <TableRow>
                            <TableCell sx={{ padding: isMobile ? '20px 10px' : '20px' }}>
                                <Typography variant={isMobile ? "caption" : "p"} sx={{ fontWeight: 'bold' }}>
                                    P
                                </Typography>
                            </TableCell>
                            <TableCell sx={{ padding: isMobile ? '20px 10px' : '20px' }}>
                                <Typography variant={isMobile ? "caption" : "p"} sx={{ fontWeight: 'bold' }}>
                                    TEAM
                                </Typography>
                            </TableCell>
                            <TableCell sx={{ padding: isMobile ? '20px 10px' : '20px' }}>
                                        <Typography variant="p" color={theme.palette.primary.main} sx={{ fontWeight: '600' }}>
                                    PT
                                </Typography>
                            </TableCell>
                            <TableCell sx={{ padding: isMobile ? '20px 10px' : '20px' }}>
                                        <Typography variant="p" color={theme.palette.primary.main} sx={{ fontWeight: '600' }}>
                                    G
                                </Typography>
                            </TableCell>
                            <TableCell sx={{ padding: isMobile ? '20px 10px' : '20px' }}>
                                        <Typography variant="p" color={theme.palette.primary.main} sx={{ fontWeight: '600' }}>
                                    V
                                </Typography>
                            </TableCell>
                            <TableCell sx={{ padding: isMobile ? '20px 10px' : '20px' }}>
                                        <Typography variant="p" color={theme.palette.primary.main} sx={{ fontWeight: '600' }}>
                                    N
                                </Typography>
                            </TableCell>
                            <TableCell sx={{ padding: isMobile ? '20px 10px' : '20px' }}>
                                        <Typography variant="p" color={theme.palette.primary.main} sx={{ fontWeight: '600' }}>
                                    S
                                </Typography>
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {leaderboard.slice(0, 6).map((team, index) => (
                            <TableRow key={team.id}>
                                <TableCell sx={{ padding: isMobile ? '20px 10px' : '20px' }}>
                                        <Typography variant="p" color={theme.palette.primary.main} sx={{ fontWeight: '600' }}>
                                        {index + 1}
                                    </Typography>
                                </TableCell>
                                <TableCell sx={{ padding: isMobile ? '20px 10px' : '20px' }}>
                                        <Typography variant="p" color={theme.palette.primary.main} sx={{ fontWeight: '600' }}>
                                        <Link
                                            to={`/team/${team.teamName}`}
                                            style={{
                                                color: theme.palette.primary.main,
                                                textDecoration: 'none',
                                                fontWeight: '600',
                                                textTransform: 'uppercase'
                                            }}
                                        >
                                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                                {isMobile ? <img src={teams.find(t => t.name === team.teamName)?.logo} alt="Logo Team" style={{ width: 30, marginRight: '5px' }} /> : <img src={teams.find(t => t.name === team.teamName)?.logo} alt="Logo Team" style={{ width: 40, marginRight: 10 }} />}
                                                {isMobile ? (team.teamName.length > 3 ? team.teamName.substring(0, 3) + '.' : team.teamName) : team.teamName}
                                            </div>
                                        </Link>
                                    </Typography>
                                </TableCell>
                                <TableCell sx={{ padding: isMobile ? '20px 10px' : '20px' }}>
                                        <Typography variant="p" color={theme.palette.primary.main} sx={{ fontWeight: '600' }}>
                                        {team.points}
                                    </Typography>
                                </TableCell>
                                <TableCell sx={{ padding: isMobile ? '20px 10px' : '20px' }}>
                                        <Typography variant="p" color={theme.palette.primary.main} sx={{ fontWeight: '600' }}>
                                        {team.gamesPlayed}
                                    </Typography>
                                </TableCell>
                                <TableCell sx={{ padding: isMobile ? '20px 10px' : '20px' }}>
                                        <Typography variant="p" color={theme.palette.primary.main} sx={{ fontWeight: '600' }}>
                                        {team.wins}
                                    </Typography>
                                </TableCell>
                                <TableCell sx={{ padding: isMobile ? '20px 10px' : '20px' }}>
                                        <Typography variant="p" color={theme.palette.primary.main} sx={{ fontWeight: '600' }}>
                                        {team.draws}
                                    </Typography>
                                </TableCell>
                                <TableCell sx={{ padding: isMobile ? '20px 10px' : '20px' }}>
                                        <Typography variant="p" color={theme.palette.primary.main} sx={{ fontWeight: '600' }}>
                                        {team.losses}
                                    </Typography>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}