import { useState, useEffect } from 'react';
import { styled, useTheme } from '@mui/material/styles';
import { Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';


export default function TeamMatchResults({ calendar, name }) {

    const theme = useTheme();

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


    // Estrai le partite future del calendario per il team selezionato
    const futureMatches = Object.values(calendar)
        .flat()
        .filter(match => match.homeTeam === name || match.awayTeam === name)
        .slice(0, 5); // Prendi solo le prossime 5 partite

    return (
        <>
            <TableContainer component={Paper}>
                <Table aria-label="upcoming matches table">
                    <TableHead sx={{ backgroundColor: theme.palette.third.main }}>
                        <TableRow>
                            <TableCell>
                                <Typography variant="p" component="p" color={theme.palette.primary.main} sx={{ textTransform: 'uppercase', fontWeight: 'bold' }}>
                                    Data
                                </Typography>
                            </TableCell>
                            <TableCell>
                                <Typography variant="p" component="p" color={theme.palette.primary.main} sx={{ textTransform: 'uppercase', fontWeight: 'bold' }}>
                                    Match
                                </Typography>
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {futureMatches.map((match) => (
                            <TableRow key={match.id}>
                                <TableCell>
                                    <Typography variant="body2" component="p" color={theme.palette.primary.main}>
                                        {match.date}
                                    </Typography>
                                </TableCell>
                                <TableCell>
                                    <Typography variant="body2" component="p" color={theme.palette.primary.main}>
                                        {match.homeTeam} <img src={teams.find(team => team.name === match.homeTeam)?.logo} alt={match.homeTeam} style={{ width: '50px', height: '50px', marginLeft: '10px' }} /> vs                                     <img src={teams.find(team => team.name === match.awayTeam)?.logo} alt={match.awayTeam} style={{ width: '50px', height: '50px', marginRight: '10px' }} /> {match.awayTeam}
                                    </Typography>
                                </TableCell>
                                <TableCell>
                                    <Typography variant="body2" component="p" color={theme.palette.primary.main}>
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