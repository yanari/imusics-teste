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

  createTicket = async (title, description, categories, attachment) => {
    const response = await this.a.post('/tickets', {
      summary: title,
      tags: categories,
      comments: {
        description: {
          content: description,
          attachments: [
            {url: attachment}
          ],
        }
      },
    });
    return response.data;
  };
  
  uploadAttachment = async (file) => {
    const response = await this.a.post('/tickets/attachments/upload', {file}, {
      'Content-Type': 'multipart/form-data',
    });
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