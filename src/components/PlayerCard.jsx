import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Box, Typography } from '@mui/material'; // Importa Box e Typography da MUI

const PlayerCard = ({ player }) => (
    <Box textAlign="center" key={player.id}>
      <Typography variant="h2" component="h2" color="primary.main">
        {player.avatar}
      </Typography>
      <Typography variant="h4" component="h4" color="text.primary">
        {player.name}
      </Typography>
      <img src={teamLogo} alt="Logo Team" style={{ width: 80, padding:'40px 0px' }} />
    </Box>
  );