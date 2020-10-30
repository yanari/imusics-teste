import React from 'react';
import {
  StyledHeader,
  StyledNav,
  StyledListItem,
  StyledList,
  StyledLink,
} from './styles';

const Header = () => {
  return (
    <StyledHeader>
      <StyledNav>
        <StyledList>
          <StyledListItem>
            <StyledLink to="/">
              Home
            </StyledLink>
          </StyledListItem>
          <StyledListItem>
            <StyledLink to="/login">
              Login
            </StyledLink>
          </StyledListItem>
          <StyledListItem>
            <StyledLink to="/tickets">
              Tickets
            </StyledLink>
          </StyledListItem>
        </StyledList>
      </StyledNav>
    </StyledHeader>
  );
};

export default Header;
