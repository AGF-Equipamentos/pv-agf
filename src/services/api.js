import axios from 'axios';

const localMode = localStorage.getItem('@ASA');

const api = axios.create({
  baseURL:
    localMode === 'on'
      ? 'https://api.agfequipamentos.com.br'
      : process.env.REACT_APP_SERVER,
});

export default api;
