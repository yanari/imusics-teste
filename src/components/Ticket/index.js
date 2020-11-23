import React from 'react';

import {
  StyledTicket,
  StyledTitle,
  StyledDescription,
} from './styles';

const Ticket = ({ ticket }) => {
  return (
    <StyledTicket to={`/tickets/${ticket.number}`}>
      <StyledTitle>{ticket.summary}</StyledTitle>
      <StyledDescription>{ticket.description}</StyledDescription>
    </StyledTicket>
  );
};

export default Ticket;
