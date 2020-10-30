import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { THEME } from '../../constants';

export const StyledHeader = styled.header`
  background-color: ${THEME.PRIMARY};
  padding: 24px;
`;

export const StyledNav = styled.nav`
  margin: auto;
  max-width: 768px;
`;

export const StyledList = styled.ul`
  display: flex;
  justify-content: space-between;
`;

export const StyledListItem = styled.li`
  font-size: 18px;
  list-style: none;
  margin-right: 8px;

  &.last-of-type {
    margin-right: 0;
  }
`;

export const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;

  &:hover,
  &:active {
    color: ${THEME.FONT_COLOR};
  }
`;