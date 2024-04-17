import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import { Typography, Grid, Container, Card, CardContent, CardMedia } from '@mui/material';


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
            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="video"
        autoPlay
        loop
        muted
        image="https://assets.codepen.io/6093409/river.jpg"
        style={{ height: '200px' }} // Altezza del video
      >
        <source
          src="https://assets.codepen.io/6093409/river.mp4"
          type="video/mp4"
        />
      </CardMedia>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Video Title
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Some description about the video.
        </Typography>
      </CardContent>
    </Card>
        </>
    );
}