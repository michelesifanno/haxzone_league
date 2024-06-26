import { useState, useEffect } from 'react';
import { styled, useTheme } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import { Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';


export default function LeaderboardTeam({ teams, name }) {
    
    const theme = useTheme();

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

    let [classifica, setClassifica] = useState(leaderboard);

    useEffect(() => {
        const updatedClassifica = leaderboard.map((team, index) => ({
            ...team,
            position: index + 1,
            isHighlighted: team.teamName === name,
            logo: teams.find(t => t.name === team.teamName)?.logo,
        }));
        setClassifica(updatedClassifica);
    }, [name, teams]);

    const teamIndex = classifica.findIndex(team => team.teamName === name);
    const position = teamIndex + 1;

    let numTeamsToShowAbove;
    let numTeamsToShowBelow;
    
    if (position === classifica.length) {
        // Se la squadra è l'ultima, mostra 4 squadre sopra
        numTeamsToShowAbove = Math.min(position - 1, 4);
        numTeamsToShowBelow = 0;
    } else if (position === classifica.length-1){
        // Altrimenti, calcola il numero di squadre sopra e sotto in modo simmetrico
        numTeamsToShowAbove = Math.min(position - 1, 3);
        numTeamsToShowBelow = 1;
    }
    else {
        // Altrimenti, calcola il numero di squadre sopra e sotto in modo simmetrico
        numTeamsToShowAbove = Math.min(position - 1, Math.ceil((5 - 1) / 2));
        numTeamsToShowBelow = Math.min(classifica.length - position, 4 - numTeamsToShowAbove);
    }
    
    const start = Math.max(0, position - numTeamsToShowAbove - 1);
    const end = Math.min(classifica.length - 1, position + numTeamsToShowBelow - 1);
                            

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
                                    PT
                                </Typography>
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {classifica.slice(start, end + 1).map((team, index) => (
                            <TableRow key={team.id} className={team.teamName === name ? 'highlighted-row' : ''}>
                                <TableCell>
                                    <Typography variant="p" component="p" color={theme.palette.primary.main} sx={{ fontWeight: '600' }}>
                                        {team.position}
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
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}