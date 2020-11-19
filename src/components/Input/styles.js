import styled from 'styled-components';
import { THEME } from '../../constants';

export const StyledContainer = styled.div`
  margin-bottom: 24px;

  & > * {
    margin-bottom: 8px;
  }

  & > :last-child {
    margin-bottom: 0;
  }
`;

export const StyledLabel = styled.label`
  color: ${THEME.FONT_COLOR};
  display: block;
  font-size: 18px;
`;

export const StyledInput = styled.input`
  border: 1px solid ${props => props.error ? THEME.ERROR : THEME.FONT_COLOR};
  border-radius: 2px;
  max-width: 480px;
  padding: 8px;
  width: 100%;

  &:focus,
  &:active,
  &:hover {
    outline: none;
    border: 1px solid ${THEME.PRIMARY};
  }
`;

export const StyledError = styled.p`
  color: ${THEME.ERROR};
  font-size: 14px;
`;