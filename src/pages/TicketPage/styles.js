import styled from 'styled-components';
import { THEME } from '../../constants';

export const StyledContainer = styled.div`
  position: relative;
  text-align: left;

  & > * {
    margin-bottom: 16px;
  }

  & > :last-child {
    margin-bottom: 0;
  }

  & > .open-chat-button {
    padding-left: 32px;
    padding-right: 32px;
    position: absolute;
    right: 0;
    top: 0;
  }
`;

export const StyledTicketInfo = styled.div`
  position: relative;

  & > * {
    margin-bottom: 16px;
  }

  & > :last-child {
    margin-bottom: 0;
  }
`;

export const StyledTicketTitle = styled.h1`
  color: ${THEME.PRIMARY};
  font-size: 32px;
  font-weight: bold;
`;

export const StyledTicketDescription = styled.p`
  color: ${THEME.DISABLED};
`;

export const StyledTags = styled.div`
  align-items: center;
  display: flex;

  & > * {
    flex-grow: 0;
  }

  & > span {
    font-size: 14px;
    margin-right: 8px;
  }
`;