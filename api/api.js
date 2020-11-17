import axios from 'axios';

/*
Inserir o numero de ip da sua máquina para se comunicar com o api-wiseelders (backend service )
ex: http://192.10.1.1:8080/api
*/
const api = axios.create({
  baseURL: 'http://172.17.0.1:8080/api',
});

export default api;
