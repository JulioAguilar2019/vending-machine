import axios from 'axios';

export const productsApi = axios.create({
  baseURL: 'https://products-api-ten.vercel.app/api',
  headers: {
    'Content-type': 'application/json',
  },
});
