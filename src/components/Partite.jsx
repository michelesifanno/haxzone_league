import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import { Typography, Divider, useMediaQuery, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Grid } from '@mui/material';
import { useParams } from 'react-router-dom';

export default function Partite() {

    const theme = useTheme();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);


    return (
        <>
            <Grid container justifyContent="flex-start" alignItems="center" sx={{ paddingBottom: '20px' }}>
                <Grid item xs={12} alignItems="center" sx={{padding:'10px'}}>
                    <Typography variant="h4" component="h4" color={theme.palette.primary.main} sx={{ fontWeight: '600', paddingBottom: '10px' }}>
                        PARTITE
                    </Typography>
                    <Divider />
                </Grid>
            </Grid>
            <Grid container justifyContent="flex-start">
    <Grid item xs={12} alignItems="center" sx={{ padding: '10px' }}>
        <Typography variant="p" component="p" color={theme.palette.primary.main} sx={{ marginBlock: '20px', fontSize: '18px', lineHeight: '30px' }}>
            <b>ORGANIZZAZIONE</b>
        </Typography>
        <Typography variant="p" component="p" color={theme.palette.primary.main} sx={{ marginBlock: '20px', fontSize: '18px', lineHeight: '30px' }}>
            Le partite sono organizzate dallo staff di Haxzone e devono essere giocate nell'orario stabilito dallo staff. Non è possibile rimandare la partita se non c'è l'accordo tra i presidenti di entrambe le squadre.
        </Typography>
        <Typography variant="p" component="p" color={theme.palette.primary.main} sx={{ marginBlock: '20px', fontSize: '18px', lineHeight: '30px' }}>
            Se c'è l'accordo tra i presidenti, la partita rimandata deve essere comunicata allo staff con un ticket su discord e deve essere obbligatoriamente giocata entro 3 giorni dal giorno in cui era prevista la partita e non può sovrapporsi in orari dove altre squadre giocano altre partite.
        </Typography>
        <br />
        <Typography variant="p" component="p" color={theme.palette.primary.main} sx={{ marginBlock: '20px', fontSize: '18px', lineHeight: '30px' }}>
            <b>FORMAT</b>
        </Typography>
        <Typography variant="p" component="p" color={theme.palette.primary.main} sx={{ marginBlock: '20px', fontSize: '18px', lineHeight: '30px' }}>
            Le partite sono 3v3 giocate nello stadio della squadra in casa in modalità Biglassic. Le partite devono essere giocate nella room ufficiale di HaxZone e sono composte da 2 tempi da 5 minuti ciascuno (totale 10 minuti). La squadra in casa deve usare la prima o terza maglia e la squadra in trasferta deve usare una maglia che non si confonda con quella che gioca in casa. Al termine del primo tempo le squadre cambiano lato e il cambio avviene in automatico. Non è necessario registrare la partita perché è automaticamente registrata dalla room.
        </Typography>
        <br />
        <Typography variant="p" component="p" color={theme.palette.primary.main} sx={{ marginBlock: '20px', fontSize: '18px', lineHeight: '30px' }}>
            <b>FORMAT COPPA HAXZONE</b>
        </Typography>
        <Typography variant="p" component="p" color={theme.palette.primary.main} sx={{ marginBlock: '20px', fontSize: '18px', lineHeight: '30px' }}>
            Nelle partite di coppa Haxzone, in caso di pareggio dopo i 2 tempi regolamentari, si giocano 2 tempi supplementari da 3 minuti ciascuno. Se al termine dei tempi supplementari le due squadre sono ancora in parità ci sarà una sfida ai calci di rigore. Nella sfida ai calci di rigore l'ALLENATORE o il CAPITANO decide l'ordine di chi batte i rigori e lo comunica in chat. Nella lista ci possono essere solo i giocatori che hanno giocato almeno 1 secondo nella partita e devono essere minimo 3 giocatori. I calci di rigore vengono battuti una squadra alla volta ed è dovere del supervisore cambiare i giocatori in campo per effettuare il rigore. La sfida termina dopo 5 calci di rigore. Se dopo il quinto calcio di rigore battuto da entrambe le squadre si è ancora in pareggio si prosegue con un calcio di rigore a testa finché una delle due squadre va in vantaggio.
        </Typography>
        <br />
        <Typography variant="p" component="p" color={theme.palette.primary.main} sx={{ marginBlock: '20px', fontSize: '18px', lineHeight: '30px' }}>
            <b>PAUSE</b>
        </Typography>
        <Typography variant="p" component="p" color={theme.palette.primary.main} sx={{ marginBlock: '20px', fontSize: '18px', lineHeight: '30px' }}>
            E' possibile fare delle pause durante le partite solo se:
            <ul>
                <li>C'è un'evidente situazione di lag o crash da parte di un giocatore in campo</li>
                <li>Un giocatore rimane immobile per un'azione e al termine di quella, ovvero quando la palla supera la metà campo, il giocatore non si è ancora mosso, si può mettere in pausa in attesa di un riscontro in chat da parte del giocatore che si è fermato</li>
            </ul>
        </Typography>
        <Typography variant="p" component="p" color={theme.palette.primary.main} sx={{ marginBlock: '20px', fontSize: '18px', lineHeight: '30px' }}>
            NON si può fare la pausa se: un giocatore sta scrivendo.
        </Typography>
<Typography variant="p" component="p" color={theme.palette.primary.main} sx={{ marginBlock: '20px', fontSize: '18px', lineHeight: '30px' }}>
    Le pause possono essere fatte SOLO dai CAPITANI.
</Typography>
<br />
<Typography variant="p" component="p" color={theme.palette.primary.main} sx={{ marginBlock: '20px', fontSize: '18px', lineHeight: '30px' }}>
    <b>SOSTITUZIONI</b>
</Typography>
<Typography variant="p" component="p" color={theme.palette.primary.main} sx={{ marginBlock: '20px', fontSize: '18px', lineHeight: '30px' }}>
    Le sostituzioni possono essere fatte SOLO ED ESCLUSIVAMENTE prima di ogni kick-off, quindi:
    <ul>
        <li>Calcio d'inizio</li>
        <li>Dopo un gol</li>
        <li>Calcio d'inizio del secondo tempo</li>
    </ul>
    Per effettuare una sostituzione, che viene decisa dall'ALLENATORE o VICE-ALLENATORE, deve essere dichiarata in chat della room la sostituzione che si vuole effettuare.
Il CAPITANO, ALLENATORE o VICE-ALLENATORE preme la pausa per poter compiere il cambio. Quando il cambio è stato effettuato il giocatore deve confermare di essere pronto per giocare.
Non ci sono limiti alle sostituzioni
</Typography>
<br />
<Typography variant="p" component="p" color={theme.palette.primary.main} sx={{ marginBlock: '20px', fontSize: '18px', lineHeight: '30px' }}>
    <b>INFRAZIONI E CONTROVERSIE</b>
</Typography>
<Typography variant="p" component="p" color={theme.palette.primary.main} sx={{ marginBlock: '20px', fontSize: '18px', lineHeight: '30px' }}>
    Infrazioni comuni:
<ul>
    <li>Insulti: cartellino giallo. Non viene tollerato NESSUN insulto.</li>
    <li>Trolling: cartellino rosso e espulsione dalla lega.</li>
</ul>
</Typography>
<Typography variant="p" component="p" color={theme.palette.primary.main} sx={{ marginBlock: '20px', fontSize: '18px', lineHeight: '30px' }}>
    CARTELLINO GIALLO: come in serie A, se si accumulano 5 cartellini gialli in partite diverse ci sarà una giornata di squalifica.
</Typography>
<Typography variant="p" component="p" color={theme.palette.primary.main} sx={{ marginBlock: '20px', fontSize: '18px', lineHeight: '30px' }}>
    CARTELLINO ROSSO: se un giocatore viene espulso (2 cartellini gialli in una partita) la squadra giocherà l'intero tempo con un giocatore in meno e il giocatore espulso sarà squalificato per la prossima partita.
</Typography>
<Typography variant="p" component="p" color={theme.palette.primary.main} sx={{ marginBlock: '20px', fontSize: '18px', lineHeight: '30px' }}>
    Se non vengono rispettate le regole della partita soprascritte e non sono previste delle punizioni, sarà dovere dell'admin dello staff che supervisiona la partita prendere una decisione sul caso.
</Typography>
<Typography variant="p" component="p" color={theme.palette.primary.main} sx={{ marginBlock: '20px', fontSize: '18px', lineHeight: '30px' }}>
    Le decisioni possono essere:
<ul>
    <li>Continuare a giocare la partita</li>
    <li>Dare la palla all'avversario</li>
    <li>Concedere un gol per “fair-play”</li>
    <li>Rigiocare la partita (in casi estremi)</li>
    <li>Dare la partita a tavolino (per esempio, una squadra non si presenta)</li>
</ul>
</Typography>
    </Grid>
</Grid>

            </>
            );
}