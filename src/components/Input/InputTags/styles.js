import styled from 'styled-components';
import { THEME } from '../../../constants';

import { StyledLabel, StyledContainer } from '../styles';

export const StyledInputTagsContainer = styled(StyledContainer)`
  align-items: center;
  border: 1px solid;
  border-radius: 2px;
  display: flex;
`;

export const StyledInputTags = styled.input`
  background-color: transparent;
  border: none;
  flex-grow: 1;
  outline: none;
  padding: 8px;
`;

export const StyledTagList = styled.ul`
  display: flex;
  font-size: 12px;
  margin: 0 0 0 4px;
`;

export const StyledTag = styled.li`
  background-color: ${THEME.PRIMARY};
  border-radius: 4px;
  color: white;
  flex-grow: 1;
  list-style-type: none;
  margin-right: 4px;
  padding: 4px 8px;

  &:last-of-type {
    margin-right: 0
  }
`;

export const StyledInputTagsLabel = styled(StyledLabel)`
  margin-bottom: 8px;
`;