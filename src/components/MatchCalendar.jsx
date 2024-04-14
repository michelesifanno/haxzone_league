import { useState, useEffect } from 'react';
import { useTheme } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import { Typography, Grid, InputLabel, MenuItem, FormHelperText, FormControl, Select, Divider } from '@mui/material';

function MatchCalendar({ matchCalendar, matches }) {

    const theme = useTheme();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

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


    const [selectedGiornata, setSelectedGiornata] = useState(Object.keys(matchCalendar)[0]);

    useEffect(() => {
        const currentDate = new Date();
        const formattedCurrentDate = currentDate.toISOString().split('T')[0]; // Ottieni la data attuale nel formato 'YYYY-MM-DD'
    
        // Trova la giornata più vicina e futura rispetto alla data attuale
        const giornataCorrente = Object.keys(matchCalendar).find(giornata =>
            matchCalendar[giornata].some(match => new Date(match.date) >= currentDate)
        );
    
        // Se trovi la giornata corrispondente, selezionala
        if (giornataCorrente) {
            setSelectedGiornata(giornataCorrente);
        }
    }, [matchCalendar]);
    
    
    const handleGiornataChange = (event) => {
        setSelectedGiornata(event.target.value);
    };

    return (
        <>
            <Grid container spacing={2} justifyContent="flex-start" alignItems="center">
                <Grid item xs={12} md={9} alignItems="center">
                    <Typography variant="h4" component="h4" color={theme.palette.primary.main} sx={{ fontWeight: '600', paddingBottom:'10px' }}>
                        CALENDARIO E RISULTATI
                    </Typography>
                    <Typography variant="p" component="p" color={theme.palette.text.primary}>
                        Seleziona la giornata per vedere le partite in programma e/o i risultati.
                    </Typography>
                </Grid>
                <Grid item xs={12} md={3} alignItems="center">
                    <FormControl sx={{ m: 1, width: '100%', color: 'primary.main' }}>
                        <InputLabel sx={{ color: 'primary.main' }} id="giornata-label">Giornata</InputLabel>
                        <Select
                            labelId="giornata-label"
                            id="giornata-select"
                            value={selectedGiornata}
                            label="Giornata"
                            onChange={handleGiornataChange}
                            sx={{ color: 'primary.main' }}
                            renderValue={(selected) => (
                                <Typography variant="h5" sx={{ color: 'secondary.main' }}>{selected}</Typography>
                            )}
                        >
                            {Object.keys(matchCalendar).map((giornata) => (
                                <MenuItem key={giornata} value={giornata}>{giornata}</MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Grid>
            </Grid>
            <Divider sx={{margin:'10px 0px'}}/>
            {(matches[selectedGiornata] || matchCalendar[selectedGiornata] || []).map((match) => (
                <Grid container spacing={2} justifyContent="flex-start" alignItems="center" key={match.id} className="matchGrid" sx={{ backgroundColor: '#fbfbfd', padding: '10px', border: '1px solid #eee', margin: '20px 0px' }}>
                    <Grid item xs={12} md={1} alignItems="center" sx={{ padding: '10px' }}>
                        <Typography variant="p" component="p" color={theme.palette.text.primary} sx={{ fontSize: '14px' }}>
                            {selectedGiornata}<br />
                            {match.date}
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={4} alignItems="center" sx={{ padding: '10px' }}>
                        <Typography variant="h6" component="h6" color={theme.palette.primary.main} sx={{ fontWeight: '600', display: 'flex', alignItems: 'center', justifyContent: 'flex-end', textTransform: 'uppercase' }}>
                            <Link
                                to={`/team/${match.homeTeam}`}
                                style={{
                                    color: theme.palette.primary.main,
                                    textDecoration: 'none',
                                    fontWeight:'700',
                                }}
                            >
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    {match.homeTeam} <img src={teams.find(team => team.name === match.homeTeam)?.logo} alt={match.homeTeam} style={{ width: '50px', height: '50px', marginLeft: '10px' }} />
                                </div>
                            </Link>
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={2} alignItems="center" justifyContent="center" sx={{ padding: '10px' }}>
                        <Typography variant="h5" component="h5" color={theme.palette.secondary.main} sx={{ fontWeight: '600', display: 'flex', justifyContent: 'center' }}>
                            {matches[selectedGiornata] ? (
                                match.homeScore !== undefined && match.awayScore !== undefined ? (
                                    <span>{match.homeScore}-{match.awayScore}</span>
                                ) : (
                                    <span>VS</span>
                                )
                            ) : (
                                <span>VS</span>
                            )}
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={4} alignItems="center" sx={{ padding: '10px' }}>
                        <Typography variant="h6" component="h6" color={theme.palette.primary.main} sx={{ fontWeight: '600', display: 'flex', alignItems: 'center', justifyContent: 'flex-start', textTransform: 'uppercase' }}>
                            <Link
                                to={`/team/${match.awayTeam}`}
                                style={{
                                    color: theme.palette.primary.main,
                                    textDecoration: 'none',
                                    fontWeight:'700',
                                }}
                            >
                                <div style={{ display: 'flex', alignItems: 'center', textAlign: 'left' }}>
                                    <img src={teams.find(team => team.name === match.awayTeam)?.logo} alt={match.awayTeam} style={{ width: '50px', height: '50px', marginRight: '10px' }} /> {match.awayTeam}
                                </div>
                            </Link>
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={1} alignItems="center">
                        {matches[selectedGiornata] ? (<Typography variant="h5" component="h5">✅</Typography>) : (<Typography variant="h5" component="h5">🕐</Typography>)}
                    </Grid>
                </Grid>
            ))}
        </>
    );
}

export default MatchCalendar;