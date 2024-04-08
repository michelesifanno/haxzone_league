import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Box, Typography } from '@mui/material'; // Importa Box e Typography da MUI


const PlayerSlider = ({ players }) => {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
    };
  
    return (
      <Slider {...settings}>
        {players.map((player) => (
          <PlayerCard key={player.id} player={player} />
        ))}
      </Slider>
    );
  };

  export default PlayerSlider;
  