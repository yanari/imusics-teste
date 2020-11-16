import React from 'react';

import {
  StyledInputFile,
  StyledIcon,
} from './styles';
import { StyledLabel } from '../styles';
import { StyledAttachment } from '../../ChatMessage/styles';

const InputFile = (props) => {
  const {
    handleInput,
    label,
    name,
  } = props;
  return (
    <StyledInputFile>
      {label && <StyledLabel for={name}>{label}: </StyledLabel>}
      <StyledIcon role="button">
        <input
          type="file"
          name={name}
          onInput={handleInput}
        />
        <StyledAttachment/>
      </StyledIcon>
    </StyledInputFile>
  );
};

export default InputFile;
