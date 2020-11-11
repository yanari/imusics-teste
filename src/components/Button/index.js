import React from 'react';
import PropTypes from 'prop-types';
import { StyledButton } from './styles';

const Button = (props) => {
  const {
    children,
    className,
    handleClick,
    type,
  } = props;
  return (
    <StyledButton
      className={className}
      onClick={handleClick || null}
      type={type}
    >
      {children}
    </StyledButton>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  handleClick: PropTypes.func,
  type: PropTypes.oneOf(['submit', 'button', 'reset']),
};

export default Button;