// LeagueNavigation.jsx

import React from 'react';
import { Button } from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';


const LeagueNavigation = ({ activeComponent, setActiveComponent }) => {

  const theme = useTheme();

  return (
    <div>
      <Button
        variant={activeComponent === 'calendar' ? 'contained' : 'normal'}
        size='large'
        color="secondary"
        onClick={() => setActiveComponent('calendar')}
        className='league-navigation'
      >
        Calendario & Risultati
      </Button>
      <Button
        variant={activeComponent === 'leaderboard' ? 'contained' : 'normal'}
        size='large'
        color="secondary"
        onClick={() => setActiveComponent('leaderboard')}
        className='league-navigation'
      >
        Classifica
      </Button>
      <Button
        variant={activeComponent === 'awards' ? 'contained' : 'normal'}
        size='large'
        color="secondary"
        onClick={() => setActiveComponent('awards')}
        className='league-navigation'
      >
        Awards
      </Button>
    </div>
  );
};

export default LeagueNavigation;
