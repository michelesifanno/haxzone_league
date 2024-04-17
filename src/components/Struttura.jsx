import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import { Typography, Divider, useMediaQuery, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Grid } from '@mui/material';
import { useParams } from 'react-router-dom';

export default function Struttura() {

    const theme = useTheme();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);


    return (
        <>
            <Grid container spacing={2} justifyContent="flex-start" alignItems="center" sx={{ paddingBottom: '20px' }}>
                <Grid item xs={12} alignItems="center">
                    <Typography variant="h4" component="h4" color={theme.palette.primary.main} sx={{ fontWeight: '600', paddingBottom: '10px' }}>
                        STRUTTURA LEGA
                    </Typography>
                    <Divider />
                </Grid>
            </Grid>
            <Grid container spacing={2} justifyContent="flex-start">
                <Grid item xs={12} alignItems="center" sx={{ padding: '10px' }}>
                    <Typography variant="p" component="p" color={theme.palette.primary.main} sx={{ marginBlock: '20px', fontSize: '18px', lineHeight: '30px'}}>
                        Nella prima stagione vengono giocati solo campionato e coppa HAXZONE®.
                    </Typography>
                    <Typography variant="p" component="p" color={theme.palette.primary.main} sx={{ marginBlock: '20px', fontSize: '18px', lineHeight: '30px' }}>
                        Dalla seconda stagione viene implementata la Champions League e eventualmente l'Europa League e la Conference League se ci sono abbastanza squadre per poter effettuare le ultime due.
                    </Typography>
                    <Typography variant="p" component="p" color={theme.palette.primary.main} sx={{ marginBlock: '20px', fontSize: '18px', lineHeight: '30px' }}>
                        <b>CAMPIONATO</b>: tutte le squadre si affrontano in un girone di andata e un girone di ritorno e gli abbinamenti vengono sorteggiati. Come la Serie A, il calendario è completamente randomico sia per il girone di andata che per il girone di ritorno.
                    </Typography>
                    <Typography variant="p" component="p" color={theme.palette.primary.main} sx={{ marginBlock: '20px', fontSize: '18px', lineHeight: '30px' }}>
                        <b>COPPA HAXZONE®</b>: Svolta in una unica fase ad eliminazione diretta con una partita secca. Nella prima stagione gli abbinamenti sono sorteggiati. Dalla seconda stagione gli abbinamenti sono basati sulla posizione in classifica della squadra nel campionato precedente.
                    </Typography>
                    <Typography variant="p" component="p" color={theme.palette.primary.main} sx={{ marginBlock: '20px', fontSize: '18px', lineHeight: '30px' }}>
                        <b>COPPE EUROPEE</b>: DA DEFINIRE.
                    </Typography>
                </Grid>
            </Grid >
        </>
    );
}