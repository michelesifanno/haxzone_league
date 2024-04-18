import * as React from 'react';
import { Typography, Box, Container } from '@mui/material';


export default function Footer() {
    return (
        <>
        <Container maxWidth={false} disableGutters sx={{backgroundColor:'#121212'}}>
        <Box sx={{padding:'20px', backgroundColor:'#121212'}}>
                    <Typography variant="p" component="p" sx={{ color:'#fff', fontWeight: '600', paddingBottom: '10px', display:'flex', justifyContent:'center', textAlign:'center' }}>
                    © 2024 FE: Michele Sifanno | BE: Alex Paladino 
                    </Typography>
                    </Box>
                    </Container>
        </>
    )
}