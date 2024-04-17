// LeagueNavigation.jsx

import React from 'react';
import { Button, useMediaQuery } from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';



export default function StatsNavigation ({ activeComponent, setActiveComponent }) {

  const theme = useTheme();

  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <div>
      <Button
        variant={activeComponent === 'scorer' ? 'contained' : 'normal'}
        size='large'
        color="secondary"
        onClick={() => setActiveComponent('scorer')}
        className='league-navigation'
        sx={{minWidth: isMobile ? '100%' : 'auto'}}
        >
        Marcatori
      </Button>
      <Button
        variant={activeComponent === 'assist' ? 'contained' : 'normal'}
        size='large'
        color="secondary"
        onClick={() => setActiveComponent('assist')}
        className='league-navigation'
        sx={{minWidth: isMobile ? '100%' : 'auto'}}
      >
        Assist 
      </Button>
      <Button
        variant={activeComponent === 'cleansheets' ? 'contained' : 'normal'}
        size='large'
        color="secondary"
        onClick={() => setActiveComponent('cleansheets')}
        className='league-navigation'
        sx={{minWidth: isMobile ? '100%' : 'auto'}}
      >
        Clean Sheets
      </Button>
      <Button
        variant={activeComponent === 'hattrick' ? 'contained' : 'normal'}
        size='large'
        color="secondary"
        onClick={() => setActiveComponent('hattrick')}
        className='league-navigation'
        sx={{minWidth: isMobile ? '100%' : 'auto'}}
      >
        Hattrick
      </Button>
    </div>
  );
};