import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import { Link, Outlet } from 'react-router-dom';
import { Typography, Grid, Container, Divider, Card, CardActions, CardContent, Button } from '@mui/material';
import { useParams } from 'react-router-dom';
import useMediaQuery from '@mui/material/useMediaQuery';
import LeaderboardTeam from '../components/LeaderboardTeam';
import PlayerList from '../components/PlayerList';
import TeamStats from '../components/TeamStats';
import ArrowOutwardOutlinedIcon from '@mui/icons-material/ArrowOutwardOutlined';
import Calendar from '../components/Calendar';
import LeagueNavigation from '../components/LeagueNavigation';
import Leaderboard from '../components/Leaderboard';
import LeagueAwards from '../components/LeagueAwards';


export default function League() {

    const theme = useTheme();


    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [activeComponent, setActiveComponent] = useState('calendar');

    const handleMenuItemClick = (menuItem) => {
      setActiveMenuItem(menuItem);
    };

    return (
        <>
            <Container maxWidth={false} sx={{
                backgroundImage: 'url(/texture.jpg)',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                minWidth: '100vw',
                marginTop: '-80px',
            }}>
                <Box sx={{ padding: { xs: '160px 20px 40px 20px', md: '160px 20px 80px 20px' } }}>
                    <Grid container spacing={2} alignItems="center">
                        <Grid item xs={12} md={1}>
                            <img src='/logo.png' alt="Logo League" style={{ width: 80 }} />
                        </Grid>
                        <Grid item xs={12} md={11}>
                            <Typography variant="h6" component="h6" color={theme.palette.text.secondary}>
                                HAXZONE
                            </Typography>
                            <Typography variant="h2" component="h2" color={theme.palette.text.secondary} sx={{ fontWeight: '600' }}>
                                LEAGUE
                            </Typography>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
            <Container maxWidth={false} sx={{
                backgroundColor: 'primary.main',
            }}>
                <Box sx={{ padding: '20px' }}>
                      <LeagueNavigation activeComponent={activeComponent} setActiveComponent={setActiveComponent} />
                </Box>
            </Container>

            <Container maxWidth={false} sx={{
                backgroundColor: '#fff',
                minHeight: '100vh'
            }}>
                <Box sx={{ padding: '80px 20px' }}>
                {activeComponent === 'calendar' && <Calendar />}
      {activeComponent === 'leaderboard' && <Leaderboard />}
      {activeComponent === 'awards' && <LeagueAwards />}
      </Box>
            </Container>
        </>
    );
}