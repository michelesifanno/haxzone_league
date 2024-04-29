import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import { Typography, Divider, useMediaQuery, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Grid } from '@mui/material';
import { useParams } from 'react-router-dom';

export default function Sanzioni() {

    const theme = useTheme();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);


    return (
        <>
            <Grid container justifyContent="flex-start" alignItems="center" sx={{ paddingBottom: '20px' }}>
                <Grid item xs={12} alignItems="center" sx={{padding:'10px'}}>
                    <Typography variant="h4" component="h4" color={theme.palette.primary.main} sx={{ fontWeight: '600', paddingBottom: '10px' }}>
                        SANZIONI
                    </Typography>
                    <Divider />
                </Grid>
            </Grid>
            <Grid container justifyContent="flex-start">
                <Grid item xs={12} alignItems="center" sx={{ padding: '10px' }}>
                    <Typography variant="p" component="p" color={theme.palette.primary.main} sx={{ marginBlock: '20px', fontSize: '18px', lineHeight: '30px' }}>
                        <b>IMBROGLIO SUL VALORE</b>
                    </Typography>
                    <Typography variant="p" component="p" color={theme.palette.primary.main} sx={{ marginBlock: '20px', fontSize: '18px', lineHeight: '30px' }}>
                        Se un giocatore decide di giocare appositamente male le prime 100 partite con lo scopo di valere poco e favoreggiare il proprio acquisto, lo staff di Haxzone prenderà uno dei seguenti provvedimenti:
                        <ul>
                            <li>Aumento manuale del valore</li>
                            <li>Espulsione a tempo indeterminato dalla Lega</li>
                        </ul>
                    </Typography>
                    <Typography variant="p" component="p" color={theme.palette.primary.main} sx={{ marginBlock: '20px', fontSize: '18px', lineHeight: '30px' }}>
                        I criteri di valutazione per arrivare a questa scelta sono:
                        <ul>
                            <li>Valutazione soggettiva dello staff di Haxzone</li>
                            <li>Valutazione di altri tornei giocati nella nostra room o in room simili</li>
                            <li>Valutazione delle partite giocate</li>
                        </ul>
                    </Typography>
                </Grid>
            </Grid>
        </>
    );
}