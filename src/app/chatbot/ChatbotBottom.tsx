// import Btn from '../elements/Btn';
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import { Input, IconButton } from '@mui/material';
import { useState } from 'react';
import SendIcon from '@mui/icons-material/Send';

type Props = {
  onSend: (m: string) => void;
};

export default function ChatbotBottom({ onSend }: Props) {
  const [message, setMessage] = useState<string>('');
  const handleSendClick = () => {
    if (message.trim().length === 0) {
      return;
    }
    onSend(message);
    setMessage(''); // Clear the input after sending
  };
  return (
    <Grid container direction='row' alignItems='center'>
      <Grid xs>
        <Input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder='Type your message here'
          autoFocus
          fullWidth
          disableUnderline
        />
      </Grid>
      <Grid>
        <IconButton onClick={handleSendClick} color='primary'>
          <SendIcon />
        </IconButton>
      </Grid>
    </Grid>
  );
}
