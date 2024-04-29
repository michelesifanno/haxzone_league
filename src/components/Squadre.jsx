import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import { Typography, Divider, useMediaQuery, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Grid } from '@mui/material';
import { useParams } from 'react-router-dom';

export default function Squadre() {

    const theme = useTheme();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);


    return (
        <>
            <Grid container justifyContent="flex-start" alignItems="center" sx={{ paddingBottom: '20px' }}>
                <Grid item xs={12} alignItems="center" sx={{padding:'10px'}}>
                    <Typography variant="h4" component="h4" color={theme.palette.primary.main} sx={{ fontWeight: '600', paddingBottom: '10px' }}>
                        CREARE UNA SQUADRA
                    </Typography>
                    <Divider />
                </Grid>
            </Grid>
            <Grid container justifyContent="flex-start">
                <Grid item xs={12} alignItems="center" sx={{ padding: '10px' }}>
                    <Typography variant="p" component="p" color={theme.palette.primary.main} sx={{ marginBlock: '20px', fontSize: '18px', lineHeight: '30px' }}>
                        Se si vuole creare una squadra bisogna tenere presente che il presidente ha più diritti e più doveri degli altri partecipanti alla Lega.
                    </Typography>
                    <Typography variant="p" component="p" color={theme.palette.primary.main} sx={{ marginBlock: '20px', fontSize: '18px', lineHeight: '30px' }}>
                        Il soggetto che decide di creare la squadra diventa automaticamente il presidente che dovrà assegnare dei ruoli ai propri giocatori, ma ne parleremo tra poco.
                    </Typography>
                    <Typography variant="p" component="p" color={theme.palette.primary.main} sx={{ marginBlock: '20px', fontSize: '18px', lineHeight: '30px' }}>
                        Per creare una squadra, il presidente deve:
                        <ul>
                            <li>Creare un logo/stemma</li>
                            <li>Creare le maglie (prima, seconda e terza)</li>
                            <li>Creare lo stadio</li>
                        </ul>
                    </Typography>
                    <Typography variant="p" component="p" color={theme.palette.primary.main} sx={{ marginBlock: '20px', fontSize: '18px', lineHeight: '30px' }}>
                        Per il logo/stemma non ci sono dei vincoli particolari, se si vuole fare un lavoro rapido consigliamo di utilizzare Canva.
                    </Typography>
                    <Typography variant="p" component="p" color={theme.palette.primary.main} sx={{ marginBlock: '20px', fontSize: '18px', lineHeight: '30px' }}>
                        Le maglie (ovvero le skin) devono essere molto diverse tra loro e all’occhio non fastidiose.
                    </Typography>
                    <Typography variant="p" component="p" color={theme.palette.primary.main} sx={{ marginBlock: '20px', fontSize: '18px', lineHeight: '30px' }}>
                        L'avatar (ovvero il numero) deve essere di contrasto rispetto alla skin.
                    </Typography>
                    <Typography variant="p" component="p" color={theme.palette.primary.main} sx={{ marginBlock: '20px', fontSize: '18px', lineHeight: '30px' }}>
                        Per la creazione delle maglie bisogna usare: <a href="https://haxmods.com/colors/" target="_blank">https://haxmods.com/colors/</a>.  Per suggerimenti, dettagli e invio delle skin, scrivere sul ticket dedicato.
                    </Typography>
                    <Typography variant="p" component="p" color={theme.palette.primary.main} sx={{ marginBlock: '20px', fontSize: '18px', lineHeight: '30px' }}>
                        Per creare lo stadio, scrivere ad Alexis. Consigliamo di creare uno “schizzo” per dare l'idea dello stadio.
                    </Typography>
                    <Typography variant="p" component="p" color={theme.palette.primary.main} sx={{ marginBlock: '20px', fontSize: '18px', lineHeight: '30px' }}>
                        È possibile personalizzare:
                        <ul>
                            <li>Colori delle porte</li>
                            <li>Colori dei perimetri di gioco</li>
                            <li>Un disegno stilizzato all'interno del cerchio di centrocampo</li>
                        </ul>
                    </Typography>
                    <Typography variant="p" component="p" color={theme.palette.primary.main} sx={{ marginBlock: '20px', fontSize: '18px', lineHeight: '30px' }}>
                        Lo stadio non può avere dei colori uguali o simili e impercettibili all'occhio rispetto alla propria skin di casa.
                    </Typography>

                </Grid>
            </Grid >
        </>
    );
}