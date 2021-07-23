import axios from 'axios';

const api = axios.create({
  baseURL: 'https://raw.githubusercontent.com/XaVeZ-cmd/desafioDoisGamaAcademy/master/server.json'
})

export default api;