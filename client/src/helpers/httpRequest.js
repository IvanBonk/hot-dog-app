import axios from 'axios';

export const httpRequest = (address, method, params = {}) => {
  // const axiosReq = axios.create({
  //   baseURL: 'http://localhost:5000'
  // });

 return axios({
    method: method,
    url: address,
    data: params
  }).then(response => response)
  .catch((error) => {throw Error(error)})
}