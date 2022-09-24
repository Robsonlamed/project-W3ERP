import axios from 'axios'

export const ApiServiceW3 = axios.create({
  baseURL: 'http://api.teste.predicao.w3erp.com.br/',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})