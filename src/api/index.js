import axios from 'axios';

export default axios.create({
  baseURL: 'api.octadesk.services',
  headers: {
    subDomain: 'yanari',
  },
});