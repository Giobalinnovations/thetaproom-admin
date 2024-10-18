import axios from 'axios';

const axiosInstance = axios.create({
  baseURL:
    'https://thetaprooms-backend.vercel.app/?vercelToolbarCode=GgikAZT01cxPKbt/api/v1/',
  // baseURL: 'http://localhost:8090/api/v1/',
  timeout: 40000,
});

export default axiosInstance;
