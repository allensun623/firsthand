'use client';

import React, { useState } from 'react';
import ChatbotHeading from './ChatbotHeading';
import ChatbotBody from './ChatbotBody';
import ChatbotBottom from './ChatbotBottom';
import { Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import { Message } from '@/types/message';
import { messageTypeEnum } from '@/constants/messages';

type Props = {
  handleCloseChatbot: () => void;
};

export default function Chatbot({ handleCloseChatbot }: Props) {
  const chatbotMsg = {
    text: 'How can I help you?',
    type: messageTypeEnum.CHATBOT,
  };
  const [messages, setMessages] = useState<Message[]>([chatbotMsg]);
  const handleSendMessage = (text: string) => {
    setMessages((prev) => [
      ...prev,
      { text, type: messageTypeEnum.CUSTOMER },
      chatbotMsg,
    ]);
  };
  const spacing = 4;
  return (
    <Grid
      sx={(theme) => ({
        border: `1px solid ${theme.palette.background.default}`,
        borderRadius: '10px',
        boxShadow: 5,
      })}
      m={5}
      height={600}
      width={350}
      direction={'column'}
      container
    >
      {/* Heading */}
      <Grid p={spacing}>
        <ChatbotHeading handleCloseChatbot={handleCloseChatbot} />
      </Grid>
      {/* Chat */}
      <Grid
        xs
        p={spacing}
        bgcolor={(theme) => theme.palette.background.default}
        sx={{ overflow: 'auto' }}
      >
        <ChatbotBody messages={messages} />
      </Grid>
      {/* Footer */}
      <Grid px={spacing}>
        <ChatbotBottom onSend={(m: string) => handleSendMessage(m)} />
      </Grid>

      <Grid
        px={spacing}
        bgcolor={(theme) => theme.palette.background.default}
        sx={(theme) => ({
          border: `1px solid ${theme.palette.background.default}`,
          borderRadius: '0 0 10px 10px',
        })}
        container
      >
        <Typography
          variant='caption'
          color='grey'
          textAlign='center'
          width='100%'
        >
          Powered by Firsthand Chatbot
        </Typography>
      </Grid>
    </Grid>
  );
}
