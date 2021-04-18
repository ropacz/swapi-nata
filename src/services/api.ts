import axios from 'axios';

const api = axios.create({
  baseURL: 'https://swapi.dev/api/starships/',
});

export default api;
