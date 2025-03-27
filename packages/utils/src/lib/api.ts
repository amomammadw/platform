import { ofetch } from 'ofetch';

export const api = ofetch.create({
  baseURL: 'http://127.0.0.1:8000',
});
