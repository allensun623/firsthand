import Grid from '@mui/material/Unstable_Grid2/Grid2';
import React from 'react';
import Typography from '@mui/material/Typography';
import { Message } from '@/types/message';
import { messageTypeEnum } from '@/constants/messages';

export default function ChatbotMessage({ text, type }: Message) {
  const messageBoxConfig = {
    [messageTypeEnum.CHATBOT]: {
      justifyContent: 'flex-start',
      person: {
        textAlign: 'left',
        name: 'chatbot',
      },
      box: {
        borderRadius: '5px 20px 20px 20px',
        background: (theme: any) => 'white',
      },
      textColor: 'black',
    },
    [messageTypeEnum.CUSTOMER]: {
      justifyContent: 'flex-end',
      person: {
        textAlign: 'right',
        name: 'you',
      },
      box: {
        borderRadius: '20px 5px 20px 20px',
        background: (theme: any) => theme.palette.primary.main,
      },
      textColor: 'white',
    },
  }[type];

  return (
    <Grid container direction='column'>
      <Grid
        display='inline-flex'
        justifyContent={messageBoxConfig.justifyContent}
      >
        <Typography color='grey' variant='body2'>
          {messageBoxConfig.person.name}
        </Typography>
      </Grid>
      <Grid
        display='inline-flex'
        justifyContent={messageBoxConfig.justifyContent}
      >
        <Typography
          color={messageBoxConfig.textColor}
          variant='body2'
          sx={(theme) => ({
            borderRadius: messageBoxConfig.box.borderRadius,
            background: messageBoxConfig.box.background(theme),
          })}
          p={2}
        >
          {text}
        </Typography>
      </Grid>
    </Grid>
  );
}
