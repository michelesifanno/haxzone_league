import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import { Typography, Divider, Grid, Container, Card, CardActions, CardContent, Button } from '@mui/material';
import { useParams } from 'react-router-dom';
import ArrowOutwardOutlinedIcon from '@mui/icons-material/ArrowOutwardOutlined';
import useMediaQuery from '@mui/material/useMediaQuery';

export default function LeagueAwards() {

    const { name } = useParams();
    const theme = useTheme();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [name]);



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


    // Best Team: la miglior squadra (la squadra che ha fatto più punti)
    const bestTeamData = leaderboard.reduce((prev, current) => (prev.points > current.points) ? prev : current);
    const bestTeam = teams.find(team => team.name === bestTeamData.teamName);
    const bestTeamLogo = bestTeam ? bestTeam.logo : '';

    // Capocannoniere: il capocannoniere (chi ha fatto più goal)
    const bestScorer = playerStats.reduce((prev, current) => (prev.stats.goals > current.stats.goals) ? prev : current);

    // Paratutto: chi ha fatto più Clean Sheets
    const bestGoalkeeper = playerStats.reduce((prev, current) => (prev.stats.cleanSheets > current.stats.cleanSheets) ? prev : current);

    // Veterano: quello che ha giocato di più (quello che ha più playtime)
    const mostPlayed = playerStats.reduce((prev, current) => (prev.stats.playtime > current.stats.playtime) ? prev : current);

    // Autogol: chi ha fatto più autogol
    const mostOwnGoalsPlayer = playerStats.reduce((prev, current) => (prev.stats.ownGoals > current.stats.ownGoals) ? prev : current);

    // Miglior attacco: la squadra che ha fatto più gol
    const bestAttackData = leaderboard.reduce((prev, current) => (prev.goalsFor > current.goalsFor) ? prev : current);
    const bestAttack = teams.find(team => team.name === bestAttackData.teamName);
    const bestAttackLogo = bestAttack ? bestAttack.logo : '';

    // Miglior difesa: la squadra che ha preso meno gol
    const bestDefenseData = leaderboard.reduce((prev, current) => (prev.goalsAgainst < current.goalsAgainst) ? prev : current);
    const bestDefense = teams.find(team => team.name === bestDefenseData.teamName);
    const bestDefenseLogo = bestDefense ? bestDefense.logo : '';

    // Assist Man: chi ha fatto più assist
    const bestAssistant = playerStats.reduce((prev, current) => (prev.stats.assists > current.stats.assists) ? prev : current);

    // Hattrick: chi ha fatto più hattrick
    const mostHatTricksPlayer = playerStats.reduce((prev, current) => (prev.stats.hatTricks > current.stats.hatTricks) ? prev : current);

    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));


    return (
        <>
            <Grid container spacing={2} justifyContent="flex-start" alignItems="center">
                <Grid item xs={12} alignItems="center">
                    <Typography variant="h4" component="h4" color={theme.palette.primary.main} sx={{ fontWeight: '600', paddingBottom: '10px' }}>
                        AWARDS
                    </Typography>
                    <Typography variant="p" component="p" color={theme.palette.text.primary}>
                        Di seguito, gli Awards della League... Finora!
                    </Typography>
                </Grid>
            </Grid>
            <Grid container spacing={2} justifyContent="flex-start" alignItems="left" sx={{ paddingTop: '40px' }}>
                <Grid xs={12} md={4} alignItems="left" className='statsGrid'>
                    <Typography variant="h3" component="h3" color="secondary.main" className="textStats" sx={{ paddingBottom: '10px' }}>
                        <Link
                            to={`/team/${bestTeamData.teamName}`}
                            style={{
                                color: theme.palette.secondary.main,
                                textDecoration: 'none',
                            }}
                        >
                            <img src={bestTeamLogo} alt="Logo Team" style={{ width: 200 }} />
                            </Link>
                    </Typography>
                    <Typography variant="h5" component="h5" color="primary.main" className="textStats">
                    🏆 MIGLIOR TEAM
                    </Typography>
                </Grid>
                <Grid xs={12} md={4} alignItems="left" className='statsGrid'>
                    <Typography variant="h3" component="h3" color="secondary.main" className="textStats" sx={{ paddingBottom: '10px' }}>
                    <Link
                            to={`/team/${bestAttack.teamName}`}
                            style={{
                                color: theme.palette.secondary.main,
                                textDecoration: 'none',
                            }}
                        >
                        <img src={bestAttackLogo} alt="Logo Team" style={{ width: 200 }} />
                        </Link>
                    </Typography>
                    <Typography variant="h5" component="h5" color="primary.main" className="textStats">
                    ⛳ MIGLIOR ATTACCO
                    </Typography>
                </Grid>
                <Grid xs={12} md={4} alignItems="left" className='statsGrid'>
                    <Typography variant="h3" component="h3" color="secondary.main" className="textStats" sx={{ paddingBottom: '10px' }}>
                    <Link
                            to={`/team/${bestDefense.teamName}`}
                            style={{
                                color: theme.palette.secondary.main,
                                textDecoration: 'none',
                            }}
                        >
                        <img src={bestDefenseLogo} alt="Logo Team" style={{ width: 200 }} />
                        </Link>
                    </Typography>
                    <Typography variant="h5" component="h5" color="primary.main" className="textStats">
                    🛡️ MIGLIOR DIFESA
                    </Typography>
                </Grid>
                <Grid xs={12} md={4} alignItems="left" className='statsGrid'>
                    <Typography variant="h3" component="h3" color="secondary.main" className="textStats" sx={{ paddingBottom: '10px' }}>
                    <Link
                            to={`/player/${bestScorer.name}`}
                            style={{
                                color: theme.palette.secondary.main,
                                textDecoration: 'none',
                                fontWeight:'600',
                            }}
                        >
                        {bestScorer.name}
                        </Link>
                    </Typography>
                    <Typography variant="h5" component="h5" color="primary.main" className="textStats">
                    ⚽ CAPOCANNONIERE
                    </Typography>
                </Grid>
                <Grid xs={12} md={4} alignItems="left" className='statsGrid'>
                    <Typography variant="h3" component="h3" color="secondary.main" className="textStats" sx={{ paddingBottom: '10px' }}>
                    <Link
                            to={`/player/${bestAssistant.name}`}
                            style={{
                                color: theme.palette.secondary.main,
                                textDecoration: 'none',
                                fontWeight:'600',
                            }}
                        >
                        {bestAssistant.name}
                        </Link>
                    </Typography>
                    <Typography variant="h5" component="h5" color="primary.main" className="textStats">
                    👟 ASSIST MAN
                    </Typography>
                </Grid>
                <Grid xs={12} md={4} alignItems="left" className='statsGrid'>
                    <Typography variant="h3" component="h3" color="secondary.main" className="textStats" sx={{ paddingBottom: '10px' }}>
                    <Link
                            to={`/player/${bestGoalkeeper.name}`}
                            style={{
                                color: theme.palette.secondary.main,
                                textDecoration: 'none',
                                fontWeight:'600',
                            }}
                        >
                        {bestGoalkeeper.name}
                        </Link>
                    </Typography>
                    <Typography variant="h5" component="h5" color="primary.main" className="textStats">
                    🥅 PARATUTTO
                    </Typography>
                </Grid>
                <Grid xs={12} md={4} alignItems="left" className='statsGrid'>
                    <Typography variant="h3" component="h3" color="secondary.main" className="textStats" sx={{ paddingBottom: '10px' }}>
                    <Link
                            to={`/player/${mostPlayed.name}`}
                            style={{
                                color: theme.palette.secondary.main,
                                textDecoration: 'none',
                                fontWeight:'600',
                            }}
                        >
                        {mostPlayed.name}
                        </Link>
                    </Typography>
                    <Typography variant="h5" component="h5" color="primary.main" className="textStats">
                    🎖️ VETERANO
                    </Typography>
                </Grid>
                <Grid xs={12} md={4} alignItems="left" className='statsGrid'>
                    <Typography variant="h3" component="h3" color="secondary.main" className="textStats" sx={{ paddingBottom: '10px' }}>
                    <Link
                            to={`/player/${mostHatTricksPlayer.name}`}
                            style={{
                                color: theme.palette.secondary.main,
                                textDecoration: 'none',
                                fontWeight:'600',
                            }}
                        >
                        {mostHatTricksPlayer.name}
                        </Link>
                    </Typography>
                    <Typography variant="h5" component="h5" color="primary.main" className="textStats">
                    3️⃣ HATTRICK MAN
                    </Typography>
                </Grid>
                <Grid xs={12} md={4} alignItems="left" className='statsGrid'>
                    <Typography variant="h3" component="h3" color="secondary.main" className="textStats" sx={{ paddingBottom: '10px' }}>
                    <Link
                            to={`/player/${mostOwnGoalsPlayer.name}`}
                            style={{
                                color: theme.palette.secondary.main,
                                textDecoration: 'none',
                                fontWeight:'600',
                            }}
                        >
                        {mostOwnGoalsPlayer.name}
                        </Link>
                    </Typography>
                    <Typography variant="h5" component="h5" color="primary.main" className="textStats">
                    ❌ CAPO AUTOCANNONIERE
                    </Typography>
                </Grid>
            </Grid>
        </>
    );
}