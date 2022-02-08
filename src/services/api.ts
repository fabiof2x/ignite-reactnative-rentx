import axios from 'axios';

const api = axios.create({
  //baseURL: 'http://192.168.15.3:3333'
  baseURL: 'http://10.10.11.83:3333'
});

export { api };