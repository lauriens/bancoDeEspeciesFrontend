import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: 'https://maminagro.azurewebsites.net',
    headers: { "Content-Type": 'application/json' }
  });