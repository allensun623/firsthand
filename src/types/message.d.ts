export type MessageType = 'chatbot' | 'customer';

export type Message = {
  text: string;
  type: MessageType;
};
