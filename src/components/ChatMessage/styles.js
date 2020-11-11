import styled from 'styled-components';

import { SILVER_CHALICE } from '../../constants';

export const StyledChatMessage = styled.div`
  align-items: center;
  display: flex;
  justify-content: flex-end;
  margin-bottom: 8px;
`;

export const StyledMessages = styled.div`

`;

export const StyledComment = styled.p`
  background-color: ${SILVER_CHALICE};
  border-radius: 16px;
  border-bottom-right-radius: 0;
  color: white;
  margin-right: 8px;
  padding: 8px 16px;

  & * {
    color: white;
  }
`;

export const StyledAttachment = styled.div`

`;