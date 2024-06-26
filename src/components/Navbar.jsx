import * as React from 'react';
import PropTypes from 'prop-types';
import { styled, useTheme } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import { IconButton, Toolbar, Typography, useScrollTrigger, Box, Button, Divider, List, Drawer, Grid } from '@mui/material';
import MuiAppBar from '@mui/material/AppBar';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import ListItem from '@mui/material/ListItem';
import useMediaQuery from '@mui/material/useMediaQuery';
import ArrowOutwardOutlinedIcon from '@mui/icons-material/ArrowOutwardOutlined';


const drawerWidth = 400;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: `-${drawerWidth}px`,
        ...(open && {
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
            marginLeft: 0,
        }),
    }),
);

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}));


function ElevationScroll(props) {
    const { children } = props;
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0
    });

    return React.cloneElement(children, {
        elevation: trigger ? 4 : 0,
        color: trigger ? "primary" : "transparent" // Cambia il colore dell'AppBar quando si scorre
    });
}

ElevationScroll.propTypes = {
    children: PropTypes.element.isRequired
};



export default function Navbar(props) {

    const theme = useTheme();

    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const handleItemClick = () => {
        setOpen(false); // Chiude il drawer quando si clicca su una voce
    };

    return (
        <Box>
            <ElevationScroll {...props}>
                <AppBar open={open}>
                    <Toolbar>
                        <Grid container>
                            <Grid item xs={4} sm={4} md={4} sx={{ justifyContent: "flex-start", display: 'flex', alignItems: 'center' }}>
                                <IconButton
                                    color="inherit"
                                    aria-label="open drawer"
                                    onClick={handleDrawerOpen}
                                    edge="start"
                                    sx={{ mr: 2, ...(open && { display: 'none' }) }}
                                >
                                    <MenuIcon sx={{ fontSize: '36px', color: '#fff' }} />
                                </IconButton>
                            </Grid>
                            <Grid item xs={4} sm={4} md={4} sx={{ justifyContent: "center", display: 'flex', alignItems: 'center'}}>
                                <img
                                    src='/logo.png'
                                    alt='Logo'
                                    height={70}
                                    style={{ padding: '7px' }}
                                />
                            </Grid>
                            <Grid item xs={4} sm={4} md={4} sx={{ justifyContent: "flex-end", display: 'flex', alignItems: 'center' }}>
                                {isMobile ?
                                    <Button
                                        size="medium"
                                        href='https://discord.gg/b4QM4K3t'
                                        target='_blank'
                                        variant="contained"
                                        endIcon={<ArrowOutwardOutlinedIcon />}
                                        sx={{ bgcolor: theme.palette.secondary.main, color: theme.palette.text.secondary }}
                                    >
                                        Discord
                                    </Button>
                                    :
                                    <Button
                                        size="large"
                                        href='https://discord.gg/b4QM4K3t'
                                        target='_blank'
                                        variant="contained"
                                        endIcon={<ArrowOutwardOutlinedIcon />}
                                        sx={{ bgcolor: theme.palette.secondary.main, color: theme.palette.text.secondary }}
                                    >
                                        Server Discord
                                    </Button>

                                }

                            </Grid>
                        </Grid>
                    </Toolbar>
                </AppBar>
            </ElevationScroll>
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                        backgroundColor: theme.palette.primary.main,
                        color: theme.palette.text.secondary,
                        padding: '7px 20px',
                    },

                }}
                variant="persistent"
                anchor="left"
                open={open}
            >
                <DrawerHeader>
                    <IconButton onClick={handleDrawerClose}>
                        <CloseIcon sx={{ fontSize: '36px', color: '#fff' }} />
                    </IconButton>
                </DrawerHeader>
                <List>
                    <ListItem disablePadding sx={{ my: 2 }} onClick={handleItemClick}>
                        <Link to={'/'} style={{ textDecoration: 'none' }}>
                            <Typography variant="h4" component="h4" sx={{
                                color: '#fff', fontWeight: '600', textTransform: 'uppercase',
                                '&:hover': {
                                    color: theme.palette.text.third,
                                },
                            }}>
                                Home
                            </Typography>
                        </Link>
                    </ListItem>
                    {['League', 'Teams', 'Players', 'Stats', 'Valori', 'Calciomercato', 'Regolamento'].map((text) => (
                        <ListItem key={text} disablePadding sx={{ my: 2 }} onClick={handleItemClick}>
                            <Link to={`/${text.toLowerCase()}`} style={{ textDecoration: 'none' }}>
                                <Typography variant="h4" component="h4" sx={{
                                    color: '#fff', fontWeight: '600', textTransform: 'uppercase',
                                    '&:hover': {
                                        color: theme.palette.text.third,
                                    },
                                }}>
                                    {text}
                                </Typography>
                            </Link>
                        </ListItem>
                    ))}
                </List>
            </Drawer>
            <Toolbar />
        </Box>
    );
}

