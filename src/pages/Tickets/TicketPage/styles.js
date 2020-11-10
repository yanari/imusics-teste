import styled from 'styled-components';
import { THEME } from '../../../constants';

export const StyledContainer = styled.div`
  text-align: left;

  & > * {
    margin-bottom: 16px;
  }
`;

export const StyledTicketInfo = styled.div`
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