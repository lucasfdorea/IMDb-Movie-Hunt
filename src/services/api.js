import axios from 'axios';

const api = axios.create({ baseURL: 'http://www.omdbapi.com/?apikey=1d09e143&' });

export default api;