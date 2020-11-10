import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'https://api.octadesk.services',
});

export const login = async () => {
  const token = localStorage.getItem('OCTADESK_TOKEN');
  if (token === null) {
    const response = await axiosInstance.post('/login/apiToken', null, {
      headers: {
        apiToken: process.env.REACT_APP_OCTADESK_API_TOKEN,
        username: process.env.REACT_APP_OCTADESK_USERNAME,
      },
    });
    localStorage.setItem('OCTADESK_TOKEN', response.data.token);
    axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${response.data.token}`;
  } else {
    axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  }
  return true;
};

export const createTicket = async (title, description, categories) => {
  const response = await axiosInstance.post('/tickets', {
    summary: title,
    tags: categories,
    comments: {
      description: {
        content: description,
        attachments: [
          {url: 'https://64.media.tumblr.com/8f768c4bc858a733aa90c0652426527c/adc995cc344cb89f-ce/s400x600/bc40056ec02d5e1e0de63d751966b3a29406c655.gifv'}
        ],
      }
    },
  });
  return response.data;
};

export const uploadAttachment = async (file) => {
  const response = await axiosInstance.post('/tickets/attachments/upload', {file}, {
    'Content-Type': 'multipart/form-data',
  });
  return response.data;
};

export const listTickets = async (idRequester) => {
  const response = await axiosInstance.get('/tickets', {
    params: {
      idRequester,
    },
  });
  return response.data;
};

export const getTicket = async (idTicket) => {
  const response = await axiosInstance.get(`/tickets/${idTicket}`);
  return response.data;
};

export const getTicketInteractions = async (idTicket) => {
  const response = await axiosInstance.get(`/tickets/${idTicket}/interactions`);
  return response.data;
};