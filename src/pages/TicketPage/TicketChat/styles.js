import styled from 'styled-components';

export const StyledTicketChat = styled.div`
  ${props => props.height && `
    height: ${props.height}px;
  `}
`;

export const StyledChatMessagesList = styled.div`
  height: calc(100% - 64px);
  direction: rtl;
  overflow-y: scroll;
`;
