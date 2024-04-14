// LeagueNavigation.jsx

import React from 'react';
import { Button } from '@mui/material';

const LeagueNavigation = ({ activeComponent, setActiveComponent }) => {
  return (
    <div>
      <Button
        variant={activeComponent === 'calendar' ? 'contained' : 'normal'}
        size='large'
        color="secondary"
        onClick={() => setActiveComponent('calendar')}
      >
        Calendario
      </Button>
      <Button
        variant={activeComponent === 'leaderboard' ? 'contained' : 'normal'}
        size='large'
        color="secondary"
        onClick={() => setActiveComponent('leaderboard')}
      >
        Classifica
      </Button>
    </div>
  );
};

export default LeagueNavigation;
