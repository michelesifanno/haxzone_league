import { useState, useEffect } from 'react';
import { useTheme } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Typography, Grid, InputLabel, MenuItem, FormControl, Select, Divider } from '@mui/material';

export default function NextMatch() {

    const theme = useTheme();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const matchCalendar = {
        "1° Giornata": [
            { id: 1, homeTeam: 'Wild Wolves', awayTeam: 'Potatoes FC', date: '05-04-2024' },
            { id: 2, homeTeam: 'Inps Calcio', awayTeam: 'Sportitalia FC', date: '05-04-2024' },
            { id: 3, homeTeam: 'Trmo1', awayTeam: 'Trmo2', date: '05-04-2024' },
            { id: 4, homeTeam: 'Trmo3', awayTeam: 'Trmo4', date: '05-04-2024' },
            { id: 5, homeTeam: 'Trmo5', awayTeam: 'Trmo6', date: '05-04-2024' }
        ],
        "2° Giornata": [
            { id: 6, homeTeam: 'Wild Wolves', awayTeam: 'Inps Calcio', date: '10-04-2024' },
            { id: 7, homeTeam: 'Potatoes FC', awayTeam: 'Sportitalia FC', date: '10-04-2024' },
            { id: 8, homeTeam: 'Trmo1', awayTeam: 'Trmo3', date: '10-04-2024' },
            { id: 9, homeTeam: 'Trmo2', awayTeam: 'Trmo4', date: '10-04-2024' },
            { id: 10, homeTeam: 'Trmo5', awayTeam: 'Trmo6', date: '10-04-2024' }
        ],
        "3° Giornata": [
            { id: 11, homeTeam: 'Wild Wolves', awayTeam: 'Trmo1', date: '01-05-2024' },
            { id: 12, homeTeam: 'Potatoes FC', awayTeam: 'Trmo2', date: '01-05-2024' },
            { id: 13, homeTeam: 'Inps Calcio', awayTeam: 'Trmo3', date: '01-05-2024' },
            { id: 14, homeTeam: 'Sportitalia FC', awayTeam: 'Trmo4', date: '01-05-2024' },
            { id: 15, homeTeam: 'Trmo5', awayTeam: 'Trmo6', date: '01-05-2024' },
            { id: 26, homeTeam: 'Trmo7', awayTeam: 'Trmo8', date: '01-05-2024' }
        ],
        "4° Giornata": [
            { id: 16, homeTeam: 'Wild Wolves', awayTeam: 'Trmo2', date: '06-05-2024' },
            { id: 17, homeTeam: 'Potatoes FC', awayTeam: 'Trmo3', date: '06-05-2024' },
            { id: 18, homeTeam: 'Inps Calcio', awayTeam: 'Trmo4', date: '06-05-2024' },
            { id: 19, homeTeam: 'Sportitalia FC', awayTeam: 'Trmo5', date: '06-05-2024' },
            { id: 20, homeTeam: 'Trmo6', awayTeam: 'Trmo1', date: '06-05-2024' },
            { id: 27, homeTeam: 'Trmo7', awayTeam: 'Trmo8', date: '06-05-2024' },
        ],
        "5° Giornata": [
            { id: 21, homeTeam: 'Wild Wolves', awayTeam: 'Trmo3', date: '11-05-2024' },
            { id: 22, homeTeam: 'Potatoes FC', awayTeam: 'Trmo4', date: '11-05-2024' },
            { id: 23, homeTeam: 'Inps Calcio', awayTeam: 'Trmo5', date: '11-05-2024' },
            { id: 24, homeTeam: 'Sportitalia FC', awayTeam: 'Trmo6', date: '11-05-2024' },
            { id: 25, homeTeam: 'Trmo1', awayTeam: 'Wild Wolves', date: '11-05-2024' },
            { id: 28, homeTeam: 'Trmo7', awayTeam: 'Trmo8', date: '11-05-2024' },
        ]
    };

    const [giornata, setGiornata] = useState(Object.keys(matchCalendar)[0]);

    function convertDate(dateString) {
        const parts = dateString.split('-');
        return `${parts[2]}-${parts[1]}-${parts[0]}`;
    }

    const matchCalendarFormatted = Object.fromEntries(
        Object.entries(matchCalendar).map(([key, value]) => [
            key,
            value.map(match => ({ ...match, date: convertDate(match.date) }))
        ])
    );

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
        { id: 10, logo: '/sportitalia.png', name: 'Trmo6', cap: 'Stempiator', colors: 'black, gold', stadium: '/stadium.png', stadiumName: 'Hax Stadium', foundation: '2024' },
        { id: 11, logo: '/sportitalia.png', name: 'Trmo7', cap: 'Stempiator', colors: 'black, gold', stadium: '/stadium.png', stadiumName: 'Hax Stadium', foundation: '2024' },
        { id: 12, logo: '/sportitalia.png', name: 'Trmo8', cap: 'Stempiator', colors: 'black, gold', stadium: '/stadium.png', stadiumName: 'Hax Stadium', foundation: '2024' },

    ];


    useEffect(() => {
        const currentDate = new Date();
        const formattedCurrentDate = currentDate.toISOString().split('T')[0]; // Ottieni la data attuale nel formato 'YYYY-MM-DD'

        // Trova la giornata corrispondente alla data attuale
        const giornataCorrente = Object.keys(matchCalendar).find(giornata =>
            matchCalendar[giornata].some(match => convertDate(match.date) > formattedCurrentDate)
        );

        // Se trovi la giornata corrispondente, selezionala
        if (giornataCorrente) {
            setGiornata(giornataCorrente);
        }
    }, []);


    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <>
            <Grid container spacing={2} alignItems="center" className={isMobile ? 'nextMatchSectionMobi' : 'nextMatchSection'}>
                {matchCalendar[giornata].map((match) => (
                    <Grid item xs={12} md={4} alignItems="center">
                        <div className='nextMatch'>
                            <Typography variant="p" component="p" color={theme.palette.secondary.main} sx={{ display: 'flex', justifyContent: 'center', fontWeight: '600', textTransform: 'uppercase', paddingBottom: '20px' }}>
                                {giornata}
                            </Typography>
                            <Typography variant="h4" component="h4" color={theme.palette.secondary.main} sx={{ fontWeight: '600', display: 'flex', alignItems: 'center', justifyContent: 'center', textTransform: 'uppercase', paddingBottom: '20px' }}>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <Link to={`/team/${match.homeTeam}`} style={{ textDecoration: 'none' }}>
                                        <img src={teams.find(team => team.name === match.homeTeam)?.logo} alt={match.homeTeam} style={{ width: isMobile ? '100px' : '140px', marginRight: '10px' }} />
                                    </Link>
                                    <span style={{ padding: '0px 20px' }}>VS.</span>
                                    <Link to={`/team/${match.awayTeam}`} style={{ textDecoration: 'none' }}>
                                        <img src={teams.find(team => team.name === match.awayTeam)?.logo} alt={match.awayTeam} style={{ width: isMobile ? '100px' : '140px', marginLeft: '10px' }} />
                                    </Link>
                                </div>
                            </Typography>
                            <Typography variant="p" component="p" color={theme.palette.text.primary} sx={{ fontSize: '14px', display: 'flex', justifyContent: 'center' }}>
                                {match.date}
                            </Typography>
                        </div>
                    </Grid>
                ))}
            </Grid >
        </>
    );
}