import axios from 'axios';

const api = axios.create({
  baseURL: 'http://172.17.0.1:8080/api',
});

export default api;
