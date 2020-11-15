import React from 'react';
import { StyledChatArea } from './styles';

import Input from '../Input';

const ChatArea = () => {
  return (
    <StyledChatArea>
      <Input
        className="chat-area__input"
        name="chat"
      />
    </StyledChatArea>
  );
};

export default ChatArea;
