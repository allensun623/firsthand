import React from 'react';
import Header from '../header/Header';
import { Box } from '@mui/material';

type Props = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <Box display='flex' flexDirection='column'>
      <Header />
      {children}
      {/* Footer */}
    </Box>
  );
}
