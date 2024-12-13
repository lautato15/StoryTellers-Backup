// src/lib/apiClient.ts
import axios from 'axios';

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_STRAPI_URL, 
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${import.meta.env.VITE_API_STRAPI_TOKEN}`, // Token de acceso

  },
});

export default apiClient;
