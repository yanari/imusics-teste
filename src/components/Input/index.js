import React from 'react';
import PropTypes from 'prop-types';

import {
  StyledContainer,
  StyledInput,
  StyledLabel,
  StyledError,
} from './styles';

const Input = (props) => {
  const {
    label,
    name,
    inputRef,
    error,
  } = props;
  return (
    <StyledContainer>
      {label && <StyledLabel>{label}</StyledLabel>}
      <StyledInput
        name={name}
        ref={inputRef}
        error={error}
      />
      {error && <StyledError>{error.message}</StyledError>}
    </StyledContainer>
  );
};

Input.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  error: PropTypes.instanceOf(Object),
  inputRef: PropTypes.func.isRequired,
};

export default Input;