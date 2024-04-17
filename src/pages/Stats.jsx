import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import { Typography, Container, useMediaQuery } from '@mui/material';
import StatsNavigation from '../components/StatsNavigation';
import Scorer from '../components/Scorer';
import AssistMan from '../components/AssistMan';
import Cleansheets from '../components/Cleansheets';
import HattrickMan from '../components/HattrickMan';


export default function Stats() {

    const theme = useTheme();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [activeComponent, setActiveComponent] = useState('scorer');

    const handleMenuItemClick = (menuItem) => {
        setActiveMenuItem(menuItem);
    };

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
                                STATS
                            </Typography>
                </Box>
            </Container>
            <Container maxWidth={false} sx={{
                backgroundColor: 'primary.main',
            }}>
                <Box sx={{
                    padding: '20px',
                }}>
                    <StatsNavigation activeComponent={activeComponent} setActiveComponent={setActiveComponent} />
                </Box>
            </Container>

            <Container maxWidth={false} sx={{
                backgroundColor: '#fff',
                minHeight: '100vh',
            }}>
                <Box sx={{ padding: '80px 20px', whiteSpace: 'wrap' }}>
                    {activeComponent === 'scorer' && <Scorer />}
                    {activeComponent === 'assist' && <AssistMan />}
                    {activeComponent === 'cleansheets' && <Cleansheets />}
                    {activeComponent === 'hattrick' && <HattrickMan />}

                </Box>
            </Container>
        </>
    );
}