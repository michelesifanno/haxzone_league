import { useEffect } from 'react';
import { useTheme } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import { Typography, useMediaQuery, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Container, Box } from '@mui/material';

export default function Valori() {

    const theme = useTheme();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const PlayersValue = [
        { name: "aledelagiosta", value: 56, status: "Presidente" },
        { name: "Bisseck", value: 53.4, status: "Presidente" },
        { name: "Wilfreedz", value: 52.5, status: "Ingaggiato" },
        { name: "iverson", value: 51.5, status: "Ingaggiato" },
        { name: "Phillips", value: 49.9, status: "Ingaggiato" },
        { name: "Tsubasa", value: 48.6, status: "Ingaggiato" },
        { name: "w", value: 48, status: "Ingaggiato" },
        { name: "Merlino", value: 46.3, status: "Ingaggiato" },
        { name: "vendoPS5", value: 45.8, status: "Ingaggiato" },
        { name: "julian", value: 45.2, status: "Svincolato" },
        { name: "giacomo", value: 44.2, status: "Ingaggiato" },
        { name: "Jaco", value: 42.8, status: "Svincolato" },
        { name: "Kolo Muani", value: 42.1, status: "Presidente" },
        { name: "2ms", value: 42.1, status: "Ingaggiato" },
        { name: "Virgoal", value: 41.7, status: "Ingaggiato" },
        { name: "Fedefluork", value: 40.8, status: "Svincolato" },
        { name: "romaine", value: 40.4, status: "Ingaggiato" },
        { name: "twitter", value: 39.6, status: "Ingaggiato" },
        { name: "Rin Itoshi", value: 38.4, status: "Ingaggiato" },
        { name: "zmatty", value: 38.4, status: "Ingaggiato" },
        { name: "Sol Daystar", value: 37.3, status: "Ingaggiato" },
        { name: "S", value: 37.3, status: "Ingaggiato" },
        { name: "sandro tonali", value: 37.1, status: "Presidente" },
        { name: "Ilchicco", value: 36.6, status: "Presidente" },
        { name: "NIsk", value: 36.6, status: "Ingaggiato" },
        { name: "xxx", value: 36, status: "Ingaggiato" },
        { name: "Pinturicchio", value: 35.6, status: "Ingaggiato" },
        { name: "tNt", value: 33.5, status: "Ingaggiato" },
        { name: "sessoduro", value: 33.4, status: "Svincolato" },
        { name: "Urashji", value: 32.4, status: "Presidente" },
        { name: "MARIORUI", value: 32.3, status: "Svincolato" },
        { name: "Android", value: 32.3, status: "Ingaggiato" },
        { name: "Berlin", value: 31.8, status: "Svincolato" },
        { name: "DavidMC49", value: 31.6, status: "Ingaggiato" },
        { name: "Kvaratskhelia", value: 31.6, status: "Ingaggiato" },
        { name: "SquiBerto", value: 31.4, status: "Ingaggiato" },
        { name: "♦️ ʜᴀ𝙭𝙭ᴇʀ", value: 31.2, status: "Presidente" },
        { name: "Bilancino del quartiere", value: 30.2, status: "Presidente" },
        { name: "Stempiator", value: 29.2, status: "Presidente" },
        { name: "Studente", value: 28.7, status: "Presidente" },
        { name: "Vrax", value: 28, status: "Ingaggiato" },
        { name: "Midorima", value: 27.9, status: "Ingaggiato" },
        { name: "isa", value: 27.9, status: "Ingaggiato" },
        { name: "Brazilian player", value: 26.9, status: "Ingaggiato" },
        { name: "Coramello", value: 26.8, status: "Ingaggiato" },
        { name: "Alexis", value: 26.5, status: "Ingaggiato" },
        { name: "rafael leao", value: 26.1, status: "Ingaggiato" },
        { name: "AndreaPirla", value: 26, status: "Presidente" },
        { name: "Paladino", value: 25.5, status: "Ingaggiato" },
        { name: "Prox", value: 24.3, status: "Presidente" },
        { name: "VISIERA A BECCO", value: 23.7, status: "Ingaggiato" },
        { name: "Bachira (ex Gagamaru)", value: 23, status: "Svincolato" },
        { name: "Boh", value: 20.9, status: "Ingaggiato" },
        { name: "Momito", value: 20.5, status: "Ingaggiato" },
        { name: "RealBitchesFucker41", value: 20.4, status: "Svincolato" },
        { name: "abso!", value: 19, status: "Ingaggiato" },
        { name: "lautaro10", value: 18, status: "Ingaggiato" },
        { name: "FotismoLiberta", value: 14.6, status: "Ingaggiato" },
        { name: "Alfredo pedullà", value: 14.5, status: "Ingaggiato" },
        { name: "Sir.Moadben", value: 14.1, status: "Ingaggiato" },
        { name: "goku the best", value: 13, status: "Ingaggiato" },
        { name: "maiden", value: 11.3, status: "Ingaggiato" }
    ];

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
                    <Typography variant="h6" component="h6" color={theme.palette.text.secondary}>
                        HAXZONE LEAGUE
                    </Typography>
                    <Typography variant="h2" component="h2" color={theme.palette.text.secondary} sx={{ fontWeight: '600' }}>
                        VALORI
                    </Typography>
                </Box>
            </Container>
            <Container maxWidth={false} sx={{
                backgroundColor: '#fff',
                minHeight: '100vh'
            }}>
                <Box sx={{ padding: '80px 20px' }}>
                    <Typography variant="h3" component="h3" color={theme.palette.primary.main} sx={{ fontWeight: '600' }}>
                        VALORI CALCIATORI
                    </Typography>
                    <br />
                    <Typography variant="p" component="p" color={theme.palette.text.primary}>
                        Di seguito, i singoli valori dei calciatori.
                    </Typography>
                    <br />
                    {isMobile ? (
                        <Typography variant="p" component="p" color={theme.palette.text.primary} sx={{ paddingBottom: '40px' }}>
                            <b>Legenda:</b><br>
                            </br>🧢 Presidente | 📌 Ingaggiato | ✅ Svincolato
                        </Typography>) : ''}
                    <TableContainer component={Paper}>
                        <Table aria-label="players table">
                            <TableHead sx={{ backgroundColor: theme.palette.third.main }}>
                                <TableRow>
                                    <TableCell>
                                        <Typography variant="p" component="p" sx={{ fontWeight: 'bold' }}>
                                            NAME
                                        </Typography>
                                    </TableCell>
                                    <TableCell>
                                        <Typography variant="p" component="p" sx={{ fontWeight: 'bold' }}>
                                            VALUE
                                        </Typography>
                                    </TableCell>
                                    {isMobile ? '' : (<TableCell>
                                        <Typography variant="p" component="p" sx={{ fontWeight: 'bold' }}>
                                            STATUS
                                        </Typography>
                                    </TableCell>)}
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {PlayersValue.map((player, index) => (
                                    <TableRow key={index}>
                                        <TableCell>
                                            <Typography variant="h6" component="h6" color={theme.palette.primary.main} sx={{ fontWeight: '600' }}>
                                                <Link
                                                    to={`/player/${player.name}`}
                                                    style={{
                                                        color: theme.palette.primary.main,
                                                        textDecoration: 'none',
                                                    }}
                                                >{player.status === "Presidente" ? (isMobile ? '🧢 ' : '') :
                                                    player.status === "Ingaggiato" ? (isMobile ? '📌 ' : '') :
                                                        player.status === "Svincolato" ? (isMobile ? '✅ ' : '') : ''}{player.name}</Link>
                                            </Typography>
                                        </TableCell>
                                        <TableCell>
                                            <Typography variant="h6" component="h6" color={theme.palette.primary.main} sx={{ fontWeight: '600', letterSpacing: '-1px' }}>
                                                € {player.value} m
                                            </Typography>
                                        </TableCell>
                                        {isMobile ? '' : (<TableCell>
                                            <Typography variant="p" component="p" color={theme.palette.primary.main} sx={{ fontWeight: '600', textTransform: 'uppercase' }}>
                                                {player.status === "Presidente" ? (isMobile ? '🧢' : '🧢 ' + player.status) :
                                                    player.status === "Ingaggiato" ? (isMobile ? '📌' : '📌 ' + player.status) :
                                                        player.status === "Svincolato" ? (isMobile ? '✅' : '✅ ' + player.status) : ''}
                                            </Typography>
                                        </TableCell>)}
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Box>
            </Container>
        </>
    )
}