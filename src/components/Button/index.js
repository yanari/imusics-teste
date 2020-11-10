import React from 'react';
import PropTypes from 'prop-types';
import { StyledButton } from './styles';

const Button = (props) => {
  const {
    children,
    handleClick,
    type,
  } = props;
  return (
    <StyledButton
      onClick={handleClick || null}
      type={type}
    >
      {children}
    </StyledButton>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  handleClick: PropTypes.func,
  type: PropTypes.oneOf(['submit', 'button', 'reset']),
};

export default Button;