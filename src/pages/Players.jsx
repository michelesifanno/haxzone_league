import { useEffect } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { styled, useTheme } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import { Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';



export default function Players() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []); 

    
    const theme = useTheme();

    const players = [
        { id: 1, avatar: '🍌', name: 'Berlin', team: { name: 'Inps Calcio', logo: '/inps.png' }, role: 'GK' },
        { id: 2, avatar: '10', name: 'Del Piero', team: { name: 'Wild Wolves', logo: '/wolves.png' }, role: 'ST' },
        { id: 3, avatar: '🥔', name: 'Cheneso', team: { name: 'Potatoes FC', logo: '/potatoes.png' }, role: 'ST' },
    ];

    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const headerRow = ['Avatar', 'Player', 'Team', 'Ruolo'];
    const headerMobiRow = ['Player', 'Team', 'Ruolo'];

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
                        PLAYERS
                    </Typography>
                </Box>
            </Container>
            <Container maxWidth={false} sx={{
                backgroundColor: '#fff',
                minHeight: '100vh'
            }}>
                <Box sx={{ padding: '80px 20px' }}>
                    <Typography variant="h3" component="h3" color={theme.palette.primary.main} sx={{ fontWeight: '600' }}>
                        TUTTI I PLAYERS
                    </Typography>
                    <br />
                    <Typography variant="p" component="p" color={theme.palette.text.primary}>
                        Clicca sul singolo Player per visualizzare le statistiche.
                    </Typography>
                    <br />
                    <TableContainer component={Paper}>
                        <Table aria-label="players table">
                            <TableHead sx={{ backgroundColor: theme.palette.third.main }}>
                                <TableRow>
                                    {isMobile ? '' : (
                                        <TableCell>
                                            <Typography variant="p" component="p" color={theme.palette.primary.main} sx={{ textTransform: 'uppercase', fontWeight: 'bold' }}>
                                                AVATAR
                                            </Typography>
                                        </TableCell>
                                    )}
                                                                            <TableCell>
                                                                            <Typography variant={isMobile ? "caption" : "p"} sx={{ fontWeight: 'bold' }}>
                                                PLAYER
                                            </Typography>
                                        </TableCell>
                                        <TableCell>
                                        <Typography variant={isMobile ? "caption" : "p"} sx={{ fontWeight: 'bold' }}>
                                                TEAM
                                            </Typography>
                                        </TableCell>
                                        <TableCell>
                                        <Typography variant={isMobile ? "caption" : "p"} sx={{ fontWeight: 'bold' }}>
                                                ROLE
                                            </Typography>
                                        </TableCell>

                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {players.map((player) => (
                                    <TableRow key={player.id}>
                                     {isMobile ? '' : (<TableCell component="th" scope="row">
                                            <Typography variant="h6" component="h6" color={theme.palette.primary.main} sx={{ fontWeight: '600' }}>
                                                {player.avatar}
                                            </Typography>
                                        </TableCell>)}
                                        <TableCell>
                                        <Typography variant="h6" color={theme.palette.primary.main} sx={{ fontWeight: '600' }}>
                                                <Link
                                                    to={`/player/${player.name}`}
                                                    style={{
                                                        color: theme.palette.primary.main,
                                                        textDecoration: 'none',
                                                    }}
                                                >{player.name}</Link>
                                            </Typography>
                                        </TableCell>
                                        <TableCell>
                                        <Typography variant={isMobile ? "p" : "h6" } color={theme.palette.primary.main} sx={{ fontWeight: '600' }}>
                                                <div style={{ display: 'flex', alignItems: 'center', textTransform: 'uppercase' }}>
                                                    <img src={player.team.logo} alt="Logo Team" style={{ width: 30, marginRight: 10 }} />
                                                    {isMobile ? (player.team.name.length > 3 ? player.team.name.substring(0, 3) + '.' : player.team.name) : player.team.name}
                                                </div>
                                            </Typography>
                                        </TableCell>
                                        <TableCell>
                                        <Typography variant={isMobile ? "p" : "h6" } color={theme.palette.primary.main} sx={{ fontWeight: '600' }}>
                                                {player.role}
                                            </Typography>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Box>
            </Container>
        </>
    );
}