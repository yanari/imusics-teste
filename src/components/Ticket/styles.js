import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { THEME } from '../../constants';

const BOX_SHADOW = {
  DEFAULT: THEME.FONT_COLOR + 40,
  HOVERED: THEME.FONT_COLOR + 80,
};

export const StyledTicket = styled(Link)`
  border-radius: 8px;
  box-shadow: 2px 2px 8px ${BOX_SHADOW.DEFAULT};
  display: block;
  margin-bottom: 16px;
  padding: 16px;
  text-decoration: none;

  &:hover {
    box-shadow: 2px 2px 8px ${BOX_SHADOW.HOVERED};
  }
`;

export const StyledTitle = styled.h4`
  font-weight: bold;
  color: ${THEME.PRIMARY};
`;

export const StyledDescription = styled.p`
  
`;