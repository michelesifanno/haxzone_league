import { useState, useEffect } from 'react';
import { styled, useTheme } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import { Typography, Divider, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Grid, Container, Card, CardActions, CardContent, CardMedia, Button } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';


export default function TeamStats({ name }) {

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));


    const [teamStats, setTeamStats] = useState({}); // Inizializza teamStats come un oggetto vuoto

    useEffect(() => {
        // Trova i giocatori della squadra selezionata
        const leaderboard = [
            { id: 1, teamName: 'Wild Wolves', points: 0, gamesPlayed: 0, goals: 0, wins: 0, draws: 0, losses: 0, goalsAgainst: 0, difference:0 },
            { id: 2, teamName: 'Potatoes FC', points: 0, gamesPlayed: 0, goals: 0, wins: 0, draws: 0, losses: 0, goalsAgainst: 0, difference:0 },
            { id: 3, teamName: 'Inps Calcio', points: 0, gamesPlayed: 0, goals: 0, wins: 0, draws: 0, losses: 0, goalsAgainst: 0, difference:0 },
            { id: 4, teamName: 'Sportitalia FC', points: 0, gamesPlayed: 0, goals: 0, wins: 0, draws: 0, losses: 0, goalsAgainst: 0, difference:0 },
            { id: 5, teamName: 'Trmo1', points: 0, gamesPlayed: 0, goals: 0, wins: 0, draws: 0, losses: 0, goalsAgainst: 0, difference:0 },
            { id: 6, teamName: 'Trmo2', points: 0, gamesPlayed: 0, goals: 0, wins: 0, draws: 0, losses: 0, goalsAgainst: 0, difference:0 },
            { id: 7, teamName: 'Trmo3', points: 0, gamesPlayed: 0, goals: 0, wins: 0, draws: 0, losses: 0, goalsAgainst: 0, difference:0 },
            { id: 8, teamName: 'Trmo4', points: 0, gamesPlayed: 0, goals: 0, wins: 0, draws: 0, losses: 0, goalsAgainst: 0, difference:0 },
            { id: 9, teamName: 'Trmo5', points: 0, gamesPlayed: 0, goals: 0, wins: 0, draws: 0, losses: 0, goalsAgainst: 0, difference:0 },
            { id: 10, teamName: 'Trmo6', points: 0, gamesPlayed: 0, goals: 0, wins: 0, draws: 0, losses: 0, goalsAgainst: 0, difference:0 }
        ];
        const statsTeam = leaderboard.find(team => team.teamName === name);
        setTeamStats(statsTeam); 
    }, [name]);


    return (
        <>
            <Grid container spacing={2} justifyContent="flex-start" alignItems="left">
                <Grid item xs={6} md={4} alignItems="left" sx={{ padding: { xs: '20px', md: '40px' } }}>
                    <Typography variant="h3" component="h3" color="secondary.main" className="textStats" sx={{ paddingBottom: '10px' }}>
                        {teamStats.gamesPlayed}
                    </Typography>
                    <Typography variant={isMobile ? 'h6' : 'h5'} component="h5" color="primary.main" className="textStats">
                    👟 PARTITE
                    </Typography>
                </Grid>
                <Grid item xs={6} md={4} alignItems="left" sx={{ padding: { xs: '20px', md: '40px' } }}>
                    <Typography variant="h3" component="h3" color="secondary.main" className="textStats" sx={{ paddingBottom: '10px' }}>
                        {teamStats.goals}
                    </Typography>
                    <Typography variant={isMobile ? 'h6' : 'h5'} component="h5" color="primary.main" className="textStats">
                    ⚽ GOL
                    </Typography>
                </Grid>
                <Grid item xs={6} md={4} alignItems="left" sx={{ padding: { xs: '20px', md: '40px' } }}>
                    <Typography variant="h3" component="h3" color="secondary.main" className="textStats" sx={{ paddingBottom: '10px' }}>
                        {teamStats.wins}
                    </Typography>
                    <Typography variant={isMobile ? 'h6' : 'h5'} component="h5" color="primary.main" className="textStats">
                    ✨ VITTORIE
                    </Typography>
                </Grid>
                <Grid item xs={6} md={4} alignItems="left" sx={{ padding: { xs: '20px', md: '40px' } }}>
                    <Typography variant="h3" component="h3" color="secondary.main" className="textStats" sx={{ paddingBottom: '10px' }}>
                        {teamStats.draws}
                    </Typography>
                    <Typography variant={isMobile ? 'h6' : 'h5'} component="h5" color="primary.main" className="textStats">
                    📌 PAREGGI
                    </Typography>
                </Grid>
                <Grid item xs={6} md={4} alignItems="left" sx={{ padding: { xs: '20px', md: '40px' } }}>
                    <Typography variant="h3" component="h3" color="secondary.main" className="textStats" sx={{ paddingBottom: '10px' }}>
                        {teamStats.losses}
                    </Typography>
                    <Typography variant={isMobile ? 'h6' : 'h5'} component="h5" color="primary.main" className="textStats">
                    ❌ SCONFITTE
                    </Typography>
                </Grid>
                <Grid item xs={6} md={4} alignItems="left" sx={{ padding: { xs: '20px', md: '40px' } }}>
                    <Typography variant="h3" component="h3" color="secondary.main" className="textStats" sx={{ paddingBottom: '10px' }}>
                        {teamStats.goalsAgainst}
                    </Typography>
                    <Typography variant={isMobile ? 'h6' : 'h5'} component="h5" color="primary.main" className="textStats">
                    😤 GOL SUBITI
                    </Typography>
                </Grid>
            </Grid>
        </>
    )
}