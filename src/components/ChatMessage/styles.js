import styled from 'styled-components';
import { THEME } from '../../constants';
import { ReactComponent as Attachment } from './attachment.svg';

import { SILVER_CHALICE } from '../../constants';

export const StyledChatMessage = styled.div`
  margin-bottom: 8px;
`;

export const StyledFlex = styled.div`
  align-items: flex-end;
  display: flex;
  flex-direction: row-reverse;
  justify-content: flex-end;
`;

export const StyledMessages = styled.div`
  align-items: flex-end;
  display: flex;
`;

export const StyledParagraph = styled.p`
  font-size: 12px;
  color: ${SILVER_CHALICE};
  margin: 2px 8px;
  text-align: right;
`;

export const StyledComment = styled.p`
  background-color: ${SILVER_CHALICE};
  border-radius: 16px;
  border-bottom-right-radius: 0;
  color: white;
  direction: initial;
  display: inline-block;
  margin-right: 8px;
  padding: 8px 16px;

  & * {
    color: white;
  }
`;

export const StyledAttachment = styled(Attachment)`
  height: 32px;
  margin-right: 8px;
  width: 32px;

  &:hover path {
    fill: ${THEME.DISABLED};
  }
`;