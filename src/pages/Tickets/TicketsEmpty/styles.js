import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { THEME } from '../../../constants';

export const StyledTicketsEmpty = styled.p`

`;

export const StyledTicketsEmptyLink = styled(Link)`
  color: ${THEME.PRIMARY};
  margin-right: 8px;
`;