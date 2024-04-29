import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import { Typography, Divider, useMediaQuery, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Grid } from '@mui/material';
import { useParams } from 'react-router-dom';

export default function Faq() {

    const theme = useTheme();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);


    return (
        <>
            <Grid container justifyContent="flex-start" alignItems="center" sx={{ paddingBottom: '20px' }}>
                <Grid item xs={12} alignItems="center" sx={{padding:'10px'}}>
                    <Typography variant="h4" component="h4" color={theme.palette.primary.main} sx={{ fontWeight: '600', paddingBottom: '10px' }}>
                        AIUTO, FAQ E TABELLE RIASSUNTIVE
                    </Typography>
                    <Divider />
                </Grid>
            </Grid>
            <Grid container justifyContent="flex-start">
                <Grid item xs={12} alignItems="center" sx={{ padding: '10px' }}>
                    <Typography variant="p" component="p" color={theme.palette.primary.main} sx={{ marginBlock: '20px', fontSize: '18px', lineHeight: '30px' }}>
                        Per ulteriori chiarimenti, suggerimenti e aiuti porre, tramite l’apposito ticket su discord, le proprie domande.
                    </Typography>
                    <br />
                    <Typography variant="p" component="p" color={theme.palette.primary.main} sx={{ marginBlock: '20px', fontSize: '18px', lineHeight: '30px' }}>
                    <b>Q: Quando inizia la lega?</b>
                    </Typography>
                    <Typography variant="p" component="p" color={theme.palette.primary.main} sx={{ marginBlock: '20px', fontSize: '18px', lineHeight: '30px' }}>
                        A: Il 22 Aprile
                    </Typography>
                    <br />
                    <Typography variant="p" component="p" color={theme.palette.primary.main} sx={{ marginBlock: '20px', fontSize: '18px', lineHeight: '30px' }}>
                    <b>Q: Entro quanto tempo devo iscrivermi o creare la squadra?</b>
                    </Typography>
                    <Typography variant="p" component="p" color={theme.palette.primary.main} sx={{ marginBlock: '20px', fontSize: '18px', lineHeight: '30px' }}>
                        A: Per la creazione della squadra consigliamo di crearla massimo 15 giorni prima dell’inizio della lega, per iscriversi come giocatore hai la possibilità fino al giorno prima dell’inizio della lega
                    </Typography>
                    <br />
                    <Typography variant="p" component="p" color={theme.palette.primary.main} sx={{ marginBlock: '20px', fontSize: '18px', lineHeight: '30px' }}>
                    <b>Q: Posso acquistare un giocatore svincolato ad un prezzo inferiore al valore di mercato?</b>
                    </Typography>
                    <Typography variant="p" component="p" color={theme.palette.primary.main} sx={{ marginBlock: '20px', fontSize: '18px', lineHeight: '30px' }}>
                        A: No, il valore di mercato di ogni giocatore è stato inserito per garantire equilibrio tra le squadre della Lega
                    </Typography>
                    <br />
                    <Typography variant="p" component="p" color={theme.palette.primary.main} sx={{ marginBlock: '20px', fontSize: '18px', lineHeight: '30px' }}>
                    <b>Q: E' possibile acquistare giocatori svincolati con meno di 100 partite giocate?</b>
                    </Typography>
                    <Typography variant="p" component="p" color={theme.palette.primary.main} sx={{ marginBlock: '20px', fontSize: '18px', lineHeight: '30px' }}>
                        A: Sì ma il giocatore deve promettere di giocare le 100 partite prima di iniziare la lega altrimenti l'acquisto non è valido. Il valore d'acquisto verrà deciso quando sono state giocate le 100 partite. Quindi prestate attenzione al budget rimanente
                    </Typography>
                    <br />
                    <Typography variant="p" component="p" color={theme.palette.primary.main} sx={{ marginBlock: '20px', fontSize: '18px', lineHeight: '30px' }}>
                    <b>Q: Quanto stipendio devo dare ai miei giocatori?</b>
                    </Typography>
                    <Typography variant="p" component="p" color={theme.palette.primary.main} sx={{ marginBlock: '20px', fontSize: '18px', lineHeight: '30px' }}>
                        A: Non c'è un valore fisso, devi concordarlo con il giocatore che stai acquistando
                    </Typography>
                    <br />
                    <Typography variant="p" component="p" color={theme.palette.primary.main} sx={{ marginBlock: '20px', fontSize: '18px', lineHeight: '30px' }}>
                    <b>Q: Cosa posso fare con il mio stipendio?</b>
                    </Typography>
                    <Typography variant="p" component="p" color={theme.palette.primary.main} sx={{ marginBlock: '20px', fontSize: '18px', lineHeight: '30px' }}>
                        A: Lo stipendio che ricevi verrà convertito al termine della lega e potrai acquistare dei pacchetti con all'interno skin e stadi, VIP pass e altri premi
                    </Typography>
                    <Typography variant="p" component="p" color={theme.palette.primary.main} sx={{ marginBlock: '20px', fontSize: '18px', lineHeight: '30px' }}>
                    <b>Q: Posso rinnovare il contratto ad un giocatore?</b>
                    </Typography>
                    <Typography variant="p" component="p" color={theme.palette.primary.main} sx={{ marginBlock: '20px', fontSize: '18px', lineHeight: '30px' }}>
                        A: Sì ma lo stipendio aumenta normalmente
                    </Typography>
                    <br />
                    <Typography variant="p" component="p" color={theme.palette.primary.main} sx={{ marginBlock: '20px', fontSize: '18px', lineHeight: '30px' }}>
                        <b>RIASSUNTO</b>
                    </Typography>
                    <Typography variant="p" component="p" color={theme.palette.primary.main} sx={{ marginBlock: '20px', fontSize: '18px', lineHeight: '30px' }}>
                        <b>Per i presidenti:</b><br />
                        Giocatori minimi per squadra: 5<br />
                        Massimo dei giocatori: Nessun limite<br />
                        Budget iniziale per acquistare: 160 milioni<br />
                        Tetto salariale: 20 milioni<br />
                        Ruoli obbligatori: Presidente, comunicatore, capitano<br />
                        Ruoli facoltativi: Allenatore, vice-allenatore<br />
                        Tabella valori giocatori: <a href='/valori'>VALORI GIOCATORI</a>
                    </Typography>
                    <br />
                    <Typography variant="p" component="p" color={theme.palette.primary.main} sx={{ marginBlock: '20px', fontSize: '18px', lineHeight: '30px' }}>
                        <b>STAFF</b><br />
                        Presidente della Lega: Alexis<br />
                        Controllo skin: Momito, Sandro Tonali<br />
                        Comunicatore con i presidenti: AndreaPirla, Whitepower, ilChicco<br />
                        Creatore stadi: Alexis<br />
                        Sviluppatore: Paladino, Fedefluork<br />
                        Gestore trasferimenti: IlChicco, Momito, Prox
                    </Typography>
                    <br />
                    <Typography variant="p" component="p" color={theme.palette.primary.main} sx={{ marginBlock: '20px', fontSize: '18px', lineHeight: '30px' }}>
                        <b>Scritto da</b> Milito👑 <b>e</b> Alexis, <b>letto e approvato da tutto lo staff di Haxzone.</b>
                    </Typography>
                    <br />
                    <Typography variant="p" component="p" color={theme.palette.primary.main} sx={{ marginBlock: '20px', fontSize: '18px', lineHeight: '30px' }}>
                        Le regole possono cambiare in ogni momento, facciamo del nostro meglio per cambiarle solo in minima parte e solo quando il campionato non è in corso<br />
                        <b>Ultima modifica:</b> 05/04/2024
                    </Typography>
                </Grid>
            </Grid>
        </>
    );
}