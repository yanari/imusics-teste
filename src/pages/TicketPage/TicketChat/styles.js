import styled from 'styled-components';

export const StyledTicketChat = styled.div`
  ${props => props.height && `
    height: ${props.height}px;
  `}
  direction: rtl;
  overflow-y: scroll;
`;