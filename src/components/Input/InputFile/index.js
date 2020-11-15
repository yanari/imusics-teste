import React from 'react';

import { StyledInputFile } from './styles';
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
      <input
        type="file"
        name={name}
        onInput={handleInput}
      />
      <StyledAttachment/>
    </StyledInputFile>
  );
};

export default InputFile;
