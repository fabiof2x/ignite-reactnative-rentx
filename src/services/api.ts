import axios from 'axios';

const api = axios.create({
  //baseURL: 'http://192.168.15.92:3333'
  baseURL: 'http://192.168.200.68:3333'
});

export { api };