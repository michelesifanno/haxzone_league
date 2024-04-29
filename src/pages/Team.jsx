import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import { Typography, Grid, Container, Card, CardActions, CardContent, Button } from '@mui/material';
import { useParams } from 'react-router-dom';
import useMediaQuery from '@mui/material/useMediaQuery';
import LeaderboardTeam from '../components/LeaderboardTeam';
import PlayerList from '../components/PlayerList';
import TeamStats from '../components/TeamStats';
import ArrowOutwardOutlinedIcon from '@mui/icons-material/ArrowOutwardOutlined';
import TeamCalendar from '../components/TeamCalendar';
import TeamMatches from '../components/TeamMatches';


export default function Team() {

    const { name } = useParams();
    const theme = useTheme();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [name]);


    // Dati delle squadre
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

    // Cerco il team
    const team = teams.find((team) => team.name === name);

    if (!team) {
        console.log('Team non trovato');
        return null;
    }

    const { logo, cap, colors, foundation, stadium } = team;

    const [filteredTeams, setFilteredTeams] = useState([]);

    useEffect(() => {
        // Filtro i giocatori escludendo quello corrispondente al parametro name
        const filtered = teams.filter(team => team.name !== name);
        setFilteredTeams(filtered);
    }, [name]);


    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));


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
                    <Grid container alignItems="center">
                        <Grid item xs={12} md={2} sx={{padding:'10px'}}>
                            <img src={team.logo} alt="Logo Team" style={{ width: 200 }} />
                        </Grid>
                        <Grid item xs={12} md={6} sx={{padding:'10px'}}>
                            <Typography variant={isMobile ? 'h4' : 'h3'} component="h3" color={theme.palette.text.secondary} sx={{ fontWeight: '600', textTransform: 'uppercase' }}>
                                {team.name}
                            </Typography>
                            <br />
                            <Typography variant="h6" component="h6" sx={{color: theme.palette.text.secondary}}>
                            <Link
                                                    to={`/player/${team.cap}`}
                                                    style={{
                                                        color: theme.palette.text.secondary,
                                                        textDecoration: 'none',
                                                        fontWeight:'600',
                                                        textTransform:'uppercase'
            
                                                    }}
                                                >
                                                    🧢 {team.cap}</Link> | 🗓️ {team.foundation}
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={4} sx={{padding:'10px'}}>
                            <Typography variant={isMobile ? 'h4' : 'h2'} component="h2" color={theme.palette.text.secondary} sx={{ fontWeight: '600', textAlign: {xs:'left', md:'center' }}}>
                                {team.colors.split(', ').map((color, index) => (
                                    <span
                                        key={index}
                                        style={{
                                            display: 'inline-flex',
                                            alignItems: 'center', // Centra verticalmente
                                            justifyContent: 'center', // Centra orizzontalmente
                                            width: isMobile ? '60px' : '120px',
                                            height: isMobile ? '60px' : '120px',
                                            backgroundColor: color,
                                            borderRadius: '50%',
                                            marginRight: '5px',
                                            border: '5px solid #121212',
                                            textAlign: 'center',
                                            lineHeight: '1' // Imposta il valore della linea su 1 per centrare correttamente il contenuto
                                        }}
                                    >
                                        1
                                    </span>
                                ))}
                            </Typography>
                        </Grid>
                    </Grid>
                </Box>
            </Container>

            <Container maxWidth={false} sx={{
                backgroundColor: '#fff',
            }}>
                <Box sx={{ padding: '60px 0px' }}>
                    <Grid container>
                        <Grid xs={12} md={6} sx={{ padding: '20px' }}>
                            <Typography variant="h4" component="h4" color={theme.palette.primary.main} sx={{ fontWeight: '600' }}>
                                CLASSIFICA
                            </Typography>
                            <br />
                            <LeaderboardTeam teams={teams} name={name} />
                        </Grid>
                        <Grid xs={12} md={6} sx={{ padding: '20px' }}>
                            <Typography variant="h4" component="h4" color={theme.palette.primary.main} sx={{ fontWeight: '600' }}>
                                PLAYERS
                            </Typography>
                            <br />
                            <PlayerList teamName={name} />
                        </Grid>
                        <Grid xs={12} md={6} sx={{ padding: '20px' }}>
                            <Typography variant="h4" component="h4" color={theme.palette.primary.main} sx={{ fontWeight: '600' }}>
                                PROSSIMI MATCH
                            </Typography>
                            <br />
                            <TeamCalendar name={name} />
                        </Grid>
                        <Grid xs={12} md={6} sx={{ padding: '20px' }}>
                            <Typography variant="h4" component="h4" color={theme.palette.primary.main} sx={{ fontWeight: '600' }}>
                                ULTIMI MATCH
                            </Typography>
                            <br />
                            <TeamMatches name={name} />
                        </Grid>
                        <Grid xs={12} sx={{ padding: '20px' }}>
                            <Typography variant="h4" component="h4" color={theme.palette.primary.main} sx={{ fontWeight: '600' }}>
                                STATS
                            </Typography>
                            <br />
                            <TeamStats name={name} />
                        </Grid>
                    </Grid>
                </Box>
            </Container>
            <Container maxWidth={false} sx={{
                backgroundColor: 'primary.main',
                margin: '0 auto',
            }}>
                <Box sx={{ padding: { xs: '60px 20px', md: '80px 20px' } }}>
                    <Typography variant="h3" component="h3" color={theme.palette.text.secondary} sx={{ fontWeight: '600' }}>
                        SCOPRI ANCHE
                    </Typography>
                    <br />
                    <Typography variant="p" component="p" color={theme.palette.text.secondary}>
                        Clicca su "Scheda Team" per scoprire di più.
                    </Typography>
                    <br />
                    
                    <Grid container justifyContent="flex-start" alignItems="left" sx={{ paddingTop: '20px' }}>
                        {filteredTeams.slice(0, 3).map(team => (
                            <Grid item xs={12} md={4} alignItems="left" key={team.id} sx={{padding:'10px'}}>
                                <Card sx={{ backgroundColor: '#fff', border: '5px solid #000', padding: '30px' }}>
                                    <CardContent sx={{ padding: '0px' }}>
                                        <img src={team.logo} alt="Logo Team" style={{ width: 80 }} />
                                        <br />
                                        <Typography variant="h4" component="h4" color={theme.palette.primary.main} sx={{letterSpacing:'-1px'}}>
                                            {team.name}
                                        </Typography>
                                    </CardContent>
                                    <CardActions sx={{ padding: '0px', paddingTop: '20px' }}>
                                        <Button
                                            size="normal"
                                            variant="contained"
                                            endIcon={<ArrowOutwardOutlinedIcon />}
                                            component={Link}
                                            to={`/team/${team.name}`}
                                            sx={{ bgcolor: theme.palette.third.main, color: theme.palette.primary.main }}
                                        >
                                            Scheda Team
                                        </Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                    <Grid item xs={12} justifyContent="flex-end" sx={{padding:'10px'}}>
                        <Button
                                            size="large"
                                            variant="contained"
                                            to='/teams'
                                            endIcon={<ArrowOutwardOutlinedIcon />}
                                            component={Link}
                                            sx={{ bgcolor: theme.palette.secondary.main, color: '#fff', padding:'16px 32px' }}
                                            className='AllTeamsButton'
                                        >
                                            Tutti i Team
                                        </Button>
                            </Grid>
                </Box>
            </Container>
        </>
    );
}