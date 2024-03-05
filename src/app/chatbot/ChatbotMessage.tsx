import Grid from '@mui/material/Unstable_Grid2/Grid2';
import React from 'react';
import Typography from '@mui/material/Typography';
import { Message } from '@/types/message';
import { messageTypeEnum } from '@/constants/messages';

export default function ChatbotMessage({ text, type }: Message) {
  const messageBoxConfig = {
    [messageTypeEnum.CHATBOT]: {
      person: {
        textAlign: 'left',
        name: 'chatbot',
      },
      box: {
        borderRadius: '5px 15px 15px 15px',
        background: (theme: any) => 'white',
      },
      textColor: 'black',
    },
    [messageTypeEnum.CUSTOMER]: {
      person: {
        textAlign: 'right',
        name: 'you',
      },
      box: {
        borderRadius: '15px 5px 15px 15px',
        background: (theme: any) => theme.palette.primary.main,
      },
      textColor: 'common.white',
    },
  }[type];

  return (
    <Grid container direction='column'>
      <Grid>
        {
          <Typography
            color='common.grey'
            variant='body2'
            sx={{ textAlign: messageBoxConfig.person.textAlign }}
          >
            {messageBoxConfig.person.name}
          </Typography>
        }
      </Grid>
      <Grid
        sx={(theme) => ({
          borderRadius: messageBoxConfig.box.borderRadius,
          background: messageBoxConfig.box.background(theme),
        })}
        p={2}
      >
        <Typography color={messageBoxConfig.textColor} variant='body2'>
          {text}
        </Typography>
      </Grid>
    </Grid>
  );
}
