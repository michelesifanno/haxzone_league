import { useState, useEffect } from 'react';
import { styled, useTheme } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import { Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';


export default function TeamMatchResults({ matches, name }) {

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


    // Estrai le partite future del calendario per il team selezionato
    const currentDate = new Date();
    const formattedCurrentDate = currentDate.toISOString().split('T')[0]; // Ottieni la data attuale nel formato 'YYYY-MM-DD'

    const futureMatches = Object.values(matches)
        .flatMap(matches => matches.filter(match => {
            const [day, month, year] = match.date.split('-');
            const matchDate = new Date(year, month - 1, day); // month - 1 perché il mese è zero-based
            return (match.homeTeam === name || match.awayTeam === name) && matchDate < currentDate;
        }))
        .slice(0, 5);


    return (
        <>
            <TableContainer component={Paper}>
                <Table aria-label="upcoming matches table">
                    <TableHead sx={{ backgroundColor: theme.palette.third.main }}>
                        <TableRow>
                            {isMobile ? '' : (<TableCell>
                                <Typography variant="p" component="p" color={theme.palette.primary.main} sx={{ textTransform: 'uppercase', fontWeight: 'bold' }}>
                                    Data
                                </Typography>
                            </TableCell>)}
                            <TableCell>
                                <Typography variant="p" component="p" color={theme.palette.primary.main} sx={{ textTransform: 'uppercase', fontWeight: 'bold' }}>
                                    Match
                                </Typography>
                            </TableCell>
                            <TableCell>
                                <Typography variant="p" component="p" color={theme.palette.primary.main} sx={{ textTransform: 'uppercase', fontWeight: 'bold' }}>
                                    Risultato
                                </Typography>
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {futureMatches.map((match) => (
                            <TableRow key={match.id}>
                                {isMobile ? '' : (<TableCell>
                                    <Typography variant="p" component="p" color={theme.palette.primary.main}>
                                        {match.date}
                                    </Typography>
                                </TableCell>)}
                                <TableCell>
                                    <Typography variant="p" component="p">
                                        {match.homeTeam === name ? (
                                            <Typography variant="p" component="p" sx={{ fontWeight: '600' }}>
                                                <Link
                                                    to={`/team/${match.awayTeam}`}
                                                    style={{
                                                        textDecoration: 'none',
                                                        color: match.homeScore > match.awayScore ? 'green' : match.awayScore > match.homeScore ? 'red' : match.homeScore === match.awayScore ? 'darkgrey' : '',
                                                    }}
                                                >
                                                    <div style={{ display: 'flex', alignItems: 'center' }}>
                                                        <strong style={{ marginRight: '10px' }}>VS</strong>
                                                        <img src={teams.find(team => team.name === match.awayTeam)?.logo} alt={match.awayTeam} style={{ width: '30px', marginRight: '10px' }} />
                                                        <span>{match.awayTeam}</span>
                                                    </div>
                                                </Link>
                                            </Typography>
                                        ) : (
                                            <Typography variant="p" component="p" sx={{ fontWeight: '600'}}>
                                                <Link
                                                    to={`/team/${match.homeTeam}`}
                                                    style={{
                                                        textDecoration: 'none',
                                                        color: match.homeScore > match.awayScore ? 'red' : match.awayScore > match.homeScore ? 'green' : match.homeScore === match.awayScore ? 'darkgrey' : '',
                                                    }}
                                                >
                                                    <div style={{ display: 'flex', alignItems: 'center' }}>
                                                        <strong style={{ marginRight: '10px' }}>VS</strong> <img src={teams.find(team => team.name === match.homeTeam)?.logo} alt={match.homeTeam} style={{ width: '30px', marginRight: '10px' }} />
                                                        <span>{match.homeTeam}</span>
                                                    </div>
                                                </Link>
                                            </Typography>
                                        )}
                                    </Typography>
                                </TableCell>
                                <TableCell>
                                {match.homeTeam === name ? (
                                <Typography variant="p" component="p" sx={{ fontWeight: '600', color: match.homeScore > match.awayScore ? 'green' : match.awayScore > match.homeScore ? 'red' : match.homeScore === match.awayScore ? 'darkgrey' : '' }}>
                                        {match.homeScore} - {match.awayScore}
                                    </Typography>
                                ) :
                                (
                                    <Typography variant="p" component="p" sx={{ fontWeight: '600', color: match.homeScore > match.awayScore ? 'red' : match.awayScore > match.homeScore ? 'green' : match.homeScore === match.awayScore ? 'darkgrey' : '' }}>
                                    {match.homeScore} - {match.awayScore}
                                </Typography>
                                )}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}