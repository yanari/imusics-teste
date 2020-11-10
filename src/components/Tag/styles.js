import styled from 'styled-components';
import { THEME } from '../../constants';

export const StyledTag = styled.li`
  background-color: ${props => props.tagColor || THEME.PRIMARY};
  border-radius: 4px;
  color: white;
  flex-grow: 1;
  font-size: 12px;
  list-style-type: none;
  margin-right: 4px;
  padding: 4px 8px;

  &:last-of-type {
    margin-right: 0
  }
`;

export const StyledCloseButton = styled.span`
  color: white;
  cursor: pointer;
  font-size: 10px;
  margin-left: 4px;
`;