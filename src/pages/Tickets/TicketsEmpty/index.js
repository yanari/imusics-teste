import React from 'react';

import {
  StyledTicketsEmpty,
  StyledTicketsEmptyLink,
} from './styles';

const TicketsEmpty = () => {
  return (
    <StyledTicketsEmpty>
      <StyledTicketsEmptyLink to="/">
        Crie um ticket
      </StyledTicketsEmptyLink>
      para ver sua listagem.
    </StyledTicketsEmpty>
  );
};

export default TicketsEmpty;
