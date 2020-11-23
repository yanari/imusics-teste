import axios from 'axios';

export class OctadeskAPI {
  constructor() {
    this.a = axios.create({baseURL: 'https://api.octadesk.services'})
  }

  login = async () => {
    const token = localStorage.getItem('OCTADESK_TOKEN');
    if (token === null) {
      const response = await this.a.post('/login/apiToken', null, {
        headers: {
          apiToken: process.env.REACT_APP_OCTADESK_API_TOKEN,
          username: process.env.REACT_APP_OCTADESK_USERNAME,
        },
      });
      localStorage.setItem('OCTADESK_TOKEN', response.data.token);
      this.a.defaults.headers.common['Authorization'] = `Bearer ${response.data.token}`;
    } else {
      this.a.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    }
    return true;
  };

  createTicket = async (ticket) => {
    const parsedTicket = {
      summary: ticket.title,
      tags: ticket.categories,
      comments: {description: {content: ticket.description,},},
    };
    if (ticket.file !== null) parsedTicket.comments.description.attachments = [{url: ticket.file}];
    const response = await this.a.post('/tickets', parsedTicket);
    return response.data;
  };

  updateTicket = async (idTicket, message, attachment) => {
    const ticket = {
      comments: {description: {content: message,},},
    };
    if (attachment !== null) ticket.comments.description.attachments = [{url: attachment}];
    const response = await this.a.put(`/tickets/${idTicket}`, ticket);
    return response.data;
  };
  
  listTickets = async (idRequester) => {
    const response = await this.a.get('/tickets', {
      params: {
        idRequester,
      },
    });
    return response.data;
  };
  
  getTicket = async (idTicket) => {
    const response = await this.a.get(`/tickets/${idTicket}`);
    return response.data;
  };
  
  getTicketInteractions = async (idTicket) => {
    const response = await this.a.get(`/tickets/${idTicket}/interactions`);
    return response.data;
  };
}