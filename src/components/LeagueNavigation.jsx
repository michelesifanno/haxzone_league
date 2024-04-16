// LeagueNavigation.jsx

import React from 'react';
import { Button } from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';



const LeagueNavigation = ({ activeComponent, setActiveComponent }) => {

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));


  return (
    <div>
      <Button
        variant={activeComponent === 'calendar' ? 'contained' : 'normal'}
        size='large'
        color="secondary"
        onClick={() => setActiveComponent('calendar')}
        className='league-navigation'
        sx={{minWidth: isMobile ? '100%' : 'auto'}}
        >
        Calendario & Risultati
      </Button>
      <Button
        variant={activeComponent === 'leaderboard' ? 'contained' : 'normal'}
        size='large'
        color="secondary"
        onClick={() => setActiveComponent('leaderboard')}
        className='league-navigation'
        sx={{minWidth: isMobile ? '100%' : 'auto'}}
      >
        Classifica
      </Button>
      <Button
        variant={activeComponent === 'awards' ? 'contained' : 'normal'}
        size='large'
        color="secondary"
        onClick={() => setActiveComponent('awards')}
        className='league-navigation'
        sx={{minWidth: isMobile ? '100%' : 'auto'}}
      >
        Awards
      </Button>
    </div>
  );
};

export default LeagueNavigation;
