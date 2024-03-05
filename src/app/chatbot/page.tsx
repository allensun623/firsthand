'use client';

import Chatbot from './Chatbot';
import { Box } from '@mui/material';
import ChatbotIcon from './ChatbotIcon';
import { useState } from 'react';

export default function Home() {
  const [chatbotOpen, setChatbotOpen] = useState(false);
  return (
    <Box
      sx={{
        position: 'absolute',
        bottom: 0,
        right: 0,
        width: '100px',
        height: '100px',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          transform: 'translate(-100%, -100%)',
        }}
      >
        {chatbotOpen ? (
          <Box>
            <Chatbot handleCloseChatbot={() => setChatbotOpen(false)} />
          </Box>
        ) : (
          <ChatbotIcon handleOpenChatbot={() => setChatbotOpen(true)} />
        )}
      </Box>
    </Box>
  );
}
