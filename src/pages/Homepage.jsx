import { useState, useEffect } from 'react';
import { useTheme } from '@mui/material/styles';
import { Container, Typography, Grid, Box } from '@mui/material';

export default function Homepage() {
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
                backgroundImage: 'url(/sfondo-hax.gif)',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                minWidth: '100vw',
                marginTop: '-80px',
                minHeight:'100vh'
            }}>
                <Box sx={{ padding: { xs: '160px 20px 40px 20px', md: '160px 20px 80px 20px' } }}>
                <Grid container spacing={2} alignItems="center">
                        <Grid item xs={12}>
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
    </>
  );
}
