import React from 'react';
import Logo from './Logo';
import Navigation from './Navigation';
import { Box } from '@mui/material';

type Props = {};

export default function Header({}: Props) {
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
