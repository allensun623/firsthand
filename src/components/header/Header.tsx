import React from 'react';
import Logo from './Logo';
import Navigation from './Navigation';
import { Box } from '@mui/material';

export default function Header() {
  return (
    <Box
      display='flex'
      flexDirection='row'
      justifyContent='space-between'
      alignItems='center'
      px={3}
    >
      <Logo />
      <Navigation />
    </Box>
  );
}
