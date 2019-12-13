import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3334',
});

export default api;

// Comando para iniciar o servidor: json-server server.json -p 3334 -w
