import React from 'react';
import PropTypes from 'prop-types';
import { StyledButton } from './styles';

const Button = (props) => {
  const {
    children,
    type,
  } = props;
  return (
    <StyledButton type={type}>
      {children}
    </StyledButton>
  );
};

Button.propTypes = {
  type: PropTypes.oneOf(['submit', 'button', 'reset']),
  children: PropTypes.node.isRequired,
};

export default Button;