import { useEffect } from 'react';
import { styled, useTheme } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import { Container, Box, Card, CardActionArea, CardContent, CardMedia, Grid, Typography, Divider } from '@mui/material';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';


const teams = [
    { id: 1, logo: '/wolves.png', name: 'Wild Wolves', cap: 'Prox', players: 'Player 1, Player 2, Player 3, Player 4', colors: 'blue, grey', foundation: '2024' },
    { id: 2, logo: '/potatoes.png', name: 'Potatoes FC', cap: 'Bisseck', players: 'Player 1, Player 2, Player 3, Player 4', colors: 'yellow, red', foundation: '2024' },
    { id: 3, logo: '/inps.png', name: 'Inps Calcio', cap: 'AndreaPirla', players: 'Player 1, Player 2, Player 3, Player 4', colors: 'blue, black', foundation: '2024' },
    { id: 4, logo: '/sportitalia.png', name: 'Sportitalia FC', cap: 'Stempiator', players: 'Player 1, Player 2, Player 3, Player 4', colors: 'black, gold', foundation: '2024' },
];

export default function Teams() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []); 

    
    const theme = useTheme();

    return (
        <>
            <Container maxWidth={false} sx={{
                backgroundImage: 'url(/texture.jpg)',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                minWidth: '100vw',
                height: '45vh',
                marginTop: '-80px',
            }}>

                <Box sx={{ padding: { xs: '120px 20px', md: '160px 20px' } }}>
                    <Typography variant="h6" component="h6" color={theme.palette.text.secondary}>
                        HAXZONE LEAGUE
                    </Typography>
                    <Typography variant="h2" component="h2" color={theme.palette.text.third} sx={{ fontWeight: '600' }}>
                        TEAMS
                    </Typography>
                </Box>
            </Container>
            <Container maxWidth={false} sx={{
                backgroundColor: '#fff',
                minHeight: '100vh'
            }}>
                <Box sx={{ padding: '80px 20px' }}>
                    <Typography variant="h3" component="h3" color={theme.palette.primary.main} sx={{ fontWeight: '600' }}>
                        TUTTE LE SQUADRE
                    </Typography>
                    <br />
                    <Typography variant="p" component="p" color={theme.palette.text.primary}>
                        Clicca sul singolo Team per visualizzare di più.
                    </Typography>
                    <br />
                    <Divider />
                    <br />
                    <Grid container spacing={5}>
                        {teams.map((team) => (
                            <Grid item key={team.id} xs={12} sm={6} md={3}>
                                <Card>
                                    <CardActionArea component={Link} to={`/team/${team.name}`}>
                                        <div style={{ padding: '20px' }}>
                                            <CardMedia
                                                component="img"
                                                height="auto"
                                                weight="100%"
                                                image={team.logo}
                                                alt="Logo"
                                            />
                                        </div>
                                        <CardContent>
                                            <br />
                                            <Typography variant="h5" component="h5" gutterBottom color={theme.palette.primary.main} sx={{ textTransform: 'uppercase' }}>
                                                <b>{team.name} {team.colors.split(', ').map((color, index) => (
                                                    <span
                                                        key={index}
                                                        style={{
                                                            display: 'inline-block',
                                                            width: '20px',
                                                            height: '20px',
                                                            backgroundColor: color,
                                                            borderRadius: '15%',
                                                            marginRight: '5px',
                                                        }}
                                                    ></span>
                                                ))}</b>
                                            </Typography>
                                            <br />
                                            <Typography variant="body2" gutterBottom color={theme.palette.text.primary} sx={{ fontSize: '18px' }}>
                                                <Box sx={{ display: 'flex', alignItems: 'center', padding:'10px'  }}>
                                                    <MilitaryTechIcon style={{ color: theme.palette.secondary.main }} sx={{ marginRight: '5px' }} />
                                                    <b style={{ color: theme.palette.secondary.main }}>{team.cap}</b>
                                                    </Box>
                                            </Typography>
                                                    <Divider />
                                            <Typography variant="body2" gutterBottom color={theme.palette.text.primary} sx={{ fontSize: '14px', color: theme.palette.secondary.main }}>
                                                <Box sx={{ display: 'flex', alignItems: 'center', padding:'10px' }}>
                                                    {team.players}
                                                </Box>
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </Container>
        </>
    );
}