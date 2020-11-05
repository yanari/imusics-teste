import styled from 'styled-components';
import { THEME } from '../../../constants';

import { StyledLabel, StyledContainer } from '../styles';

export const StyledInputTagsContainer = styled(StyledContainer)`
  align-items: center;
  border: 1px solid;
  border-radius: 2px;
  display: flex;

  &:focus,
  &:active,
  &:hover {
    border: 1px solid ${THEME.PRIMARY};
  }
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
  margin: 0 0 0 4px;
`;

export const StyledInputTagsLabel = styled(StyledLabel)`
  margin-bottom: 8px;
`;