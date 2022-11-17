import axios from 'axios';

const baseUrl = 'https://626d32c850a310b8a34bdca8.mockapi.io/';

export const http = axios.create({
  baseURL: baseUrl,
});

// TODO: add interseptors when BE will be ready
// api.interceptors.request.use((config) => {
//   config.headers = {}
// })
