import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { THEME } from '../../constants';

import { card } from '../Card/styles';

export const StyledTicket = styled(Link)`
  ${card}
  text-decoration: none;
`;

export const StyledTitle = styled.h4`
  color: ${THEME.PRIMARY};
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 8px;
`;

export const StyledDescription = styled.p`
  color: ${THEME.DISABLED};
`;