import axios from 'axios';

const axiosInstance = axios.create({
  // baseURL: 'https://mcnqbm2cdk.us-east-1.awsapprunner.com/api/v1/',
  baseURL: 'http://localhost:8090/api/v1/',
  timeout: 40000,
});

export default axiosInstance;
