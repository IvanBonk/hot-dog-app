import axios from 'axios';

export const httpRequest = (address, method, params = {}) => {
  const axiosReq = axios.create({
    baseURL: 'http://localhost:5000'
  });

 return axiosReq({
    method: method,
    url: address,
    data: params
  }).then(response => response)
  .catch((error) => {
    console.log(error.message);
  })
}