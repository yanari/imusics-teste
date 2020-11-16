import styled from 'styled-components';
import { THEME } from '../../../constants';

export const StyledInputFile = styled.div`
  align-items: center;
  display: inline-flex;
  justify-content: space-around;

  & > label {
    display: initial;
    margin-right: 16px;
  }
`;

export const StyledIcon = styled.div`
  position: relative;

  & > input {
    height: 32px;
    opacity: 0;
    position: absolute;
    right: 0;
    width: 32px;
  }

  & > svg {
    margin-right: 0;
  }

  &:hover path {
    fill: ${THEME.DISABLED};
  }
`;