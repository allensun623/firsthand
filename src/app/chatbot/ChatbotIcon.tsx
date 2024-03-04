'use client';

import { Avatar } from '@mui/material';
import React from 'react';
import ThreePIcon from '@mui/icons-material/ThreeP';

type Props = {
  handleOpenChatbot: () => void;
};

export default function ChatbotIcon({ handleOpenChatbot }: Props) {
  return (
    <Avatar
      sx={(theme) => ({
        cursor: 'pointer',
        bgcolor: theme.palette.primary.main,
        width: 56,
        height: 56,
      })}
      onClick={handleOpenChatbot}
    >
      <ThreePIcon fontSize='large' />
    </Avatar>
  );
}
