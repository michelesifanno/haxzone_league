import { useState, useEffect } from 'react';
import axios from 'axios';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import { Typography, Divider, Grid, Container, Card, CardActions, CardContent, Button } from '@mui/material';
import { useParams } from 'react-router-dom';
import ArrowOutwardOutlinedIcon from '@mui/icons-material/ArrowOutwardOutlined';
import useMediaQuery from '@mui/material/useMediaQuery';

export default function Player2() {

    const { name } = useParams();
    const theme = useTheme();

    const [playerStats, setPlayerStats] = useState([]);

    useEffect(() => {
        window.scrollTo(0, 0);
        async function fetchPlayerStats() {
            try {
                const response = await axios.get(`https://haxzone-league.vercel.app/api/PlayersStats/${name}`);
                console.log(response.data);
                setPlayerStats(response.data);
            } catch (error) {
                console.error('Errore durante il recupero delle statistiche del giocatore:', error);
            }
        }
        fetchPlayerStats();
    }, [name]);


    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    if (!playerStats) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <Container maxWidth={false} sx={{
                backgroundImage: 'url(/texture.jpg)',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                marginTop: '-80px',
            }}>
                <Box sx={{ padding: { xs: '160px 20px 40px 20px', md: '160px 20px 80px 20px' } }}>
                    <Grid container alignItems="center">
                        <Grid xs={9} sx={{padding:'10px'}}>
                            <Typography variant="h5" component="h5" color={theme.palette.text.secondary}>
                                RUOLO PLAYER
                            </Typography>
                            <Typography variant="h2" component="h2" color={theme.palette.text.secondary} sx={{ fontWeight: '600' }}>
                                {playerStats.nickname}
                            </Typography>
                        </Grid>
                        <Grid item xs={3} sx={{padding:'10px'}}>
                        <Typography variant={isMobile ? 'h4' : 'h2'} component="h2" color={theme.palette.text.secondary} sx={{ fontWeight: '600', textAlign: 'center' }}>
                            <div style={{
                                    display: 'inline-flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    backgroundColor: '#e46d55',
                                    borderRadius: '50%',
                                    border: '5px solid #121212',
                                    width: isMobile ? '60px' : '120px',
                                    height: isMobile ? '60px' : '120px',
                                    textAlign: 'center',
                                    lineHeight: '80px'
                                }}>
                                    PLAYER AVATAR
                                </div>
                            </Typography>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
            <Container maxWidth={false} sx={{
                backgroundColor: '#fff',
                minHeight: '100vh'
            }}>
                <Box sx={{ padding: '80px 20px' }}>
                    <Typography variant="h3" component="h3" color={theme.palette.primary.main} sx={{ fontWeight: '600' }}>
                        STATISTICHE GENERALI
                    </Typography>
                    <br />
                    <Divider />
                    <br />
                    <Grid container justifyContent="flex-start" alignItems="left">
                        <Grid xs={12} md={4} alignItems="left" sx={{padding:'40px'}}>
                           LOGO TEAM
                        </Grid>
                        <Grid xs={12} md={4} alignItems="left" className='statsGrid'>
                            <Typography variant="h3" component="h3" color="secondary.main" className="textStats" sx={{ paddingBottom: '10px' }}>
                                X mil.
                            </Typography>
                            <Typography variant="h5" component="h5" color="primary.main" className="textStats">
                                💸 VALORE
                            </Typography>
                        </Grid>
                        <Grid xs={12} md={4} alignItems="left" className='statsGrid'>
                            <Typography variant="h3" component="h3" color="secondary.main" className="textStats" sx={{ paddingBottom: '10px' }}>
                                {playerStats.winrate}
                            </Typography>
                            <Typography variant="h5" component="h5" color="primary.main" className="textStats">
                                💯 WINRATE
                            </Typography>
                        </Grid>
                        <Grid xs={12} md={4} alignItems="left" className='statsGrid'>
                            <Typography variant="h3" component="h3" color="secondary.main" className="textStats" sx={{ paddingBottom: '10px' }}>
                                {playerStats.games}
                            </Typography>
                            <Typography variant="h5" component="h5" color="primary.main" className="textStats">
                                🏟️ GAMES
                            </Typography>
                        </Grid>
                        <Grid xs={12} md={4} alignItems="left" className='statsGrid'>
                            <Typography variant="h3" component="h3" color="secondary.main" className="textStats" sx={{ paddingBottom: '10px' }}>
                                {playerStats.goals}
                            </Typography>
                            <Typography variant="h5" component="h5" color="primary.main" className="textStats">
                                ⚽ GOALS
                            </Typography>
                        </Grid>
                        <Grid xs={12} md={4} alignItems="left" className='statsGrid'>
                            <Typography variant="h3" component="h3" color="secondary.main" className="textStats" sx={{ paddingBottom: '10px' }}>
                                {playerStats.wins}
                            </Typography>
                            <Typography variant="h5" component="h5" color="primary.main" className="textStats">
                                ✨ WINS
                            </Typography>
                        </Grid>
                        <Grid xs={12} md={4} alignItems="left" className='statsGrid'>
                            <Typography variant="h3" component="h3" color="secondary.main" className="textStats" sx={{ paddingBottom: '10px' }}>
                                {playerStats.playtime}
                            </Typography>
                            <Typography variant="h5" component="h5" color="primary.main" className="textStats">
                                ⏱️ PLAYTIME
                            </Typography>
                        </Grid>
                        <Grid xs={12} md={4} alignItems="left" className='statsGrid'>
                            <Typography variant="h3" component="h3" color="secondary.main" className="textStats" sx={{ paddingBottom: '10px' }}>
                                {playerStats.ownGoals}
                            </Typography>
                            <Typography variant="h5" component="h5" color="primary.main" className="textStats">
                                ❌ OWN GOALS
                            </Typography>
                        </Grid>
                        <Grid xs={12} md={4} alignItems="left" className='statsGrid'>
                            <Typography variant="h3" component="h3" color="secondary.main" className="textStats" sx={{ paddingBottom: '10px' }}>
                                {playerStats.assists}
                            </Typography>
                            <Typography variant="h5" component="h5" color="primary.main" className="textStats">
                                👟 ASSISTS
                            </Typography>
                        </Grid>
                        <Grid xs={12} md={4} alignItems="left" className='statsGrid'>
                            <Typography variant="h3" component="h3" color="secondary.main" className="textStats" sx={{ paddingBottom: '10px' }}>
                                {playerStats.cs}
                            </Typography>
                            <Typography variant="h5" component="h5" color="primary.main" className="textStats">
                                🥅 CLEAN SHEETS
                            </Typography>
                        </Grid>
                        <Grid xs={12} md={4} alignItems="left" className='statsGrid'>
                            <Typography variant="h3" component="h3" color="secondary.main" className="textStats" sx={{ paddingBottom: '10px' }}>
                                {playerStats.hatTrick}
                            </Typography>
                            <Typography variant="h5" component="h5" color="primary.main" className="textStats">
                                3️⃣ HAT TRICK
                            </Typography>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
            
        </>
    );
}