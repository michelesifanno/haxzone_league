import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import { Typography, Grid, Container } from '@mui/material';
import StructureNavigation from '../components/StructureNavigation';
import Struttura from '../components/Struttura';
import Squadre from '../components/Squadre';
import Trasferimenti from '../components/Trasferimenti';
import Partite from '../components/Partite';
import Sanzioni from '../components/Sanzioni';
import Faq from '../components/FAQ';

export default function Regolamento() {

    const theme = useTheme();


    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [activeComponent, setActiveComponent] = useState('struttura');

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
                        <Grid item xs={12}>
                            <Typography variant="h6" component="h6" color={theme.palette.text.secondary}>
                                HAXZONE LEAGUE
                            </Typography>
                            <Typography variant="h2" component="h2" color={theme.palette.text.secondary} sx={{ fontWeight: '600' }}>
                                REGOLAMENTO
                            </Typography>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
            <Container maxWidth={false} sx={{
                backgroundColor: 'primary.main',
            }}>
                <Box sx={{
                    padding: '20px',
                }}>
                    <StructureNavigation activeComponent={activeComponent} setActiveComponent={setActiveComponent} />
                </Box>
            </Container>

            <Container maxWidth={false} sx={{
                backgroundColor: '#fff',
                minHeight: '100vh',
            }}>
                <Box sx={{ padding: '80px 20px', whiteSpace: 'wrap' }}>
                    {activeComponent === 'struttura' && <Struttura />}
                    {activeComponent === 'squadre' && <Squadre />}
                    {activeComponent === 'trasferimenti' && <Trasferimenti />}
                    {activeComponent === 'partite' && <Partite />}
                    {activeComponent === 'sanzioni' && <Sanzioni />}
                    {activeComponent === 'faq' && <Faq />}
                </Box>
            </Container>
        </>
    );
}