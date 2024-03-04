import React, { useEffect, useRef } from 'react';
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import ChatbotMessage from './ChatbotMessage';
import { Message } from '@/types/message';

export default function ChatbotBody({ messages }: { messages: Message[] }) {
  const lastMessageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (lastMessageRef.current) {
      lastMessageRef.current.scrollIntoView({
        behavior: 'instant',
        block: 'end',
      });
    }
  }, [messages.length]);
  return (
    <Grid
      container
      direction='column'
      style={{ overflowY: 'auto' }} // Set maxHeight or adjust as needed
      ref={lastMessageRef}
      spacing={2}
    >
      {messages?.map((m, i) => (
        <Grid key={i}>
          <ChatbotMessage text={m.text} type={m.type} />
        </Grid>
      ))}
    </Grid>
  );
}
