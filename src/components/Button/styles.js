import styled from 'styled-components';
import { THEME } from '../../constants';

export const StyledButton = styled.button`
  background-color: white;
  border: 1px solid ${THEME.PRIMARY};
  border-radius: 4px;
  color: ${THEME.PRIMARY};
  font-size: 18px;
  padding: 8px 16px;
  outline: none;

  &:hover {
    background-color: ${THEME.PRIMARY};
    color: white;
    cursor: pointer;
  }
`;