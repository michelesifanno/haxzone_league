import { useEffect } from 'react';
import { styled, useTheme } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import { Container, Box, Card, CardActionArea, CardContent, CardMedia, Grid, Typography, Divider } from '@mui/material';
import Calendar from '../components/Calendar';

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
                marginTop: '-80px',
            }}>

                <Box sx={{ padding: { xs: '160px 20px 40px 20px', md: '160px 20px 80px 20px' } }}>
                    <Typography variant="h6" component="h6" color={theme.palette.text.secondary}>
                        HAXZONE LEAGUE
                    </Typography>
                    <Typography variant="h2" component="h2" color={theme.palette.text.secondary} sx={{ fontWeight: '600' }}>
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
                    <Grid container spacing={2}>
                        {teams.map((team, index) => (
                            <Grid item key={team.id} xs={12} md={3}>
                                <Link
                                    to={`/team/${team.name}`}
                                    style={{
                                        color: theme.palette.primary.main,
                                        textDecoration: 'none',
                                    }}
                                >
                                    <Card sx={{ backgroundColor: '#f9f9f9' }}>
                                        <CardActionArea component={Link} to={`/team/${team.name}`}>
                                            <CardContent sx={{padding:'0px 20px 40px 20px', textAlign:'center'}}>
                                                <br />
                                                <img src={team.logo} alt='logo team' width="250" />
                                                <Typography variant="h5" component="h5" gutterBottom color={theme.palette.primary.main} sx={{ textTransform: 'uppercase', paddingTop:'20px'}}>
                                                    {team.name} {team.colors.split(', ').map((color, index) => (
                                                        <span
                                                            key={index}
                                                            style={{
                                                                display: 'inline-block',
                                                                width: '20px',
                                                                height: '20px',
                                                                backgroundColor: color,
                                                                borderRadius: '50%',
                                                                marginRight: '5px',
                                                                border: '1px solid #000'
                                                            }}
                                                        ></span>
                                                    ))}
                                                </Typography>
                                            </CardContent>
                                        </CardActionArea>
                                    </Card>
                                </Link>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </Container>
        </>
    );
}