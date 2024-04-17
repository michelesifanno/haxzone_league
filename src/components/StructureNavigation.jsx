// LeagueNavigation.jsx

import React from 'react';
import { Button } from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';



export default function StructureNavigation ({ activeComponent, setActiveComponent }) {

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));


  return (
    <div>
      <Button
        variant={activeComponent === 'struttura' ? 'contained' : 'normal'}
        size='large'
        color="secondary"
        onClick={() => setActiveComponent('struttura')}
        className='league-navigation'
        sx={{minWidth: isMobile ? '100%' : 'auto'}}
        >
        Struttura
      </Button>
      <Button
        variant={activeComponent === 'squadre' ? 'contained' : 'normal'}
        size='large'
        color="secondary"
        onClick={() => setActiveComponent('squadre')}
        className='league-navigation'
        sx={{minWidth: isMobile ? '100%' : 'auto'}}
      >
        Squadre
      </Button>
      <Button
        variant={activeComponent === 'trasferimenti' ? 'contained' : 'normal'}
        size='large'
        color="secondary"
        onClick={() => setActiveComponent('trasferimenti')}
        className='league-navigation'
        sx={{minWidth: isMobile ? '100%' : 'auto'}}
      >
        Trasferimenti
      </Button>
      <Button
        variant={activeComponent === 'partite' ? 'contained' : 'normal'}
        size='large'
        color="secondary"
        onClick={() => setActiveComponent('partite')}
        className='league-navigation'
        sx={{minWidth: isMobile ? '100%' : 'auto'}}
      >
        Partite
      </Button>
      <Button
        variant={activeComponent === 'sanzioni' ? 'contained' : 'normal'}
        size='large'
        color="secondary"
        onClick={() => setActiveComponent('sanzioni')}
        className='league-navigation'
        sx={{minWidth: isMobile ? '100%' : 'auto'}}
      >
        Sanzioni
      </Button>
      <Button
        variant={activeComponent === 'faq' ? 'contained' : 'normal'}
        size='large'
        color="secondary"
        onClick={() => setActiveComponent('faq')}
        className='league-navigation'
        sx={{minWidth: isMobile ? '100%' : 'auto'}}
      >
        FAQ
      </Button>
    </div>
  );
}