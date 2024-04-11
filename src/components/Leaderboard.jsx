import { useState, useEffect } from 'react';
import { styled, useTheme } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import { Typography, Divider, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Grid, Container, Card, CardActions, CardContent, CardMedia, Button } from '@mui/material';


export default function Leaderboard({ teams, name }) {
    const theme = useTheme();

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

    
    return (
        <>
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
                                    <Typography variant="p" component="p" color={theme.palette.primary.main} sx={{ fontWeight: '600' }}>
                                        {index + 1}
                                    </Typography>
                                </TableCell>
                                <TableCell>
                                    <Typography variant="p" component="p" color={theme.palette.primary.main} sx={{ fontWeight: '600' }}>
                                        <Link
                                            to={`/team/${team.teamName}`}
                                            style={{
                                                color: theme.palette.primary.main,
                                                textDecoration: 'none',
                                            }}
                                        >
                                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                                <img src={teams.find(t => t.name === team.teamName)?.logo} alt="Logo Team" style={{ width: 30, marginRight: 10 }} />
                                                {team.teamName}
                                            </div>
                                        </Link>
                                    </Typography>
                                </TableCell>
                                <TableCell>
                                    <Typography variant="p" component="p" color={theme.palette.primary.main} sx={{ fontWeight: '600' }}>
                                        {team.points}
                                    </Typography>
                                </TableCell>
                                <TableCell>
                                    <Typography variant="p" component="p" color={theme.palette.primary.main} sx={{ fontWeight: '600' }}>
                                        {team.gamesPlayed}
                                    </Typography>
                                </TableCell>
                                <TableCell>
                                    <Typography variant="p" component="p" color={theme.palette.primary.main} sx={{ fontWeight: '600' }}>
                                        {team.wins}
                                    </Typography>
                                </TableCell>
                                <TableCell>
                                    <Typography variant="p" component="p" color={theme.palette.primary.main} sx={{ fontWeight: '600' }}>
                                        {team.draws}
                                    </Typography>
                                </TableCell>
                                <TableCell>
                                    <Typography variant="p" component="p" color={theme.palette.primary.main} sx={{ fontWeight: '600' }}>
                                        {team.losses}
                                    </Typography>
                                </TableCell>
                                <TableCell>
                                    <Typography variant="p" component="p" color={theme.palette.primary.main} sx={{ fontWeight: '600' }}>
                                        {team.goalsFor}
                                    </Typography>
                                </TableCell>
                                <TableCell>
                                    <Typography variant="p" component="p" color={theme.palette.primary.main} sx={{ fontWeight: '600' }}>
                                        {team.goalsAgainst}
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