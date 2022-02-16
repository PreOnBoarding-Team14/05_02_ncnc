import axios from 'axios';
import { backUrl } from '../config/config';

axios.defaults.baseURL = backUrl;
axios.defaults.withCredentials = true;

export function getContactsType() {
  return axios.get(`/qa-types`).then((res) => res.data);
}

export function getContactsQas(typeId: number) {
  return axios.get(`/qas?qaTypeId=${typeId}`).then((res) => res.data);
}
