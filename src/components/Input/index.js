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
    className,
    label,
    name,
    inputRef,
    error,
    placeholder,
  } = props;
  return (
    <StyledContainer className={className}>
      {label && <StyledLabel>{label}</StyledLabel>}
      <StyledInput
        name={name}
        ref={inputRef}
        error={error}
        placeholder={placeholder}
      />
      {error && <StyledError>{error.message}</StyledError>}
    </StyledContainer>
  );
};

Input.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  error: PropTypes.instanceOf(Object),
  inputRef: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
};

export default Input;