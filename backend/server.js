import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors'; // Importa il middleware cors

// Inizializza l'app Express
const app = express();

mongoose.connect(process.env.VITE_MONGODB_URI);

// Verifica la connessione al database MongoDB
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Errore durante la connessione a MongoDB:'));
db.once('open', () => {
  console.log('Connessione a MongoDB riuscita');
});

// Aggiungi il middleware cors
app.use(cors());

const corsOptions = {
  origin: 'https://haxzone-league.verce.app', // Sostituisci con il tuo URL frontend
  methods: ['GET', 'POST'], // Metodi HTTP consentiti
  allowedHeaders: ['Content-Type', 'Authorization'], // Intestazioni consentite
};

app.use(cors(corsOptions));

// Definisci lo schema del giocatore (sostituisci questo con il tuo schema reale)
const playerSchema = new mongoose.Schema({
  nickname: String,
  games: Number,
  wins: Number,
  winrate: String,
  goals: Number,
  ownGoals: Number,
  assists: Number,
  cs: Number,
  playtime: Number,
  hatTrick: Number,
});

// Crea un modello basato sullo schema del giocatore
const Player = mongoose.model('Player', playerSchema, 'PlayersStats');

// Definisci un endpoint per ottenere i dati del giocatore
app.get('/api/PlayersStats/:playerName', async (req, res) => {
  try {
    const playerName = req.params.playerName;
    const player = await Player.findOne({ nickname: playerName });
    if (!player) {
      return res.status(404).json({ error: 'Giocatore non trovato' });
    }
    res.json(player);
  } catch (error) {
    console.error('Errore durante il recupero delle statistiche del giocatore:', error);
    res.status(500).json({ error: 'Errore durante il recupero delle statistiche del giocatore' });
  }
});

export default app;
