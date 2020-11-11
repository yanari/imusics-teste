import styled from 'styled-components';

import { FIERY_ROSE } from '../../constants';

export const StyledAvatar = styled.img`
  border-radius: 50%;
  height: 45px;
  width: 45px;

  ${props => props.initials && `
    align-items: center;
    background-color: ${FIERY_ROSE};
    color: white;
    display: flex;
    justify-content: center;
  `}
`;