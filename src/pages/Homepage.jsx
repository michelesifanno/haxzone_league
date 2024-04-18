import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import { Container } from '@mui/material';

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
      <Container
        maxWidth="false"
        disableGutters
        sx={{
          marginTop: '-80px',
          minWidth: '100vw',
          position: 'relative', // Aggiunto posizione relativa al container
        }}
      >
        <Typography
          variant="h1"
          component="h1"
          sx={{
            position: 'absolute', // Posizionamento assoluto rispetto al container
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)', // Centra il testo orizzontalmente e verticalmente
            zIndex: 1, // Assicura che il testo sia sopra al video
            color: 'white', // Colore del testo
            textAlign: 'center', // Allinea il testo al centro
          }}
        >
          Haxzone<br/>
          League
        </Typography>
        <Box
          sx={{
            position: 'relative',
            width: '100%',
            paddingTop: '56.25%',
            backgroundImage: `url('https://img.youtube.com/vi/JkAptaaFSrE/maxresdefault.jpg')`,
            backgroundSize: 'cover',
            overflowX: 'hidden',
          }}
        >
          <iframe
            title="video-background"
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/JkAptaaFSrE?mute=1&autoplay=1&loop=1&controls=0&showinfo=0&autohide=0&enablejsapi=1&modestbranding=1&playlist=JkAptaaFSrE&vq=hd1080"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              pointerEvents: 'none',
            }}
          ></iframe>
        </Box>
      </Container>
    </>
  );
}
