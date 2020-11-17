import React, {
  useState,
  useRef,
} from 'react';
import PropTypes from 'prop-types';

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
    className,
    handleInput,
    label,
    name,
    showFileName,
  } = props;

  const onInput = (event) => {
    const file = event.target.files[0];
    handleInput(file);
    setFileName(file.name);
  };

  return (
    <StyledInputFile className={className}>
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
      {(fileName && showFileName) && <StyledFileName>{fileName}</StyledFileName>}
    </StyledInputFile>
  );
};

InputFile.propTypes = {
  className: PropTypes.string,
  handleInput: PropTypes.func.isRequired,
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  showFileName: PropTypes.bool,
};

InputFile.defaultProps = {
  showFileName: true,
};

export default InputFile;
