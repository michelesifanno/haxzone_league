import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import { Typography, Divider, useMediaQuery, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Grid } from '@mui/material';
import { useParams } from 'react-router-dom';

export default function Trasferimenti() {

    const theme = useTheme();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);


    return (
        <>
            <Grid container justifyContent="flex-start" alignItems="center" sx={{ paddingBottom: '20px' }}>
                <Grid item xs={12} alignItems="center" sx={{padding:'10px'}}>
                    <Typography variant="h4" component="h4" color={theme.palette.primary.main} sx={{ fontWeight: '600', paddingBottom: '10px' }}>
                        CONTRATTI E TRASFERIMENTI
                    </Typography>
                    <Divider />
                </Grid>
            </Grid>
            <Grid container justifyContent="flex-start">
                    <Grid item xs={12} alignItems="center" sx={{ padding: '10px' }}>
                        <Typography variant="p" component="p" color={theme.palette.primary.main} sx={{ marginBlock: '20px', fontSize: '18px', lineHeight: '30px' }}>
                            <b>IMPORTANTE: TUTTE LE SQUADRE COMINCIANO SENZA GIOCATORI</b>
                        </Typography>
                        <Typography variant="p" component="p" color={theme.palette.primary.main} sx={{ marginBlock: '20px', fontSize: '18px', lineHeight: '30px' }}>
                            Per chi ha già partecipato alla lega Haxfree© e aveva già creato una squadra, può riproporla nella nostra Lega ma tutti i giocatori della squadra sono svincolati.
                        </Typography>
                        <Typography variant="p" component="p" color={theme.palette.primary.main} sx={{ marginBlock: '20px', fontSize: '18px', lineHeight: '30px' }}>
                            Per acquistare un giocatore svincolato, il presidente deve esserci un accordo tra presidente e giocatore e notificarlo allo staff di Haxzone.
                            </Typography>
                            <Typography variant="p" component="p" color={theme.palette.primary.main} sx={{ marginBlock: '20px', fontSize: '18px', lineHeight: '30px' }}>
                            L'accordo è un contratto scritto dove vengono inseriti:
                        <ul>
                            <li>STIPENDIO</li>
                            <li>Durata contratto</li>
                            <li>Eventuali clausole</li>
                        </ul>
                        </Typography>
                        <Typography variant="p" component="p" color={theme.palette.primary.main} sx={{ marginBlock: '20px', fontSize: '18px', lineHeight: '30px' }}>
                            Ogni presidente ha a disposizione 20 milioni di “tetto salariale” nella prima sessione di mercato. Lo stipendio è un valore espresso in milioni di € che aumenta di anno in anno in base a un calcolo che tiene conto del valore del giocatore e dello stipendio iniziale. Il presidente può decidere di giocare e il suo stipendio fa parte dei 20 milioni utilizzabili ma col passare delle stagioni non aumenterà automaticamente.
                        </Typography>
                        <Typography variant="p" component="p" color={theme.palette.primary.main} sx={{ marginBlock: '20px', fontSize: '18px', lineHeight: '30px' }}>
                            Lo stipendio minimo è di 1 milione €. Lo stipendio si trasforma in punti nella room al termine di ogni stagione che permettono al giocatore di ricevere premi.
                            </Typography>
                            <Typography variant="p" component="p" color={theme.palette.primary.main} sx={{ marginBlock: '20px', fontSize: '18px', lineHeight: '30px' }}>
                            Se una squadra supera il tetto salariale dovuto all'aumento progressivo, il presidente è costretto a vendere o svincolare (per giusta causa) un giocatore per rientrare nel tetto salariale.
                        </Typography>
                        <Typography variant="p" component="p" color={theme.palette.primary.main} sx={{ marginBlock: '20px', fontSize: '18px', lineHeight: '30px' }}>
                            L'aumento progressivo è stato inserito per incentivare lo scambio e la vendita dei giocatori tra le varie squadre per mantenere la Lega equilibrata e in costante evoluzione.
                        </Typography>
                        <br />
                        <Typography variant="p" component="p" color={theme.palette.primary.main} sx={{ marginBlock: '20px', fontSize: '18px', lineHeight: '30px' }}>
                            <b>TRASFERIMENTI</b>
                        </Typography>
                        <Typography variant="p" component="p" color={theme.palette.primary.main} sx={{ marginBlock: '20px', fontSize: '18px', lineHeight: '30px' }}>
                            I trasferimenti dei giocatori possono essere fatti solo durante le finestre di mercato, le cui durate sono stabilite dallo staff di HaxZone. Le finestre di mercato sono svolte:
                            <ul>
                                <li>Prima dell'inizio della stagione</li>
                                <li>A metà stagione tra la fine del girone d'andata e l'inizio del girone di ritorno</li>
                            </ul>
                        </Typography>
                        <Typography variant="p" component="p" color={theme.palette.primary.main} sx={{ marginBlock: '20px', fontSize: '18px', lineHeight: '30px' }}>
                            Le parti coinvolte nel trasferimento di un giocatore sono:
                            <ul>
                                <li>presidente acquirente</li>
                                <li>presidente venditore</li>
                                <li>giocatore/i coinvolto/i (al plurale in caso di scambi)</li>
                            </ul>
                        </Typography>
                        <Typography variant="p" component="p" color={theme.palette.primary.main} sx={{ marginBlock: '20px', fontSize: '18px', lineHeight: '30px' }}>
                            L'accordo per il trasferimento può essere fatto prima dell’apertura della finestra di mercato ma l’effettività del trasferimento è valida al momento dell’apertura della finestra. Quando tutte le parti sono d’accordo, bisogna stipulare un nuovo contratto e comunicarlo a Momito che conferma il trasferimento.
                        </Typography>
                        <Typography variant="p" component="p" color={theme.palette.primary.main} sx={{ marginBlock: '20px', fontSize: '18px', lineHeight: '30px' }}>
                            Il presidente acquirente deve obbligatoriamente offrire al giocatore uno stipendio maggiore rispetto alla squadra dove giocava (minimo 0,1 milioni in più). E’ possibile vendere un giocatore ed trovarsi con meno di 5 giocatori in squadra ma quel vuoto deve essere colmato entro la fine del mercato.
                        </Typography>
                        <br />
                        <Typography variant="p" component="p" color={theme.palette.primary.main} sx={{ marginBlock: '20px', fontSize: '18px', lineHeight: '30px' }}>
                            <b>SVINCOLI</b>
                        </Typography>
                        <Typography variant="p" component="p" color={theme.palette.primary.main} sx={{ marginBlock: '20px', fontSize: '18px', lineHeight: '30px' }}>
                            Lo svincolo di un giocatore è possibile solo durante le finestre di mercato ed è una decisione in comune accordo tra il presidente e il giocatore. Il presidente può prendere questa decisione in maniera unilaterale se il giocatore non risponde entro 7 giorni dal momento della richiesta ufficiale di svincolo.
                        </Typography>
                        <Typography variant="p" component="p" color={theme.palette.primary.main} sx={{ marginBlock: '20px', fontSize: '18px', lineHeight: '30px' }}>
                            Il presidente riceverà il valore del giocatore al momento dello svincolo. Il giocatore svincolato non potrà entrare in una squadra nella stessa finestra di mercato in cui è stato svincolato.
                        </Typography>
                        <Typography variant="p" component="p" color={theme.palette.primary.main} sx={{ marginBlock: '20px', fontSize: '18px', lineHeight: '30px' }}>
                            Il giocatore svincolato riceve un'indennità per lo svincolo pari al 50% dello stipendio previsto fino al termine della stagione. Questa indennità viene pagata dalla squadra che l’ha svincolato e incide sul salario totale pagato.
                        </Typography>
                        <Typography variant="p" component="p" color={theme.palette.primary.main} sx={{ marginBlock: '20px', fontSize: '18px', lineHeight: '30px' }}>
                            Non è possibile svincolare se con lo svincolo del giocatore la squadra ha meno di 5 membri.
                        </Typography>
                    </Grid>
                </Grid>
            </>
            );
}