import axios from 'axios';

export const httpRequest = (address, method, params = {}) => {
 return axios({
    method: method,
    url: address,
    data: params
  }).then(response => response)
  .catch((error) => {throw Error(error)})
}