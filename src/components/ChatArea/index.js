import React from 'react';
import {
  StyledChatArea,
  StyledSendIcon,
} from './styles';

import Button from '../Button';
import Input from '../Input';

const ChatArea = () => {
  return (
    <StyledChatArea>
      <Input
        className="chat-area__input"
        name="chat"
      />
      <Button>
        <StyledSendIcon/>
      </Button>
    </StyledChatArea>
  );
};

export default ChatArea;
