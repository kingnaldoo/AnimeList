import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.aniapi.com/v1' 
});

api.interceptors.request.use(config => { 
    config.headers.Authorization = `Bearer ${process.env.TOKEN_API}`;
    return config;
});

export default api;