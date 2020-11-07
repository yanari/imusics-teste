import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { listTickets } from '../../api';

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
      <div>
        {this.state.tickets.map((ticket) => {
          return (
            <Link key={ticket.id} to={`/tickets/${ticket.number}`}>
              {ticket.summary}
              Descrição: {ticket.description}
            </Link>
          )
        })}
      </div>
    );
  }
};

export default Tickets;
