import React from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import {
  StyledChatArea,
  StyledMessageField,
  StyledSendIcon,
} from './styles';

import Button from '../Button';
import Input from '../Input';
import InputFile from '../Input/InputFile';

const ChatArea = (props) => {
  const {
    handleSend,
    handleUpload,
  } = props;
  const { register, handleSubmit } = useForm();
  
  const handleSubmitForm = (form) => {
    handleSend(form.chat);
  };

  return (
    <StyledChatArea onSubmit={handleSubmit(handleSubmitForm)}>
      <StyledMessageField>
        {handleUpload && (
          <InputFile
            className="input-file__chat-area"
            handleInput={handleUpload}
            name="upload"
            showFileName={false}
          />
        )}
        <Input
          className="chat-area__input"
          name="chat"
          inputRef={register}
        />
      </StyledMessageField>
      <Button>
        <StyledSendIcon/>
      </Button>
    </StyledChatArea>
  );
};

ChatArea.propTypes = {
  handleSend: PropTypes.func.isRequired,
  handleUpload: PropTypes.func,
};

ChatArea.defaultProps = {
  // handleSend: () => {},
};

export default ChatArea;
