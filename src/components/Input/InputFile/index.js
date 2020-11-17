import React, {
  useState,
  useRef,
} from 'react';

import {
  StyledInputFile,
  StyledIcon,
  StyledFileName,
} from './styles';
import { StyledLabel } from '../styles';
import { StyledAttachment } from '../../ChatMessage/styles';

const InputFile = (props) => {
  const ref = useRef(null);
  const [fileName, setFileName] = useState(null);
  const {
    handleInput,
    label,
    name,
  } = props;

  const onInput = (event) => {
    const file = event.target.files[0];
    handleInput(file);
    setFileName(file.name);
  };

  return (
    <StyledInputFile>
      {label && <StyledLabel htmlFor={name}>{label}: </StyledLabel>}
      <StyledIcon role="button">
        <input
          type="file"
          name={name}
          onInput={onInput}
          ref={ref}
        />
        <StyledAttachment/>
      </StyledIcon>
      {fileName && <StyledFileName>{fileName}</StyledFileName>}
    </StyledInputFile>
  );
};

export default InputFile;
