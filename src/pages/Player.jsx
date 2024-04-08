import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { Navigation } from 'swiper/modules';
import { styled, useTheme } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import { Typography, Divider, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Grid, Container, Card, CardActions, CardContent, CardMedia, Button } from '@mui/material';
import { useParams } from 'react-router-dom';
import ArrowOutwardOutlinedIcon from '@mui/icons-material/ArrowOutwardOutlined';



export default function Player() {

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

    // Cerco il calciatore
    const player = players.find((player) => player.name === name);

    if (!player) {
        console.log('Giocatore non trovato');
        return null;
    }

    // Cerco le statistiche per il calciatore corrente
    const stats = playerStats.find((stat) => stat.name === name);

    if (!stats) {
        console.log('Statistiche non trovate');
        return null;
    }

    const { avatar, team, role } = player;
    const { name: teamName, logo: teamLogo } = team;

    const [filteredPlayers, setFilteredPlayers] = useState([]);

    useEffect(() => {
        // Filtro i giocatori escludendo quello corrispondente al parametro name
        const filtered = players.filter(player => player.name !== name);
        setFilteredPlayers(filtered);
    }, [name]);


    return (
        <>
            <Container maxWidth={false} sx={{
                backgroundColor: 'primary.main',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: '-80px',
                minWidth: '100vw',
            }}>
                <Box sx={{ padding: { xs: '120px 20px', md: '160px 20px' }, textAlign: 'center' }}>
                    <Typography variant="h2" component="h2" color={theme.palette.text.secondary} className="textStats">
                        {player.avatar} {player.name} <span style={{ fontWeight: '400', color: '#fff' }}>({player.role})</span>
                    </Typography>
                    <img src={teamLogo} alt="Logo Team" style={{ width: 150, paddingTop: '40px' }} />
                    <Grid container spacing={4} justifyContent="center" alignItems="center" sx={{ paddingTop: '40px' }}>
                        <Grid xs={6} alignItems="center" className='statsGrid'>
                            <Typography variant="h2" component="h2" color="text.third" className="textStats" sx={{ paddingBottom: '10px' }}>
                                {stats.stats.value} mil.
                            </Typography>
                            <Typography variant="h4" component="h4" color="text.main" className="textStats">
                                💸 VALORE
                            </Typography>
                        </Grid>
                        <Grid xs={6} alignItems="center" className='statsGrid'>
                            <Typography variant="h2" component="h2" color="text.third" className="textStats" sx={{ paddingBottom: '10px' }}>
                                {stats.stats.winrate}
                            </Typography>
                            <Typography variant="h4" component="h4" color="text.main" className="textStats">
                                💯 WINRATE
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid container spacing={4} justifyContent="center" alignItems="center" sx={{ paddingTop: '40px' }}>
                        <Grid xs={6} alignItems="center" className='statsGrid'>
                            <Typography variant="h2" component="h2" color="text.third" className="textStats" sx={{ paddingBottom: '10px' }}>
                                {stats.stats.games}
                            </Typography>
                            <Typography variant="h4" component="h4" color="text.main" className="textStats">
                                🏟️ GAMES
                            </Typography>
                        </Grid>
                        <Grid xs={6} alignItems="center" className='statsGrid'>
                            <Typography variant="h2" component="h2" color="text.third" className="textStats" sx={{ paddingBottom: '10px' }}>
                                {stats.stats.goals}
                            </Typography>
                            <Typography variant="h4" component="h4" color="text.main" className="textStats">
                                ⚽ GOALS
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid container spacing={4} justifyContent="center" alignItems="center" sx={{ paddingTop: '40px' }}>
                        <Grid xs={6} alignItems="center" className='statsGrid'>
                            <Typography variant="h2" component="h2" color="text.third" className="textStats" sx={{ paddingBottom: '10px' }}>
                                {stats.stats.wins}
                            </Typography>
                            <Typography variant="h4" component="h4" color="text.main" className="textStats">
                                ✨ WINS
                            </Typography>
                        </Grid>
                        <Grid xs={6} alignItems="center" className='statsGrid'>
                            <Typography variant="h2" component="h2" color="text.third" className="textStats" sx={{ paddingBottom: '10px' }}>
                                {stats.stats.playtime}
                            </Typography>
                            <Typography variant="h4" component="h4" color="text.main" className="textStats">
                                ⏱️ PLAYTIME
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid container spacing={4} justifyContent="center" alignItems="center" sx={{ paddingTop: '40px' }}>
                        <Grid xs={6} alignItems="center" className='statsGrid'>
                            <Typography variant="h2" component="h2" color="text.third" className="textStats" sx={{ paddingBottom: '10px' }}>
                                {stats.stats.ownGoals}
                            </Typography>
                            <Typography variant="h4" component="h4" color="text.main" className="textStats">
                                ❌ OWN GOALS
                            </Typography>
                        </Grid>
                        <Grid xs={6} alignItems="center" className='statsGrid'>
                            <Typography variant="h2" component="h2" color="text.third" className="textStats" sx={{ paddingBottom: '10px' }}>
                                {stats.stats.assists}
                            </Typography>
                            <Typography variant="h4" component="h4" color="text.main" className="textStats">
                                👟 ASSISTS
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid container spacing={4} justifyContent="center" alignItems="center" sx={{ paddingTop: '40px' }}>
                        <Grid xs={6} alignItems="center" className='statsGrid'>
                            <Typography variant="h2" component="h2" color="text.third" className="textStats" sx={{ paddingBottom: '10px' }}>
                                {stats.stats.cleanSheets}
                            </Typography>
                            <Typography variant="h4" component="h4" color="text.main" className="textStats">
                                🥅 CLEAN SHEETS
                            </Typography>
                        </Grid>
                        <Grid xs={6} alignItems="center" className='statsGrid'>
                            <Typography variant="h2" component="h2" color="text.third" className="textStats" sx={{ paddingBottom: '10px' }}>
                                {stats.stats.hatTricks}
                            </Typography>
                            <Typography variant="h4" component="h4" color="text.main" className="textStats">
                                3️⃣ HAT TRICK
                            </Typography>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
            <Container maxWidth="lg" sx={{
                backgroundColor: '#fff',
                minWidth: '100%',
                margin: '0 auto',
            }}>
                <Box sx={{ padding: '80px 40px' }}>
                    <Typography variant="h3" component="h3" color={theme.palette.primary.main} sx={{ fontWeight: '600' }}>
                        SCOPRI ANCHE
                    </Typography>
                    <br />
                    <Typography variant="p" component="p" color={theme.palette.text.primary}>
                        Clicca sul singolo Player per visualizzare di più.
                    </Typography>
                    <br />
                    <Swiper
                        slidesPerView={3}
                        spaceBetween={30}
                        navigation={true}
                        modules={[Navigation]}
                        className="Player Carousel"
                    >
                        {filteredPlayers.map(player => (
                            <SwiperSlide key={player.id}>
                                <Card sx={{ backgroundColor: '#f6f6f6', padding: '20px' }}>
                                    <CardContent>
                                        <img src={player.team.logo} alt="Logo Team" style={{ width: 50 }} />
                                        <Typography variant="h3" component="h3" color={theme.palette.primary.main}>
                                            {player.name} {player.avatar}
                                        </Typography>
                                        <Typography variant="h4" component="h4" color={theme.palette.secondary.main}>
                                            {player.role}
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button
                                            size="normal"
                                            variant="contained"
                                            endIcon={<ArrowOutwardOutlinedIcon />}
                                            component={Link}
                                            to={`/player/${player.name}`}
                                            sx={{ bgcolor: theme.palette.third.main, color: theme.palette.primary.main }}
                                        >
                                            Scheda player
                                        </Button>
                                    </CardActions>
                                </Card>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                </Box>
            </Container>
        </>
    );
}