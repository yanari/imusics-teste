import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { getTicket } from '../../api';
import { StyledLoadingIcon } from '../../styles';
import {
  StyledContainer,
  StyledTicketInfo,
  StyledTicketTitle,
  StyledTicketDescription,
  StyledTags,
} from './styles';
import { getStatusTagColor } from '../../utils';

import Tag from '../../components/Tag';
import Button from '../../components/Button';
import TicketChat from './TicketChat';

const TicketPage = () => {
  const params = useParams();
  const [ticket, setTicket] = useState(null);
  const [isChatOpen, setIsChatOpen] = useState(false);

  useEffect(() => {
    const getTicketRequest = async () => {
      const response = await getTicket(params.id);
      setTicket(response);
    };
    getTicketRequest();
  }, [params.id]);

  if (ticket === null) return <StyledLoadingIcon/>;
  return (
    <StyledContainer>
      {console.log(ticket)}
      <StyledTicketInfo>
        <StyledTicketTitle>{ticket.summary}</StyledTicketTitle>
        <StyledTicketDescription>{ticket.description}</StyledTicketDescription>
        <StyledTags>
          <span>Status: </span>
          <Tag
            tagColor={getStatusTagColor(ticket.currentStatusName)}
            tagName={ticket.currentStatusName}
          />
        </StyledTags>
        <StyledTags>
          <span>Categorias: </span>
          {ticket.tags.map((tag) => <Tag key={tag} tagName={tag}/>)}
        </StyledTags>
      </StyledTicketInfo>
      <Button
        className="open-chat-button"
        handleClick={() => setIsChatOpen(!isChatOpen)}
        type="button"
      >
        {isChatOpen ? 'Fechar' : 'Abrir'} Chat
      </Button>
      {isChatOpen ? <TicketChat ticketNumber={ticket.number}/> : null}
    </StyledContainer>
  );
};

export default TicketPage;
