import React, { Component } from 'react';

import { listTickets } from '../../api';

import Ticket from '../../components/Ticket';
import { StyledContainer } from './styles';

class Tickets extends Component {
  state = {
    hasId: false,
    tickets: [],
  };

  componentDidMount() {
    const idUser = localStorage.getItem('ID_REQUESTER');
    this.setState({ hasId: idUser !== null });
    this.getTicketsList(idUser);
  }

  getTicketsList = async (idRequester) => {
    const ticketsList = await listTickets(idRequester);
    this.setState({tickets: ticketsList});
  };

  render() {
    if (this.state.tickets.length === 0) return <div>loading</div>;
    return (
      <StyledContainer>
        {this.state.tickets.map((ticket) => {
          return <Ticket ticket={ticket} key={ticket.id}/>
        })}
      </StyledContainer>
    );
  }
};

export default Tickets;
