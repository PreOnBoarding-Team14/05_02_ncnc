import axios from 'axios';
import { backUrl } from '../config/config';

axios.defaults.baseURL = backUrl;
axios.defaults.withCredentials = true;

export function getConCategories() {
  return axios.get(`/con-category1s`).then((res) => res.data);
}
