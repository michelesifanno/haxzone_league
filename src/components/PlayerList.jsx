import { useState, useEffect } from 'react';
import { styled, useTheme } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import { Typography, Divider, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Grid, Container, Card, CardActions, CardContent, CardMedia, Button } from '@mui/material';


export default function PlayerList({ teamName }) {

    const theme = useTheme();

    const [teamPlayers, setTeamPlayers] = useState([]);

    useEffect(() => {
        // Trova i giocatori della squadra selezionata
        const players = [
            { id: 1, avatar: '🍌', name: 'Berlin', team: { name: 'Inps Calcio', logo: '/inps.png' }, role: 'GK' },
            { id: 2, avatar: '10', name: 'Del Piero', team: { name: 'Wild Wolves', logo: '/wolves.png' }, role: 'ST' },
            { id: 3, avatar: '🥔', name: 'Cheneso', team: { name: 'Potatoes FC', logo: '/potatoes.png' }, role: 'ST' },
        ];
        const playersInTeam = players.filter(player => player.team.name === teamName);
        setTeamPlayers(playersInTeam);
    }, [teamName]);


    return (
        <>
            <TableContainer component={Paper}>
                <Table aria-label="leaderboard table">
                    <TableHead sx={{ backgroundColor: theme.palette.third.main }}>
                        <TableRow>
                            <TableCell>
                                <Typography variant="p" component="p" color={theme.palette.primary.main} sx={{ textTransform: 'uppercase', fontWeight: 'bold' }}>
                                    Avatar
                                </Typography>
                            </TableCell>
                            <TableCell>
                                <Typography variant="p" component="p" color={theme.palette.primary.main} sx={{ textTransform: 'uppercase', fontWeight: 'bold' }}>
                                    Player
                                </Typography>
                            </TableCell>
                            <TableCell>
                                <Typography variant="p" component="p" color={theme.palette.primary.main} sx={{ textTransform: 'uppercase', fontWeight: 'bold' }}>
                                    Ruolo
                                </Typography>
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {teamPlayers.map((player) => (
                            <TableRow key={player.id}>
                                <TableCell>
                                    <Typography variant="p" component="p" color={theme.palette.primary.main} sx={{ fontWeight: '600' }}>
                                        {player.avatar}
                                    </Typography>
                                </TableCell>
                                <TableCell>
                                    <Typography variant="p" component="p" color={theme.palette.primary.main} sx={{ fontWeight: '600' }}>
                                        <Link
                                            to={`/player/${player.name}`}
                                            style={{
                                                color: theme.palette.primary.main,
                                                textDecoration: 'none',
                                            }}
                                        >
                                            {player.name}
                                        </Link>
                                    </Typography>
                                </TableCell>
                                <TableCell>
                                    <Typography variant="p" component="p" color={theme.palette.primary.main} sx={{ fontWeight: '600' }}>
                                        {player.role}
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