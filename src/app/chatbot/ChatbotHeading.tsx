import React from 'react';
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import ThreePIcon from '@mui/icons-material/ThreeP';
import { Avatar, Badge, Typography, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

type Props = {
  handleCloseChatbot: () => void;
};

export default function ChatbotHeading({ handleCloseChatbot }: Props) {
  return (
    <Grid container spacing={4} alignItems='top' direction='row'>
      {/* icon */}
      <Grid>
        <Badge
          variant='dot'
          color='success'
          overlap='circular'
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        >
          <Avatar
            sx={(theme) => ({
              bgcolor: theme.palette.primary.main,
              width: 56,
              height: 56,
            })}
          >
            <ThreePIcon fontSize='large' />
          </Avatar>
        </Badge>
      </Grid>
      {/* title */}
      <Grid container direction='column' xs justifyContent='center'>
        <Typography variant='h6'>Support Bot</Typography>
        <Typography variant='caption'>Online</Typography>
      </Grid>
      <Grid>
        <IconButton onClick={handleCloseChatbot}>
          <CloseIcon />
        </IconButton>
      </Grid>
    </Grid>
  );
}
