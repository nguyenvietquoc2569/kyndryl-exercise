import axios from "axios";

const host = 'https://randomuser.me/'
const fetchAccApi = '/api/?results='
const amountPerPage = 100

export function fetchAccountService () {
  return axios({
    method: 'GET',
    baseURL: host,
    url: `${fetchAccApi}${amountPerPage}`,
    data: {},
  })
}